function barista(coffees){
  if(coffees === []) {
    return 0;
  }
  const orderedCoffees = coffees.sort( (a, b) => a - b );
  let sum = orderedCoffees[0];

  for(let i = 1; i < orderedCoffees.length; i++) {
    orderedCoffees[i] = orderedCoffees[i] + sum + 2;
    sum = orderedCoffees[i];
  }
  return orderedCoffees.reduce( (acc, c) => acc + c, 0 );
}  

console.log( barista([3,2,5,10,9]) );
console.log( barista([4,3,2]) );