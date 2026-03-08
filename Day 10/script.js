function first() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try {
                conssole.log('first')
                resolve()
                
            } catch (error) {
                reject('error in')
            }
        }, 4000);
    })
}


function second() {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                console.log('second')
                resolve('second completed')
            }catch(error)
            {
                reject('error in second')
            }
        }, 3000);
    })
}



function third() {
  return new Promise((resolve,reject)=>{

     setTimeout(() => {
       try{
         console.log('third')
         resolve()
       }catch(error){
        reject()
       }
    }, 1000);

   })
}


console.log(first())
// second()
// third()
 
 

// first()
// .then(()=>{
//     return second()
// })
// .then(()=>{
//     return third()
// })
// .catch(()=>{
//     console.log('error in promise')
// })
 

// first()
// .then(()=>second())
// .then(()=>third())
// .catch(()=>console.log('error in promise'))



// first().then((data) => {
//     console.log(data)
//     return second()
// }).then((data) => {
//     console.log(data)
//     third()
// }).catch((data)=>{
//     console.log(data)
// })



// async function runMyCode(){
//  await first()

//  await second()

//  await third()
// }


// runMyCode()




// function first(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log('first')
//         resolve()
//     }, 3000);
//     })
// }
 
// function second(){
//     setTimeout(() => {
//         console.log('second')
//     }, 1000);
// }


// async function runMyCode(){
//     await first()
//         await  second()
// }

// runMyCode()