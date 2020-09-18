

const {
  airQualityQueue,
  distanceQueue,
  queryQueue,
  textQueue } = require('./queue');

airQualityQueue.process(5, `${__dirname}/airquality-worker.js`);
console.log()




// function check_a_point(a, b, x, y, r) {
//   var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
//   r *= r;
//   if (dist_points < r) {
//       return true;
//   }
//   return false;
// }

// console.log(check_a_point (-122.721, 45, -122, 45, .72));
// console.log(check_a_point(0, 0, 6, 8, 6));
