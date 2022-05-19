function barista(coffees){
  const brewOrder = coffees.sort( (a, b) => a - b );
  let sum = brewOrder[0];

  for(let i = 1; i < brewOrder.length; i++) {
    brewOrder[i] = brewOrder[i] + sum + 2;
    sum = brewOrder[i];
  }
  return brewOrder.reduce( (acc, c) => acc + c, 0 );
} 

console.log( barista([3,2,5,10,9]) );
console.log( barista([4,3,2]) );
console.log( barista([0]) );