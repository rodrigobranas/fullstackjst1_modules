const { isMainThread, Worker } = require("worker_threads");

function fibonacci(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
	new Worker(__filename);
	new Worker(__filename);
} else {
	console.log(process.pid, "thread");
	const calculatedFibonacci = fibonacci(47);
	process.stdout.write(`${process.pid} ${calculatedFibonacci}\n`);
}

