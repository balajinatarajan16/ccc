
const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
   
    
});



 
module.exports = mongoose.model('course', employeeSchema);
