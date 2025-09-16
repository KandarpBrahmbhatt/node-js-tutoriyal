// const express = require("express")
import express from 'express'
const app = express()

// middleware 
app.use((req,resp,next)=>{
    console.log("middla ware are run now")
    next()
})
app.use((req,resp,next)=>{
    // next one middla ware 
    console.log("next one middla ware are run now")
    next()
})


// error Handler


app.get("/",(req,resp)=>{
    resp.send("Hello World")
})
app.get("/about",(req,resp)=>{
    resp.send("Hello World about")
})
app.get("/contect",(req,resp)=>{
    resp.send("Hello World contect")
})

    app.use((err,req,resp,next)=>{
        console.err(err.stack)
        resp.status(500).send("something broke")
    })

const port = 3000

app.listen(port,()=>{
    console.log("Server is Started")
})
