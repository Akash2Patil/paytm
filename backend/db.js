const mongoose = required('mongoose');
mongoose.connect("")

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
