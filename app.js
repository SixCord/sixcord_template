const express = require('express');
const app = express();

app.use(express.static('src'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/app/index.html')
});
app.get('/premium', function(req, res) {
    res.redirect('/')
});
app.get('/support', function(req, res) {
    res.sendFile(__dirname + '/src/app/support.html')
});
app.get('/invite', function(req, res) {
    res.sendFile(__dirname + '/src/app/invite.html')
});
app.get('/status', function(req, res) {
    res.redirect('/')
});
app.get('/privacy', function(req, res) {
    res.sendFile(__dirname + '/src/app/privacy.html')
});
