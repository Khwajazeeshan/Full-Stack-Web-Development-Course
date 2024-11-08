console.log("\n \t\tThis is a Variables, DataTypes & Object tutorial...............")
//  var is a global scope while let & const is block scope.............
var a = 5;
var b = 10;
var c = "zeeshan"
// var 55a    --- variable not start with any number............
console.log(a + b)
console.log(typeof a, typeof b, typeof c)
{
    var a = 34;
    console.log(a)
}


// const(constant) is not change after declare, if we change the const it will show error.
const a1 = 10;
// a1 = a1 + 5;    Not Allowed
console.log(a1)

// using let scope.............
let d = 6;
{
    let d = 12;
    console.log(d)
}
console.log(d)

//There are 7 Primitive DataType In JS.......
// 1)String  2)Number  3)Boolean  4)Undefined  5)Null  6)Symbol  7)BigInt

let p = "Zeeshan"
let q = 50;
let r = 4.5;
let s = undefined;
let t = null;
const u = true;
console.log(p, q, r, s, t, u)
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u)

// Object In JS is the pair of "Key" and "Value"..........."Key=name...Value=zeeshan"
let x = {
    name: "zeeshan",
    "job code": 500,
}
console.log(x)
x.salary = "1Million";
console.log(x)