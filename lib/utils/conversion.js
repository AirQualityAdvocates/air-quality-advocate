function checkAPoint(a, b, x, y, r) {
  const distPoints = (a - x) * (a - x) + (b - y) * (b - y);
  console.log(r);
  //const z = r.split(' ');
  //const m = Number(z[0]);
  r = r / 69;
  r *= r;
  if (distPoints < r) {
    return true;
  }
  return false;
}

// console.log(checkAPoint(-122.721, 45, -122, 45, .72));
// console.log(checkAPoint(0, 0, 6, 8, 6));

module.export = checkAPoint;