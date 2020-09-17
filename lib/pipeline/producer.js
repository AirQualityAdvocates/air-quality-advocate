const { airQualityQueue } = require('./queue.js');

airQualityQueue.add({}, { repeat: { cron: '0 * * * *' } });

airQualityQueue.add({});