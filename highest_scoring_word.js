function high(x){
  const arrOfValues =  x.split(" ").map( word => word.split("").reduce( (acc, letter) => acc + letter.charCodeAt(0) - 96, 0 ) );

  return x.split(" ")[arrOfValues.indexOf( Math.max(...arrOfValues) )];
}

console.log(high("hello world"));
console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("aa b"));
console.log(high("b aa"));
console.log(high("jgqgnoufxunirmti njyevdfllkqtmujg bznijnnkswqglurs mptuldijibbhanqr"));