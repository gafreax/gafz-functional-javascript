function reduce(arr, fn, initial) {
  return arr.length
    ? reduce(arr.slice(1, arr.length), fn, fn(initial, arr[0]))
    : initial;
}

module.exports = reduce;
