/* eslint-disable no-unused-vars */
import{ useState } from 'react';
import './App.css'
import MovieList from './Component.jsx/MovieList';
import Filter from './Component.jsx/Filter';


function App() {
  const [movies, setMovies] = useState([]); // Array to hold movies
  const [filterTitle, setFilterTitle] = useState(''); // Filter state for title
  const [filterRating, setFilterRating] = useState(0); // Filter state for rating

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Add new movie to state
  };

  const handleFilter = (title, rating) => {
    setFilterTitle(title);
    setFilterRating(rating);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating
  ); // Filter movies based on state


  return (
    <>
      <div>
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      </div>

    </>
  )
}

export default App

