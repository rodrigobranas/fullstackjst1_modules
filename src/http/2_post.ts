import http from "http";

const server = http.createServer((req, res) => {
	let body = "";
	let i = 0;
	req.on("data", function (chunk) {
		body += chunk;
		i++;
	});
	req.on("end", function () {
		console.log(body);
		console.log(i);
		res.end();
	});
});
server.listen(3000);
