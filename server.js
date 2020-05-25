const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public/'));

app.use((req, res, next) => {

    next();
});

app.get('/', (req, res) => {

    res.send({
        name: 'Damn',
        likes: [
            'Game',
            'Singing'
        ]
    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Server is up code 3000');
});