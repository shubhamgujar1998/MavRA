var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    flash = require("connect-flash"),
    methodOverride = require("method-override");
    firebase = require("firebase");
    // require("firebase/firestore");
    

app.set("view engine", "ejs");  
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/scripts"));
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

// var sendData = db.collection("users");


// console.log(db.collection("Residents").where(firebase.firestore.FieldPath.documentId(), '==', "0000000000").get());

// var data = 
//   {        
//     eventName: ["Play", "EAT", "SLEEP"],
//     date: ["2020-09-11", "2019-05-30", "2015-09-10"]
//   };

// // var ra = db.collection('Residents').doc('0000000000');
// // console.log(ra.first);

//   db.collection("users").doc("seniormavra@gmail.com").set(data);//,
      // {
      //   eventName: "PLay",
      //   date: "2020-06-09"
      // },
      // {
      //   eventName: "SLeep",
      //   date: "2020-07-09"
      // },
      // {
      //   eventName: "Eat",
      //   date: "2020-08-09"
      // }
    
    


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