const mongoose = require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    username:{
        type : String,
        rquired : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const user = mongoose.model('users',userSchema);
user.createIndexes();
module.exports = user; 