let para = document.querySelector('#para')
let clickBtn = document.querySelector('#clickBtn')

clickBtn.addEventListener('click', ()=>{
    if(para.textContent ===  'This is para content'){
        para.textContent = 'Welcome to React Js'
    }else{
         para.textContent = 'This is para content'
    }
})

