import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../styles/Row.css";
const baseUrl = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.table(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* posters */}
                {movies.map((movie, index) => {
                    return (
                        <img
                            key={movie.id}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            alt={movie.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Row;
