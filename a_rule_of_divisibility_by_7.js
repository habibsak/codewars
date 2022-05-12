function seven(m) {
  let steps = 0;

  while(true) {
    if(m < 100) {
      return [m, steps]
    } else {
      steps++;
      let x = Math.floor(m / 10),
      y = m - (x * 10),
      z = x - (2 * y);
      m = z;
    }
  }
}

console.log(seven(1021));
console.log(seven(1603));
console.log(seven(371));
console.log(seven(483));
console.log(seven(477557101));
console.log(seven(0));