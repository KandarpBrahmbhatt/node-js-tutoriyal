import express from "express"

const app = express()


app.get("/",(req,resp)=>{
    resp.send("This is a Home Page")
})

app.get("/contect",(req,resp)=>{
    resp.send("this is a contect page")
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`your server is Started :   ${PORT}`)
})
