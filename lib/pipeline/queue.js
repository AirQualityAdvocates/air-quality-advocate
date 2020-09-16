const Queue = require('bull');

const airQualityQueue = new Queue('quality', {
  redis: process.env.REDIS_URL

});

const distanceQueue = new Queue('distance', {
  redis: process.env.REDIS_URL
    
});

const queryQueue = new Queue('query', {
  redis: process.env.REDIS_URL

});

const textQueue = new Queue('text', {
  redis: process.env.REDIS_URL

});

module.exports = {
  airQualityQueue,
  distanceQueue,
  queryQueue,
  textQueue
};
