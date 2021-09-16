function capitalize(str) {
  const result = str[0].toUppercase();
  if (str[0]) {
    result += str[0].toUppercase();
  } else {
    result += str[1];
  }
}

console.log(capitalize('string'));
