// function parent(callback){
//     console.log('this is parent')
//     callback()
// }

// function child(){
//     console.log('this is child')
// }


// parent(()=>{
//     child()
// })


// callback = ()=>{
//     child()
// }





// .....................................................



function first(callback) {
    setTimeout(() => {
        console.log('this is first function')
        callback()
    }, 4000);
}

function second(callback) {
    setTimeout(() => {
        console.log('this is second function')
        callback()
    }, 2000);
}

function third() {
    setTimeout(() => {
        console.log('this is third function')
    }, 1000);
}

// first(()=>{
//     second(()=>{
//         third()
//     })
// })

// first(()=>{
//     second(function(){
//         third()
//     })
// })

// first(second)

// console.log('this is sync code')
 



 





