const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.set("view-engine", ejs);
app.use(express.static("public"));


app.get("/", function(req, res){

    const today = new Date();
     res.render("home.ejs",{todayVariable : today});
});

app.post("/userSubmit", function(req, res){
        res.send("Hello "+req.body.username+". Your password is "+req.body.password);
});

app.listen(3000, function(){
    console.log("Server started successfully on portn 3000");
});