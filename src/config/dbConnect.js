const mongoose = require("mongoose");


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
        console.log(`DB connect Successfully`)
    } catch (error) {
        console.log(`error ${error.message}`)
    }
}



module.exports = dbConnect;