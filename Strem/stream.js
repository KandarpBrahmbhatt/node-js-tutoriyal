// import fs from 'fs'

// console.log("fgd")
// try {
//     const readStrem = fs.createReadStream("./samaple.txt",{
//         encoding: 'utf8',  // Set the encoding (utf8, ascii, binary, etc.)
//         highWaterMark: 64, // Buffer size in bytes  
//         autoClose: true    
//     });
//     const writeStrem = fs.createWriteStream("./file.txt")

//     // aa data aapade ne je niche lakhiyu 6e ae strem mathi j made 6e aa data event na lidhe j read ke write kari sakay.
//     readStrem.on("data",(chunk)=>{
//         console.log(chunk,"djsakdfj")
//         console.log(chunk)
//         writeStrem.write(chunk)
//     })
// } catch (error) {
//     console.log(error)
// }



import fs from "fs"

let content = ''
let readStream = fs.createReadStream('./samaple.txt')

readStream.on('data',(chunk)=>{
    content += chunk
    
})
readStream.on('end',()=>{
    console.log(content)
})