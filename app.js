const express = require('express');
const app = express();

// set up template engine
app.set('view engine', 'ejs');
// middleware to serve static files
app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 3000);