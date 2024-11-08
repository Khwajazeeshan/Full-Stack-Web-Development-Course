console.log("\n \t\t This is a Function Tutorial ..........\n\n")

// functiion to print the name...........................
function nice(name) {
    console.log("hello " + name + " how are you")
    console.log(name + " you are a good person")
}

nice("zeeshan")

// function to return the sum of numbers..................
function sum(a, b, c = 7) {
    return a + b + c
}

result1 = sum(2, 5)
result2 = sum(7, 9)
result3 = sum(8, 2)

console.log("\nsum of two numbers is ", result1)
console.log("sum of two numbers is ", result2)
console.log("sum of two numbers is ", result3)