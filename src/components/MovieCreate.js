import React from "react"
import { useState } from "react"
import axios from "axios"
import "./style.css"

function MovieCreate({ sendMovieList }) {
  const [movie, setMovie] = useState("")
  //   const [count, setCount] = useState(1);

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    // sendMovieList(Math.floor(Math.random() * 100), movie);
    const response = await axios.post("http://localhost:3002/movies", {
      name: movie,
    })

    sendMovieList(response.data)
  }

  const onChangeHandler = (event) => {
    setMovie(event.target.value)
  }

  return (
    <div className="movie-create">
      <div className="heading">
        <h1 className="title">The Watchlist</h1>
        <span className="subTxt">Add your favorite movie to watchlist </span>
      </div>
      <form onSubmit={onSubmitHandler} className="forms">
        <input
          className="inputer"
          onChange={onChangeHandler}
          placeholder="Enter the movie name"
          value={movie}
        />
        <input className="inputer-btn" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default MovieCreate
