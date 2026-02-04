 let displayBox  =  document.querySelector('#displayBox')

 let decBtn = document.querySelector('#decBtn')
 let resetBtn = document.querySelector('#resetBtn')
 let incBtn = document.querySelector('#incBtn')

 let para  = document.querySelector('#para')


let x = 0;

decBtn.addEventListener('click',  function(){
    x = x - 1;
    displayBox.value = x;
    para.textContent = x
    console.log(x)
})

resetBtn.addEventListener('click',  function(){
    x = 0;
    displayBox.value = x
     para.textContent = x
    console.log(x)
})

incBtn.addEventListener('click',  function(){
    x = x + 1;
    displayBox.value = x
     para.textContent = x
    console.log(x)
})