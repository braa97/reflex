import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie from "./Movie";

function Catalog({ movies, getUserData, isUserRentedMovie , addMovieToUser, removeMovieFromUser}) {
  const { userId } = useParams();
  let user = {};

  const getUserDataCallBack = () => {
    user = getUserData(userId);
  };

    // to do: add function to return a div with rented movies
  const renderRentedMovies = () => {}

  getUserDataCallBack();

  return (
    <div>
      <div className="searchField-budget">
        <input type="text" placeholder="Search" />
        <div className="budget-label">
          {user ? <h2>budget: ${user.budget}</h2> : ""}
        </div>
      </div>
      {user && user.movies.length > 0 ? (
        <div>
          <div className="catalog-label">
            <h2>Rented:</h2>
          </div>
          <div className="movie-catalog">
            {user.movies.map((m) => (
              <Movie
                userId={userId}
                key={m.id}
                movie={m}
                isUserRentedMovie={isUserRentedMovie}
                removeMovieFromUser={removeMovieFromUser}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="catalog-label">
        <h2>Catalog:</h2>
      </div>
      <div className="movie-catalog">
        {movies.map((m) => (
          <Movie
            userId={userId}
            key={m.id}
            movie={m}
            isUserRentedMovie={isUserRentedMovie}
            addMovieToUser={addMovieToUser}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
