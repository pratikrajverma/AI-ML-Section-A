
// let api = './data.json'


// fetch(api)
// .then((response)=>{
//     console.log(response)

//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log('error in api calling')
// })



// let api = './data.json'
// const parent = document.querySelector('#parent')

// async function getData() {
//     try {
//         let response = await fetch(api)
//         let data = await response.json()
//         console.log(data)

//         data.forEach(element => {
//             console.log(element)
//             let p = document.createElement('p')
//             p.textContent = element.name
//             console.log(p)
//             parent.append(p)
//         });


//     } catch (error) {
//         console.log(error)
//     }

// }

// getData()



let api = 'https://dummyjson.com/products'
const parent = document.querySelector('#parent')


async function getData() {
    let response = await fetch(api)
    let data = await response.json()
    console.log(data.products)


    data.products.forEach(element => {
        // console.log(element.images[0])

        // const img = document.createElement('img')
        
        // img.setAttribute('src', `${element.images[0]}`)
        // img.classList.add('imgStyle')
        // console.log(img)
        // parent.append(img)
        console.log(element)
        let div = document.createElement('div')


        div.innerHTML = `
            <img class='imgStyle' src=${element.images[0]} />
            <p>${element.title}</p>
        `

        console.log(div)

        parent.append(div)


    });
}


getData()



