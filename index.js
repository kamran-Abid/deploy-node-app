const express = require('express');
const app = express();
const cors = require('cors');

const apiData = require('./apiJson.json');

const port = process.env.PORT || 8000;
app.use(cors());

app.get('/services', (req, res)=>{
    res.json(apiData);
    })

app.get('/', (req, res)=>{
res.send(`<h1>Server is working</h1>`);
})

app.listen(port, ()=> console.log('Listening http://localhost:'+ port))