let express = require("express");
let bodyParser = require("body-parser");

app=express();
let Viewspath=__dirname+"/Views/"; 
let db = [];
app.engine("/html", require('ejs').renderFile)
app.set("view engine", )

app.get('/',function(req,res){

    res.sendFile(Viewspath+"index.html");


});

app.get("/addcustomer", function(req, res){

    res.sendFile(ViewsPath+"addcustomer.html");

});

app.post('/addCustomer', function(req, res){ //gets the values from the page

    
    console.log(req.body);
    db.push(req.body);
    //res.sendFile(ViewsPath+"addcustomer.html"); // sending the user back to this page 
    res.render(ViewsPath+"allcustomers.html");
    customer: db
});

app.use(bodyParser.urlencoded({extended:false}));

app.listen(8080);

