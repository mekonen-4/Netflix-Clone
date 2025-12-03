import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'
import requests from '../../utils/requests'
import './banner.css'
const Banner = () => {
    // console.log(requests);
    const [movie,setMovie]=useState(null)
    useEffect(()=>{
        const fetchBanner = async()=>{ 
            const response = await axios.get(requests.fetchNetflixOriginals);
            const results = response.data.results;
             setMovie(results[Math.floor(Math.random() * results.length)]);
            }
            fetchBanner();
        },[])
        console.log(movie);
    if (movie){
        return (
          < >
            <div
              className="banner"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundSize: "cover",
              }}
            >
              <h1>{movie?.name || movie?.original_name}</h1>
              <div className="banner-buttons">
                <button className="play-button">Play</button>
                <button className="my-list-button">My List</button>
              </div>
              <div className="movie-description">
                {movie?.overview.length > 140
                  ? movie?.overview.slice(0, 140) + "..."
                  : movie?.overview}
              </div>
                <div className="banner_fadeBottom"></div>
            </div>
          </>
        );
    }
    else{
        return(
            <div>didnot</div>
        )
    }
}

export default Banner;
