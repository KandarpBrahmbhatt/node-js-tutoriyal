import https from 'http'
import { type } from 'os';
import readline from 'readline'
import { isNumberObject } from 'util/types';

const API_URL = 'http://universities.hipolabs.com/search';
const COUNTRIES = ['India', 'USA', 'Canada', 'Thailand'];
const NUMBER_OF_UNIS = 10;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question in terminal
function ask(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

// Fetch university data for a country
function fetchUniversities(country) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}?country=${country}`;
        https.get(url, res => {
            let data = '';
            res.on('data', kb => data += kb);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);

                    const formatted = json.map(u => ({
                        name: u.name,
                        country: u.country,
                        state: u['state-province'] || 'N/A',
                        website: u.web_pages[0] || 'N/A'
                    }));
                    resolve(formatted);
                } catch (err) {
                    reject(err);
                }
            });
        }).on('error', reject);
    });
}

// Get random universities
function getRandom(unis, count) {
    const shuffled = [...unis].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display universities
function displayUniversities(unis) {
    unis.forEach((u, i) => {
        console.log(`${i + 1}. ${u.name}`);
        console.log(`   Country: ${u.country}`);
        console.log(`   State: ${u.state}\n`);
    });
}

// Main function
async function main() {
    while (true) {
        let allUnis = [];

        for (let country of COUNTRIES) {
            try {
                const unis = await fetchUniversities(country);
                allUnis.push(...unis); 
            } catch (e) {
                console.log(`Failed to fetch from ${country}`);
            }
        }

        const randomUnis = getRandom(allUnis, NUMBER_OF_UNIS);
        displayUniversities(randomUnis);

       
        const input = await ask('\nEnter university numbers to see websites : ');
if(Number.isInteger(parseInt(input))){
    const nums = input.split(',').map(n => parseInt(n.trim()) - 1);
        console.log('\nWebsites:\n');
        nums.forEach(n => {
            if (randomUnis[n]) { 
                console.log(`${randomUnis[n].name}: ${randomUnis[n].website}`);

            }
        });

        const repeat = await ask('\nDo you want to repeat? (y/n): ');
        if (repeat.toLowerCase() !== 'y') {
            console.log('Goodbye!');
            rl.close();
            break;
        }
           
        }else{
             console.log("you can tray again")
        }


        
        
    
    }
}

main();
