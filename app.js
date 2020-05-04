var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    path = require('path'),
	mongoose = require('mongoose'),
    flash = require("connect-flash"),
    logger = require('morgan')
    methodOverride = require("method-override"),
    firebase = require("firebase");
    



app.set("view engine", "ejs");  
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));



// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZNTsyONAQlE0c_EtoCcyYyZyRWpz6isI",
  authDomain: "mavra-2355b.firebaseapp.com",
  databaseURL: "https://mavra-2355b.firebaseio.com",
  projectId: "mavra-2355b",
  storageBucket: "mavra-2355b.appspot.com",
  messagingSenderId: "553724586959",
  appId: "1:553724586959:web:487d03cec03e95c9a780ba",
  measurementId: "G-R0NXXBGT20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var user = firebase.auth().currentUser;


const db = firebase.firestore();


// console.log(db.collection("Residents").where(firebase.firestore.FieldPath.documentId(), '==', "0000000000").get());



// var ra = db.collection('Residents').doc('0000000000');
// console.log(ra.first);


app.get("/" ,function(req, res){
  res.render("signin");
});


app.get("/pi", function(req, res){
    res.sendFile(path.join(__dirname + '/Items.html'));
})


app.get("/dashboard", function(req, res){
  res.render("dashboard");
});



app.get("/calendar", function (req, res){
  console.log(req.params.body);
	res.render("calendar");
})


app.listen(process.env.PORT || 3000, function(){
       console.log("MavRA has started");
});