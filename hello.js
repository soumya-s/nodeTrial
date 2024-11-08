const http = require('http');


const listener = http.createServer((req,res) => 
    {
        res.writeHead(200,{
            'Content-Type':'text/html'

        });
        res.end('<h2 style="color:red;text-align:center"> Hello World </h2>')
    
    });
listener.listen(3500);