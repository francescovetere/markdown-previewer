import React from "react";
import Container from "./Container";

interface PropTypes {
  rows: number;
  cols: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ rows, cols, text, setText }: PropTypes) {
  return (
    // <div className="container">
    //   <Toolbar title="Editor" />

    //   <textarea
    //     id="editor"
    //     name="editor"
    //     rows={rows}
    //     cols={cols}
    //     value={text}
    //     onChange={(e) => {
    //       setText(e.target.value);
    //     }}
    //   />
    // </div>

    <Container title="Editor">
      <textarea
        id="editor"
        name="editor"
        rows={rows}
        cols={cols}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Container>
  );
}
