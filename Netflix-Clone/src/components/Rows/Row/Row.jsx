import React, { useEffect, useRef, useState } from 'react';
import instance from '../../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import CloseIcon from "@mui/icons-material/Close";
import './row.css';
const Row = ({id,title, fetchUrl,isLarge,rowNumber}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [error, setError] = useState("");
    const [movieName, setMovieName] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || isHovered) return;

      const scroll = setInterval(() => {
        if (rowNumber % 2 === 0) {
          scrollContainer.scrollLeft += 0.5;
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        } else {
          scrollContainer.scrollLeft -= 0.5;
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft =
              scrollContainer.scrollWidth - scrollContainer.clientWidth;
          }
        }
      }, 25);

      return () => clearInterval(scroll); // cleanup outside if/else
    }, [isHovered, rowNumber]);
    
       useEffect(() => {
            (async function (){
                const response = await instance.get(fetchUrl);
                setMovies(response.data.results);
            })();
        }, [fetchUrl]);
        
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
                    setMovieName(name);
                    const urlParams = new URLSearchParams(new URL(url).search);
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
                  });
              }
            }
        
        
    return (
      <div className="row" id={id}>
        <div className="row-header" >
          {title}
        </div>
        <div
          className="movie-poster"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
      </div>
    );
}

export default Row;
