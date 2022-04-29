import crypto from "crypto";

crypto.generatePrime(10, {bigint: true }, function (error, result) {
	console.log(result);
});
