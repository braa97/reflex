import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import USERS from './data/users'
import MOVIES from './data/movies'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { useState } from 'react';
import Catalog from './components/Catalog';


function App() {

  const [users, setUsers] = useState(USERS)
  const [movies, setMovies] = useState(MOVIES)
  
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
          <Route path="/" element={<Landing users={users}/>} />
          <Route path='/catalog/:userId' element={<Catalog movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
