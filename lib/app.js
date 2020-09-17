const express = require('express');
const app = express();
const { airQualityQueue } = require('./pipeline/queue');

app.use(express.json());

app.post('/api/v1/airquality', (req, res, next) => {
  airQualityQueue.add({ ...req.body })
    .then(job => res.send({ ...req.body, jobId: job.id }))
    .catch(next);
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;