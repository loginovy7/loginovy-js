const axios = require('axios');

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to generate a random hexadecimal color code
function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Function to fetch a random joke from a Chuck Norris jokes API
async function fetchChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error.message);
        return 'Unable to fetch Chuck Norris joke';
    }
}

module.exports = {
    capitalizeWords,
    generateRandomColor,
    fetchChuckNorrisJoke
};
