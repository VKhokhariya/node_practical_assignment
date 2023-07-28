const http = require('http');
// const fs = require('fs');
const serverStatic = require('node-static')
const url = require('url');

const fileServer = new serverStatic.Server('./static_files');

var server = http.createServer((req,res)=>{

    
          req.addListener('end', () => {
            fileServer.serve(req, res);
          }).resume();


    var u1 = url.parse(req.url,true);

    if (u1.pathname=="/process" && req.method === 'GET') 
    {
        res.write(u1.query.fname+" "+u1.query.age) 
        res.end();        
    }
    else if(u1.pathname=="/process" && req.method === 'POST') 
    {
        let body = '';
        //req.on("data",chunk=>{} )
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log(body);
            res.end('ok  => '+ body);
            //fname=vibha&age=25
        });        
    }
}).listen(3000,()=>{console.log("server listening on port 3000")}); 