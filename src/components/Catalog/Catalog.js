import './Catalog.css'
import Movie from "../Movie/Movie";
import { useState, useEffect } from "react";

function Catalog({ movies, getUserData, hasUserRentedMovie, rentReturnMovie, userId }) {
  let user = {};
  const [search, setSearch] = useState("");
  const [moviesInCatalog, setMoviesInCatalog] = useState([...movies]);

  useEffect(() => {
    user = getUserData(userId);
  })

  const getRentedData = () => {
    
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
                  hasUserRentedMovie={hasUserRentedMovie}
                  rentReturnMovie={rentReturnMovie}
                />
              ))}
            </div>
          </div>
        );
      }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);

    if (event.target.value == "") {
      setMoviesInCatalog(movies);
    } 
    else {
        let newMoviesArray = [];
        movies.map((movie) => {
          if (movie.title.toLowerCase().includes(event.target.value)) {
            newMoviesArray.push(movie);
          }
        });
        setMoviesInCatalog(newMoviesArray);
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
            hasUserRentedMovie={hasUserRentedMovie}
            rentReturnMovie={rentReturnMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
