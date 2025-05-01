import React from "react";
import ReactDOM from "react-dom/client";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function App() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "100px" }}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
