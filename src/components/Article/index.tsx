import React from "react";
import "./index.css";
import PropsFileType from "../../types/PropsFileType";

type Props = {
	article: PropsFileType;
};

const Article: React.FC<Props> = ({article}) => {
  const {path, content, createdAt, updatedAt} = article;
  
  function setUserFriendlyFormatDate(value: string){
	 let userFriendlyFormatDate = new Date(value);
	 return userFriendlyFormatDate.toDateString(); 
  };   
  
  return (
    <div className="Info">
		<ul>
			<li><strong>Path:</strong> {path}</li>
			<li><strong>Create At:</strong> {setUserFriendlyFormatDate(createdAt)}</li>
			<li><strong>Update At:</strong> {setUserFriendlyFormatDate(updatedAt)}</li>
		</ul>
		<p>
			{content}
		</p>
    </div>
  );
};

export default Article;