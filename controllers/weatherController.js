const axios = require('axios');

exports.getWeather = async(req, res) => {
    const {lat, lon} = req.query;

    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await axios.get(url);
        const data = response.data;

        const result = {
            country: data.sys.country,
            location: data.name,
            temperature: `${data.main.temp}°C`,
            description: data.weather[0].description
        }

        return res.json(result);
    } catch (error) {
        console.log(error.response?.data || error.message);
        res.status(500).json({ message: 'Error fetching weather data' });
    }
};