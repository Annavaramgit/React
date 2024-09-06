import React from 'react'
import './ProductsCard.css'

function ProductsCard(props) {
  console.log(props)
  const {title,price,image} = props
  return (
    <>
    <div className="product-card"> 
      <img src={image}/>
      <p>{title}</p>
      <p>${price}</p>
    </div>
    
    
    </>
  )
}

export default ProductsCard
