import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function User({user}) {
    return (
        <div class="user-card">
            <div class="user">
                <Link to={`/catalog/:userId`}>
                    <img src={user.img}/>
                    <h2>{user.name}</h2>
                </Link>
            </div>
        </div>
    );
  }
  
  export default User;
  