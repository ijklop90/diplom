import React from "react";
import './popup.css'


const Popup = (props) => {
const {id, name, url, count} = props
// const posts = props.post

    return(
            <li className="popup-li collection-item avatar">
                {console.log(id, name, url, count)}
            <div>
                <img src={url} alt="" className="circle"></img>
                <p className="black-text"><strong className="label">Title: </strong>{name}</p>
                <p className="black-text"><strong className="label">count: </strong>{count}</p>
            </div>
            </li>
    )
}

export default Popup;