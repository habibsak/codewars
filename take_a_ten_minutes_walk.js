function isValidWalk(walk) {
  const numberOfN = walk.filter(item => item === "n").length,
        numberOfS = walk.filter(item => item === "s").length,
        numberOfE = walk.filter(item => item === "e").length,
        numberOfW = walk.filter(item => item === "w").length;

  return walk.length === 10 && numberOfN === numberOfS && numberOfE === numberOfW; 
}

console.log( isValidWalk(['n', 's', 'w', 'e']) );
console.log( isValidWalk(['n','s','n','s','n','s','n','s','n','s']) );
console.log( isValidWalk(['w']) );
console.log( isValidWalk(['n','n','n','s','n','s','n','s','n','s']) );