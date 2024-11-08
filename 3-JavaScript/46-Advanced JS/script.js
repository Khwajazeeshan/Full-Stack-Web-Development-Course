// IIFE that immediately run the function..............
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500)
        }, 1000);
    })
}
(async function main() {
    let a = await sleep()
    console.log("\n IIFE in JS \t", a);

    //  Destructuring in JS..............
    let [x, y, ...rest] = [1, 6, 7, 8, 9]
    console.log("\n Destructuring in JS \t", x, y, rest);

    let obj = {
        a1: 10,
        b: 25,
        c: 38,
    }
    let { a1, b } = obj
    console.log('\n Pull out the specific data from Obj \t', a, b);

    // spread syntax...........
    function sum(a, b, c) {
        return a + b + c;
    }
    let arr = [4, 7, 9]
    console.log("\nOutput of spread syntax \t",sum(...arr));

})()


