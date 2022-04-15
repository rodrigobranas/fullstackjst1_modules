import http from "http";
import fs from "fs";

const fileSize: any = fs.statSync("../../../../../Desktop/5_aula8.mp4").size;

http.createServer((req, res) => {

	const range = req.headers.range;
	let start = 0;
	let end = 0;
	if (range) {
		let [startRange, endRange] = range.replace(/bytes=/, "").split("-");
		start = parseInt(startRange);
		end = endRange ? parseInt(endRange): fileSize - 1;
	}
	res.writeHead(206, { 
		"content-type": "video/mp4", 
		"content-length": (end - start) + 1,
		"content-range": `bytes ${start}-${end}/${fileSize}`
	});
	const readable = fs.createReadStream("../../../../../Desktop/5_aula8.mp4", { start, end });
	readable.pipe(res);
}).listen(3000);
