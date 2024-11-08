console.log("\n \t\tThis is a Conditions tutorial...............")
let age = 19;
let grace = 5;

// Arithmetic Operators........................
console.log("\n*** ARITHMETIC OPERATORS ***")
console.log("Addition", age + grace)
console.log("Subtraction", age - grace)
console.log("Multiplication", age * grace)
console.log("Division", age / grace)
console.log("Modulus", age % grace)
console.log("Exponential", age ** grace)
// Assignment Operators.........................
console.log("\n*** ASSIGNMENTS OPERATORS ***")
console.log("age+=grace", age += grace)
console.log("age-=grace", age -= grace)
console.log("age*=grace", age *= grace)
console.log("age/=grace", age /= grace)
console.log("age%=grace", age %= grace)
console.log("age**=grace", age **= grace)
// Comparison Operators.........................
console.log("\n*** COMPARISON OPERATORS ***")
if (age == 18) {
    console.log("You can drive")
}
else if (age != 18) {
    console.log("You can't drive")
}
if (age === 19) {
    console.log("Same Type")
}
else if (age !== 18) {
    console.log("Not same type")
}
if (age > 15) {
    console.log("You are eligiblr for admission")
}
else if (age < 18) {
    console.log("you are not eligible for driving")
}
if (age >= 15) {
    console.log("You are eligiblr for nationality")
}
else if (age <= 18) {
    console.log("you are not eligible for nationality")
}
// Logical Operators....................................
console.log("\n*** LOGICAL OPERATORS ***")
if ((25 > 20) && (15 < 20)) {
    console.log("Right Output")
}
else {
    console.log("Not Equal")
}
if (10 > 20 || 10 < 17) {
    console.log("Right Output")
}
else {
    console.log("Not Equal")
}