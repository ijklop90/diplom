import React  from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";


const ProductPage = (props) => {
const post = props.data
const id = useParams().id

    if(!post) return null;

    return(
        <div className="row">
            {props.value}
            <Post {...post[id]} />
        </div>
    )
}

export default ProductPage;