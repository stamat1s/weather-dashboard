# Angular Weather App

A simple Angular weather application that allows searching for cities, displaying weather information, managing favorite cities, and offline caching.

---

## Features

- Search for cities and view current weather data (temperature, humidity, weather conditions).
- Add or remove cities from favorites.
- Favorites list for quick access.
- Dynamic styling based on weather data (e.g., change color depending on day/night or rain/sun).
- Responsive design for mobile and desktop.
- Offline caching using localStorage for access to the latest data without an internet connection.

---

## Technologies

- Angular (Standalone Components, RxJS)
- OpenWeatherMap API for weather data
- TypeScript, HTML, SCSS
- LocalStorage for offline cache

---

## Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/stamat1s/weather-dashboard.git
   cd weather-dashboard
2. Install dependencies:
   ```bash
   npm install
3. Configure your OpenWeatherMap API key:
   - Register at OpenWeatherMap to get your API key.
   - Open the file `src/app/core/weather.service.ts` (or wherever your weather service is).
   - Replace the `apiKey` variable’s value with your own API key.
4. Run the development server:
   ```bash
   ng serve
5. Open your browser and navigate to `http://localhost:4200`.
