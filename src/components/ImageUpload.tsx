import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "@/styles/Home.module.css";

type ImageUploadProps = {
  imagePreview: (image: string) => void;
  videoPreview: (video: string) => void;
};

const ImageUpload = ({ imagePreview, videoPreview }: ImageUploadProps) => {
  const [fileName, setFileName] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file.type.includes("video")) {
        videoPreview(URL.createObjectURL(file));
      } else {
        imagePreview(URL.createObjectURL(file));
      }

      setFileName(file.name);
    },
  });

  const removeImage = useCallback(() => {
    imagePreview("");
    setFileName("");
  }, []);

  return (
    <div className={styles.fileUploadWrapper}>
      <div className={styles.fileInputLabel} {...getRootProps()}>
        <input type="file" {...getInputProps()} />
      </div>
    </div>
  );
};

export default ImageUpload;
