function Spy(target, method) {
  var targetFunction = target[method];
  var result = { count: 0 };
  target[method] = function() {
    result.count++; // track function was called
    return targetFunction.apply(this, arguments); // invoke original function
  };
  return result;
}

var spy = Spy(console, "error");

module.exports = Spy;
