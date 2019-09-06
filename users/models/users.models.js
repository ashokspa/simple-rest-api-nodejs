const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/simple-rest-api',{useNewUrlParser: true,useUnifiedTopology:true});
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });

 const User = mongoose.model('Users', userSchema);