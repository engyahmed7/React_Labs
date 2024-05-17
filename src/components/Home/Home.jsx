import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import User from '../User/User'
import Product from '../Product/Product'

export default function Home() {
    const [showSlider, setShowSlider] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    let handleSliderButtonClick = () => {
        setShowSlider(true); 
        setShowUsers(false); 
        setShowProducts(false); 
      }

    let handleUsersButtonClick = () => {
      setShowUsers(true); 
      setShowSlider(false);
      setShowProducts(false); 
      }

    let handleProductsButtonClick = () => {
          setShowProducts(true); 
          setShowUsers(false); 
          setShowSlider(false);
      }

    return (

    <div className=" d-block m-auto">
      <button className="btn btn-primary me-3" onClick={handleSliderButtonClick}>Slider</button>
      <button className="btn btn-secondary me-3" onClick={handleUsersButtonClick} >Users Data</button>
      <button className="btn btn-info" onClick={handleProductsButtonClick}>Products Data</button>

        {showSlider && <Slider />}
        {showUsers && <User />}
        {showProducts && <Product />}
    </div>

  )
}
