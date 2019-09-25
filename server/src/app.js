const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json()) // support json encoded bodies 
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: ` Hello ${req.body.email} - password is ${req.body.password}, Your user was registered! Have fun!`
    })
})


app.listen(process.env.PORT || 8081)