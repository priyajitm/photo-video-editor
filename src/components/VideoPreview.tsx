import HoverVideoPlayer from "react-hover-video-player";
import styles from "@/styles/Home.module.css";
import { MutableRefObject, RefObject } from "react";

type VideoPreviewProps = {
  video: string;
  videoContainerRef: RefObject<Node>;
};

const VideoPreview = ({ video, videoContainerRef }: VideoPreviewProps) => {
  return (
    <>
      <h5 className={styles.imageContainerHeader}>John Doe</h5>
      <HoverVideoPlayer
        videoClassName={styles.videoPlayer}
        videoSrc={video}
        hoverTarget={videoContainerRef}
        restartOnPaused
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />

      <p className={styles.imageText}>This is a sample text</p>
    </>
  );
};

export default VideoPreview;
