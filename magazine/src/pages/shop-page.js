import React, {useState} from "react";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
import './pages.css'

const ShopPage = (props)=> {
    const shops = props.shop
    const [visible, isVisible] = useState(true)
    return(
        <div>
            <ul className="collection shop-page z-depth-3">
                {shops.filter(shop=>shop.count>0).map(shop=><Popup key={shop.id}  {...shop}/>)}
            </ul>          
            <Link 
                className="btn waves-effect shop-btn" 
                onClick={()=>{isVisible(!visible)}}
                >
                GO TO SHOP
            </Link>
            {!visible && <div id="modal-shop">
                <div className="modal-window">
                    <p className="black-text">Точно купить?</p>
                    <ul className="collection shop-page z-depth-3">
                        {shops.filter(shop=>shop.count>0).map(shop=><Popup key={shop.id}  {...shop}/>)}
                    </ul> 
                    <form method="POST" action="http://localhost:5000/buy">
                        <button type="submit" className="btn waves-effect shop-btn" >Купить</button>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default ShopPage;