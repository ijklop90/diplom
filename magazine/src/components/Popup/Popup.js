import React from "react";
import { switchToCart } from "../../services/services-workers";
import './popup.css'


const Popup = (props) => {
const {id, name, url, count, shops, setShops} = props
const decrementData = {id, name, url, count:0}
    return(
            <li className="popup-li collection-item avatar">
                {console.log(id, name, url, count)}
            <div className="row">
            <div className="col s9">
                <img src={url} alt="" className="circle"></img>
                <p className="black-text"><strong className="label">Title: </strong>{name}</p>
            </div>
            <div className="col s1">    
                <button onClick={()=>{
                    switchToCart(shops, decrementData, setShops)
                }}
                    className="waves-effect  waves-light btn" 
                    >
                    <i className="material-icons window-popup">delete_forever</i>    
                </button>
            </div>
            <div className="col s1 offset-s1"></div>
            </div>
            </li>
    )
}

export default Popup;