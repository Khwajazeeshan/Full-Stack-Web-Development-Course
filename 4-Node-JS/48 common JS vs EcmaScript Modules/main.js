//..........Export data from Mymodule file.................
// using import syntax 

import { a, b, c, d } from "./Mymodule.js"
console.log(a, b, c, d);

// Export deafult obj from module.js file.............
import obj from "./Mymodule.js"
console.log("Default obj is:", obj);


//..........Export data from Mymodule2 file.................
// using require syntax 
// for run reqiure syntax, Add this code  "type":"module", in package.json file.............

// const g = require("./Mymodule2.js")
// console.log(g);