const fs = require('node:fs');
fs.readFile('./files/check.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log("Data is:: " + data);
   

});
const content ="Adding to file";
fs.writeFile('./files/check.txt',content,err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file written sucessfully")
    }
});
const append =" More content";
fs.appendFile('./files/check.txt',append,err => {
   if(err){
    console.log(err);
   }
   else{
    console.log("FILE APPENDED");
   }
});