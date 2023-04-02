import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function Description({getMovieData}) {
  const {movieId} = useParams()
  let movie = {}

  const getMovieDataCallBack = () => {
    movie = getMovieData(movieId)
  }

  getMovieDataCallBack()

  return (
    <div>
      <div class="movie-details">
        <div class="movie-image-container">
          <img src={movie.img}/>
        </div>
        <div class="movie-data">
          <div class="movie-title">
            <h1>{movie.title}</h1>
          </div>
          <div class="movie-year">
            <b>{movie.year}</b>
          </div>
          <div class="movie-description">
            <b>Description:</b>
            <p>{movie.descrShort}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
