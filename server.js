// const { createServer } = require('node:http');
// const hostname = 'localhost' //'127.0.0.1';
// const port = 3000;

// const server = createServer((req,res) => {
//     res.write("Welcome node");
//     res.end()
//     console.log("cratedserver");
// });

// server.listen(port,() => {
//   //  console.log("server running")
// });

//const {createServer} = require('node:http');
var http = require('http');
//const sever = http.createServer();

var port = 4500;
var server =http.createServer((req,res,err) => {
    if(err){
        console.log("The error occured is"+ err);
    }
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end("welcome to node js")
    console.log("server created");
});


server.listen(port,()=>{
    console.log(`Server running at ${port}`)

});