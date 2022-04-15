import fs from "fs";

fs.readFile("./books.csv", function (error, data) {
	console.log(data.toString("utf8"));
});
