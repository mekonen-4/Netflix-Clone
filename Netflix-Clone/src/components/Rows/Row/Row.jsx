import React, { useEffect, useState } from 'react';
import instance from '../../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import CloseIcon from "@mui/icons-material/Close";
import './row.css';
const Row = ({title, fetchUrl,isLarge}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [error, setError] = useState("");
    const [movieName, setMovieName] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    
       useEffect(() => {
            (async function (){
                const response = await instance.get(fetchUrl);
                setMovies(response.data.results);
            })();
        }, [fetchUrl]);
        // console.log(movies);
        
        const handleTrailer = (movie)=>{
          const name =
            movie?.name || movie?.original_name || movie?.title || "";

            setIsPlaying(true);
            if(trailerUrl && movieName === name ){
              
                setTrailerUrl("");
                setIsPlaying(false);
              } else {
                movieTrailer(name)
                  .then((url) => {
                    console.log(url);
                    setMovieName(name);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams.get("v"));
                    setError("");

                    setTrailerUrl(urlParams.get("v"));
                  })
                  .catch(() => {
                    setTrailerUrl("");
                    setIsPlaying(false);

                    setError(
                      "Sorry, we couldn’t find a trailer for this movie."
                    );

                    setTimeout(() => setError(""), 4000);
                    console.log(error);
                  });
              }
            }
        
        
    return (
      <>
        <div className="row-header">{title}</div>
        <div className="movie-poster">
          {movies.map((movie, index) => {
            // console.log(movie);

            return (
              <img
                key={index}
                onClick={() => handleTrailer(movie)}
                className={isLarge ? "movie-poster-large" : "poster"}
                src={`https://image.tmdb.org/t/p/original${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            );
          })}
        </div>
        <div className="view-trailor">
          <div
            className={
              trailerUrl &&
              (isPlaying ? "close-trailor-button" : "close-button")
            }
            onClick={() => setTrailerUrl("")}
          >
            {trailerUrl && isPlaying && <CloseIcon className="CloseIcon" />}
          </div>
          {trailerUrl && (
            <YouTube
              videoId={trailerUrl}
              opts={{
                height: "390",
                width: "100%",
                playerVars: { autoplay: 1 },
              }}
            />
          )}
        </div>
        {error && (
          <p
            style={{ color: "red", fontSize: "25px", textAlign: "center" }}
            className="text-red-500 bg-black p-2 text-center"
          >
            {error}
          </p>
        )}
      </>
    );
}

export default Row;
