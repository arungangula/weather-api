require('dotenv').config();

const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = 3003;

app.use('/weather', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Weather app is running at http://localhost:${PORT}`);
});

