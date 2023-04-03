import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import { useState } from "react";

function Catalog({ movies, getUserData, isUserRentedMovie, rentReturnMovie }) {
  const { userId } = useParams();
  let user = {};
  const [search, setSearch] = useState("");
  const [moviesInCatalog, setMoviesInCatalog] = useState([...movies]);

  const getUserDataCallBack = () => {
    user = getUserData(userId);
  };

  getUserDataCallBack();

  const getRentedData = () => {
    if (userId != "undefined") {
      let localStorageUserData = JSON.parse(localStorage.getItem("users"));
      let index = localStorageUserData.findIndex((u) => u.id == userId);
      if (localStorageUserData[index].movies.length > 0) {
        return (
          <div>
            <div className="catalog-label">
              <h2>Rented:</h2>
            </div>
            <div className="movie-catalog">
              {localStorageUserData[index].movies.map((m) => (
                <Movie
                  userId={userId}
                  key={m.id}
                  movie={m}
                  isUserRentedMovie={isUserRentedMovie}
                  rentReturnMovie={rentReturnMovie}
                />
              ))}
            </div>
          </div>
        );
      }
    } else {
      return;
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);

    if (event.target.value == "") {
      setMoviesInCatalog(movies);
    } else {
      try {
        let newMoviesArray = [];
        movies.map((movie) => {
          if (movie.title.toLowerCase().includes(event.target.value)) {
            newMoviesArray.push(movie);
          }
        });
        setMoviesInCatalog(newMoviesArray);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="searchField-budget">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />
        <div className="budget-label">
          {user ? <h2>budget: ${user.budget}</h2> : ""}
        </div>
      </div>
      {getRentedData()}
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
            rentReturnMovie={rentReturnMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
