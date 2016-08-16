var 
express 	= require('express'),
bodyParser 	= require('body-parser');

var 
app = express();
app.use(bodyParser.json());

var Relations = require('./models/Relations');
Relations();

var io = require('socket.io').listen(app.listen(7000));

io.on('connection', function (socket) {
    console.log('socket');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var
RoutePlayer = require('./routes/Player')(app,io),
RouteField 	= require('./routes/Field')(app,io),
RouteGame 	= require('./routes/Game')(app,io),
RouteTeam 	= require('./routes/Team')(app,io),
RouteUser 	= require('./routes/User')(app,io),
RouteLogin 	= require('./routes/Login')(app,io);