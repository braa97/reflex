import './User.css'
import { Link } from "react-router-dom";

function User({ user, setUserId }) {
  const updateUserId = (id) => {
    localStorage.setItem("userLoginId", id)
    setUserId(id);
  };

  const renderUser = () => {
    if (user.id != undefined) {
      return (
        <Link to={`/catalog`} onClick={() => updateUserId(user.id)}>
          <img src={user.img} />
          <h2>{user.name}</h2>
        </Link>
      );
    } 
    else {
      return (
        <Link to={`/profile`}>
          <div className="addProfile"><i className="fa-solid fa-circle-plus"></i></div>
          <h2>Add Profile</h2>
        </Link>
      );
    }
  };

  return (
    <div className="user-card">
      <div className="user">
        {renderUser()}
      </div>
    </div>
  );
}

export default User;
