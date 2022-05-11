// complete the function
function solution(string) {
  let finalStr = "";

  for(let i = 0; i < string.length; i++) {
    if(string[i] !== string[i].toUpperCase()) {
      finalStr += string[i];      
    } else {
      finalStr += " " + string[i]; 
    }
  }
  return finalStr;    
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));