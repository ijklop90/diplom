import React, {useState}  from "react";
import { Link } from "react-router-dom";
import { switchToCart } from "../../services/services-workers";
import './product.css'




const Product = (props) => {
    const {shop, shops, setShop, id, name, url} = props
    const incrementData = {id, name, url, count:1}
    const decrementData = {id, name, url, count:0}
    const [open, isOpen] = useState(true)
    return (
        <div key={`key${id}`} className="col-s3">
            <div className="card post-card">
            <Link key={id} to={`${id-1}`}>
                    <img 
                        className="post-img" 
                        key={id+name} 
                        alt={id} 
                        src={url}>
                    </img>
                    <p 
                        className="title-post" 
                        key={id}>
                        {name}
                    </p>
            </Link>
            {!Boolean(shop['count']) ?
    <div><button 
        onClick={()=>{
            isOpen(!open)
            switchToCart(shops, incrementData, setShop)
        }}
        className="btn shop-btn">SHOP
            
    </button>
    </div>:
    <div className="wrap-shop">
    <span className="col s4 blue-text text-lighten-3 count-shop">
        {shops.id}
    </span>
    <button onClick={()=>{
        isOpen(!open) 
        switchToCart(shops, decrementData, setShop)}}
        className="waves-effect col s4 waves-light btn" 
        >
        <i className="material-icons">delete_forever</i>    
    </button>
    </div>}
        </div>
    </div>
    )
}

// const Button = (props) => {
//     const {shop, open, isOpen, shops, setShop, id, name, url} = props
//     const incrementData = {id, name, url, count:1}
//     const decrementData = {id, name, url, count:0}
    
//         return(
//     <div>
//         {!Boolean(shop['count']) ?
//         <div><button 
//             onClick={()=>{
//                 isOpen(!open)
//                 switchToCart(shops, incrementData, setShop)
//             }}
//             className="btn shop-btn">SHOP
                
//         </button>
//         </div>:
//         <div className="wrap-shop">
//         <span className="col s4 blue-text text-lighten-3 count-shop">
//             {shops.id}
//         </span>
//         <button onClick={()=>{
//             isOpen(!open) 
//             switchToCart(shops, decrementData, setShop)}}
//             className="waves-effect col s4 waves-light btn" 
//             >
//             <i className="material-icons">delete_forever</i>    
//         </button>
//         </div>}
//         {/* {!Boolean(shop['count']) } */}
//     </div>
//         )
//     }
export default Product;