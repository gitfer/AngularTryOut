var express = require("express"),
app = express(),
port = parseInt(process.env.PORT, 10) || 8082;

app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/app/'));
	app.use(app.router);
});
    var pirates = [
                    {id: 1, name: 'Guybrush', surname: 'Threepwood', isPirate: false},
                    {id: 2, name: 'Elaine', surname: 'Marley', isPirate: false},
                    {id: 3, name: 'Pirate', surname: 'LeChuck', isPirate: true}
                ];
app.get('/pirates', function(req, res){
	res.json(pirates[0]);
});
 app.listen(port);
 console.log('Now serving the app at http://localhost:'+ port + '/');
