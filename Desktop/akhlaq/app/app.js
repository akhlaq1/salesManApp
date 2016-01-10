var mongoose = require("mongoose");
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./models/user');

var FirebaseTokenGenerator = require("firebase-token-generator");

var app = express();
mongoose.connect("mongodb://localhost:27017/test03");
app.use(bodyParser.json());

var filepath = path.resolve(__dirname, 'public');
var f = path.join(filepath, './myapp/www/');


app.use(express.static(f));

var con = mongoose.connection;

app.get('/signup', function (req, res) {
    console.log(req.body.sid);
    console.log('/login signup');
})
// app.get('/login', function (req, res ) {

//     console.log('get login');
//     var existUser = new User({
//         username: req.body.username,
//         password: req.body.password
//     });
//     User.findOne((existUser).where((existUser).equal(existUser)), function (err, existUser) {
//         if (err) {
//             return
//             console.error(err);
//         }
//         else {
//             console.log('yes'+existUser);
//             res.send('ok');
//         }
//     });
// })




app.post('/login', function (req, res) {
    console.log('post login');
    var existUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    
    User.find({ "username": existUser.username }, function (err, existUser) {    
        if (err) {
            console.error("error occured", err);
            res.send(null);
            return;
        } else {            
             if(existUser.length != 0){          
            var tokenGenerator = new FirebaseTokenGenerator("5yjTYsf1dhM7vwPyJFGS0SsZjahbqgtbIY2gDFHK");
            var token = tokenGenerator.createToken({ uid: existUser[0].sid, some: "arbitrary", data: "here" });
            var result = { usertoken: token, user: existUser }
               res.send(result);
             }
        }
    });
})

app.post('/signup', function (req, res) {


    var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        sid: req.body.sid
    });


    newUser.save(function (err, newUser) {
        if (err) return console.error(err);

        console.log("server " + newUser);
    });
    
    
    //    console.log('signUp from post side');
    res.json({
        sid: req.body.sid
    });
});





app.use(function (err, req, res, next) {
    res.send(err);
});

app.listen(3000);