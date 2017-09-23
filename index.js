var express= require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('num', 1);
var num = app.get ( 'num');
console .log (num); //1
app.use(function(req, res, next) {

        console .log ('Record timestamp');
         next();
    });
app.use(bodyParser.json());


app.get('/', function(req, res, next) {
        var body = req.body;
        res.send('Hello World! ');
    });
app.get('/help', function(req, res, next) {

        res.send('Help me');
});
app.listen(3000, function(){
    console.log('Start node on port 3000')
});