function getCount(str) {
  let vowelsCount = 0;
  
  for(let i = 0; i < str.length; i++) {
    switch(str[i]) {
        case "a":
          vowelsCount++;
          break;
        case "e":
          vowelsCount++;
          break;
        case "i":
          vowelsCount++;
          break;
        case "o":
          vowelsCount++;
          break;
        case "u":
          vowelsCount++;
          break;
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));