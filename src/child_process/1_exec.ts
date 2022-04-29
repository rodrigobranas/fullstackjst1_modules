import { exec } from "child_process";

exec("ls -lah", function (error, data) {
	console.log(data);
});
