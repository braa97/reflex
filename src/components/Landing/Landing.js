import './Landing.css'
import User from '../User/User';
import { useEffect } from 'react';

function Landing({setUserId}) {
    const USERS_LENGTH = 4
    let users
    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'))
    }

    useEffect(() => {
        localStorage.setItem("userLoginId", null)
        setUserId(null)
    })

    // const renderUsers = () => {
    //     if (localStorage.getItem('users') != null) {
    //         users = JSON.parse(localStorage.getItem('users'))
    //         users.map(u => <User key={u.id} user={u} setUserId={setUserId}/>)
    //     }
    // }
    return (
        <div className="landing-container">
        <div className="headerText">
            <h2>WHO'S WATCHING</h2>
        </div>
        <div className="users-container">
            {users? users.map(u => <User key={u.id} user={u} setUserId={setUserId} />) : null}
            {users?.length < USERS_LENGTH || !users ? <User key={{}} user={{}} setUserId={{}}/> : null}
        </div>
    </div>
    );
  }
  
  export default Landing;
  