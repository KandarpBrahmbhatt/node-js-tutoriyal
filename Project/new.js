import readline from 'readline';

const API_URL = 'http://universities.hipolabs.com/search';
const DEFAULT_COUNTRIES = ['India', 'USA', 'Canada', 'Thailand'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => resolve(answer.trim()));
    });
}

async function fetchUniversities(countries) {
    const universityData = [];

    for (const country of countries) {
        try {
            const res = await fetch(`${API_URL}?country=${country}`);
            const data = await res.json();
            universityData.push(...data.map(u => ({
                name: u.name,
                country: u.country,
                state: u['state-province'] || 'N/A',
                website: u.web_pages[0] || 'N/A'
            })));
        } catch (err) {
            console.error(`Error fetching data for ${country}:`, err);
        }
    }

    return universityData;
}

function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayUniversities(universities) {
    universities.forEach((u, index) => {
        console.log(`${index + 1}. ${u.name}\n   Country: ${u.country}\n   State: ${u.state}\n`);
    });
}

async function runCLI() {
    while (true) {
        let countriesInput = await askQuestion(`Enter countries separated by commas (or press Enter for default: ${DEFAULT_COUNTRIES.join(', ')}): `);
        let countries = countriesInput ? countriesInput.split(',').map(c => c.trim()) : DEFAULT_COUNTRIES;

        let numberInput = await askQuestion('How many universities would you like to see? (default 10): ');
        let number = Number(numberInput) || 10;

        console.log('\nFetching university data...\n');
        const allUniversities = await fetchUniversities(countries);
        const selectedUniversities = getRandomItems(allUniversities, number);

        displayUniversities(selectedUniversities);

        const selectionInput = await askQuestion('\nPlease select university numbers to view their websites (e.g. 1,3,5): ');
        const selectedIndexes = selectionInput.split(',').map(num => parseInt(num.trim()) - 1).filter(i => i >= 0 && i < selectedUniversities.length);

        console.log('\nHere is the list of universities and their websites:\n');
        selectedIndexes.forEach(i => {
            const uni = selectedUniversities[i];
            console.log(`${uni.name}: ${uni.website}`);
        });

        const repeat = await askQuestion('\nDo you want to repeat? (y/n): ');
        if (repeat.toLowerCase() !== 'y') {
            console.log('Goodbye!');
            rl.close();
            break;
        }

        console.log('\n============================\n');
    }
}

// runCLI();

// write a easy 