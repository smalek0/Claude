/*
 * San Francisco Weather App
 * This file handles fetching weather data and updating the UI
 */

// ============================================
// CONFIGURATION
// ============================================

/*
 * API Configuration
 * You need to get a free API key from OpenWeatherMap:
 * 1. Go to https://openweathermap.org/api
 * 2. Sign up for a free account
 * 3. Generate an API key
 * 4. Replace 'YOUR_API_KEY_HERE' below with your actual key
 */
const API_KEY = 'YOUR_API_KEY_HERE';
const CITY = 'San Francisco';
const COUNTRY_CODE = 'US';
const UNITS = 'imperial'; // Use 'imperial' for Fahrenheit, 'metric' for Celsius

// Build the API URL
// This URL tells OpenWeatherMap what data we want
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=${UNITS}`;

// ============================================
// DOM ELEMENTS
// ============================================

/*
 * Get references to HTML elements we'll need to update
 * document.getElementById() finds elements by their id attribute
 */
const loadingEl = document.getElementById('loading');
const weatherInfoEl = document.getElementById('weather-info');
const errorEl = document.getElementById('error');
const tempEl = document.getElementById('temp');
const feelsLikeEl = document.getElementById('feels-like');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const weatherIconEl = document.getElementById('weather-icon');
const refreshBtn = document.getElementById('refresh-btn');

// ============================================
// FETCH WEATHER DATA
// ============================================

/*
 * Main function to fetch weather data from the API
 * This is an 'async' function, which means it can wait for data
 */
async function fetchWeather() {
    // Check if API key has been set
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        showError('Please add your OpenWeatherMap API key to app.js');
        return;
    }

    try {
        // Show loading state
        showLoading();

        /*
         * fetch() makes an HTTP request to the API
         * await means "wait for this to complete before continuing"
         */
        const response = await fetch(API_URL);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        /*
         * Convert the response to JSON format
         * JSON is a way to structure data that JavaScript can easily use
         */
        const data = await response.json();

        // Call function to display the weather data
        displayWeather(data);

    } catch (error) {
        /*
         * If anything goes wrong (no internet, bad API key, etc.)
         * this code runs
         */
        console.error('Error fetching weather:', error);
        showError('Failed to load weather data. Check console for details.');
    }
}

// ============================================
// DISPLAY WEATHER DATA
// ============================================

/*
 * Updates the UI with weather data
 * Takes the data object returned from the API
 */
function displayWeather(data) {
    /*
     * Extract the data we need from the API response
     * The API returns a lot of data, we only use what we need
     */
    const temperature = Math.round(data.main.temp); // Round to nearest whole number
    const feelsLike = Math.round(data.main.feels_like);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed);
    const iconCode = data.weather[0].icon;

    /*
     * Update the text content of each element
     * .textContent changes the text inside an HTML element
     */
    tempEl.textContent = temperature;
    feelsLikeEl.textContent = feelsLike;
    descriptionEl.textContent = description;
    humidityEl.textContent = humidity;
    windEl.textContent = windSpeed;

    /*
     * Set the weather icon
     * OpenWeatherMap provides icon codes that we can use to show images
     */
    weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconEl.alt = description;

    // Show the weather info and hide loading/error
    showWeatherInfo();
}

// ============================================
// UI STATE MANAGEMENT
// ============================================

/*
 * These functions control what the user sees
 * Only one of these states should be visible at a time
 */

function showLoading() {
    loadingEl.style.display = 'block';
    weatherInfoEl.style.display = 'none';
    errorEl.style.display = 'none';
}

function showWeatherInfo() {
    loadingEl.style.display = 'none';
    weatherInfoEl.style.display = 'block';
    errorEl.style.display = 'none';
}

function showError(message) {
    loadingEl.style.display = 'none';
    weatherInfoEl.style.display = 'none';
    errorEl.style.display = 'block';

    // Update error message if a custom message is provided
    if (message) {
        errorEl.querySelector('p').textContent = message;
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

/*
 * Event listeners respond to user actions
 * When the refresh button is clicked, fetch new weather data
 */
refreshBtn.addEventListener('click', () => {
    fetchWeather();
});

// ============================================
// INITIALIZE APP
// ============================================

/*
 * This code runs when the page first loads
 * Fetch the weather data immediately
 */
fetchWeather();
