import cluster from "cluster";
import http from "http";

function fibonacci(n: number): number {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isPrimary) {
	console.log(process.pid, "primary");
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	http.createServer((req, res) => {
		const calculatedFibonacci = fibonacci(42);
		console.log(process.pid, "worker", calculatedFibonacci);
		res.write(`${process.pid} worker ${calculatedFibonacci}`);
		res.end();
	}).listen(3000);
}
