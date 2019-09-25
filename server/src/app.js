const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var albums = {
    "eM5XiXrBu74": { "name": "SUPER JUNIOR 슈퍼주니어 'Somebody New' Special Video" }
}

app.get('/albums', (req, res) => {
    res.send({
        albums
    })
})

app.get('/album/:v', (req, res) => {
    res.send(albums[req.params.v])
})

app.get('/createAlbum/:v', (req, res) => {
    var url_key_v = req.params.v;
    albums[url_key_v] = req.query;
    res.send({ status: true })
})


app.listen(process.env.PORT || 8081)