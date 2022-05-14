function seriesSum(n)
{
  let sum = 0,
      step = 1; 

 for(let i = 0; i < n; i++) {
   sum += 1/step;
   step += 3;
 }
 return sum.toFixed(2);
}


console.log(seriesSum(1));
console.log(seriesSum(2));
console.log(seriesSum(3));
console.log(seriesSum(4));