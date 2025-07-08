const mongoose = required('mongoose');
mongoose.connect('mongodb+srv://DB_admin:hwUvOKVnn0as02DY@userapp.dsioxpe.mongodb.net')

const userschema = mongoose.Schema({
    username : String,
    password : String,
    firstname : String,
    lastname : String

})

const User = mongoose.model("User",userschema);

module.export = {
    User
}