const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 8080;

const app = express();

app.use(history({
    index: '/index.html'
}));
app.use(serveStatic(__dirname + '/dist/spa'));
app.listen(port);