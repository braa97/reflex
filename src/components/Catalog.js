import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Movie from './Movie';

function Catalog({movies}) {
    return (
        <div class="movie-catalog">
            {movies.map(m => <Movie movie={m} />)}
        </div>
    );
  }
  
  export default Catalog;
  