const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/airquality', (req, res, next) => {

});




app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
