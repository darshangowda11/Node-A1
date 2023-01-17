const fs = require('fs/promises')


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	console.log(1)
	const data = await fs.writeFile(fileName, fileContent,(err)=>console.log(err));
    console.log("created a file");
	
} 
//myFileWriter("write.js","let string = 'this is just a write file content';")




const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	//console.log(2)
	const data= await fs.readFile(fileName,{encoding: "utf-8"})
	console.log(data)
}
//myFileReader("read.js")






const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	//console.log(3)
	fs.appendFile(fileName,fileContent,function(err,data){
		console.log(data)
	  })
}

//myFileUpdater("write.js",'console.log(`I just appended some extra data into write.js`)')






const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	//console.log(4)
	let task= " create a delete.js file before running the code"
	fs.unlink(fileName)
	
}

//myFileDeleter("delete.js")


//console.log("darsh")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }