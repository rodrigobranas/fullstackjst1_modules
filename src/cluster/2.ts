import cluster from "cluster";

if (cluster.isPrimary) {
	console.log(process.pid, "primary");
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	console.log(process.pid, "worker");
	process.exit();
}
