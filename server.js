require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const helmet = require("helmet")
const compression = require("compression")

const citizensFile = require("./models/citizens")
const app = express()

mongoose.connect('mongodb://localhost/citizens', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(helmet.contentSecurityPolicy({
    directives: {
        "style-src": ["'self'", "https://unpkg.com/"]
    }
}))
app.use(compression())

app.get("/", async (req, res) => {
    const citizensFiles = await citizensFile.find()
    res.render('index', { citizensFiles: citizensFiles})
})

app.post('/citizensRoute', async (req,res) => {
   await citizensFile.create({ nick: req.body.nickname, duty: req.body.duty})

   res.redirect('/#Citizens')
})


app.listen(process.env.PORT)
console.log('Listening clear!')