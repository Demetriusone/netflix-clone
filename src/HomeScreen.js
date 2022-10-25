import React from 'react';
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import request from "./Request";




function HomeScreen() {
    return (
        <div className='HomeScreen'>
            <Nav/>
            <Banner/>
            <Row
                title='NETFLIX ORIGINALS'
                fetchURL={request.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='TRENDING NOW'
                fetchURL={request.fetchTrending}
            />
            <Row
                title='TOP RATED'
                fetchURL={request.fetchTopRated}
            />
            <Row
                title='ACTION MOVIES'
                fetchURL={request.fetchActionMovies}
            />
            <Row
                title='COMEDY MOVIES'
                fetchURL={request.fetchActionMovies}
            />
            <Row
                title='HORROR MOVIES'
                fetchURL={request.fetchHorrorMovies}
            />
            <Row
                title='ROMANCE MOVIES'
                fetchURL={request.fetchHorrorMovies}
            />
            <Row
                title='Documentaries'
                fetchURL={request.fetchDocumentaries}
            />
        </div>
    );
}

export default HomeScreen;