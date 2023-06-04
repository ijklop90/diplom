import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import {ProductPage, MainPage, CataloguePage, ShopPage } from "../pages";
import './app.css'

import { fetchData } from "../services/services-workers";

import { Route, Routes } from "react-router-dom";


const url = 'https://jsonplaceholder.typicode.com/photos'
const urlLocal = 'http://localhost:5000/'

const App = () => {
const [post, setPost] = useState(null)
const [shop, setShop] = useState("")


useEffect(()=>{
    fetchData(urlLocal, setShop)
}, [setShop])


    useEffect(()=>{
        fetchData(url, setPost)
    }, [])

    return (
        <div className="app-main">
            <Navbar data={post} shop={shop}/>
            <div className="container white-text">
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/cat" element={<CataloguePage shop={shop} data={post}/>}/>
                    <Route path="/cat/:id" element={<ProductPage data={post} />}/>
                    <Route path="/shop" element={<ShopPage shop={shop}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;