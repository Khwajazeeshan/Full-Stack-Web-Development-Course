console.log("\n ***This is a Document Object Model Tutorial*** \n")
// Run these command one by one in browser console..........

/*
document.body 
<body></body>

document.body.childNodes
NodeList(3) [text, div.container, text]

document.body.firstChild
#text.........."text is using for space"

document.body.lastChild
#text.........."text is using for space"

document.body.childNodes[1]
<div class="container">

document.body.childNodes[1].childNodes
NodeList(9) [text, div.box, text, div.box, text, div.box, text, div.box, text]
.............
let cont = document.body.childNodes[1]
cont.lastElementChild
<div class="box">box4</div>

cont.lastElementChild.style.backgroundColor="red";
"red"
...........

document.body.firstElementChild.childNodes
NodeList(9) [text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
HTMLCollection(4) [div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[2].nextElementSibling
<div class="box">box4</div>

document.body.firstElementChild.children[2].previousElementSibling
<div class="box">box2</div>

*/