import crypto from "crypto";

const hash = crypto.createHash("sha256");

hash.on("readable", function () {
	const data = hash.read();
	if (data) {
		console.log(data.toString("hex"));
	}
});

hash.write("123456");
hash.end();
