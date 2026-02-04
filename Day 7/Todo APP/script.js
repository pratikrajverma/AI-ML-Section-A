let inputBox = document.querySelector('#inputBox')
let addBtn = document.querySelector('#addBtn')
let list = document.querySelector('#list')



addBtn.addEventListener('click', function(){
    let eachList = document.createElement('div')   
    // eachList.setAttribute('class', 'eachList')
    eachList.classList.add('eachList')
    
    eachList.innerHTML= ` <p>${inputBox.value}</p>
                 <div>
                    <button id="deleteBtn" onclick='deleteHandler(this)'>Delete</button>
                    <button id="updateBtn" onclick='updateHandler(this)'>Update</button>
                </div>
    `
    eachList.addEventListener('click',()=>{  
        // console.log('completed....')  
    })
     inputBox.value = ''
    list.append( eachList)
})


function deleteHandler( btn){

    // console.log(btn.parentElement.parentElement)
     btn.parentElement.parentElement.remove()
    
     inputBox.value = ''
 
 
}



function updateHandler(btn){
    let x = prompt('enter you data for update')
     console.log(btn.parentElement.parentElement.querySelector('p').textContent)
     btn.parentElement.parentElement.querySelector('p').textContent = x

      inputBox.value = ''
 
    
}