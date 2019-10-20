import React from "react";
import "./index.css";
import Article from "../Article";
import PropsFileType from "../../types/PropsFileType";

type Props = {
	content: PropsFileType;
};

const FileContent: React.FC<Props> = ({content}) => {
  return (
    <div className="FileContent">
	{ 
		(typeof content === 'undefined') ? 
			'Please, select file': 
			<Article article={content}></Article>
	}
    </div>
  );
};

export default FileContent;