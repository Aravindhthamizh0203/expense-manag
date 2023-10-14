const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//schema

const userSchema = mongoose.Schema({
    firstname: {
        required: [true, "First name is required"],
        type: String,
    },
    lastname: {
        required: [true, "Last name is required"],
        type: String,
    },
    email: {
        required: [true, "Email name is required"],
        type: String,
    },
    password: {
        required: [true, "Passowrd name is required"],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    timestamp: true,
})

//hash password

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
//complie schema into model object

const User = mongoose.model("User", userSchema);
//export module
module.exports = User;