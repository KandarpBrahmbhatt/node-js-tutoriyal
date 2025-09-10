// syncronse update read delete write 

const fs = require('fs')
const path = require("path")
// syntex => fs.(filepath,data,options)

const filename = "test.txt"
const filePath = path.join(__dirname,filename)
console.log(__dirname)

//  write file
const writefile = fs.writeFileSync(filePath,"This is a initial Data updated","utf-8")
console.log(writefile)

// read file
const readFile = fs.readFileSync(filePath,"utf-8")
console.log(readFile)

// update file 
const appendfile = fs.appendFileSync(filePath,"\nThis is the updated Data","utf8")
console.log(appendfile)

// delete file

const  fileDelete = fs.unlinkSync(filePath)
console.log(fileDelete)

// Rename the file name
const newUpdatedFileName = "UpdateTest.txt";
const newFilePath = path.join(__dirname,newUpdatedFileName)
const renamwFile = fs.renameSync(filePath,newFilePath)

