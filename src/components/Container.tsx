import React, { ReactNode } from "react";
import "./Container.scss";
import Toolbar from "./Toolbar";

interface PropTypes {
  title: string;
  children?: ReactNode;
}

export default function Container({ title, children }: PropTypes) {
  return (
    <div className="container">
      <Toolbar title={title} />
      {children}
    </div>
  );
}
