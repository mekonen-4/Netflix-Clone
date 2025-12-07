import React from 'react';
import Row from '../Row/Row';
import requests from "../../../utils/requests";
const RowList = () => {
 
    return (
      <div>
        <Row
          id='netflixOriginals'
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLarge={true}
          rowNumber={1}
        />
        <Row
          id='trendingNow'
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          rowNumber={2}
        />
        <Row
          id='topRatedMovies'
          title="Top Rated Movies"
          fetchUrl={requests.fetchTopRatedMovies}
          rowNumber={3}
        />
        <Row 
        id='actionMovies' 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies} rowNumber={4} />
        <Row 
         id='comedyMovies' 
         title="Comedy Movies" 
         fetchUrl={requests.fetchComedyMovies} rowNumber={5} />
        <Row 
        id='horrorMovies'
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies} rowNumber={6} />
        <Row id='romanceMovies' title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} rowNumber={7} />
        <Row id='documentaries' title="Documentaries" fetchUrl={requests.fetchDocumentaries} rowNumber={8} />
        <Row id='tvShows'  title="TV Shows" fetchUrl={requests.fetchTvShow} rowNumber={9} />
      </div>
    );
}

export default RowList;
