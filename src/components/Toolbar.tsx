import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface PropTypes {
  title: string;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toolbar({ title, setExpanded }: PropTypes) {
  return (
    <div className="toolbar">
      <h1>{title}</h1>
      <button onClick={() => setExpanded((expanded) => !expanded)}>Hi</button>
      <FontAwesomeIcon icon={faExpandArrowsAlt} />
    </div>
  );
}
