var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    flash = require("connect-flash"),
    methodOverride = require("method-override");
    firebase = require("firebase");
    

app.set("view engine", "ejs");  
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/scripts"));
app.use(express.static(__dirname + "/images"));
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


app.get("/" ,function(req, res){
  res.render("signin");
});

// Dashboard 
app.get("/dashboard", function(req, res){
  res.render("dashboard");
});



// Calendar
app.get("/calendar", function (req, res){
	res.render("calendar", {users: "sendData"});
})

app.post("/calendar", function(req, res){
  res.render("calendar");
});



// Community Map renders
app.get("/communitymap", function(req, res){
  res.render("communitymap");
})

app.get("/read_data", function(req, res){
  res.render("read_data");
})

app.get("/upload_files", function(req, res){
  res.render("upload_files");
})


// To-do list
app.get("/todo", function(req, res){
  res.render("todo");
})

// NODE server starting on this port
app.listen(process.env.PORT || 3000, function(){
  console.log("MavRA has started");
});