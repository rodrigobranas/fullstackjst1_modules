import cluster from "cluster";

function fibonacci(n: number): number {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isPrimary) {
	console.log(process.pid, "primary");
	const cp1 = cluster.fork();
	cp1.on("message", function (message) {
		console.log(message);
	});
	const cp2 = cluster.fork();
	cp2.on("message", function (message) {
		console.log(message);
	});
	const cp3 = cluster.fork();
	cp3.on("message", function (message) {
		console.log(message);
	});
} else {
	const calculatedFibonacci = fibonacci(43);
	// @ts-ignore
	process.send(`${process.pid} ${calculatedFibonacci}`);
}
