import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Movie({movie}) {
    return (
        <div className="movie">
            <div className="thumbnail">
            <i className="fa-solid fa-circle-plus"></i>
              <img src={movie.img}/>
            </div>
        </div>
    );
  }
  
  export default Movie;
  