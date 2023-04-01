import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Movie({movie}) {
    return (
        <div class="movie">
            <div class="thumbnail">
              <img src={movie.img}/>
            </div>
        </div>
    );
  }
  
  export default Movie;
  