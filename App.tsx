import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import CommingSoonMovies from './components/comming-soon/CommingSoonMovies';
import TopMovies from './components/TopMovies';
import Hindi from './components/Hindi';
import Movies from './components/Movies';
import NavBar from './components/Navbar';
import FavMoviesList from './components/Favourites/FavMoviesList';
import Footer from './components/Common/Footer';
import ComingSoonDetails from './components/Details/ComingSoonDetails';
import IndianDetails from './components/Details/IndianDetails';
import MoviesInThreaterDetails from './components/Details/MoviesInThreaterDetails';
import TopRatedMoviesDetails from './components/Details/TopRatedMoviesDetails';
import FavouriteDetails from './components/Details/FavouriteDetails';
import About from './components/Common/About';

function App() {
  return (
    <div>
        <NavBar />
        <Container>
        <Routes>
          <Route path='/Home' element={<Movies />} />
          <Route path='/TopMovies' element={<TopMovies />} />
          <Route path='/Hindi' element={<Hindi />} />
          <Route path='/Favourites' element={<FavMoviesList />} />
          <Route path='/movies-coming/:id' element={<ComingSoonDetails />} />
          <Route path='/top-rated-india/:id' element={<IndianDetails />} />
          <Route path='movies-in-theaters/:id' element={<MoviesInThreaterDetails />} />
          <Route path='/top-rated-movies/:id' element={<TopRatedMoviesDetails />} />
          <Route path='/favourite/:id' element={<FavouriteDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<CommingSoonMovies />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
