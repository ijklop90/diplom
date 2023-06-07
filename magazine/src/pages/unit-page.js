import React  from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";


const UnitPage = (props) => {
const {shops} = props
const id = useParams().id

    if(!shops) return null;

    return(
        <div className="row">
            <h1>Товар: {shops[id].name}</h1>
            {console.log(shops[id])}
            <Product 
                {...shops[id] }
                shops={shops}
                setShops={props.setShops}
                shop={shops[id]}
             />
        </div>
    )
}

export default UnitPage;