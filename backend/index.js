import express from "express";

const app = express()

// app.get("/", (req, res)=>{
//     res.json("hello this is the backend")
// })

app.listen(8800, ()=>{
    console.log("connected to backend!")
})