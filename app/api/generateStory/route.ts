import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export const maxDuration = 60;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write a short story no more than 150 words with an appropriate title. Format your response as "Title: [title text]\nstory text]". Prompt: ${prompt}`,
        },
      ],
      max_tokens: 500,
    });

    if (
      !response.choices ||
      response.choices.length === 0 ||
      !response.choices[0].message?.content
    ) {
      return NextResponse.json(
        { error: "Failed to generate story or incomplete response" },
        { status: 500 },
      );
    }

    const responseContent = response.choices[0].message.content.trim();

    const [titleLine, ...storyLines] = responseContent.split("\n");
    const title = titleLine.replace(/^Title:\s*/, "").trim();
    const story = storyLines
      .join("\n")
      .trim();

    if (!title || !story) {
      return NextResponse.json(
        { error: "Failed to extract title or story" },
        { status: 500 },
      );
    }

    console.log({ title, story });

    const imagePrompt = `Create a visually stunning illustration based on the following short story: "${story}". The image should encapsulate the mood and key elements of the story.`;
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      n: 1,
      size: "1024x1024",
    });

    if (
      !imageResponse.data ||
      imageResponse.data.length === 0 ||
      !imageResponse.data[0]?.url
    ) {
      return NextResponse.json(
        { error: "Failed to generate an image" },
        { status: 500 },
      );
    }

    const imageUrl = imageResponse.data[0].url;

    return NextResponse.json({ title, story, imageUrl });
  } catch (error) {
    console.error("Error generating:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
