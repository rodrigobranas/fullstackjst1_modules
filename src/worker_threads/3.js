const { isMainThread, Worker, parentPort } = require("worker_threads");

function fibonacci(n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
	console.log("main thread");
	const workerA = new Worker(__filename);
	workerA.on("message", function (message) {
		console.log(message);
	});
} else {
	console.log("worker thread");
	const calculatedFibonacci = fibonacci(42);
	parentPort.postMessage(calculatedFibonacci);
}
