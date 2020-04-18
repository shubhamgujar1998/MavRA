var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    flash = require("connect-flash"),
    logger = require('morgan')
    methodOverride = require("method-override"),
    firebase = require("firebase");
    


app.set("view engine", "ejs");  
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));




// Your web app's Firebase configuration
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
var user = firebase.auth().currentUser;








app.get("/" ,function(req, res){
  // function signInWithGoogle(){
  //   var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  //   // var userr = firebase.auth().currentUser; 
  
  //   firebase.auth().signInWithPopup(googleAuthProvider)
  //   .then(function (data) {
  //       console.log(data);
  //       firebase.auth().onAuthStateChanged(function (user) {
  //           if (user) {
  //               console.log(user);
  //               // window.location = "http://localhost:3000/dashboard";
  //           } else {
  //               // window.location = "http://localhost:3000"; 
  //           }
  //       });
  //       console.log(data)
  //     })
  //   .catch(function (err) {
  //       console.log(err)
  //     })
  // }



  res.render("signin");

});

app.get("/pi", function(req, res){
  res.send("<h1> HELLO </h1><button> Sign IN </button>")
})


app.get("/dashboard", function(req, res){
  
// check if user is already logged in
res.render("dashboard");

// redirect to dashboard page if user is logged in
// if (user != null) {
//   res.render("dashboard");
//   user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }



  // if (user.uid.length > 0) {
  //   res.render("landing");
  //   // User is signed in.
  // } else {
  //   res.redirect("landing");
  //   // No user is signed in.
  // }
    
});




app.get("/calendar", function (req, res){
	res.render("calendar");
})



app.listen(process.env.PORT || 3000, function(){
       console.log("MavRA has started");
});