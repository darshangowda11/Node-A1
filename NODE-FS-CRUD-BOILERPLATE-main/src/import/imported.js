const CRUD=require("../index");

CRUD.myFileWriter("write2.js","let string = 'this is just a write file content';");
CRUD.myFileReader("read2.js")
CRUD.myFileUpdater("write2.js",'console.log(`I just appended some extra data into write.js`)');
CRUD.myFileDeleter("delete2.js")