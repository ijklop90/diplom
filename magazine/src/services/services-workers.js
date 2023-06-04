import axios from 'axios'



const fetchData = async (url, setFunc) => {
    axios.get(url).then((res)=>{
        const allData = res.data
        setFunc(allData)
    }).catch(err=>console.log(err))
}

const addData = async (url) => {
    axios.post(url, { 
        headers: { 
            'Access-Control-Allow-Origin' : '*', 
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            "Accept":"application/json, text/plain, /",
            "Content-Type": "multipart/form-data"
        }}).catch(err=>console.log(err))
}


export {fetchData, addData}