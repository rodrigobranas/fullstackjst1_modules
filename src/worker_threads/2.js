const { isMainThread, Worker } = require("worker_threads");

function fibonacci(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
	console.log("main thread");
	new Worker(__filename);
	new Worker(__filename);
	new Worker(__filename);
} else {
	console.log("worker thread");
	const calculatedFibonacci = fibonacci(47);
	console.log(calculatedFibonacci);
}
