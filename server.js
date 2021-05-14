// This isn't used in production from what I can tell (AWS Amplify)
// Going to keep it for now in case I want to use Heroku as a staging environment one day
const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 8080;

const app = express();

app.use(history());
app.use(serveStatic(__dirname + '/dist/spa'));
app.listen(port);