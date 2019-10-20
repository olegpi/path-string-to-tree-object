import React from "react";
import "./index.css";

type Props = {
	name: string;
};

const Directory: React.FC<Props> = ({name}) => {
  return (
    <div className="Directory">
      <span>{name}</span>
    </div>
  )
};

export default Directory;
