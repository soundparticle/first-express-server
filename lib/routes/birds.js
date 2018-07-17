const router = require('express').Router();
const Birds = require('../models/bird');

module.exports = router
    .get('/', (req, res) => {
        Birds.find()
            .then(pirates => res.json(pirates));
    });

