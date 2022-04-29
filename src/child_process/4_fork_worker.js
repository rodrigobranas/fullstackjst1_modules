function fibonacci(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

const calculatedFibonacci = fibonacci(42);
console.log(process.pid, calculatedFibonacci);
process.send(calculatedFibonacci);
