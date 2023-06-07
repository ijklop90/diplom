import axios from 'axios'



const fetchData = (url, setFunc) => {
    axios.get(url).then((res)=>{
        const allData = res.data
        setFunc(allData)
    }).catch(err=>console.log(err))
}

const switchToCart = (arr, data, setFunc) => {
    const cart = arr.map((el,idx)=> 
        idx===(data.id-1)
            ? el = {...data}
            : el)
        setFunc(cart)
}

export {fetchData, switchToCart}