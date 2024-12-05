# create-a-story
A web application that generates personalized short stories based on user prompts, with AI-generated illustrations. The project utilizes OpenAI's GPT-3.5 Turbo for story creation and DALL·E 3 for image generation. Designed with a focus on responsiveness, the application provides an interactive and user-friendly experience across devices.

# Features
- Story Generation: Enter a custom prompt, and the app generates a short story based on the input.
- Image Generation: A relevant image based on the story is generated using OpenAI's DALL·E model.
- Interactive User Interface: Users can input their prompts, view generated stories, and optionally see an image representation of the story.
- Responsive Design: The app is designed to be mobile-friendly and responsive across various devices.

# Technologies Used
## Frontend:
React.js: For building the interactive UI.
Next.js: For server-side rendering and routing.
CSS (with custom classes and flexbox for layout): For styling the app, ensuring responsiveness, and a smooth user experience.
## Backend:
OpenAI API (GPT-3.5 and DALL·E): Used for generating the story and images.
Next.js API Routes: Used to handle server-side requests (story generation and image creation).

# Setup Instructions
To run the project locally:

Clone the repository:
```
git clone git@github.com:VladaNazarova/create-a-story.git
```
Navigate to the project directory:
```
cd create-a-story
```
Install dependencies:
```
npm install
```
Set up environment variables:
Create a .env file in the root directory.

Add your OpenAI API key:
```
OPENAI_API_KEY=your-api-key-here
```
Run the app locally:
```
npm run dev
```
The app should now be available at http://localhost:3000.
