var express = require('express');
var app = express();

const PORT = 5003;
app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(PORT, function () {
    console.log(`Listening on : http://localhost:${PORT}`);
});