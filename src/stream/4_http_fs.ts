import http from "http";
import fs from "fs";

const server = http.createServer(async (req, res) => {
	const stream = await fs.createReadStream("./books.csv", "utf8");
	stream.pipe(res);
});

server.listen(3000);
