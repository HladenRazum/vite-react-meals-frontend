import ReactQuill, { UnprivilegedEditor } from "react-quill";
import { DeltaStatic, Sources } from "./types";

import "react-quill/dist/quill.snow.css";
import classes from "./RichTextEditor.module.scss";

type RichTextEditorProps = {
   onChange: (
      value: string,
      delta: DeltaStatic,
      source: Sources,
      editor: UnprivilegedEditor
   ) => void;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange }) => {
   return (
      <ReactQuill onChange={onChange} className={classes.editor} theme="snow" />
   );
};

export default RichTextEditor;
