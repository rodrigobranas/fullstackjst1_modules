import zlib from "zlib";
import fs from "fs";

const input = fs.createReadStream("./books3.zip");
const output = fs.createWriteStream("./books6.csv");

input.pipe(zlib.createGunzip()).pipe(output);
