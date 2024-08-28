const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true ,w: 'majority' })
        .then(() => {
            console.log("Mongoose Connected"); 
        }).catch((error)=>{
            console.log(error) 
        })
}

module.exports = connectDatabase;                