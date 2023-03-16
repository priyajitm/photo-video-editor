import "@pqina/pintura/pintura.css";

import {
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_filter,
  plugin_filter_defaults,
  plugin_filter_locale_en_gb,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_finetune_locale_en_gb,
  setPlugins,
} from "@pqina/pintura";
import { PinturaEditor } from "@pqina/react-pintura";
import { useRef } from "react";

type ImageEditorProps = {
  image: string;
  setImage: (image: string) => void;
  setShowEditor: (showEditor: boolean) => void;
  imageState: string;
  setImageState: (imageState: string) => void;
};

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

const editorDefaults = {
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),
  shapePreprocessor: createDefaultShapePreprocessor(),
  ...plugin_finetune_defaults,
  ...plugin_filter_defaults,
  ...markup_editor_defaults,
  locale: {
    ...locale_en_gb,
    ...plugin_crop_locale_en_gb,
    ...plugin_finetune_locale_en_gb,
    ...plugin_filter_locale_en_gb,
    ...plugin_annotate_locale_en_gb,
    ...markup_editor_locale_en_gb,
  },
};

const ImageEditor = ({ image, setImage, setShowEditor, imageState, setImageState }: ImageEditorProps) => {
  const editorRef = useRef(null);

  const stringifyImageState = (imageState: any) => {
    return JSON.stringify(imageState, (k, v) => (v === undefined ? null : v));
  };

  const parseImageState = (str: string) => {
    return JSON.parse(str);
  };

  const handleEditorLoad = () => {
    if (!imageState) return;
    const data = parseImageState(imageState);
    const isEditor = editorRef.current as unknown as PinturaEditor;
    if (isEditor) {
      isEditor.editor.history.write(data);
    }
    
  };

  const handleEditorProcess = (res: any) => {
    const imageStateStr = stringifyImageState(res.imageState);
    setImageState(imageStateStr);
    setImage(URL.createObjectURL(res.dest));
    setShowEditor(false);
  };

  return (
    <PinturaEditor
      ref={editorRef}
      {...editorDefaults}
      className={"pintura"}
      imageState={imageState}
      src={image}
      onLoad={handleEditorLoad}
      onProcess={handleEditorProcess}
    />
  );
};

export default ImageEditor;
