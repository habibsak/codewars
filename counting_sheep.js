function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(item => item === true).length;
}

let arrayOfSheep = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true,  true,  true, true, false, false, true, true];

console.log(countSheeps(arrayOfSheep));