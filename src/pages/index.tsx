import styles from "@/styles/Home.module.css";
import PlaceholderImage from "/public/defaultProfile.png";
import { useRef, useState } from "react";

import { IconAdjustmentsHorizontal, IconX } from "@tabler/icons-react";

import Form from "@/components/Form";
import ImageEditor from "@/components/ImageEditor";
import ImagePreview from "@/components/ImagePreview";
import VideoPreview from "@/components/VideoPreview";
import VideoEditor from "@/components/VideoEditor";
import { StaticImageData } from "next/image";

export default function Home() {
  const [image, setImage] = useState<StaticImageData | string>(PlaceholderImage);
  const [video, setVideo] = useState("");
  const [modifiedImage, setModifiedImage] = useState("");
  const [imageState, setImageState] = useState("");
  const [videoState, setVideoState] = useState("");
  const [imageName, setImageName] = useState("");
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [showVideoEditor, setShowVideoEditor] = useState(false);
  const videoContainerRef = useRef<HTMLInputElement>(null);

  const editImage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (video) {
      setShowVideoEditor(true);
    } else {
      setShowImageEditor(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Form
          imagePreview={setImage}
          videoPreview={setVideo}
          showEditor={editImage}
        />
      </div>
      <div className={styles.rightPanel}>
        <div ref={videoContainerRef}
          className={
            showImageEditor || showVideoEditor
              ? styles.editorContainer
              : styles.imageContainer
          }
          
        >
          {showImageEditor && typeof image === 'string' && (
            <ImageEditor image={image} setImage={setModifiedImage} setShowEditor={setShowImageEditor} imageState={imageState} setImageState={setImageState}/>
          )}
          {showVideoEditor && (<VideoEditor video={video} setVideo={setModifiedImage} setShowEditor={setShowVideoEditor} videoState={videoState} setVideoState={setVideoState} />)}
          {video && !showVideoEditor && (<VideoPreview video={modifiedImage ? modifiedImage : video} videoContainerRef={videoContainerRef} />)}
          {!video && !showImageEditor && (
            <ImagePreview image={modifiedImage ? modifiedImage : image} />
          )}
        </div>
      </div>
    </div>
  );
}
