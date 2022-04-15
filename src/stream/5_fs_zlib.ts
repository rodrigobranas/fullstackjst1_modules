import zlib from "zlib";
import fs from "fs";

const input = fs.createReadStream("./books.csv", "utf8");
const output = fs.createWriteStream("./books3.zip");

input.pipe(zlib.createGzip()).pipe(output);
