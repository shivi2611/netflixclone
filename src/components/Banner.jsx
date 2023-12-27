import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";

// back
//heading
//buttons-2button
//desc
const baseURL= "https://image.tmdb.org/t/p/original";

function Banner(){
    const[movie, setMovie]= useState({});
    useEffect(()=>{
        async function getMovie(){
            const url=requests.netfliOriginals;
            const {data:{results:result}} = await axios.get(url);
            //console.log(result);
            const index = Math.floor(Math.random() * 20);
            setMovie(result[index]);
            console.log(result[index]);
            return result;
        }
        getMovie();
    },[]); // [] useEffect would run once when the component loads.

    const bannerStyle={
        backgroundImage: `url(${baseURL}${movie.backdrop_path})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }

    return (
        <header className="banner" style={bannerStyle} >
            <div className="banner-contents">
            <h1 className="banner-title"> {`${movie.name || movie.title}`} </h1>
            <div className="banner-button">
                <button className="btn"> Play </button>
                <button className="btn"> My List </button>
            </div>
            <h1 className="description">
                {`${movie.overview}`}
            </h1>
            </div>
            <div className="banner-bottom" style={{backgroundImage: "linear-gradient(180deg, transparent,rgba(37,37,37,0.61), #111)"}}> </div>
        </header>
    )
}

export default Banner;