const { isMainThread } = require("worker_threads");

if (isMainThread) {
	console.log("main thread");
} else {
	console.log("worker thread");
}
