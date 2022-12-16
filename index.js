const express = require('express');
const app = express();
const cors = require('cors');

const apiData = require('./apiJson.json');

const port = process.env.PORT || 8000;
const host = "0.0.0.0";
app.use(cors());

app.get('/services', (req, res)=>{
    res.send(apiData);
    })

app.get('/', (req, res)=>{
res.send(`<h1>Server is working</h1>`);
})

app.listen(port, ()=> console.log('Listening http://localhost:'+ port))