import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.scss";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <h2>
            Learn <span>Islam</span>
          </h2>
        </div>
        <div ref={navRef} className="links">
          <Link className="link" to="/?category=arabic">
            <h6>Arabic</h6>
          </Link>
          <Link className="link" to="/?category=aqeedah">
            <h6>Aqeedah</h6>
          </Link>
          <Link className="link" to="/?category=fiqh">
            <h6>Fiqh</h6>
          </Link>
          <Link className="link" to="/?category=etiquette">
            <h6>Etiquette</h6>
          </Link>
          <Link className="link" to="/?category=seerah">
            <h6>Seerah</h6>
          </Link>
          <Link className="link" to="/?category=hadith">
            <h6>Hadith</h6>
          </Link>
          <Link className="link" to="/?category=tafseer">
            <h6>Tafseer</h6>
          </Link>
          <span>Ali</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
