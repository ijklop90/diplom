import React, {useState} from "react";
import { Link } from "react-router-dom";
import Popup from '../Popup'
import './navbar.css'

const Navbar = (props)=>  {
  const [toggle, setToggle] = useState(false)
  const posts = props.data
  const shops = props.shop

  if(!posts) return null;
return(
  <nav className="nav-main">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      {toggle && (
        <li key="0"><ul className="collection popup z-depth-3">
        {shops.filter(shop=>shop.count>0).map(shop=><Popup key={shop.id}  {...shop}/>)}
          <Link 
            onClick={()=> setToggle(!toggle)}
            className="btn waves-effect shop-link" 
            to="/shop">
              GO TO SHOP
          </Link>
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