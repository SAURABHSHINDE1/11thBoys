

// console.log(document)


// let h1 = document.getElementById("Heading")

// console.log(h1)

// // h1.textContent = "hello DreamsGuider"

// // h1.innerText = "hello "

// h1.innerHTML = " <u> hello </u>  <p> i am saurabh </p>"


// let h3 = document.querySelector("#heading img")
// console.log(h3)

// document = HTML

// let card = document.querySelector(".card")


// let h3 = document.createElement("h3")
// h3.textContent = "hello "
// card.appendChild(h3)

// let card = document.querySelector(".card")

// card.remove()


// let body = document.querySelector("body")

// let box = document.createElement("div")
// box.id ="box"
// body.appendChild(box)

 let body = document.querySelector("body")

 for(let i = 0 ; i < 100 ; i++){

    let box = document.createElement("div")
 box.className = "box"
body.appendChild(box)


let h1 = document.createElement("h1")
h1.textContent= "Name : ABC"
box.appendChild(h1)

let h2 = document.createElement("h2")
h2.innerText = "Courese : Frontend"
box.appendChild(h2)

 }