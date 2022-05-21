function minMax(arr){
  let min = Math.min(...arr),
      max = Math.max(...arr);
  
  return [min, max];
}

console.log( minMax([1, 5]) );
console.log( minMax([1]) );
console.log( minMax([1,2,3,4,5]) );
console.log( minMax([5, 2334454]) );