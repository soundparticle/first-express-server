const mongo = require('../mongodb');
const { ObjectId } = require('mongodb');

const Birds = mongo.then(db => db.collection('birds'));

module.exports = {
    create(bird) {
        return Birds.then(birds => birds
            .insertOne(bird)
            .then(result => result.ops[0]));
    },
    findById(id) {
        return Birds.then(birds => birds
            .findOne({ _id: ObjectId(id) })
        );
    },
};