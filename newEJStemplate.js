// // import express from "express";
// const express = require("express");
// const path = require("path");

// const { required } = require("zod/mini");

// // import path from "path";
// const app = express();
// const port = 3000;

// // app.set("view engine", "ejs"); // ejs
// console.log(__dirname);
// // app.set("views", path.join(__dirname, "/view")); // relative path
// app.get("/", (req, resp) => {
//   resp.sendFile(`${__dirname}/template/index.html`);
//   //   resp.render("./view/Home.ejs");
//   //   resp.render("Home.ejs"); // html templeting pass karava mate use thay 6e.
// });

// app.listen(port, () => {
//   console.log("port is started");
// });
// // C:\Users\bkt07\Desktop\Node js KYB\C:\Users\bkt07\Desktop\Node js KYB\template\index.html

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs"); // ejs setup
console.log(__dirname);
app.set("views", path.join(__dirname, "./view")); // this line  is a compalsary when we use ejs ./view is a foldername;

app.get("/", (req, resp) => {
  resp.render("Home.ejs"); // ejs file render karavamate use thay 6e.
});

app.get("/roll", (req, resp) => {
  const rollvalue = Math.floor(Math.random() * 6) + 1;
  resp.render("rolldice.ejs", { rollvalue });
});

app.get("/instagram/:username", (req, resp) => {
  let { username } = req.params;
  resp.render("instagram.ejs", { username });
});
const port = 3000;
app.listen(port, () => {
  console.log("server is started");
});
