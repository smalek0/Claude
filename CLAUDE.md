# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

A beginner-friendly San Francisco weather app built with vanilla HTML, CSS, and JavaScript. It fetches and displays current weather conditions via the OpenWeatherMap API. No build tools, frameworks, or package managers — runs directly in any modern browser.

## Repository Structure

```
Claude/
├── index.html   # Page structure and UI state containers
├── app.js       # API calls, DOM updates, state management
├── style.css    # Styling, responsive layout, animations
└── README.md    # Setup instructions and learning notes
```

## Running the App

No build step required.

1. Add a valid OpenWeatherMap API key to `app.js` line 18:
   ```js
   const API_KEY = 'your_actual_key_here';
   ```
2. Open `index.html` directly in a browser (double-click or `File > Open`).

The app fetches weather on load and again on each "Refresh" button click.

## Architecture

### UI State Machine (`app.js`)

Three mutually exclusive UI states are managed by toggling `display` on/off:

| State | Element ID | Trigger |
|-------|-----------|---------|
| Loading | `#loading` | `showLoading()` — called at start of each fetch |
| Weather | `#weather-info` | `showWeatherInfo()` — called after successful data parse |
| Error | `#error` | `showError(msg)` — called on API/network failure |

### Key Functions

- `fetchWeather()` — async, validates API key, calls `fetch()`, dispatches to `displayWeather()` or `showError()`
- `displayWeather(data)` — extracts fields from OpenWeatherMap JSON, updates DOM elements, calls `showWeatherInfo()`
- `showLoading()` / `showWeatherInfo()` / `showError(msg)` — mutually exclusive display toggles

### Configuration Constants (`app.js` lines 18–21)

```js
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with real key
const CITY = 'San Francisco';
const COUNTRY_CODE = 'US';
const UNITS = 'imperial'; // 'imperial' = °F/mph, 'metric' = °C/kph
```

### DOM Element References (`app.js` lines 35–44)

All elements are cached at module load time. ID-to-variable mapping:

| HTML ID | JS Variable |
|---------|------------|
| `loading` | `loadingEl` |
| `weather-info` | `weatherInfoEl` |
| `error` | `errorEl` |
| `temp` | `tempEl` |
| `feels-like` | `feelsLikeEl` |
| `description` | `descriptionEl` |
| `humidity` | `humidityEl` |
| `wind` | `windEl` |
| `weather-icon` | `weatherIconEl` |
| `refresh-btn` | `refreshBtn` |

## Code Conventions

- **No framework, no bundler** — keep it vanilla; do not introduce npm, React, TypeScript, or build tools
- **Extensive comments** — this is an educational project; preserve and add explanatory comments when modifying code
- **Async/await** — use async/await (not `.then()`) for all asynchronous operations
- **DOM caching** — add new element references alongside the existing cache block (lines 35–44), not inline
- **Functional separation** — keep fetch logic, display logic, and state management in separate named functions
- **CSS organization** — `style.css` is organized by component with comment headers; maintain that structure

## CSS Layout Notes

- Purple gradient background: `#667eea` → `#764ba2`
- Responsive breakpoint at `600px` (media query)
- Flexbox used for centering `.container` and `.weather-card`
- CSS Grid used for `.details` (the three stat items)

## API Reference

OpenWeatherMap Current Weather endpoint:
```
GET https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={key}&units={units}
```

Fields used from response:
- `data.main.temp` — temperature (rounded)
- `data.main.feels_like` — feels-like temperature (rounded)
- `data.main.humidity` — humidity %
- `data.wind.speed` — wind speed (rounded)
- `data.weather[0].description` — text description
- `data.weather[0].icon` — icon code (used to build image URL: `https://openweathermap.org/img/wn/{icon}@2x.png`)

## Common Tasks

**Change the city:** Update `CITY` and `COUNTRY_CODE` constants in `app.js`.

**Switch to Celsius/metric:** Change `UNITS` from `'imperial'` to `'metric'` in `app.js`. Also update the `°F` and `mph` labels in `index.html` (lines 34, 45, 54).

**Add a new weather field:** (1) Add a `<span id="new-field">` in `index.html`, (2) cache it in the DOM elements block in `app.js`, (3) populate it inside `displayWeather()`.

**Debug API errors:** Open browser DevTools console (`F12`). `fetchWeather()` logs errors via `console.error`.

## Git Workflow

- Development branch: `claude/add-claude-documentation-AfTai`
- Main branch on remote: `origin/main`
- Push with: `git push -u origin claude/add-claude-documentation-AfTai`
- Commits are GPG/SSH signed (`user.signingkey` configured)
