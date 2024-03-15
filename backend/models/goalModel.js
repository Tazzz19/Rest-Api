const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'please add a text value']
    },
    email: {
        type: String,
        required: [true, 'please add a text value'],
        unique: true
    },
    phone:{
        type: Number,
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Goal', goalSchema)