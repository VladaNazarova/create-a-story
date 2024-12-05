import { useState } from "react";
import styles from "./InputForm.module.css";

type InputFormProps = {
  onSubmit: (prompt: string) => void;
};

export default function InputForm({ onSubmit }: InputFormProps) {
  const [prompt, setPrompt] = useState("");
  const [placeholderText, setPlaceholderText] = useState(
    "Write here what you want to happen in your customized story",
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt.trim() === "") {
      setPlaceholderText("Please enter a prompt to generate the story.");
      return;
    }
    onSubmit(prompt);
    setPrompt("");
    setPlaceholderText(
      "Write here what you want to happen in your customized story",
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <textarea
        placeholder={placeholderText}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className={styles.text}
      />
      <button type="submit" className={styles.btn}>
        Generate Story
      </button>
    </form>
  );
}
