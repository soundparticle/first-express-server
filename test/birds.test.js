const mongo = require('../lib/mongodb');
const { assert } = require('chai');
const request = require('./request');

describe('Birds API', () => {

    beforeEach(() => {
        return mongo.then(db => {
            return db.collection('birds').remove();
        });
    });

    function save(bird) {
        return request
            .post('/api/birds')
            .send(bird)
            .then(({ body }) => body);
    }

    let robin;

    beforeEach(() => {
        return save({ name: 'Robin' })
            .then(data => {
                robin = data;
            });
    });

    it('saves a bird', () => {
        assert.isOk(robin._id);
    });

    it('gets a bird', () => {
        return request
            .get(`/api/birds/${robin._id}`)
            .then(({ body }) => {
                console.log('** body **', body);
                assert.deepEqual(body, robin);
            });
    });


});