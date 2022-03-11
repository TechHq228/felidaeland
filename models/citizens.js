const mongoose = require('mongoose')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date() 
let month = months[d.getMonth()]
let future = d.getFullYear() + 1286
const citizensSchema = new mongoose.Schema({
    nick: {
        type: String,
        required: true
    },
    duty: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: d.getDate() + " " + month + " " + future
    }
})


module.exports = mongoose.model('citizens', citizensSchema)