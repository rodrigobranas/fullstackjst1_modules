import fs from "fs";

async function read () {
	const stream = fs.createReadStream("./books.csv", "utf8");
	stream.pipe(process.stdout);
}

read();
