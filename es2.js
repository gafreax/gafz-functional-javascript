function repeat(operation, num) {
	console.log(num);
	num && repeat(operation,--num);
}

module.exports = repeat;
