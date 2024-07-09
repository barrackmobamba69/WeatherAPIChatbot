# WeatherChatbot

Welcome to the Weather Chatbot project!
This is an interactive chatbot that provides real-time weather information from [OpenWeatherMap.org](https://home.openweathermap.org/users/sign_in) API for specified locations.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [From the Author](#from-the-Author)

## Features
- Fetches real-time weather information for any city.
- Provides temperature in Celsius.
- Suggests appropriate clothing based on the current temperature.
- Offers basic commands to help users navigate the chatbot.

## Demo

You can see a demo of the Weather Chatbot below.

https://github.com/barrackmobamba69/WeatherChatbot/assets/106630515/a1a14311-c5dc-4b06-ba57-252d812915a2

## Installation

1. Navigate to your folder and clone the repository:

        git clone https://github.com/your-github-username/weather-chatbot.git

2. Create an acount in [OpenWeatherMap.org](https://home.openweathermap.org/users/sign_in) and create your API key under "My API keys"
3. Replce your API key in `script.js`, under

        // OpenWeatherMap API key
        const OPEN_WEATHER_API_KEY = "Replace this with your own key";

4. Open the folder in Visual Studio Code and run the `index.html` in your browser.

## Usage

- Type the name of a city to get its weather.
- Type `help` to see available commands.
- Type `plan` to get information about planning a trip (feature not yet implemented).
- Type `quit` or `q` to exit the chatbot.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Future Enhancements
1. Make the application responsive for mobile devices and tablets.
2. Add a loading indicator when fetching weather data.
3. Implement user-friendly commands:
   - Use buttons for common commands like "help", "plan", etc., instead of requiring text input.
4. Provide a 5-day weather forecast including:
   - Wind speed
   - Humidity levels

## License

This project is licensed under the MIT License.

## Author

- *LinkedIn*: [Udayy Singh Pawar](https://www.linkedin.com/in/udayy-singh-pawar/)
- *GitHub*: [barrackmobamba69](https://github.com/barrackmobamba69)

Feel free to reach out if you have any questions or suggestions!
