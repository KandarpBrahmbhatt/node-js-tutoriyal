const http = require("http")
 
// it iscalled and main useed in event 
// createServer 2 parameter lese req,resp
const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.write("Welcome to the Server first code kyb ")
        res.end() // response server ne send karava mate .end() no use thay 6e.
    }
    if(req.url =="/sourse"){
        res.write("this is a sourse code Page")
        res.end()
    }
    if(req.url =="/contect"){
        res.setHeader("Contect-type","text/plain")
        res.write("<h1>this is a contect  Page </h1>")
        res.end()
    }
}); // this is a method  


const PORT = 3000
server.listen(PORT,()=>{
        console.log(`listening on PORT ${PORT}`)
})