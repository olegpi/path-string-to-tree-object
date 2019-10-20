// render TreeNode (Recursive Component)
import React from "react";
import "./index.css";
import TreeComposite from "../../utility/TreeComposite/TreeComposite";
import TreeNode from "../TreeNode";
import TreeType from "../../types/TreeType";

type Props = {
	fileFixtures: TreeType[];
};

const FileTree: React.FC<Props> = ({fileFixtures}) => {
  const greeter = new TreeComposite(fileFixtures);
  const [treeFileSystem] = React.useState(greeter.buildTreeFileSystem());

  return (
    <div className="FileTree">
      { 
		(treeFileSystem.children).map((item: any, index: number) => (
			<TreeNode item={item} key={index} />
		))
	  }
	</div>
  );
};

export default FileTree;
