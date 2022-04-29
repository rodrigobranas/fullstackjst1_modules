import crypto from "crypto";

const bytes = crypto.randomBytes(1e2);
console.log(bytes.toString());
