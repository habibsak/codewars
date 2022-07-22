function accum(s) {
  return s
          .toLowerCase()
          .split("")
          .map( (item, index) => item.toUpperCase() + item.repeat(index) )
          .join("-");
}