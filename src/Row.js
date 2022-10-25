import React, {useEffect, useState} from 'react';
import axios from "./axios";
import './Row.css';

function Row({title,fetchURL,isLargeRow= false}) {
    const [movies, setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData().then()
    },[fetchURL])
    return (
        <div className="row">
            <h2> {title}</h2>
            <div className='row__posters'>
                {
                    movies.map((movie) => (
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                             key={movie.id}
                            src={`${baseURL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name}
                        />
                    ))

                }
            </div>
        </div>
    );
}

export default Row;