import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "../styles/Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log("Inside banner", request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
    }, []);
    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1>{movie.title || movie.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <p>{movie.overview}</p>
            </div>
        </header>
    );
}

export default Banner;
