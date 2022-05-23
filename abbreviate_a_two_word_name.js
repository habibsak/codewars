function abbrevName(name){
  return (name[0] + "." + name[name.indexOf(" ") + 1]).toUpperCase();
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick feeney"));