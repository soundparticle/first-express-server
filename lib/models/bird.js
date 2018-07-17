const mongo = require('../mongodb');
const { ObjectId } = require('mongodb');

const Birds = mongo.then(db => db.collection('birds'));

module.exports = {
    create(bird) {
        return Birds.then(birds => birds
            .insertOne(bird)
            .then(result => result.ops[0]));
    },

    find() {
        return Birds.then(birds => birds
            .find()
            .toArray());
    },

    findById(id) {
        return Birds.then(birds => birds
            .findOne({ _id: ObjectId(id) })
        );
    },

    findByIdAndUpdate(id, bird) {
        console.log('** bird, id **', bird, id);
        delete bird._id;
        return Birds.then(birds => birds
            .findOneAndUpdate({
                _id: ObjectId(id)
            },
            {
                $set: bird
            },
            {
                returnOriginal: false
            })
            .then(result => {
                console.log('** result **', result);
                return result.value;
            }));
    },

};