import React, {useState}  from "react";
import './unit.css'

const Unit = (props) => {
    const {id, url, title} = props
    const [count, setCount] = useState(0)
    
    return (
    <div className="fields">
        <img id="post" className="post-img" alt={id} src={url}></img>
        <p>{title}</p>
        <button 
            className="waves-effect waves-light btn" 
            onClick={()=>setCount(count+1)}>
            <i className="material-icons">add</i>    
        </button> 
        <span>{count}</span>
        <button 
            className="waves-effect waves-light btn" 
            onClick={()=>(count>0)?setCount(count-1):true}>
            <i className="material-icons">remove</i>    
        </button> 
    </div>
    )
}

export default Unit;