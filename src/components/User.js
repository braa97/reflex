import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function User({user, loginLogout}) {

    const loginLogoutCallBack = () => {
        loginLogout()
    }
    return (
        <div className="user-card">
            <div className="user">
                <Link to={`/catalog/${user.id}`} onClick={loginLogoutCallBack}>
                    <img src={user.img}/>
                    <h2>{user.name}</h2>
                </Link>
            </div>
        </div>
    );
  }
  
  export default User;
  