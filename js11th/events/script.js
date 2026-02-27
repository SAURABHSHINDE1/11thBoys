

// let btn = document.querySelector("#btn")

// btn.addEventListener("click" , ()=>{
//     window.location.href='test.html'
// })


// box.addEventListener("click" , ()=>{

//     box.style.backgroundColor = "teal"
//     box.style.borderRadius = "50%"
// })


// box.addEventListener("dblclick" , ()=>{

//     box.style.backgroundColor = "teal"
//     box.style.borderRadius = "50%"
// })


// box.addEventListener("mouseenter" , ()=>{

//     box.style.backgroundColor = "teal"
//     box.style.borderRadius = "50%"
// })

// box.addEventListener("mouseleave" , ()=>{

//     box.style.backgroundColor = "teal"
//     box.style.borderRadius = "50%"
// })


// let box = document.querySelector(".box")

// box.addEventListener("click" , (event)=>{

//     console.log(event)

// })

// function data(){
//     let inputval = document.querySelector("#name").value

// console.log(inputval)
// }


// let inputval = document.querySelector("#input")

// inputval.addEventListener("keypress" ,(e)=>{
//    if(e.key == "Enter"){
//     window.location.href = "https://www.youtube.com/"
//    }
// })


// document.addEventListener("keypress" , (e)=>{
//     if(e.key == "Enter"){
//         window.location.href = "https://www.youtube.com/"
//     }
// })


// document.addEventListener("keyup" , (e)=>{

//     console.log(e.key)

// })


// document.addEventListener("keydown" , (e)=>{
//     console.log(e.key)
// })


let loginform = document.querySelector("#loginfrom")

loginform.addEventListener("submit" , (e)=>{
    e.preventDefault()

    let inputval = document.querySelector("#input").value

    console.log(inputval)
    
})


