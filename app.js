const express = require('express');

//server named app
const app = express();

//static files
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile('./public/index.html')
})

app.get('/about', (req, res, next) => {
    res.sendFile('/Users/austinmazur/Desktop/ironhack class/labs/Intro to express/lab-express-basic-site/public/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile('/Users/austinmazur/Desktop/ironhack class/labs/Intro to express/lab-express-basic-site/public/works.html')
})

app

app.listen(3000, () => {
    console.log('Listening');
})