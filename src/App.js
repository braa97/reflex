import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import USERS from "./data/users";
import MOVIES from "./data/movies";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { useState } from "react";
import Catalog from "./components/Catalog";
import Description from "./components/Description";

function App() {
  const [users, setUsers] = useState(USERS);
  const [movies, setMovies] = useState(MOVIES);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const getUserData = (id) => {
    let user = users.find((u) => {
      if (u.id == id) {
        return u;
      }
    });
    return user;
  };

  const getMovieData = (movieId) => {
    let movie = movies.find((m) => {
      if (m.id == movieId) {
        return m;
      }
    });
    return movie;
  };

  const addMovieToUser = (userId, movieId) => {
    let flag = 0;
    let newUserArray = [...users];
    let movie = getMovieData(movieId);
    movie.isRented = true;
    newUserArray.map((u) => {
      if (u.id == userId) {
        if (u.movies.some((um) => um.id == movieId)) {
          flag = 1;
        } else {
          u.movies.push(movie);
          u.budget -= 3;
        }
      }
    });
    if (flag == 1) {
      return;
    } else {
      setUsers(newUserArray);
    }
  };

  const removeMovieFromUser = (userId, movieId) => {
    let newUserArray = [...users];
    newUserArray.map((u) => {
      if (u.id == userId) {
        let userIndex = newUserArray.indexOf(u);
        let movie = getMovieData(movieId);
        const movieIndex = u.movies.indexOf(movie);
        newUserArray[userIndex].movies.splice(movieIndex, 1);
        newUserArray[userIndex].budget += 3
        setUsers(newUserArray);
      }
    });
  };

  const isUserRentedMovie = (userId, movieId) => {
    let flag = 0;
    if (isLoggedin) {
      let user = getUserData(userId);
      if (user.movies.length != 0) {
        user.movies.map((m) => {
          if (m.id == movieId) {
            flag = 1;
          }
        });
      } else {
        return false;
      }
    }
    if (flag == 1) {
      return true;
    } else {
      return false;
    }
  };

  const loginLogout = () => {
    setIsLoggedIn(isLoggedin ? false : true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedin={isLoggedin} loginLogout={loginLogout} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Landing users={users} loginLogout={loginLogout} />}
        />
        <Route
          path="/:userId?/catalog"
          element={
            <Catalog
              getUserData={getUserData}
              movies={movies}
              isUserRentedMovie={isUserRentedMovie}
              addMovieToUser={addMovieToUser}
              removeMovieFromUser={removeMovieFromUser}
            />
          }
        />
        <Route
          path="/:userId?/catalog/:movieId"
          element={<Description getMovieData={getMovieData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
