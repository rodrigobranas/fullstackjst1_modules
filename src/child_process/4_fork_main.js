// The fork function is a variation of the spawn function for spawning node processes. The biggest difference between spawn and fork is that a communication channel is established to the child process when using fork, so we can use the send function on the forked process along with the global process object itself to exchange messages between the parent and forked processes.

const { fork } = require("child_process");

const cp1 = fork(`${__dirname}/4_fork_worker.js`);
cp1.on("message", function (message) {
	console.log(process.pid, message);
});
