import express from "express"

const app = express()

app.get("/",(req,resp)=>{
    resp.send("Home page")
})
app.get("/about",(req,resp)=>{
    resp.send("About page")
})

const PORT =  process.env.PORT;
app.listen(PORT,()=>{
    console.log("port is started")
})
