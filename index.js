var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000,
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



let email = require('./mail')


app.listen(port,()=> console.info(`Server has started on port ${port}`));
app.use(express.static('public'))

app.use(email)