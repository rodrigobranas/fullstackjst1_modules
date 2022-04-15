import fs from "fs/promises";

async function read () {
	const data = await fs.readFile("./books.csv");
	console.log(data.toString());
}

read();
