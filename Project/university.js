import https from 'http'; 
import readline from 'readline';

const defaultcontry = ['India', 'USA', 'Canada', 'Thailand'];
const API_URL = "http://universities.hipolabs.com/search"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const question = async (query) =>{

    let arr = [];

    let responseIndia = await fetch(`${API_URL}?country=India&limit=10`);
    let responseTurkey = await fetch(`${API_URL}?country=Canada&limit=10`);
    let responseThailand = await fetch(`${API_URL}?country=Thailand&limit=10`);
    // let responseTurkey = await fetch(`${API_URL}?country=Canada&limit=10`);

    let jsonIndia = await responseIndia.json();
    let jsonTurkey =  await responseTurkey.json(); 
    let jsonThailand =  await responseThailand.json(); 
    console.log(jsonIndia,"====>json")
    console.log(jsonTurkey,"====>jsonTurkey")
    console.log(jsonThailand,"====>jsonThailand")
    // defaultcontry.forEach(async country=>{
    //     try {
    //         let response = await fetch(`${API_URL}?country=${country}&limit=10`);
    //         console.log(response.json());
    //         response.json()
    //     } catch (error) {
            
    //     }
    // })
    // try {
    //     if()
    // } catch (error) {
        
    // }
    rl.question()
}


console na  university ma 1,3,5 ma nichi lakhavanu 6e.


 // const input = await ask('\nEnter university numbers to see websites (e.g. 1,3,5): ');
        // const nums = input.split(',').map(n => parseInt(n.trim()) - 1);

        // console.log('\nWebsites:\n');
        // nums.forEach(n => {
        //     if (randomUnis[n]) {
        //         console.log(`${randomUnis[n].name}: ${randomUnis[n].website}`);
        //     }
        // });

        // const repeat = await ask('\nDo you want to repeat? (y/n): ');
        // if (repeat.toLowerCase() !== 'y') {
        //     console.log('Goodbye!');
        //     rl.close();
        //     break;
        // }
question()