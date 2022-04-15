import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader("content-type", "application/json;charset=utf8");
	res.write(JSON.stringify({ name: "FullStackJS" }));
	res.end();
});

server.listen(3000);
