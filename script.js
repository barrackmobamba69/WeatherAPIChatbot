/*  
Project Name: Weather Chatbot
Author: Udayy Singh Pawar
Created: [July 10, 2024]
Last Updated: [July 10, 2024]

Description: An interactive chatbot that provides real-time weather information from OpenWeatherMap API for specified locations.

LinkedIn: https://www.linkedin.com/in/udayy-singh-pawar/
GitHub: https://github.com/barrackmobamba69 

License: MIT
*/

// OpenWeatherMap API key
const OPEN_WEATHER_API_KEY = "Replace this with your own key";

// DOM elements
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Function to add a message to the chatbox
function addMessage(message, isUser = false) {
    const messageElement = document.createElement('p');
    messageElement.textContent = isUser ? `You: ${message}` : `Chatbot: ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to display welcome message
function welcomeMessage() {
    addMessage("Welcome to the Weather ChatBot! Hi, my name's Nootnoot");
    addMessage("Type 'help' to show the command list");
}

// Function to show available commands
function showCommands() {
    addMessage("Here are the available commands:");
    addMessage("- Type the name of a city to get its weather");
    addMessage("- Type 'plan' to plan your trip");
    addMessage("- Type 'quit' or 'q' to exit");
}

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`;
    const response = await fetch(url);
    return await response.json();
}

// Function to convert Kelvin temperature to Celsius
function extractTemperatureInCelsius(weatherData) {
    const kelvinTemperature = weatherData.main.temp;
    const celsiusTemperature = kelvinTemperature - 273.15;
    return celsiusTemperature.toFixed(2);
}

// Function to determine weather condition based on temperature
function getWeatherCondition(temperature) {
    if (temperature < 0) return "freezing";
    if (temperature < 10) return "very cold";
    if (temperature < 20) return "cold";
    if (temperature < 30) return "pleasant";
    return "very hot";
}

// Function to suggest clothing based on temperature
function suggestClothing(temperature) {
    if (temperature < 0) return "You'll need a heavy coat or jacket, thick gloves, a winter scarf, and a hat that covers your ears.";
    if (temperature < 10) return "You'll need a warm coat, gloves, and hat if required.";
    if (temperature < 15) return "You'll need a jacket, a hoodie, or a sweater.";
    if (temperature < 20) return "You'll be comfortable in a half-sleeved shirt or nice-looking t-shirt and shorts or tracks.";
    if (temperature < 25) return "You'll be comfortable in a normal t-shirt and joggers or shorts.";
    return "You'll need light-weight shorts, shirts or no shirt at all!";
}

// Function to handle user input
async function handleUserInput(input) {
    addMessage(input, true);

    const lowerInput = input.toLowerCase();

    if (lowerInput === 'hello' || lowerInput === 'hi') {
        welcomeMessage();
    } else if (lowerInput === 'help') {
        showCommands();
    } else if (lowerInput === 'quit' || lowerInput === 'q') {
        addMessage("Thank you and have a great day :)");
        setTimeout(closeChatbox, 1000); // Close chatbox after 1 second

    } else if (lowerInput === 'plan') {
        addMessage("Trip planning feature is not implemented in this web version.");
    } else {
        try {
            // Fetch weather data and provide weather information
            const weatherData = await fetchWeatherData(input);
            const temperature = extractTemperatureInCelsius(weatherData);
            const weatherCondition = getWeatherCondition(parseFloat(temperature));
            const clothingSuggestion = suggestClothing(parseFloat(temperature));

            addMessage(`The temperature in ${input} is ${temperature} degrees Celsius.`);
            addMessage(`According to the reports, the weather looks ${weatherCondition}.`);
            addMessage(`The best choice of clothing is: ${clothingSuggestion}`);
        } catch (error) {
            addMessage("Oops! Error fetching weather data. Please try again.");
        }
    }
}

// Function to close the chatbox
function closeChatbox() {
    const chatContainer = document.querySelector('.spacer');
    chatContainer.style.display = 'none';
}

// Event listener for send button click
sendButton.addEventListener('click', () => {
    const input = userInput.value.trim();
    if (input) {
        handleUserInput(input);
        userInput.value = '';
    }
});

// Event listener for Enter key press in input field
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

// Display welcome message when the page loads
welcomeMessage();
