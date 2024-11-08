console.log("\n \t\tThis is a Loops tutorial...............")

// For Loop In Js...................................
console.log("\n ***For Loop***")
let a = 1;
for (let i = 0; i < 5; i++) {
    console.log(a + i);
}

// For-In Loop In JS................................
console.log("\n ***For-In Loop***")
let obj = {
    name: "zeeshan",
    role: "manager",
    salary: "1Million"
}

for (const key in obj) {
    const element = obj[key]
    console.log(key, element)
}

// For-of Loop In JS................................
console.log("\n ***For-of Loop***")
for (const x of "zeeshan") {
    console.log(x)
}

// While Loop In JS.................................
console.log("\n ***While Loop***")
let j = 0;
while (j < 5) {
    console.log(j)
    j++;
}

// Do-While Loop In JS..............................
console.log("\n ***Do-while Loop***")
let z = 0;
do {
    console.log(z)
    z++;
} while (z < 5);