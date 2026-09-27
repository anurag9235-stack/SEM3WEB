import express from 'express'

// console.log("hello world");

const app = express()
const data= {
    username:"anurag",
    location: "Delhi"
}
app.get("/",(req,res)=>{

res.send("data")

})

app.listen(3000,()=>{
    console.log("Server is running...");
})

