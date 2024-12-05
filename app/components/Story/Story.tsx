import styles from "./Story.module.css";

type StoryProps = {
  story: string | null;
  title: string | null;
  imageUrl: string;
};

export default function Story({ title, story, imageUrl }: StoryProps) {
  if (!story) return null;
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Generated Illustration"
              className={styles.picture}
            />
          )}
          {story}
        </p>
      </div>
    </div>
  );
}
