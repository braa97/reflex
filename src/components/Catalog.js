import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import { useState } from "react";

function Catalog({ movies, getUserData, isUserRentedMovie , addMovieToUser, removeMovieFromUser}) {
  const { userId } = useParams();
  let user = {};
  const [search, setSearch] = useState('')
  const [moviesInCatalog, setMoviesInCatalog] = useState(movies)

  const getUserDataCallBack = () => {
    user = getUserData(userId);
  };

  getUserDataCallBack();

  const handleChange = (event) => {
    setSearch(event.target.value)

    if (event.target.value == "") {
      setMoviesInCatalog(movies)
    }
    else {
      try {
        let newMoviesArray = []
        movies.map(movie => {
          if (movie.title.toLowerCase().includes(event.target.value)) {
            newMoviesArray.push(movie)
          }
        })
        setMoviesInCatalog(newMoviesArray)
      }
      catch(error) {
        console.log(error);
      }
    }
  }
    // to do: add function to return a div with rented movies
  const renderRentedMovies = () => {}

  return (
    <div>
      <div className="searchField-budget">
        <input type="text" placeholder="Search" onChange={handleChange} value={search} />
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
        {moviesInCatalog.map((m) => (
          <Movie
            userId={userId}
            key={m.id}
            movie={m}
            isUserRentedMovie={isUserRentedMovie}
            addMovieToUser={addMovieToUser}
            removeMovieFromUser={removeMovieFromUser}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
