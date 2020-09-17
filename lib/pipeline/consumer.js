

const {
  airQualityQueue,
  distanceQueue,
  queryQueue,
  textQueue } = require('./queue');

airQualityQueue.process(5, `${__dirname}/airquality-worker.js`);