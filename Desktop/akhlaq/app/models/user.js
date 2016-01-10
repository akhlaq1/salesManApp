var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String }    ,
    email :{ type: String  }    ,
    sid : { type: String  }    
});


var User = mongoose.model("User", userSchema);
module.exports = User;