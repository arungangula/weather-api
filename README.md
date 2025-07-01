# Weather API Proxy – Node.js, Express, Axios

A simple Express.js API that proxies requests to the [OpenWeatherMap API](https://openweathermap.org/api). This project fetches current weather data based on latitude and longitude, with proper input validation, error handling, and controller structure.

---

## Features

- Fetches current weather using latitude and longitude
- Uses Axios to call third-party OpenWeatherMap API
- Input validation using `express-validator`
- Modular structure with separated routes and controllers
- Environment-based API key management with `dotenv`
- Uses `nodemon` for development and `node`/`pm2` for production

---

## Tech Stack

- Node.js
- Express.js
- Axios
- express-validator
- dotenv
- nodemon (dev only)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-api.git
cd weather-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add a ```.env``` file
Create a file named .env in the root folder:

```env
WEATHER_API_KEY=your_openweathermap_api_key_here
```
Get your free API key from https://openweathermap.org/api


### 4. Start the server in development mode
```bash
npm run dev
```
This uses ```nodemon``` to auto-restart on file changes.

### 5. Start the server in production mode
```bash
npm run start
```
This uses plain Node.js. For advanced setups, use ```pm2```.

---

## API Endpoint

GET /weather?lat=44.34&lon=10.99<br>
Fetch weather info using latitude and longitude.<br>
Query Parameters:<br>
- lat: required: float
- lon: required: float

Example Request<br>

```bash
GET http://localhost:3003/weather?lat=44.34&lon=10.99
```

Sample Response<br>
```json
{
  "location": "Modena",
  "temperature": "15.72°C",
  "description": "clear sky"
}
```








