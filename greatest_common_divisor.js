function mygcd(x,y){
  // Using Euclidean algorithm
  let a = Math.max(x, y),
      b = Math.min(x, y),
      c;

  while(b > 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

console.log(mygcd(48, 18));
console.log(mygcd(42, 56));