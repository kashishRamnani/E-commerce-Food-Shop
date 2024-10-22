import React from 'react';
import headerBg from '../../assets/23_Lemon_images/images/header-bg.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <a className="navbar-brand" href="#">Organic</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TRENDING</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">STORE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ORGANIC</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTRACT</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="search px-3" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
