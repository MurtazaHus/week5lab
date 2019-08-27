let express = require("express");
let bodyParser = require("body-parser");
let ejs= require("ejs");

app=express();
let Viewspath=__dirname+"/Views/"; 
let db = [];
app.engine("/html", require('ejs').renderFile)
app.set("view engine", 'html');
app.use(express.static("img")); // we tell the program you can find the file inside img 

app.get('/',function(req,res){

    res.sendFile(Viewspath + "index.html");


});

// app.get('/allcustomers', function(req, res){

//     //res.sendFile(Viewspath + "allcustomers.html");
//     res.render(ViewsPath+"allcustomers.html");

// });

app.get('/addcustomer', function(req, res){

    res.sendFile(Viewspath + "addcustomer.html");

});

app.post('/addCustomer', function(req, res){ //gets the values from the page

    
    console.log(req.body);
    db.push(req.body);
    //res.sendFile(ViewsPath+"addcustomer.html"); // sending the user back to this page 
    res.render(ViewsPath +"allcustomers.html");// we use render to trigger the rendering engine
    db: db
});

app.use(bodyParser.urlencoded({extended:false}));//url encoded is userinput through url 
app.use(bodyParser.json()); //when we have complex data we use this 

app.listen(8080);

