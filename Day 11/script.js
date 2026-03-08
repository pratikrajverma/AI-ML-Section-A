// console.log('first')

// setTimeout(() => {
//     console.log('third')
// }, 0)

// console.log('second')


// example 2...

console.log('first')

setTimeout(() => {
    console.log('third')
}, 0);

console.log('second')

new Promise((resolve,reject)=>{
    resolve()
})
.then(()=>{
    console.log('forth')
})

Promise.resolve().then(()=>{
    console.log('fifth')
})