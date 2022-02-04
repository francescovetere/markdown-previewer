import React, { useState } from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Editor rows={10} cols={50} text={text} setText={setText} />
      <Previewer text={text} />
    </>
  );
}
