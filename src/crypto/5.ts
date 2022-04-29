import crypto from "crypto";

const password = "123456";
const salt = crypto.randomBytes(6).toString("hex");

crypto.pbkdf2(password, salt, 100, 64, "sha512", function (error, data) {
	console.log(data);
});
