import Markdown from "marked-react";
import React from "react";
import Container from "./Container";
import "./Preview.scss";

interface PropTypes {
  text: string;
}

export default function Preview({ text }: PropTypes) {
  return (
    <Container title="Preview">
      <article id="preview" className="preview">
        <Markdown breaks={true}>{text}</Markdown>
      </article>
    </Container>
  );
}
