const upload = require('../utils/upload');

module.exports = async (job) => {
  const airQuality = await job.data;

  return {
    phone: ,
    coordinates: job.data.coordinates,
    range: ,
    threshold: 35
  }
}