import React from "react";

interface PropTypes {
  rows: number;
  cols: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ rows, cols, text, setText }: PropTypes) {
  return (
    <div>
      {/* <Toolbar>  */}
      <textarea
        id="editor"
        name="editor"
        rows={rows}
        cols={cols}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
