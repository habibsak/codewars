function persistence(num) {
  let steps = 0;
    
  while(num >= 10) {
    num = String(num).split("");
    steps++;
    num = num.reduce( (acc, c) => acc * c, 1);
  }
  return steps;
}

console.log(persistence(23));
console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(25));