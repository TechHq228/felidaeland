require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const helmet = require("helmet")
const compression = require("compression")

const citizensFile = require("./models/citizens")
const app = express()

mongoose.connect('mongodb://127.0.0.1/citizens', {
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
        "style-src": ["'self'", "https://unpkg.com/", "'unsafe-inline'"]
    }
}))
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(compression())

app.get("/", async (req, res) => {
    const citizensFiles = await citizensFile.find()
    res.render('index', { citizensFiles: citizensFiles})
})

app.post('/citizensRoute', async (req,res) => {
   await citizensFile.create({ nick: req.body.nickname, duty: req.body.duty, date: req.body.datejoined})

   res.redirect('/#Citizens')
})


app.listen(process.env.PORT)
console.log('Listening clear!')
