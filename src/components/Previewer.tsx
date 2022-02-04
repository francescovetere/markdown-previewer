import React from "react";

interface PropTypes {
  text: string;
}

export default function Previewer({ text }: PropTypes) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
