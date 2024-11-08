console.log("\n *** This is a Inserting and Removing Elements in JS Tutorial ***\n")

/*
*************** Run these command in Console ******************************

document.querySelector(".box").innerHTML
'I am a box 1'

document.querySelector(".container").outerHTML
    '<div class="container">\n 
    <div class="box">I am a box 1</div>\n 
    <div class="box">I am a box 2</div>\n    </div>'

document.querySelector(".container").innerText
'I am a box 1\nI am a box 2'

document.querySelector(".container").textContent
'\n        I am a box 1\n        I am a box 2\n

document.querySelector(".box").innerHTML="hello world"
'hello world'

********** Attribute Methods **************

document.querySelector(".box").hasAttribute("style")
false

document.querySelector(".box").getAttribute("style")
'display:flex'

document.querySelector(".box").setAttribute("style":"display:inline")
undefined

document.querySelector(".box").removeAttribute("style")
undefined
document.querySelector(".box").getAttribute("style")
null

document.querySelector(".container").classList
DOMTokenList ['container', value: 'container']

document.querySelector(".container").className
'container

document.querySelector(".container").classList.add("harry")
undefined

document.querySelector(".container").classList.remove("harry")
undefined


document.querySelector(".container").classList.toggle("harry")
true
document.querySelector(".container").classList.toggle("harry")
false
document.querySelector(".container").classList.toggle("harry")
true

*/

// ************* Inserting Method *****************
let div = document.createElement("div");
div.innerHTML = "i am a new box"
div.setAttribute("class", "create");
document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").replaceWith(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin", "hello world")
// cont.insertAdjacentHTML("afterend", "hello world")
// cont.insertAdjacentHTML("beforebegin", "hello world")
// cont.insertAdjacentHTML("beforeend", "hello world")