function isIsogram(str) {
  let isIsogram = true;
  str = str.toLowerCase();
  
  for(let i = 0; i < str.length; i++) {
    if( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
      isIsogram = false;
    }
  }

  return isIsogram;
}

console.log( isIsogram("Dermatoglyphics") );
console.log( isIsogram("isogram") );
console.log( isIsogram("moOse") );
console.log( isIsogram("aba") );
console.log( isIsogram("") );