var 
express 	= require('express'),
bodyParser 	= require('body-parser');

var 
app = express();
app.use(bodyParser.json());

var Relations = require('./models/Relations');
Relations();

var
RouteField 	= require('./routes/Field')(app),
RouteGame 	= require('./routes/Game')(app),
RoutePlayer = require('./routes/Player')(app),
RouteTeam 	= require('./routes/Team')(app),
RouteUser 	= require('./routes/User')(app);



app.listen(7000);