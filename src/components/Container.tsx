import React, { ReactNode, useState } from "react";
import Toolbar from "./Toolbar";

interface PropTypes {
  title: string;
  children?: ReactNode;
}

export default function Container({ title, children }: PropTypes) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container">
      <Toolbar title={title} setExpanded={setExpanded} />
      <p>{expanded ? "expanded" : "shrinked"}</p>
      {children}
    </div>
  );
}
