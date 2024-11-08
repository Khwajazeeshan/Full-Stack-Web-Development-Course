console.log('\n\t\t Try-catch & Error-Handling \n\n');

let a = prompt("Enter first Number")
let b = prompt("Enter Second Number")
let sum = parseInt(a) + parseInt(b)  // parseInt is used to convert string into int form......

if (isNaN(a) || isNaN(b)) {
    //when we enter other data-type except Int as a input, Then this error will be show.......
    throw SyntaxError("Sorry this is not allowed")
}
// let z=3;

//Try-Catch is used to pass the error.............
function main() {
    try {
        console.log('The sum of given number is: ', sum * z);
        return true
    } catch {
        console.log('Error a gya bai......');
        return false
    }
    finally {  //Finally is used to show the output if we used return in previous line...........
        console.log('Finally Code Run Ho Gya H');
    }
}
let c = main()