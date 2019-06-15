let express = require('express')

let app = express()
let email = require('./app')


app.use(express.static('public'))
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.info(`Server has started on port ${PORT}`))
app.use(email)