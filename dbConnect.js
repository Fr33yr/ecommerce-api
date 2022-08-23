const mongoose = require('mongoose');

const MONGODB_URI = require('./db.config.js')


const dbConnect = () => {
    const connectionParams = {useNewUrlParser: true}
    mongoose.connect(MONGODB_URI, connectionParams)

    mongoose.connection.on("connected", ()=>{
        console.log("Connected to database succesfully")
    })

    mongoose.connection.on("error", (err)=>{
        console.log("Error while connecting to database:" + err)
    })

    mongoose.connection.on("disconnected", ()=>{
        console.log("Mongodb connection disconnected")
    })
}

module.exports = dbConnect