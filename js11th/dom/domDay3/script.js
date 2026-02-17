
let student = [
    {
        name :"Ram",
        age : 20
    },

     {
        name :"pratik",
        age : 22
    },

     {
        name :"ghansham",
        age : 17
    },

     {
        name :"Aditya",
        age : 18
    },

     {
        name :"Chaitanya",
        age : 17
    },

    {
        name :"saurabh",
        age : 21
    },

     {
        name :"rohit",
        age : 21
    },

     {
        name :"prashant",
        age : 20
    },

     {
        name :"abhishek",
        age : 20
    },

     {
        name :"vishal",
        age : 20
    },
    
]


// console.log()

console.log(student.length)

let body = document.querySelector("body")


for(let i = 0 ; i < student.length; i++){

let card = document.createElement("div")
card.className = "card"
body.appendChild(card)

let h2 = document.createElement("h2")
h2.textContent = `Name : ${student[i].name}`
card.appendChild(h2)

let h3 = document.createElement("h3")
h3.textContent = `Age : ${student[i].age}`
card.appendChild(h3)

}




