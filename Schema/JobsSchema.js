const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    location : {
        type: String,
        required: true,
    },
    salary : {
        type: string,
        required: true,
    },
    companyName : {
        type: String,
        required: true,
    },
}, {timestamps : true});

const jobsModel = new mongoose.model('Jobs', jobsSchema);

module.exports = jobsModel;