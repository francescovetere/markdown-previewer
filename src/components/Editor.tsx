import React from "react";
import Container from "./Container";
import "./Editor.scss";

interface PropTypes {
  rows: number;
  cols: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ rows, cols, text, setText }: PropTypes) {
  return (
    <Container title="Editor">
      <div className="textarea-container">
        <textarea
          id="editor"
          className="editor"
          // rows={rows}
          // cols={cols}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </Container>
  );
}
