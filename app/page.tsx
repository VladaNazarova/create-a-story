"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import styles from "./page.module.css";
import Story from "./components/Story/Story";
import Loading from "./components/Loading/Loading";

export default function Home() {
  const [title, setTitle] = useState<string | null>(null);
  const [story, setStory] = useState<string | null>(null);
  const [imageUrl, setimageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateStory = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/generateStory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setTitle(data.title);
      setStory(data.story);
      setimageUrl(data.imageUrl);
    } catch (error) {
      console.error("Error generating story:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <InputForm onSubmit={generateStory} />
        {loading && <Loading />}
        {story && <Story title={title} story={story} imageUrl={imageUrl} />}
      </div>
    </main>
  );
}
