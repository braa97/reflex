import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="navbar">
            <div class="logo">
            <Link to={"/"}><i class="fa-solid fa-film"></i>&nbsp;REFLEX</Link>
            </div>
            <div class="links">
                <div id="home" class="nav-items">
                    <Link to={"/"}><i class="fa-solid fa-house"></i>&nbsp;Home</Link>
                </div>
                <div id="browse" class="nav-items">
                    <Link to={"/catalog"}><i class="fa-solid fa-clapperboard"></i>&nbsp;Catalog</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  