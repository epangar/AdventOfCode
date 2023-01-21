require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
//const Solution = require("../public/javascript/classes/Solution");

//const index = require('./routes/routes');
//const favicon = require('serve-favicon');
//const solutionRoutes = require('./routes/solutions-routes')


const app = express();
const PORT = process.env.NODEJS_PORT || 3000;

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
let whitelist = [
  'http://localhost:4200',
];


/* let corsOptions = {
  origin: function(origin, callback){
      let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
 */
//app.use(cors(corsOptions))


app.use(express.static(path.join(__dirname, 'public')));



/* app.get("/", (req, res) => {
  res.render('index');
}); */

app.listen(PORT, () => {
  console.log(`Our server is running on port ${PORT}`);
});


// catch 404 and forward to error handler
/* app.use((req, res, next) => {
  
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}); */

// error handler
/* app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */



const solutionRoutes = require("./routes/solutions-routes");
app.use("/", solutionRoutes);
app.use("/:year/:id", solutionRoutes);
//app.use("/2015", solutionRoutes);

module.exports = app;