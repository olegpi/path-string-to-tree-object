// TreeNode (Recursive Component)
import React from "react";
import "./index.css";
import Directory from "../FileSystemView/Directory";
import File from "../FileSystemView/File";

type Props = {
	item: any;
};

const TreeNode: React.FC<Props> = ({item}) => {
  const {children, type, name, level, id, createdAt, updatedAt} = item;	
  
  return (
    <div className={`TreeNode TreeNode-${level}`}>
		{
			type === 'file' ? 
			<File 
				name={name} 
				id={id} 
				updatedAt={updatedAt} 
				createdAt={createdAt} 
			/> : 
			<Directory name={name} /> 
		}				
		{
			children.map((item: any, index: number) => (
				<TreeNode item={item} key={index}/>
			))
		}	
	</div>
  );
};

export default TreeNode;
