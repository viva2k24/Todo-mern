const mongoose = require('mongoose')

module.exports = async () => {
    try {
        const connectionParams = {
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb+srv://vidhyavarshinib:AyuEEaEOXW9j6QcS@mern.onhqni1.mongodb.net/todo?retryWrites=true&w=majority&appName=MERN",
            connectionParams
        );
        console.log("Connected to database")
    } catch (error) {
        console.log("could not connect to database",error)
    }
}