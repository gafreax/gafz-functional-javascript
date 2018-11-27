function reduce(arr, fn, initial) {
  return arr.length
    ? reduce(arr.slice(1, arr.length), fn, fn(initial, arr[0]))
    : initial;
}

module.exports = reduce;
z
////
function reduced(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value; // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
  })(0, initial); // IIFE. kick off recursion with initial values
}

module.exports = reduced;
