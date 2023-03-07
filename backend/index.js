const express = require('express');
const path = require('path');
const CONFIG = require('@c4ds-sketch-3/config');

const app = express();

// TODO: Write API

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.listen(CONFIG.PORT, () => console.log(`Listening on ${CONFIG.PORT}`));