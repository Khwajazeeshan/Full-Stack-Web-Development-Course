// fs Module................................
const { error } = require("console");
const fs = require("fs")
// console.log(fs);

//call-back hell.................
console.log('starting');
// fs.writeFileSync("file1.txt", "hello world")
fs.writeFile("file2.txt", "hello world", () => {
    console.log('file created successfully');
    fs.readFile("file2.txt", (error, data) => {
        console.log(error, data.toString());
    })
})
fs.appendFile("file1.txt", "\n i am a good boy", (e, d) => {
    console.log(d);
})
console.log('ending');