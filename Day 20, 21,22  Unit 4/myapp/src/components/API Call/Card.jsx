import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        <p>Title :{item.title} </p>
        <p>Price : ₹{item.price} </p>
        <img width={100} src={item.images[0]}/>
        <button>Buy</button>
        <hr/>
    </div>
  )
}

export default Card