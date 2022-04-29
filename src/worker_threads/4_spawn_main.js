const { spawn } = require("child_process");

const cp1 = spawn("node", [__dirname + "/4_spawn_worker.js"]);
console.log(process.pid);
cp1.stdout.on("data", function (data) {
	console.log(data.toString());
});
const cp2 = spawn("node", [__dirname + "/4_spawn_worker.js"]);
cp2.stdout.on("data", function (data) {
	console.log(data.toString());
});
cp2.on("message", function (message) {
	console.log(message);
});
