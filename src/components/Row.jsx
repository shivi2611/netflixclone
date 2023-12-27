import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios"; 
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL= "https://image.tmdb.org/t/p/original";
function Row(props){
    const [movies, setMovies]=useState([]);
    const [trailerId, settrailerId]=useState("");

    useEffect (()=>{
        async function fetchData(){
            const d=await axios.get(props.url);
            setMovies(d.data.results);
            //console.log(movies);
            return d;
        };
        fetchData();

    },[props.url]);

    const options={
        height:"400",
        width:"100%",
        playerVars :{
            autoplay:1
        }

    };
    function handleClick(movie){
        console.log(`clicked ${movie.name || movie.original_title}`);
        if(trailerId) settrailerId("");
        else{
            movieTrailer(movie.name || movie.original_title)
            .then(url =>{
                const urlParams=new URLSearchParams(new URL(url).search);
                settrailerId(urlParams.get("v"));
            })
            .catch(err => { console.log(err);})
        }
    }
    return (
        <div className="row">
            <h2 className="row-title"> {props.title} </h2>
            <div className="posterContainer">
                {movies.map((movie) =>(
                        <img key={movie.id}
                        className={`poster ${props.vertical && "vertical"}`}
                        src={props.vertical ? `${baseURL}${movie.poster_path}` : `${baseURL}${movie.backdrop_path}`} 
                        alt="bla" 
                        onClick={() => handleClick(movie)}                  
                        /> 
                ))}
            </div>
            {trailerId && <YouTube videoId={trailerId} opts={options} />}
        </div>
    )
}
//
export default Row;