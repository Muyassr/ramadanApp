
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var express          = require('express'),
    expressLayouts   = require('express-ejs-layouts'),
    indexRouter      = require('./routes/index'),
    mongoose         = require("mongoose"),
    db               = mongoose.connection,
    app              = express();

// server config
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true});
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to mongoose !'))
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static("public"));
app.use('/', indexRouter);







app.listen(process.env.PORT || 3000,function() {
    console.log("app has started ..!")
});