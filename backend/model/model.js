const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    director: {
        required: true,
        type: String
    },
     actor: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    }
})
dataSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Data', dataSchema)