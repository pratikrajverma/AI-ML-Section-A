// let person = {
//     name:'Ankit',
//     age:23
// }



// localStorage.setItem('dataName',  JSON.stringify(person))


// let x = JSON.parse(localStorage.getItem('dataName'))



// console.log(x)

// localStorage.removeItem('dataName')



// let person = {
//     name:'Ankit',
//     age:23
// }



// sessionStorage.setItem('dataName',  JSON.stringify(person))


// let x = JSON.parse(sessionStorage.getItem('dataName'))



// console.log(x)

// localStorage.removeItem('dataName')



// let x = 20;

// document.cookie = `data=${x}`





// function sum(a,b,c){
//     console.log(a+b+c)
// }


// sum(1,2,3)

function sum1(a){
    return function sum2(b){
        return function sum3(c){
            console.log(a+b+c)
        }
    }
}


sum1(1)(2)(3)


