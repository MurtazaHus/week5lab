let express = require("express");
let bodyParser = require("body-parser");
let ejs= require("ejs");

let app=express();
let db = [];
let Viewspath= __dirname+"/Views/"; 

app.use(bodyParser.urlencoded({extended:false}));

app.engine("html", require('ejs').renderFile)
app.set("view engine", 'html');
app.use(express.static("img")); // we tell the program you can find the file inside img 



app.get('/',function(req,res){

    res.sendFile(Viewspath + "/index.html");
});



app.get('/addcustomer', function(req, res){

    res.sendFile(Viewspath + "/addcustomer.html");

});


app.get('/allcustomers', function(req, res){

    res.render(Viewspath +"/allcustomers.html", {
        db: db
    });
});

app.post('/addCustomer', function(req, res){ //gets the values from the page

    
    console.log(req.body);
    db.push(req.body);
    
    res.render(Viewspath +  "/allcustomers.html", {
        db: db
    });// we use render to trigger the rendering engine
    
});
//url encoded is userinput through url body parser is a middleware that is used to read the inputs from a post function 
// app.use(bodyParser.json()); //when we have complex data we use this 

app.listen(8080);

