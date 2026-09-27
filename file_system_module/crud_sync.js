const fs=require("fs")

//Implementation CRUD operation using Node.js 'fs' module

//1.Create a file
fs.writeFileSync("notes.txt", "Hello Node.js")

//2. read the content of the file
const data=fs.readFileSync("notes.txt", "utf8")
console.log("Read Data: ", data);

//3.update the contentof the file 
fs.appendFileSync("notes.txt", "Hello ECE-2")

//4.delete the file
fs.rmSync("notes.txt")

