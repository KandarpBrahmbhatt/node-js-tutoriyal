// import express from 'express'
// const app = express()
// const __dirname = "./template/index.html"
// app.get("/",(req,resp)=>{
//     console.log(__dirname)
//     let sitename = "Adidas"
//     let searchText = "Search Now"
//     resp.sendFile("C:/Users/bkt07/Desktop/Node js KYB/template/index.html") //absulte path direct access path aapvano mostly reletive no use thay 6e.
//     //C:/Users/bkt07/Desktop/Node js KYB/template/index.html

// })

// const port = 3000;
// app.listen(port,()=>{
//     console.log("server is started")
// })

import express from "express";
const app = express();
const __dirname = app.get("/", (req, resp) => {
  resp.render("./template/index.html", { root: __dirname });
});
const port = 3000;

app.listen(port, () => {
  console.log("server is starrtec");
});
