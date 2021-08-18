const express = require('express');

const app = express();

app.get('/year/:age', (req, res) => {


    //  let name = req.params.name;
    let age = req.params.age;
    let msg = `you were born in ${2021-age} `;

    res.send(msg);
    res.end();
});

app.listen(3000, '127.0.0.1');
console.log('listening to port 3000');