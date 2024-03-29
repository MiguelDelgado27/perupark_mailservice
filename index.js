var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors({
    origin: 'https://migueldelgado27.github.io'
}));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//let email = require('./mail')
let email = require('./newMail')

app.use(express.static('public'))

app.use(email)

app.listen(port,()=> console.info(`Server has started on port ${port}`));