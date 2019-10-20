import React from "react";
import "./index.css";
import store from "../../../reducers/store";
import PropsFileType from "../../../types/PropsFileType";
import StatePathType from "../../../types/StatePathType";
import { connect } from "react-redux";

const File: React.FC<PropsFileType> = ({name, id, createdAt, updatedAt, path}) => {
  const dispatchStore = (newPath: string) => {
     return store.dispatch({type: 'ADD', path: newPath});
  };
	
  const clickToShowFile = (event: React.MouseEvent<HTMLElement>) => { 
	  let path = ((event.currentTarget.dataset.id) as string);	  
	  dispatchStore(path);
  };
  
  function setUserFriendlyFormatDate(value: string){
	 let userFriendlyFormatDate = new Date(value);
	 return userFriendlyFormatDate.toDateString(); 
  }; 
  
  return (
    <div 
		className="File" 
		onClick={clickToShowFile} 
		data-id={id}
		style={{ backgroundColor: path === id ? '#bce6bc' : '#eaebeb' }}		
	>
      <span className='fName'>{name}</span>
	  <span className='time'>[ {setUserFriendlyFormatDate(createdAt)} ]</span>
	  <span className='time'>[ {setUserFriendlyFormatDate(updatedAt)} ]</span>
    </div>
  )
};

const mapStateToProps = (state: StatePathType) => {
  const {path} = state;	
  return ({path: path}); 
};

export default connect(
  mapStateToProps
)(File);