import React from "react"
import { useState } from "react"
import MovieEdit from "./MovieEdit"

function MoviesShow({ movie, deleteHandler, SaveEditMovieHandler }) {
  const [isEdit, setEditMovie] = useState(false)

  const editMovieHandler = () => {
    setEditMovie(true)
  }

  const deleteMovie = () => {
    deleteHandler(movie)
  }

  const saveEditMovie = (movie) => {
    setEditMovie(false)
    console.log("movie needs to be edited is !", movie)
    SaveEditMovieHandler(movie)
  }

  return (
    <div className="card">
      <img
        src={`https://picsum.photos/seed/${movie.id}/200/300`}
        className="imger"
        alt="sadad"
      />
      {/* <p>id :{movie.id}</p> */}
      <h5 className="mTitle">
        <span className="titlee">Title - </span> {movie.name}
      </h5>
      <div className="flxer">
        <button className="btns btn btn-outline-dark" type="button" onClick={deleteMovie}>
          delete!
        </button>
        <button className="btns btn btn-success" onClick={editMovieHandler}>
          edit
        </button>
      </div>
      {isEdit && <MovieEdit editMovie={movie} saveEditMovie={saveEditMovie} />}
    </div>
  )
}

export default MoviesShow
