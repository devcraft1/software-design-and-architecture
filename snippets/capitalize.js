function capitalize(str) {
  let result = str[0].toUppercase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUppercase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize('string'));
