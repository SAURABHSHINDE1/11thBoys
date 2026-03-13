// Array Methods


// let arr = [45,56,78,89, 22,29,38,22,90,99,22,31,37]

// console.log(arr)


// 1. push()
// push method is used to push element at the last 
// arr.push(23 , 55, 11)

// console.log(arr)

// 2. pop()
// pop method is used to remove last element of array

// arr.pop()

// console.log(arr)


// 3 .shift()

// to remove element at first position of array


// let deleted = arr.shift()

// console.log(arr)

// console.log(deleted)


// 4. unshift()
// to push/add the element at the first

// arr.unshift(20)

// console.log(arr)


// 5. splice()
// to add and remove element at same time 

// arr.splice(0 , 3 , 44)

// console.log(arr)

// arr.splice(3 , 3)
// console.log(arr)

// 6. slice()
// slice gives a small pice of array

// let sliced = arr.slice(0 , 5)

// console.log(sliced)


// let result = arr.slice(3 , 8)
// console.log(result)


// 7. indexof()

// let index = arr.indexOf(22)

// console.log(index)


// 8. lastIndexOf()
// let index2 = arr.lastIndexOf(22)
// console.log(index2)


// 9. includes

// let isdata = arr.includes()

// console.log(isdata)

// 10 . forEach()

// let arr1 =[10,20,30,40,50,60,70]

// for(let i =0 ; i < arr1.length; i++){

//     console.log(arr1[i])

// }

// arr1.forEach((elem)=>{
//     console.log(elem)
// })



let cars = [
    {
        cname:"Suzuki",
        Cprice:200000
    },

    {
        cname:"Forturner",
        Cprice:5500000
    },

    {
        cname:"Swift",
        Cprice:20000
    },

    {
        cname:"Ertiga",
        Cprice:1200000
    },

    {
        cname:"Scropio",
        Cprice:2000000
    },

    {
        cname:"Thar",
        Cprice:170000
    }
]

// cars.forEach((elem , index)=>{

//     // console.log(elem.cname)

//     // console.log(elem.Cprice)

//     // console.log(index)


//     console.log(`
//         ${index+1}:- Car Name: ${elem.cname} 
//         price:${elem.Cprice}
//         `)

// })


// map()

// let newarr = cars.map((elem , index)=>{

//    return {

//         newCar : elem.cname,
//         newPrice: elem.Cprice + 10000

//    }

// })


// console.log(newarr)

// console.log(cars)


// let filtered = cars.filter((elem)=> elem.Cprice < 200000)

// console.log(filtered)





