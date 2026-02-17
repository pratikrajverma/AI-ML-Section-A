const child = document.querySelector('#child')

child.addEventListener('click', (event)=>{
    console.log('this is child')
    // event.stopPropagation()
} )

const parent = document.querySelector("#parent")

parent.addEventListener('click', ()=>{
    console.log('this is parent')
} ,true)


