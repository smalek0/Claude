# San Francisco Weather App 🌉

A simple, beginner-friendly weather application that displays current weather conditions for San Francisco.

## Features

- 🌡️ Current temperature display
- 💨 Wind speed information
- 💧 Humidity levels
- 🖼️ Weather icon and description
- 🔄 Refresh button for updated data
- 📱 Responsive design (works on mobile and desktop)

## Technologies Used

- **HTML** - Structure of the page
- **CSS** - Styling and layout
- **Vanilla JavaScript** - Fetching and displaying data
- **OpenWeatherMap API** - Weather data source

## Setup Instructions

### Step 1: Get an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Click on "Sign Up" (top right)
3. Create a free account
4. After signing in, go to "API Keys" section
5. Copy your API key (it looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

**Note:** It may take a few minutes for your API key to activate after creation.

### Step 2: Add Your API Key

1. Open `app.js` in a text editor
2. Find this line near the top:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key:
   ```javascript
   const API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
   ```
4. Save the file

### Step 3: Open the App

1. Open `index.html` in your web browser
   - You can double-click the file, or
   - Right-click and choose "Open with" → your browser
2. You should see San Francisco's current weather!

## How It Works

### HTML (`index.html`)
- Defines the structure of the page
- Contains placeholders for weather data
- Links to CSS and JavaScript files

### CSS (`style.css`)
- Styles the page with a purple gradient background
- Creates a card-based layout for the weather information
- Makes the app responsive for different screen sizes
- Uses flexbox and grid for layout

### JavaScript (`app.js`)
- Fetches weather data from OpenWeatherMap API
- Uses `fetch()` to make HTTP requests
- Uses `async/await` for handling asynchronous operations
- Updates the DOM (Document Object Model) with weather data
- Handles loading states and errors

## Learning Points

### 1. **API Requests**
The app teaches you how to:
- Make HTTP requests using `fetch()`
- Work with JSON data
- Handle asynchronous operations with `async/await`

### 2. **DOM Manipulation**
You'll learn:
- How to select elements with `getElementById()`
- How to update text content with `.textContent`
- How to change element attributes like `src` and `style`

### 3. **Event Handling**
The refresh button demonstrates:
- How to add click event listeners
- How to respond to user interactions

### 4. **CSS Layout**
You'll see examples of:
- Flexbox for centering content
- CSS Grid for organizing details
- Media queries for responsive design
- CSS gradients and shadows

## Customization Ideas

Once you understand the basics, try these modifications:

1. **Change the city**: Modify the `CITY` constant in `app.js`
2. **Use Celsius**: Change `UNITS` from `'imperial'` to `'metric'`
3. **Add more data**: Display sunrise/sunset times (available in API response)
4. **Change colors**: Modify the gradient in `style.css`
5. **Add a search feature**: Let users search for any city
6. **Show forecast**: Use the 5-day forecast API endpoint

## Troubleshooting

### "Unable to load weather data"
- Check that you've added your API key to `app.js`
- Verify your API key is active (can take 10 minutes after creation)
- Check your internet connection
- Open browser console (F12) to see detailed error messages

### Weather icon not showing
- This usually means the API request failed
- Check the console for error messages

### Page looks broken
- Make sure all three files (`index.html`, `style.css`, `app.js`) are in the same folder
- Check that file names match exactly (case-sensitive)

## Resources

- [OpenWeatherMap API Documentation](https://openweathermap.org/current)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Web Docs - Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Project Structure

```
weather-app/
├── index.html    # Main HTML file
├── style.css     # Styling
├── app.js        # JavaScript logic
└── README.md     # This file
```

## Next Steps

After completing this project, you could:
- Learn about JavaScript frameworks (React, Vue)
- Explore backend development to create your own API
- Study more advanced CSS (animations, transitions)
- Build a weather app with 7-day forecasts
- Add data visualization with charts

Happy coding! 🚀