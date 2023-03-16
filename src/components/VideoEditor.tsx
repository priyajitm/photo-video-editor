import { PinturaEditor } from "@pqina/react-pintura";
import "@pqina/pintura/pintura.css";
import { getEditorDefaults } from "@pqina/pintura";
import {
  setPlugins,
  createDefaultImageWriter,
  createDefaultMediaWriter,
  imageStateToCanvas,
} from "@pqina/pintura";
import "@pqina/pintura-video/pinturavideo.css";
import {
  plugin_trim_locale_en_gb,
  plugin_trim,
  createDefaultVideoWriter,
  createMediaStreamEncoder,
} from "@pqina/pintura-video";
import { useRef } from "react";

type VideoEditorProps = {
  video: string;
  setVideo: (video: string) => void;
  setShowEditor: (showEditor: boolean) => void;
  videoState: string;
  setVideoState: (videoState: string) => void;
};

setPlugins(plugin_trim);
const editorDefaults = getEditorDefaults({
  stickers: ["😎"],

  locale: {
    ...plugin_trim_locale_en_gb,
  },
  imageWriter: createDefaultMediaWriter(
    {
      targetSize: {
        width: 300,
        height: 500,
      },
    },
    [
      createDefaultImageWriter(),
      createDefaultVideoWriter({
        encoder: createMediaStreamEncoder({
          imageStateToCanvas,
        }),
      }),
    ]
  ),
});

const VideoEditor = ({
  video,
  setVideo,
  setShowEditor,
  videoState,
  setVideoState,
}: VideoEditorProps) => {
  const editorRef = useRef(null);

  const stringifyVideoState = (imageState: any) => {
    return JSON.stringify(imageState, (k, v) => (v === undefined ? null : v));
  };

  const parseVideoState = (str: string) => {
    return JSON.parse(str);
  };

  const handleEditorProcess = (res: any) => {
    const videoStateStr = stringifyVideoState(res.imageState);
    setVideoState(videoStateStr);
    setVideo(URL.createObjectURL(res.dest));
    setShowEditor(false);
  };

  const hanldeEditorLoad = () => {
    if (!videoState) return;
    const data = parseVideoState(videoState);
    const isEditor = editorRef.current as unknown as PinturaEditor;
    if (!isEditor) return;
    isEditor.editor.history.write(data);
  };

  return (
    <PinturaEditor
      ref={editorRef}
      {...editorDefaults}
      src={video}
      imageState={videoState}
      imageCropAspectRatio={2.5 / 4}
      imageCropMinSize={{ width: 300, height: 500 }}
      cropSelectPresetOptions={[["Size", [[[300, 500], "Profile"]]]]}
      willSetMediaInitialTimeOffset={() => 2}
      onLoad={hanldeEditorLoad}
      onProcess={handleEditorProcess}
    />
  );
};

export default VideoEditor;
