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
  const [users, setUsers] = useState([...USERS]);
  const [movies, setMovies] = useState([...MOVIES]);
  const [userStateId, setUserId] = useState("undefined");

  if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify([...users]));
  }

  const getUserData = (userId) => {
    return users.find((user) => user.id == userId);
  };

  // const getUserIndex = (userId) => {
  //   let user = getUserData(userId);
  //   console.log(user);
  //   return users.indexOf(user);
  // }

  const getMovieData = (movieId) => {
    return movies.find((movie) => movie.id == movieId);
  };

  // const getMovieIndex = (userId, movieId) => {
  //   let user = getUserData(userId);
  //   let userIndex = getUserIndex(user)
  //   let movie = getMovieData(movieId)
  //   return users[userIndex].movies.indexOf(movie);
  // }

  const logUserOut = () => {
    setUserId("undefined");
  };

  const isUserRentedMovie = (userId, movieId) => {
    if (userId != "undefined") {
      let newUserArray = [...JSON.parse(localStorage.getItem("users"))];
      let userIndex = newUserArray.findIndex((u) => u.id == userId);
      if (newUserArray[userIndex].movies.findIndex((m) => m.id == movieId) !=-1) {
        return true;
      } 
      else {
        return false;
      }
    }
  };

  const rentReturnMovie = (userId, movieId, btnString) => {
    if (userId != "undefined") {
      const PRICE = 3
      let newUserArray = JSON.parse(localStorage.getItem("users"));
      let userIndex = newUserArray.findIndex((u) => u.id == userId);
      let movie = getMovieData(movieId);

      if (newUserArray[userIndex].movies.length > 0) {
        let movieIndex = newUserArray[userIndex].movies.findIndex((m) => m.id == movieId);
        
        if (isUserRentedMovie(userId, movieId)) {
          newUserArray[userIndex].movies.splice(movieIndex, 1);
          newUserArray[userIndex].budget += PRICE
          localStorage.setItem("users", JSON.stringify(newUserArray));
          setUsers(newUserArray);
        }
        else {
          if (newUserArray[userIndex].budget >= 3) {
            newUserArray[userIndex].movies.push(movie);
            newUserArray[userIndex].budget -= PRICE
            localStorage.setItem("users", JSON.stringify(newUserArray));
            setUsers(newUserArray);
          }
          else {
            alert("Insufficient funds")
          }
        }
      }
      else {
        if (newUserArray[userIndex].budget >= 3) {
          newUserArray[userIndex].movies.push(movie);
          newUserArray[userIndex].budget -= PRICE
          localStorage.setItem("users", JSON.stringify(newUserArray));
          setUsers(newUserArray);
        }
        else {
          alert("Insufficient funds")
        }
      }
    }
    else {
      return;
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar userStateId={userStateId} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              users={users}
              setUserId={setUserId}
              logUserOut={logUserOut}
            />
          }
        />
        <Route
          path="/:userId?/catalog"
          element={
            <Catalog
              getUserData={getUserData}
              movies={movies}
              isUserRentedMovie={isUserRentedMovie}
              rentReturnMovie={rentReturnMovie}
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
