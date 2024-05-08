import { useState } from 'react'
import Img from '../../assents/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)

  return (
   <>
   <div className="nav">
       <Link to='/' className='Img-one'> <img src={Img} alt="" /></Link>
    <div className="nav-ul">
        <div className="menu" onClick={() => setmenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li >
                <NavLink>Home</NavLink>
            </li>
            <li>
                <NavLink>Services</NavLink>
            </li>
            <li>
                <NavLink>Portfolio</NavLink>
            </li>
            <li>
                <NavLink>Blog</NavLink>
            </li>
            <button id="bottone1"><strong>Discover features</strong></button>
        </ul>
        

    </div>
   </div>
   </>

  )
}

export default navbar
