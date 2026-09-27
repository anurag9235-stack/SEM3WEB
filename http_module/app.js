// import http from 'http';

// const server = http.createServer((req, res) => {

//     console.log("Hello World");
//     res.statusCode=404;
//     res.setHeader("Content-Type", "text/plain")
//     res.write("Hello from server");
//     "context-type":"application/json"
//     "custom-header": "Hello world"

// });
// const order={
//     orderId:123,
//     ordername:"iphone"
// }
// res.end(order)

// server.listen(3000, () => {
//     console.log("Server is running .... ");
// });

import fs from 'fs';

fs.readFile('./page_not_found/index.html', 'utf8', (err, data) => {

    if (err) {
        console.log("Error while reading file");
        console.log(err);
        return;
    }

    console.log("File read successfully");
    console.log(data);

});