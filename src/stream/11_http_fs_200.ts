import http from "http";
import fs from "fs";

http.createServer((req, res) => {
	const readable = fs.createReadStream("../../../../../Desktop/5_aula8.mp4");
	res.writeHead(200, { "content-type": "video/mp4" });
	readable.pipe(res);
}).listen(3000);
