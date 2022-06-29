class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

const arr1 = new SmallestIntegerFinder;

console.log(arr1.findSmallestInt([34, 15, 88, 2]));
console.log(arr1.findSmallestInt([34, -345, -1, 100]));