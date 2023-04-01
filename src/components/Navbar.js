import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
            <Link to={"/"}><i className="fa-solid fa-film"></i>&nbsp;REFLEX</Link>
            </div>
            <div className="links">
                <div id="home" className="nav-items">
                    <Link to={"/"}><i className="fa-solid fa-house"></i>&nbsp;Home</Link>
                </div>
                <div id="browse" className="nav-items">
                    <Link to={"/catalog"}><i className="fa-solid fa-clapperboard"></i>&nbsp;Catalog</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  