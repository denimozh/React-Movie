import React, { useState } from 'react'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Details from './pages/Details'
import movies from './components/Movies/storage/movies'
import Success from './pages/Success'
import Delete from './pages/Delete'
import Edit from './pages/Edit'

const App = () => {
  const [clickedMovieId, setClickedMovieId] = useState(0);

  const handleMovieClick = (id) => {
    console.log('Clicked Movie ID:', id);
    setClickedMovieId(id);
  };

  console.log('Clicked Movie ID:', clickedMovieId);

  const selectedMovie = movies.find(movie => movie.id === clickedMovieId);
  console.log('Selected Movie:', selectedMovie);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main handleMovieId={handleMovieClick}/>}/>
        <Route path="/addMovie" element={<Add/>}/>
        <Route path="/movie/:id" element={<Details id={movies[selectedMovie.id]} movieUrl={movies[selectedMovie.id]?.movieUrl} title={movies[selectedMovie.id].title} rating={movies[selectedMovie.id].rating}
        date={movies[selectedMovie.id].date} genre={movies[selectedMovie.id].genre} overview={movies[selectedMovie.id].overview} runtime={movies[selectedMovie.id].runtime} handleMovieId={handleMovieClick}/>}/>
        <Route path="/addMovie/success" element={<Success />}/>
        <Route path="/movie/:id/delete" element={<Delete movieSelect={selectedMovie.id}/>}/>
        <Route path="/movie/:id/edit" element={<Edit movieSelect={selectedMovie.id}/>}/>
      </Routes>
    </div>
  )
}

export default App