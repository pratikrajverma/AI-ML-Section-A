 
 let formObj = {
   title:'',
   date:'',
   category:'',
   description:''
 }
 
const card = document.querySelector('#card')

 function eventSubmitHandler(event){
   event.preventDefault()
   
   // console.log(event.target.title.value)

   // console.log(event.target.date.value)

   // console.log(event.target.category.value)

   // console.log(event.target.description.value)

   formObj.title =  event.target.title.value
   formObj.date =  event.target.date.value
   formObj.category = event.target.category.value
   formObj.description =  event.target.description.value

   console.log(formObj)

   const eachCard = document.createElement('div')

   eachCard.classList.add('eachCard')

   eachCard.innerHTML = `
                <p>${formObj.title}</p>
                     <p>${formObj.date}</p>
                     <p>${formObj.category}</p>
                    <p>${formObj.description}</p>
                      <span class="crossBtn">&#10006;</span>
   `   

   card.append(eachCard)
   
   eachCard.querySelector('.crossBtn').addEventListener('click',()=>{
      console.log('first')
      eachCard.remove()
   })

   console.log(eachCard) 
 }