import React from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";

import StatePathType from "../../types/StatePathType";
import { connect } from "react-redux";

type Props = { path: string; };

const App: React.FC<Props> = ({path}) => {   
  const [content, setContent] = React.useState(); 
  
  React.useEffect(() => {
	searchContentByPath();
  }); 
  
  function searchContentByPath(){
	let curentContent: any; 
	fileFixtures.map( item => {
		if(item.path === path){
			curentContent = item;		
		 }		 
		 return curentContent;
	});	
	setContent(curentContent);		 
  };
  
  return (
    <div className="App">
      <div className="App-content">
        <FileTree fileFixtures={fileFixtures} />
        <FileContent content={content} />
      </div>
    </div>
  )
};

const mapStateToProps = (state: StatePathType) => {
  const {path} = state;	
  return ({path: path}); 
};

export default connect(
  mapStateToProps
)(App);
