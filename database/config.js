const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } );

    } catch (error) {
        console.log(error);
        throw new Error("Connection Error");
    }

    console.log("Mongo DB Connected");
    



}


module.exports = {
    dbConnection
}