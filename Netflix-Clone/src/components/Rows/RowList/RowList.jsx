import React from 'react';
import Row from '../Row/Row';
import requests from "../../../utils/requests";
const RowList = () => {
 
    return (
      <div>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLarge={true}
          rowNumber={1}
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          rowNumber={2}
        />
        <Row
          title="Top Rated Movies"
          fetchUrl={requests.fetchTopRatedMovies}
          rowNumber={3}
        />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} rowNumber={4} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} rowNumber={5} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} rowNumber={6} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} rowNumber={7} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} rowNumber={8} />
        <Row title="TV Shows" fetchUrl={requests.fetchTvShow} rowNumber={9} />
      </div>
    );
}

export default RowList;
