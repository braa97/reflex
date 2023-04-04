import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import User from './User';

function Landing({users, setUserId, logUserOut}) {
    const USERS_LENGTH = 4
    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'))
    }

    const logOut = () => {
        logUserOut()
    }

    logOut()

    return (
        <div className="landing-container">
        <div className="headerText">
            <h2>WHO'S WATCHING</h2>
        </div>
        <div className="users-container">
            {users.map(u => <User key={u.id} user={u} setUserId={setUserId}/>)}
            {users.length < USERS_LENGTH ? <User key={{}} user={{}} setUserId={{}}/> : null}
        </div>
    </div>
    );
  }
  
  export default Landing;
  