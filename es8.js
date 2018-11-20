var slice = Array.prototype.slice;
function duckCount() {
  console.log("GAF LOG ---------------- arguments: ", arguments);
  return slice
    .call(arguments)
    .filter(item => Object.prototype.hasOwnProperty.call(item, "quack")).length;
}

module.exports = duckCount;
