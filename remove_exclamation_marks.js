function removeExclamationMarks(s) {
  return s.split("").filter(value => value !== "!").join("");
}

console.log(removeExclamationMarks("Hello World!"));