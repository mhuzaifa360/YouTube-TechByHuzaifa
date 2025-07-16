import React from "react";

// import React from 'react'

function ProductCard() {
    let productName = "Tecno pova neo 2";
    let productPrice = 20000;
    function thankstobuy(){
        return alert("Thank for Buying Tecno pova neo 2")
    }
  return (
    <div>
      <h1 style={{
        color:"blue"
      }}>Product Card Info</h1>
      <img src="https://rb.gy/1ytznd" alt="" />
      <h2>Product Name: {productName}</h2>
      <h2>Product Price: {productPrice}</h2>

      <button onClick={thankstobuy}>Buy Now</button>

    </div>
  )
}

export default ProductCard
