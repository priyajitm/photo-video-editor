import styles from "@/styles/Home.module.css";
import ImageUpload from "./ImageUpload";

type FormProps = {
  imagePreview: (image: string) => void;
  videoPreview: (video: string) => void;
  showEditor: React.EventHandler<any>;
};

const Form = ({imagePreview, videoPreview, showEditor}: FormProps) => {
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <label className={styles.customLabel}>
          <span className={styles.labelText}>Mantra</span>
          <textarea className={styles.textArea} placeholder="mantra" />
        </label>
      </div>
      <ImageUpload imagePreview={imagePreview} videoPreview={videoPreview}/>
      <button onClick={showEditor}>Edit</button>
    </form>
  );
};

export default Form;
