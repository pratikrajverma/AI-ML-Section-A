let child = document.querySelector('#child')
// console.log(child)
// child.textContent = 'this is new content by DOM'

// let clickBtn = document.querySelector('#clickBtn');

// console.log(clickBtn)

// clickBtn.addEventListener('click', function(){
//     console.log('Hello World...')
//     child.textContent = 'This is new text by dom'
// })

const input = document.querySelector('input')

input.addEventListener('keyup', function(){
      child.textContent = input.value
    console.log(input.value)
})


// function clickandler(){
//      child.textContent = 'This is new text by dom'
// }
 
     

// function changeHandler(event){
//     console.log('first')
//     // child.textContent = 'This is new text by dom'

//     // console.log(event.target.value)


    
// }


// let parent = document.querySelector('#parent')

// parent.addEventListener('mouseenter', ()=>{
//     console.log('first')
// })

// parent.addEventListener('mouseout', ()=>{
//     console.log('first')
// })
// parent.addEventListener('mousemove', ()=>{
//     console.log('first')
// })



 