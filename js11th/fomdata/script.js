
let registerform = document.querySelector("#registerform")


registerform.addEventListener("submit" , (e)=>{

    e.preventDefault()

    let data = new FormData(registerform)

    let username = data.get("username")
    console.log(username)


    let email = data.get("email")
    console.log(email)

    let gender = data.get("gender")
    console.log(gender)


    let languages = data.getAll("lang")
    console.log(languages)

    let course  = data.get("courses")
    console.log(course)

    let color = data.get("color")
    console.log(color)
})
