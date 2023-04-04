import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import USERS from "./data/users";
import MOVIES from "./data/movies";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import { useState } from "react";
import Catalog from "./components/Catalog/Catalog";
import Description from "./components/Description/Description";
import Profile from "./components/Profile/Profile";
import ImagePicker from "./components/ImagePicker/ImagePicker";

function App() {
  const [users, setUsers] = useState([...USERS]);
  const [movies, setMovies] = useState([...MOVIES]);
  const [userStateId, setUserId] = useState(undefined);

  if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify([...users]));
  }

  const getUserData = (userId) => {
    return users.find((user) => user.id == userId);
  };

  const getMovieData = (movieId) => {
    return movies.find((movie) => movie.id == movieId);
  };

  // Todo: Change Function name to hasUserRentedMovie
  const hasUserRentedMovie = (userId, movieId) => {
      let usersArray = [...JSON.parse(localStorage.getItem("users"))];
      let userIndex = usersArray.findIndex((u) => u.id == userId);
      if (usersArray[userIndex].movies.findIndex((m) => m.id == movieId) != -1) {
        return true;
      } 
      else {
        return false;
      }
  };

  const rentReturnMovie = (userId, movieId, operation) => {
      const PRICE = 3;
      let usersArray = JSON.parse(localStorage.getItem("users"));
      let userIndex = usersArray.findIndex((u) => u.id == userId);
      let movie = getMovieData(movieId);

      if (operation == "return") {
        let movieIndex = usersArray[userIndex].movies.findIndex(
          (m) => m.id == movieId
        );
        usersArray[userIndex].movies.splice(movieIndex, 1);
        usersArray[userIndex].budget += PRICE;
        localStorage.setItem("users", JSON.stringify(usersArray));
        setUsers(usersArray);
      } 
      else {
        if (usersArray[userIndex].budget < 3) {
          alert("Insufficient funds");
        } 
        else {
          usersArray[userIndex].movies.push(movie);
          usersArray[userIndex].budget -= PRICE;
          localStorage.setItem("users", JSON.stringify(usersArray));
          setUsers(usersArray);
        }
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
            />
          }
        />
        <Route
          path="/catalog"
          element={
            <Catalog
              userId={userStateId}
              getUserData={getUserData}
              movies={movies}
              hasUserRentedMovie={hasUserRentedMovie}
              rentReturnMovie={rentReturnMovie}
            />
          }
        />
        <Route
          path="/catalog/:movieId"
          element={<Description getMovieData={getMovieData} />}
        />
        <Route
          path="/profile/:imageUrl?"
          element={<Profile users={users} setUsers={setUsers} />}
        />
        <Route
          path="/profile/imagePicker/:profileName?"
          element={<ImagePicker />}
        />
      </Routes>
    </Router>
  );
}

export default App;
