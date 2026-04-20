import React, { useEffect, useState } from 'react'
import Card from './Card'

const ProductList = () => {

    let api = 'https://dummyjson.com/products'

    const [productData, setProductData] = useState([])

    async function getData(){
        try{

            let response = await fetch(api)
            let data = await response.json()

            setProductData(data.products)
            // console.log(data.products)

        }catch(err){
            console.log(err)
        }
    }

    
   useEffect(()=>{
     getData()

     
   },[])


    console.log(productData)

  return (
    <div>
        <h1>API Calling...</h1>

        {
            productData.map((item)=>{
                return <Card item={item}/>
            })
        }
        


    </div>
  )
}

export default ProductList