import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
	const file = await fs.readFile("./books.csv", "utf8");
	res.end(file);
});

server.listen(3000);
