
// let heading = document.getElementById("text")
// // heading.textContent = "hello DreamsGuider"
// heading.innerText = "hello DreamsGuider"

// heading.style.color = "orange"
// heading.style.fontSize = "100px"

// console.log(heading)

// let image = document.getElementById("img")
// image.src ="https://images.unsplash.com/photo-1766245456897-5c86726d084d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// image.style.height ="400px"
// image.style.width="400px"

// let sname = document.getElementById("name")
// sname.textContent = "Name :- Ghansham"

// let std = document.getElementById("std")
// std.textContent = "Std :-11th"

// let rollno = document.getElementById("rollno")
// rollno.textContent = "Roll No:- 167"


// let container = document.querySelector(".container h1")

// console.log(container)

// let test = document.querySelector("#test")

// console.log(test)

// let heading  = document.querySelector("p")

// console.log(heading)


// create element

// let box = document.querySelector(".box")

// let heading  = document.createElement("h1")
// heading.className="test"
// heading.id="abc"
// console.log(heading)
// heading.textContent ="Hello DreamsGuider"

// box.appendChild(heading)


let body = document.querySelector("body")

let card = document.createElement("div")
card.className="card"
body.appendChild(card)


let upper = document.createElement("div")
upper.className="upper"
card.appendChild(upper)

let img = document.createElement("img")
img.src ="img.jfif"
upper.appendChild(img)

let lower = document.createElement("div")
lower.className = "lower"
card.appendChild(lower)

let heading = document.createElement("h2")
heading.textContent ="Name :- DreamsGuider"
lower.appendChild(heading)

let place = document.createElement("h2")
place.textContent = "Location :- Loni"
lower.appendChild(place)