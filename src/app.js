const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

require("dotenv").config();
const app = express();

dbConnect();
//middle ware 

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ "message": "welcome to my application" });
})

//router routes

app.use('/api/users', userRoute)

//not found handler
app.use(notFound);
//error handler
app.use(errorHandler);


module.exports = app;