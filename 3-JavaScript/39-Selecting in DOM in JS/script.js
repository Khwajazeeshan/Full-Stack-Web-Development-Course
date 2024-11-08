console.log("\n ***This is a Selecting by Ids & Classes In Dom tutorial*** \n")

let box = document.getElementsByClassName("box")
console.log(box)

box[3].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor="green"

document.querySelector(".box").style.backgroundColor="green"

document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)
    // e.style.backgroundColor="green";
})

// Run this command in console.............................

// document.getElementsByTagName("div")
// HTMLCollection(5) [div.box, div.box, div#red.box, div.box, div.box, red: div#red.box]

/*
*********match, closest and contain methods......................

e=document.getElementsByTagName("div")
HTMLCollection(5) [div.box, div.box, div#red.box, div.box, div.box, red: div#red.box]

e[2].matches("#red")
true

e[4].closest("#red")
null

document.querySelector("body").contains(e[2])
true

*/