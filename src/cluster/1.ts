import cluster from "cluster";

if (cluster.isPrimary) {
	console.log(process.pid, "primary");
} else {
	console.log("worker");
}
