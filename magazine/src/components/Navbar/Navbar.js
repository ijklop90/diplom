import React, {useState} from "react";
import { Link } from "react-router-dom";
import Popup from '../Popup'
import './navbar.css'

const Navbar = (props)=>  {
  const [toggle, setToggle] = useState(false)
  const {shops} = props

  if(!shops) return null;
return(
  <nav className="nav-main">
    
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      {toggle && (
        <li>
          <ul className="collection popup z-depth-3">
        {shops.filter(shop=>shop['count']===1).map(shop=>
            <Popup 
              shops={shops} 
              setShops={props.setShops} 
              key={shop.id} 
              counts={props.counts}  
              {...shop}/>)}
          {
          Boolean(shops.filter(shop=>shop['count']===1).length) 
          ? <Link onClick={()=> setToggle(!toggle)}
            className="btn waves-effect shop-link" 
            to="/shop">
              GO TO SHOP
          </Link>
         :setToggle(!toggle) 
        }
          </ul>
        </li>)}
        <li>
          <Link onClick={()=> setToggle(!toggle)} to="#"> 
            <i className="material-icons">shopping_cart</i>{toggle}
          </Link>
        </li>
        <li key="1"><Link to="/">Main</Link></li>
        <li key="2"><Link to="/cat">Catalogue</Link></li>
      </ul>
    </div>
  </nav>
)
}

export default Navbar;