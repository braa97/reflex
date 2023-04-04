import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Movie({ movie, userId, isUserRentedMovie, rentReturnMovie }) {
  const isUserRentedMovieCallBack = () => {
    return isUserRentedMovie(userId, movie.id);
  };

  const renderButton = () => {
    if (userId != "undefined") {
      if (isUserRentedMovieCallBack()) {
        return (
          <i className={`fa-solid fa-circle-minus`} onClick={() => rentReturnMovie(userId, movie.id, "return")}></i>
        );
      } 
      else {
        return (
          <i className={`fa-solid fa-circle-plus`} onClick={() => rentReturnMovie(userId, movie.id, "rent")}></i>
        );
      }
    }
  };

  return (
    <div className="movie">
      <div className="thumbnail">
        {renderButton()}
        <Link to={`/catalog/${movie.id}`}>
          <img src={movie.img} />
        </Link>
      </div>
    </div>
  );
}

export default Movie;
