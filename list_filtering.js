function filter_list(l) {
  return l.filter(item => Number.isInteger(item));  
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));