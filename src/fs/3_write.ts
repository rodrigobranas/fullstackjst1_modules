import fs from "fs/promises";

const text: string[] = [];
text.push("Clean Code;Robert C. Martin;59");
text.push("Implementing Domain-Driven Design;Vaughn Vernon;89");
text.push("Refactoring;Martin Fowler;79");
text.push("Patterns of Enterprise Application Architecture;Martin Fowler;99");

async function write () {
	await fs.writeFile("./temp.csv", text.join("\n"), "utf8");
}

write();
