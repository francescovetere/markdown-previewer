import React from "react";
import "./Toolbar.scss";
interface PropTypes {
  title: string;
}

export default function Toolbar({ title }: PropTypes) {
  return (
    <div className="toolbar">
      <h1>{title}</h1>
    </div>
  );
}
