import http from 'http';
import fs from 'fs';

const data = fs.readFileSync("./pageNotfound.html");
const config= fs.readFileSync("./config.json");
const homepage = fs.readFileSync("./homepage.html")
const contactpage= fs.readFileSync("./contactpage.html")

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end(homepage);
    }

    else if (req.url === "/contact") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.end(contactpage);
    }

    else if (req.url === "/projects") {
        res.end(config);
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end(data);
    }

});

server.listen(3000, () => {
    console.log("Server is Running....");
});