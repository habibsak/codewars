function alphabetPosition(text) {
  if(text.match(/[a-zA-Z]/g)) {
    return text
              .toLowerCase()
              .match(/[a-z]/g)
              .map(item => item.charCodeAt(0) - 96)    
              .join(" ");
  } else {
    return "";
  }
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("[+7-2+*7"));