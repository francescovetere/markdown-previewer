import Markdown from "marked-react";
import React from "react";
import Container from "./Container";

interface PropTypes {
  text: string;
}

export default function Preview({ text }: PropTypes) {
  return (
    // <div className="container">
    //   <Toolbar title="Preview" />

    //   <article id="preview">
    //     <Markdown breaks={true}>{text}</Markdown>
    //   </article>
    // </div>
    <Container title="Previews">
      <article id="preview">
        <Markdown breaks={true}>{text}</Markdown>
      </article>
    </Container>
  );
}
