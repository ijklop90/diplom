import React, {useState} from "react";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
import './pages.css'

const ShopPage = (props)=> {
    const shops = props.shops
    const counts = props.counts
    const [visible, isVisible] = useState(true)
    const [open, isOpen] = useState(true)




    return(
        <div>
            {open && 
            <div>
            <ul className="collection shop-page z-depth-3">
                {shops.filter(shop=>shop.count>0).map(shop=>
                    <Popup shops={shops} setShops={props.setShops} counts={counts} key={shop.id}  {...shop}/>)}
            </ul>          
            {Boolean(shops.filter(shop=>shop['count']===1).length)?<Link 
                className="btn waves-effect shop-btn" 
                onClick={()=>{isVisible(!visible)}}
                >
                GO TO SHOP
            </Link>:isOpen(!open)}
            {!visible && <div id="modal-shop">
                <div className="modal-window">
                    <p className="black-text">Точно купить?</p>
                    <ul className="collection shop-page z-depth-3">
                        {shops.filter(shop=>shop['count']===1).map(shop=><Popup shops={shops} setShops={props.setShops} counts={counts} key={shop.id}  {...shop}/>)}
                    </ul> 
                    <form method="POST" action="http://localhost:5000/buy">
                        <button type="submit" className="btn waves-effect shop-btn" >Купить</button>
                    </form>
                </div>
            </div>}
            </div>}
        </div>
    )
}

export default ShopPage;