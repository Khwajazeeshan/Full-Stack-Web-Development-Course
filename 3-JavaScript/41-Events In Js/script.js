/* 
Website Link For events:
https://developer.mozilla.org/en-US/docs/Web/Events
*/

let button = document.getElementById("btn")

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "I was Clicked"
})

button.addEventListener("dblclick", (event) => {
    document.querySelector(".box").innerHTML = "I was Doubled-Clicked"
});

button.addEventListener("contextmenu", (event) => {
    alert("Context-Menu Event Apply!!!!!")
});

// button.addEventListener("mouseenter", (event) => {
//     document.querySelector(".box").innerHTML = "Mouse-Enter Event Apply!!!!!!"
// });
console.log('');

// button.addEventListener("mousedown", (event) => {
//     document.querySelector(".box").innerHTML = "Mouse-Down Event Apply!!!!!!!!"
// });

// *********** Event Bubbling *************** 

document.querySelector(".data").addEventListener("click", (e) => {
    alert("data was Clicked")
})

document.querySelector(".childData").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child-Data was Clicked")
})

document.querySelector(".child").addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("Child was Clicked")
})

//  ********* Set-Interval *************
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let a = setInterval(() => {
    document.querySelector(".data").style.backgroundColor = getRandomColor();
    document.querySelector(".childData").style.backgroundColor = getRandomColor();
    document.querySelector(".child").style.backgroundColor = getRandomColor();
}, 1500);
console.log(a)

//  ********* Set-Timeout ************* it can change color only one-time
let b = setTimeout(() => {
    document.querySelector(".container").style.backgroundColor = getRandomColor();
}, 1000);
console.log(b)