import React from 'react'
import './Header.css'
import Img1 from '../../assents/pochta-1.webp'
import Img2 from '../../assents/pochta-2.webp'
import Img3 from '../../assents/pochta-3.webp'

const Header = () => {
  return (
<div className="Header">
    <div className="blog">
        <div className="hh">
        <h2>Smart web Design Agency</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nihil possimus distinctio eligendi, expedita molestiae?</p>
        <button id="bottone1"><strong>Discover features</strong></button>
        </div>
        <div className="blog-2" >
    <img src={Img1} alt="" width={400} className='one' />
    <img src={Img2} alt="" width={400} className='two' />
    <img src={Img3} alt="" width={400} className='there' />
        </div>
    </div>
</div>
  )
}

export default Header
