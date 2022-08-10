const mongoose = require('mongoose');

const MONGODB_URI = require('./db.config.js')

// mongodb connection
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Database connected");
    }).catch(err => {
        console.log(err)
    })
