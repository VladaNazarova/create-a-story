import { useState } from "react";
import styles from "./InputForm.module.css";

type InputFormProps = {
  onSubmit: (prompt: string) => void;
};

export default function InputForm({ onSubmit }: InputFormProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <textarea
        placeholder="Write here what you want to happen in your customized story"
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
