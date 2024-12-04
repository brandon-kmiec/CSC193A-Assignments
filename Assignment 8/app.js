'use strict';
const express = require('express');
const app = express();

// define all endpoints here
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function (req, res) {
    let radius = parseFloat(req.params['r']);

    var pi = Math.PI;
    var area = pi * radius * radius;
    var circumference = pi * 2 * radius;
    
    //console.log(radius);
    //console.log(area);
    //console.log(circumference);

    res.json({
        area: area, 
        circumference: circumference
    });
});

// define endpoint for exercise 2 here
app.get('/hello/name', function (req, res) {
    const firstName = req.query['first'];
    const lastName = req.query['last'];

    var errorMsg = 'Missing Required Path parameters:'
    if (!firstName && !lastName) {
        errorMsg += ' first, last';
        res.status(400).type('text').send(errorMsg);
    }
    else if (!firstName) {
        errorMsg += ' first';
        res.status(400).type('text').send(errorMsg);
    }
    else if (!lastName) {
        errorMsg += ' last';
        res.status(400).type('text').send(errorMsg);
    }

    res.type('text');
    res.send('Hello ' + firstName + " " + lastName);
});

app.use(express.static('public'))
const PORT = process.env.PORT || 8000;
app.listen(PORT);