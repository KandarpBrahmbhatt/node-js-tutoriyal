import https from 'http'; 
import readline from 'readline/promises';

// Weather API configuration
const API_KEY = 'd8dfd99f12104e29a9a71924251109';
const BASE_KEY = "http://api.weatherapi.com/v1";

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

// Function to fetch weather data
const getWeather = async (city) => {
    const url = `${BASE_KEY}/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`;

    try {
        console.log(url,"==> url");
        console.log(`Fetching weather data for: ${city}`);
        
        const response = await fetch(url);

        // if (!response.ok) {
        //     throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        // }

        const result = await response.json();
        console.log(`Weather in ${result.location.name}, ${result.location.country}:`);
        console.log(`Temperature: ${result.current.temp_c}°C`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
};

// Prompt user and call API
const city = await rl.question("Enter the city name to get its weather: ");
await getWeather(city);

// Close the readline interface
rl.close();





