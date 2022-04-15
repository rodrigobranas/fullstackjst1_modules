import zlib from "zlib";
import fs from "fs/promises";

async function unzip () {
	const zipFile = await fs.readFile("./books.zip");
	console.log(zipFile.length);
	zlib.unzip(zipFile, async function (error, unzipFile) {
		await fs.writeFile("./books2.csv", unzipFile);
	});
}

unzip();