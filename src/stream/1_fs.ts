import fs from "fs/promises";

async function read () {
	const file = await fs.readFile("./books.csv", "utf8");
	process.stdout.write(file);
}

read();
