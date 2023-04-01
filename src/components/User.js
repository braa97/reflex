import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function User({user}) {
    return (
        <div className="user-card">
            <div className="user">
                <Link to={`/catalog/${user.id}`}>
                    <img src={user.img}/>
                    <h2>{user.name}</h2>
                </Link>
            </div>
        </div>
    );
  }
  
  export default User;
  