import http from 'http';

//create basic http server 
const server = http.createServer((req , res)=>{
    console.log("Hello world")
    const order = {
        orderId : 12341,
        des : "delhi",
        source : "GZB"
        usename :"aaryan"
    }
    res.Statuscode =200
    res.end("welcome from server")
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running...");
})  