import fs from "fs/promises"

let a = await fs.readFile("file1.txt")
console.log('File read successfully.....');

let b = await fs.appendFile("file2.txt", "\n\n this is amazing problem")
console.log(a.toString());
