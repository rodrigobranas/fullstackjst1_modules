import zlib from "zlib";
import fs from "fs/promises";

async function zip () {
	const unzipFile = await fs.readFile("./books.csv");
	console.log(unzipFile.length);
	zlib.gzip(unzipFile, async function (error, zipFile) {
		console.log(zipFile.length);
		await fs.writeFile("./books.zip", zipFile);
	})
}

zip();
