const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try{
        const connectDB = await mongoose.connect(MONGO_URI, {});
        console.log('Database is connected successfully');
    }
    catch (err) {
        console.log(' Database is not connected error happen', err)
    }

}

module.exports = connectDB;