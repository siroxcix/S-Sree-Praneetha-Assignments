// var express = require('express');

// var app = express();
// const data = require('customer.json')

// app.get('/search', function(req, res) {
//     res.header("Content-Type", 'application/json');
//     res.send(JSON.stringify(data));
// })

const express = require('express');
const router = express.Router();
const app = express();

router.get('/api', (req, res) => {
    res.json({ message: 'Hello World hi Wassup a b c d e f g h ui j k l m n o p q rs tu' });
});

app.use('/', router);
app.listen(3000);
// app.listen(9000, function() {
//     console.log('Express app - listening on port 9000!');
// });