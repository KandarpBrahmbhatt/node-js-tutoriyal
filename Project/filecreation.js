// 1. enter the file name
// 2. enter the content

import  readline  from "readline";
import fs from 'fs'

const rl  =  readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})  

const fileCreation = () =>{
    rl.question('Enter Your Filename :',(filename)=>[
        rl.question("Enter the content for your file: ",(content)=>{
            fs.writeFile(`${filename}.txt`,content,(data)=>{
                if(data){
                    console.error(`Error Writing the file: , ${data.message} `)
                }else{
                    console.log(`File "${filename}.txt" create sucessefully!`)
                }
                // rl.close()

            })
            console.log("fdgd")
        })
    ])
}
fileCreation()