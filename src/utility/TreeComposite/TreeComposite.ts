export default class TreeComposite {
	arrayOfObjects: any;
	root: any;
    constructor(theArrayOfObjects: any) { 
		this.arrayOfObjects = theArrayOfObjects;
		this.root = { name: 'root', type: 'directory', children: [] };		
	}
	// Transform string PATH to Object
	// Screenshots: /screenshots/Path-To-Object.PNG
    stringPathToTreeObject() {
		let result = [];
		let obj	= this.arrayOfObjects;
		for(let i = 0;  i < obj.length; i++){
			const path = (obj[i])['path'];
			const createdAt = (obj[i])['createdAt'];
			const updatedAt = (obj[i])['updatedAt'];

			for (let k in obj[i]) {	
				let stringPathToArray = ((obj[i])[k]).split('/');
				
				let resultTemp: any = {};				
				let temp: any = {};
				
				// Start by end of array
				// Last element in array is FILE				
				for(let j = stringPathToArray.length - 1;  j > 0; j--){
					if(j === stringPathToArray.length - 1){
						let file = { 
							name: stringPathToArray[j],
							type: 'file',
							children: [],
							level: j,
							id: path,
							createdAt: createdAt,
							updatedAt: updatedAt
						};	
						
						temp[stringPathToArray[j]] = file;						
					}else{
						let directory = { 
							name: stringPathToArray[j],
							type: 'directory',
							children: [],
							level: j							
						};	
						
						temp[stringPathToArray[j]] = directory;						
					}
					
					// If is not last element added push previous element to the 'children'
					if (j !== stringPathToArray.length - 1){
						(temp[stringPathToArray[j]].children).push(temp[stringPathToArray[j + 1]])
					}				
					resultTemp = temp[stringPathToArray[j]];			
				}
				
				// If it is not empty 'push' to the result
				if(Object.keys(resultTemp).length > 0){
					result.push(resultTemp);
				}				
			}
		}
		
		return result;
    }
	
	// Recurse through for object and create 'normal' Tree 
	// Screenshots: /screenshots/Tree-File-System.PNG
	recursiveThroughObject(rootObject: any, treeObject: any){
		let children = rootObject.children;
		let existsInArray = children.filter((item: any) => {
			if(item.hasOwnProperty('name')){
				return treeObject.name === item.name;
			}
			return false;
		})	
		
		if(existsInArray.length === 0){
			children.push(treeObject);
		}else{
			if(existsInArray.type !== 'file'){
				this.recursiveThroughObject(existsInArray[0], (treeObject.children)[0]);			
			}
		}		
	}
	
	buildTreeFileSystem() {	
		let treeObject = this.stringPathToTreeObject();
		let i = 0;
		while(i < treeObject.length){
			this.recursiveThroughObject(this.root, (treeObject)[i]);
			i++;
		}	
		
		return this.root;
	}
}