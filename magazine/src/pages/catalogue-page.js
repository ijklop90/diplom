import React from "react";
import Product from './../components/Product'


const CataloguePage = (props) => {
    // const posts = props.data
    const shops = props.shop

    if(!shops) return null;
    return(
    <div className="row">
        <div className="fields">{
        shops.map(shop=>
            <Product 
                key={shop.id} 
                {...shop}/>
        )
        }
        </div>
    </div>
    )
}

export default CataloguePage;