const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('config.json', 'utf8');
fs.readFile("config.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(data);
})
const server = http.createServer((req, res) => {
    res.writeHead(200,{
        'contentType': 'text/plain',
        'customHeader': 'Hello ECE'
    })
    res.end("Welcome")
})

server.listen(3000,"127.0.0.1", () => {

})
console.log