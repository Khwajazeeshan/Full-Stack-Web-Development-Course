console.log("\n****** Asynchronous-Callback-Promises *******\n\n")
// Asynchronous In JS.........................
console.log("\n\t\t****** Asynchronous *******\n\n")

console.log("hey,How are you")
console.log("I am in Javascript")

setTimeout(() => {
    console.log("I am in set-timeout")
}, 5000);

setTimeout(() => {
    console.log("I am in set-timeout-2")
}, 2000);

console.log("zeeshan is a hacker")

// Callback In Js..............................
console.log("\n\t\t****** Callback *******\n\n")

const fn = (arg1) => {
    console.log(arg1)
}

const callback = (arg, fn) => {
    console.log(arg)
}

const loadscript = (src, callback) => {
    let x = document.createElement("file");
    // x.src = src;
    x.onload = callback("hello,I am in call-back function", fn("hello,I am in fn function"));
    // document.head.append(x)
}
loadscript("src", callback)

//  Promise in JS................................
console.log("\n\t\t****** Promises *******\n\n")

let prom = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.3) {
        reject("I am reject")
    }
    else {
        setTimeout(() => {
            resolve("I am in resolve")
        }, 3000);
    }
})

prom.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.4) {
        console.log('zee1');
        reject("I am reject1")
    }
    else {
        setTimeout(() => {
            console.log('zee1');
            resolve("I am in resolve1")
        }, 1000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.4) {
        console.log('zee2');
        reject("I am reject2")
    }
    else {
        setTimeout(() => {
            console.log('zee2');
            resolve("I am in resolve2")
        }, 2000);
    }
})

let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
// let p3 = Promise.race([prom1, prom2])
// let p3 = Promise.any([prom1, prom2])
// let p3 = Promise.resolve([prom1, prom2])
// let p3 = Promise.reject([prom1, prom2])
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})