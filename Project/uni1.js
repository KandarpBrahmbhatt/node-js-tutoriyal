import https from 'http'
import readline from 'readline'

const API_URL = 'http://universities.hipolabs.com/search';
const COUNTRIES = ['India', 'USA', 'Canada', 'Thailand'];
const NUMBER_OF_UNIS = 10;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// // Function to ask a question in terminal
// function ask(question) {
//     return new Promise(resolve => rl.question(question, answer => resolve(answer)));
// }

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

        console.log("Enter university numbers to see websites (e.g. 1,3,5)")
       
    }
}

main();
