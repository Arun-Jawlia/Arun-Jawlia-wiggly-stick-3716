const mongoose = require('mongoose');
const authschema = ({
    name:String,
    email:String,
    password:String,
   
})

const AuthsModel = mongoose.model("user",authschema);

module.exports = {AuthsModel};