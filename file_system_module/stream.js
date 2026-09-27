const fs = require('fs')

//readablee stream
const readStream = fs.createReadStream("intro.txt", {encoding: "utf8", highWaterMark: 10})

readStream.on("data", (chunk)=>{
    console.log("Data received")
    console.log("Data: ", chunk);
})
//writeable stream
const writeStream = fs.createWriteStream("output.txt")
