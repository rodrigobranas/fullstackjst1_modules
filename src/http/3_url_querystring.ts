import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
	// @ts-ignore
	const title = url.parse(req.url, true).query.title;
	console.log(title);
	res.end();
});

server.listen(3000);
