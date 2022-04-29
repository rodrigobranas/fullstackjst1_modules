import { execFile } from "child_process";

execFile("node", ["-v"], function (error, data) {
	console.log(data);
});
