const express = require('express');
const env = require('dotenv');
const userRoute = require('./Route/userRoute');
const connectDB = require('./server');
// Load environment variables before any other code
env.config();

// Add error checking for the port number
const PORT = process.env.SERVER_PORT_NUMBER || 3000;

const app = express();
app.use(express.json());

// connect to database
connectDB();


// route
app.use('/user', userRoute);


// Add error handling to verify environment variables are loaded
if (!process.env.SERVER_PORT_NUMBER) {
    console.warn('WARNING: SERVER_PORT_NUMBER not found in environment variables');
    console.warn('Using default port 3000');
}

app.listen(PORT, ()=> {
    console.log(`App is running on port number ${PORT}`);
});