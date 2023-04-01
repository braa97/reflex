import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Movie from './Movie';

function Catalog({movies, getUserData}) {
    const { userId } = useParams()
    let user = {}

    const getUserDataCallBack = () => {
        user = getUserData(userId)
    }

    getUserDataCallBack()
    
    return (
        <div>
            <div className='searchField-budget'>
                <input type='text' placeholder='Search'/>
                <div className='budget-label'>
                    <h2>budget: ${user ? user.budget : ""}</h2>
                </div>
            </div>
            <div className='catalog-label'>
                <h2>Catalog:</h2>
            </div>
            <div className="movie-catalog">
                {movies.map(m => <Movie key={m.id} movie={m} />)}
            </div>
        </div>
    );
  }
  
  export default Catalog;
  