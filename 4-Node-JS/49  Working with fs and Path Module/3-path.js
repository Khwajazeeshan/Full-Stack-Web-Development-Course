import path from "path"

let myPath = "c://Users//Programmer//Desktop//VS%20Codes//Web%20Developement%20Course//Tutorial//1-Back-End//49//1-main-call-back.js"
console.log("extension name", path.extname(myPath)); // show the extension name......
console.log("directory name", path.dirname(myPath));
console.log("base name", path.basename(myPath));
console.log('join path', path.join("c:/", "programs//file1.txt"));