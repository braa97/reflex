import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Movie({ movie, userId, isUserRentedMovie, addMovieToUser , removeMovieFromUser}) {

  const isUserRentedMovieCallBack = () => {
    return isUserRentedMovie(userId, movie.id);
  };

  const addMovieToUserCallBack = () => {
    addMovieToUser(userId, movie.id)
  }

  const removeMovieFromUserCallBack = () => {
    removeMovieFromUser(userId, movie.id)
  }

  return (
    <div className="movie">
      <div className="thumbnail">
        {isUserRentedMovieCallBack() ? (
          <i className={`fa-solid fa-circle-minus`} onClick={removeMovieFromUserCallBack}></i>
        ) : (
          <i className={`fa-solid fa-circle-plus`} onClick={addMovieToUserCallBack}></i>
        )}
        <Link to={`/${userId}/catalog/${movie.id}`}>
          <img src={movie.img} />
        </Link>
      </div>
    </div>
  );
}

export default Movie;
