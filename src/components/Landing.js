import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import User from './User';

function Landing({users}) {
    return (
        <div className="landing-container">
        <div className="headerText">
            <h2>WHO'S WATCHING</h2>
        </div>
        <div className="users-container">
            {users.map(u => <User user={u}/>)}
        </div>
    </div>
    );
  }
  
  export default Landing;
  