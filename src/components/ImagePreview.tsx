import Image, { StaticImageData } from "next/image";
import styles from "@/styles/Home.module.css";

type ImagePreviewProps = {
  image: string | StaticImageData;
};

const ImagePreview = ({ image }: ImagePreviewProps) => {
  return (
    <>
      <h5 className={styles.imageContainerHeader}>John Doe</h5>
      {image && (
        <Image
          src={image}
          alt="image"
          height={500}
          width={300}
          priority={true}
        />
      )}

      <p className={styles.imageText}>This is a sample text</p>
    </>
  );
};

export default ImagePreview;
