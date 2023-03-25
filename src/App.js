import React from "react";
import MovieCreate from "./components/MovieCreate";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import Image from "./41.jpg";
function App() {
  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(0);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3002/movies");
    // console.log(id, movieName);
    setMovieData([...response.data]);
  };

  useEffect(() => {
    loadData();
  }, [count]);

  const deleteMovieHandler = async (movie) => {
    console.log("movie should be deleted ", movie);
    const response = await axios.delete(
      `http://localhost:3002/movies/${movie.id}`
    );
    console.log(response);
    setCount(count + 1);
    // loadData();

    const movieDataUpdated = movieData.filter((item) => {
      if (item.id !== movie.id) {
        console.log(item.id, movie.id);
        return true;
      }
      return false;
    });
    console.log("new movie wlist ", movieDataUpdated);
    setMovieData([...movieDataUpdated]);
  };

  const sendMovieList = async (movie) => {
    console.log("response create ", movie);
    // const response = await axios.get("http://localhost:3002/movies");
    // // console.log(id, movieName);
    // setMovieData([...movieData, ...response.data]);
    setCount(count + 1);
  };

  const saveEditMovie = async (movie) => {
    console.log("in app edit movie ", movie);
    const response = await axios.put(
      `http://localhost:3002/movies/${movie.id}`,
      {
        name: movie.name,
      }
    );
    // console.log(response);
    const updateMovie = response.data;
    const saveMovie = movieData.map((item) => {
      if (item.id === updateMovie.id) {
        return { ...item, ...updateMovie };
      }
      return item;
    });
    setMovieData([...saveMovie]);
    setCount(count + 1);
  };
  // loadData();

  return (
    <div className="app">
      <div className="backgrounders">
        <img src={Image} className="backgrounder" width="100" alt="sdf" />
      </div>
      <div className="movie-content container">
        <MovieCreate sendMovieList={sendMovieList} />
        {movieData.length > 0 && (
          <MoviesList
            movieData={movieData}
            deleteMovieHandler={deleteMovieHandler}
            saveEditMovie={saveEditMovie}
          />
        )}
      </div>
    </div>
  );
}

export default App;
