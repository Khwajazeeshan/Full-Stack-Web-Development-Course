console.log("\n \t\t*** This is a Array Tutorial ***\n")

let arr = [1, 3, 6, 8, 4, 7, 9, 5]
console.log("Given array", arr);
console.log("Length of array", arr.length);
arr[3] = 450;
console.log("add 450 at index 3", arr)

//  Methods in Array......................
console.log("Array into string", arr.toString())  //change array into string...
console.log("Join the array", arr.join(" and "))
console.log("Pop the last element", arr.pop()) // Pop the last element in the array...
console.log(("Push the element in the last of array", arr.push(100))) // add the element in the last of array...
console.log("Shift/pop the first element", arr.shift()) // pop the first elemnt in the array...
console.log(("Push/add the element in the start of array", arr.unshift("ali"))) // add the element in the start of array...
// add new array and concate with the first array.....
let arr1 = [44, 45]
console.log("Concatenate the array", (arr.concat(arr1)))
// remove the number in the array...
let arr2 = [5, 8, 7, 9, 6, 3, 5, 6]
console.log("2 is starting index and 3 is the range", (arr2.splice(2, 3))) // 2 is starting index and 3 is the range...
console.log("sort the array", arr2.sort())// sort the array.......
console.log("reverse the array", arr2.reverse()) //reverse the array....

// forEach Loop using Array....................................
let x = [8, 7, 9, 5, 6, 4]
console.log("\nForEach Loop Using Array")
x.forEach((value, index, array) => {
    console.log(value, index, array)
})

// create new array from old array by using the Map function.............
let newArr = x.map((e) => {
    return e ** 2
})
console.log("\n Return the square of the element of x(array)", newArr)

// Generate a new array by filter the element from the old array(x)..........
const greater = (e) => {
    if (e > 5) {
        return true
    }
    return false
}
console.log("\nFilter array=", x.filter(greater))

// Reduce function is used to reduced the element of function by */+-.........

let c = [2, 3, 4, 5, 6]
const red = (a, b) => {
    return a * b
    // return a / b
    // return a * b
    // return a - b
}
console.log("\n Reduce the element of Array(C)=", c.reduce(red))