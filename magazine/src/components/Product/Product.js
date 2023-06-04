import React  from "react";
import { Link } from "react-router-dom";
import Shop from '../Shop'
import './product.css'

const Product = (props) => {
    const {id, url, name} = props

    return (
        <div key={`key${id}`} className="col s3 ">
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

            <Shop data={props}/>
        </div>
        </div>
    )
}

export default Product;