import cluster from "cluster";
import http from "http";

if (cluster.isPrimary) {
	console.log(process.pid, "primary");
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	http.createServer((req, res) => {
		console.log(process.pid, "worker");
		res.write(`${process.pid} worker`);
		res.end();
	}).listen(3000);
}
