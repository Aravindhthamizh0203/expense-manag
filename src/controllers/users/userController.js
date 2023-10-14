const User = require("../../models/User")
const asynchandler = require("express-async-handler");
//Register User
const registerUser = asynchandler(async (req, res) => {
    const { email, firstname, lastname, password } = req?.body;
    //user exist  
    const userexist = await User.findOne({ email })
    if (userexist) throw new Error("user already exists");
    try {


        const user = await User.create({ email, firstname, lastname, password })
        res.status(200).json(user);
    } catch (error) {
        res.json(error.message)
    }
})

//fetch all users from

const fetchUsers = asynchandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error)
    }
})

module.exports = { registerUser, fetchUsers }