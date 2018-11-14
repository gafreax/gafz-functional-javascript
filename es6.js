function countWords(inputWords) {
  var c = inputWords.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return c;
}

module.exports = countWords;
