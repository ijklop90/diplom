import React, {useState} from 'react'
import axios from 'axios'
import { addData } from '../../services/services-workers'

const currentURL = 'http://localhost:5000/add/1'

const Shop = (props) => {
    const {name, url, count} = props.data
    const [counts, setCount] = useState(count)
    const [open, isOpen] = useState(true)

    return(
            <div >
            {console.log(name, url)}
            
            {/* BUTTTON SHOP */}
            {open &&
            <button 
                onClick={()=>{
                    isOpen(!open)
                    
                }}
                className="btn shop-btn">Shop
            </button>
            }{!open &&
                
        <div className="wrap-shop">
            <button 
                className="waves-effect col s4 waves-light btn" 
                onClick={()=> {
                    // addData(currentURL)
                    axios.post(currentURL).catch(err=>console.log(err))
                }}
                >
            <i className="material-icons">add</i>    
            </button>
            <span className="col s4 blue-text text-lighten-3 count-shop">
                {counts}
            </span>
            <button 
                className="waves-effect col s4 waves-light btn" 
                onClick={()=>counts>1 ? setCount(counts-1):isOpen(!open)}>
                <i className="material-icons">remove</i>    
            </button>
        </div> 
        }
        </div>
    )
}

export default Shop;