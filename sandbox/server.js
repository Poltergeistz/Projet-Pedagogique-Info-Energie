let express = require('express');
let chai = require('chai');
let mocha = require('mocha');
let app = express();

app.use(express.static('public'));

// Listener
app.listen(process.env.PORT || 8080, function (req, res) {
    console.log('Server Ready')
});