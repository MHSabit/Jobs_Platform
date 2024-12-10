const express = require("express");
const dotenv = require("dotenv");
const userRouter = require('./Route/user')
const connectDB = require('./DBconfig')

// Load env variables
dotenv.config()
connectDB()

// app 
const app = express();
app.use(express.json())


// Route
app.use('/user', userRouter);


// Error handling for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port : ${process.env.APP_PORT}`);
});