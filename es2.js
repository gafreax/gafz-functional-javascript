function repeat(operation, num) {
  console.log(num);
  num && repeat(operation, num - 1);
}

module.exports = repeat;
