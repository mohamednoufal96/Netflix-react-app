import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../styles/Row.css";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get();
            console.log(request);
            return request;
        }

        fetchData();
    }, []);

    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    );
}

export default Row;
