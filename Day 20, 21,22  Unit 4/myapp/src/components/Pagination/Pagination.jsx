import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Pagination = () => {
    // const data = ['nandan', 'Sejal', 'Rohit', 'Jigar',
    //             'Ankit', 'Priti', 'Rahul', 'Abhishek',
    //             'Rajesh', 'Minus','Raj', 'Mehul', 'Arpit'
    //         ]

    const[data, setData] = useState([])
        useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data.products)
                setData(data.products)
            })
        },[])
            const [currPage, setCurrPage] = useState(1)

            const itemPerPage = 3


            // console.log(data.slice(3,6))
            const endIndex = currPage * itemPerPage
            const startIndex = endIndex - itemPerPage
            const displayData =  data.slice(startIndex,endIndex) 
            function preHandler(){
                if(startIndex > 0)
                setCurrPage(currPage - 1)
            }

            function nextHandler(){
                if(endIndex < data.length)
                setCurrPage(currPage + 1)

            }

  return (
    <div>
        <h1>Pagination</h1>
        <b>Current Page : {currPage}</b>

        {
            displayData.map((item)=>{
                return <div>
                    <img width={100} src={item.images[0]} />
                </div>
            })
        }


        <button onClick={preHandler}>PreItem</button>
        <button onClick={nextHandler}>NextItem</button>


    </div>
  )
}

export default Pagination