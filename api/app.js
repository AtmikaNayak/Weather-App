require('dotenv').config();
const express = require('express');
const path = require('path')
const axios = require('axios');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,'../views'))
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"../public")));

app.get('/', (req, res) => {
    res.render("index",{weather:null, error:null})
});

app.post('/weather', async(req,res) => {
    try{
        const city = req.body.city;
        const apikey = process.env.OPENWEATHER_API_KEY;
        const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        const result = await axios.get(apiurl);
        res.render("index",{weather:result.data})
    }catch(e){
        // res.send(`City not found, ${e}`);
        res.render("index",{weather: null, error: "City not found"})
    }
})

module.exports = app;