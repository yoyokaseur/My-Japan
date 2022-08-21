const { isIntegerKey } = require('@vue/shared');
const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    option: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('products', shema, 'products');