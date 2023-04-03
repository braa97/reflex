import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Movie({ movie, userId, isUserRentedMovie, rentReturnMovie}) {

  const isUserRentedMovieCallBack = () => {
    return isUserRentedMovie(userId, movie.id);
  };
  
  return (
    <div className="movie">
      <div className="thumbnail">
        {isUserRentedMovieCallBack() ? (
          <i className={`fa-solid fa-circle-minus`} onClick={() => rentReturnMovie(userId, movie.id, "return")}></i>
        ) : (
          <i className={`fa-solid fa-circle-plus`} onClick={() => rentReturnMovie(userId, movie.id, "rent")}></i>
        )}
        <Link to={`/${userId}/catalog/${movie.id}`}>
          <img src={movie.img} />
        </Link>
      </div>
    </div>
  );
}

export default Movie;
