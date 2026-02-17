function first() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            try {
                console.log('first')
                resolve('first completed')
            } catch (error) {
                reject('error in first')
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
    setTimeout(() => {
        console.log('third')
    }, 1000);
}

// first().then((data) => {
//     console.log(data)
//     return second()
// }).then((data) => {
//     console.log(data)
//     third()
// }).catch((data)=>{
//     console.log(data)
// })



async function runMyCode(){
    await first()

    await second()

    third()
}

runMyCode()