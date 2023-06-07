import React from "react";
import Product from './../components/Product'


const CataloguePage = (props) => {

    const {shops} = props
    if(!shops) return null;
    return(
    <div className="row">
       
       <h1>Каталог товаров</h1>
        <div className="fields">
            {
        shops.map((shop)=>
            <div className="col s3" key={shop.id}>
            <Product 
                key={shop.id} 
                shops={shops}
                setShop={props.setShop}
                shop={shop}
                {...shop}/>
                
            </div>
        )}
        </div>
    </div>
    )
}

export default CataloguePage;