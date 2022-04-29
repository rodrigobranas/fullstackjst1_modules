import crypto from "crypto";

crypto.checkPrime(BigInt(31), function (error, result) {
	console.log(result);
});
