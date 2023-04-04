import './Description.css'
import { useParams } from "react-router-dom";

function Description({getMovieData}) {
  const {movieId} = useParams()
  let movie = {}

  const getMovieDataCallBack = () => {
    movie = getMovieData(movieId)
  }

  getMovieDataCallBack()

  return (
    <div>
      <div className="movie-details">
        <div className="movie-image-container">
          <img src={movie.img}/>
        </div>
        <div className="movie-data">
          <div className="movie-title">
            <h1>{movie.title}</h1>
          </div>
          <div className="movie-year">
            <b>{movie.year}</b>
          </div>
          <div className="movie-description">
            <b>Description:</b>
            <p>{movie.descrShort}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
