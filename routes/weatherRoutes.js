const express = require('express');
const { query, validationResult } = require('express-validator');
const { getWeather } = require('../controllers/weatherController');

const router = express.Router();

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

router.get('/', [
    [
        query('lat')
        .notEmpty()
        .withMessage('Latitude is required')
        .isFloat()
        .withMessage('Lat must be a valid number'),
        query('lon')
        .notEmpty()
        .withMessage('Longitude is required')
        .isFloat()
        .withMessage('Lon must be a valid number'),
        validate
    ],
    getWeather
]);

module.exports = router;

