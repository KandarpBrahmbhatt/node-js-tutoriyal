import express from "express";
const users = require("./mockdata.js");

const app = express();
const port = 3000;

app.get("/users", (req, resp) => {
  return resp.jsonb(users);
});

app.listen(port, () => {
  console.log("server is started");
});
