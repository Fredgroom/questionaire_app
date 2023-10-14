var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello, TypeScript with Express!');
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
