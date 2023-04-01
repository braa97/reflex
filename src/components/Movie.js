import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Movie({ movie, userId, isUserRentedMovie, addMovieToUser }) {

  const isUserRentedMovieCallBack = () => {
    return isUserRentedMovie(userId, movie.id);
  };

  const addMovieToUserCallBack = () => {
    addMovieToUser(userId, movie.id)
  }
  return (
    <div className="movie">
      <div className="thumbnail">
        {isUserRentedMovieCallBack() ? (
          <i className={`fa-solid fa-circle-minus`}></i>
        ) : (
          <i className={`fa-solid fa-circle-plus`} onClick={addMovieToUserCallBack}></i>
        )}
        <img src={movie.img} />
      </div>
    </div>
  );
}

export default Movie;
