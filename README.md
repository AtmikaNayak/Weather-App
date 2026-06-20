# Weather App

A weather forecasting application built using Node.js, Express, EJS, and the OpenWeatherMap API. Users can search for any city and view real-time weather information including temperature, humidity, weather conditions, and wind speed.

## Features

- City-based weather search
- Real-time weather information
- Temperature display in Celsius
- Humidity and wind speed details
- Weather icons from OpenWeatherMap
- Error handling for invalid cities

## Tech Stack

- Node.js
- Express.js
- EJS
- Axios
- OpenWeatherMap API

## Project Structure

```text
weather/
├── api/
│   └── app.js
├── public/
├── views/
├── package.json
└── README.md
```

## Running Locally

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file

```env
apikey=YOUR_OPENWEATHER_API_KEY
```

3. Start the server

```bash
npm start
```

4. Open

```text
http://localhost:5000
```

## Running Tests

No automated tests are configured for this project.

## Integration Notes

The weather service can be integrated into travel, event planning, or dashboard applications requiring real-time weather data.

### Weather Dashboard

![Weather App](public/weather-app.png)

## Live Demo

[https://weather-k148bfnv6-atharvaajoshiis-projects.vercel.app/](https://weather-app-algoorbit.vercel.app/)

## Additional Resources

- OpenWeatherMap API: https://openweathermap.org/api
