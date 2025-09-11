// https://official-joke-api.appspot.com/random_joke

import https from 'https';
import chalk from 'chalk';
import { error } from 'console';

const getjoke = () =>{
    const url = "https://official-joke-api.appspot.com/random_joke"

    https.get(url,(response)=>{
        let data = ""
        response.on('data',(chunk)=>{
            data += chunk
        })

        response.on("end",()=>{
            const joke  = JSON.parse(data)
            console.log(joke)
            console.log(`Hear is a random ${joke.type} joke`)
            console.log((`${joke.setup}`))
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`))
        })

        response.on('error',(err) =>{
            console.log("Error fecthing the joke",$(err.message))
        })
    })
}
getjoke()