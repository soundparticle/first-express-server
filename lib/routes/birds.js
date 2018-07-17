const router = require('express').Router();
const Birds = require('../models/bird');

module.exports = router
    .get('/', (req, res) => {
        Birds.find()
            .then(birds => res.json(birds));
    })

    .get('/:id', (req, res) => {
        Birds.findById(req.params.id)
            .then(bird => res.json(bird));
    })

    .post('/', (req, res) => {
        Birds.create(req.body)
            .then(bird => res.json(bird));
    });