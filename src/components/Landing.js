import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import User from './User';

function Landing({users}) {
    return (
        <div class="landing-container">
        <div class="headerText">
            <h2>WHO'S WATCHING</h2>
        </div>
        <div class="users-container">
            {users.map(u => <User user={u}/>)}
        </div>
    </div>
    );
  }
  
  export default Landing;
  