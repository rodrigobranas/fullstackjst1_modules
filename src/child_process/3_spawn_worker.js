function fibonacci(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

const calculatedFibonacci = fibonacci(47);
process.stdout.write(`${process.pid} ${calculatedFibonacci}\n`);
