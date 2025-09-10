// Async

const fs = require('fs')
const path = require("path")

const filename - "fsAsync.txt"
const filepath = path.join(__dirname,filename)

// syntax = fs.writeFileSync(filepath,data,options)

fs.writeFile(filename,"This is the initial Data","utf-8",(err)=>{
if(err) console.error(err);
else console.log("file has been saved")
})
