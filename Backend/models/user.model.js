const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character long'],

        },
        lastname:{
            type: String,
            minlength: [3, 'last name must be at least 3 character long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 6 character long']
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String,
    },
})

userSchema.method.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.method.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.static.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);


module.exports = userModel;