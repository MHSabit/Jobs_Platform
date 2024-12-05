require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost/Jobs_Portal', {});
        console.log('Mongo DB connection successful');
    }
    catch (err) {
        console.log('Mongo DB connection Error');
        throw err;
    }
};

module.exports = connectDB;