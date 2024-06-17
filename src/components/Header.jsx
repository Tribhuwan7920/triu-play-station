import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mainheading">
    <div className='main_header'>

      <div className="mheading">
        <h1>tiru play station</h1>
      </div>

      <div className="mlinks">
        <Link to="/"><p>home</p></Link>
        <Link to="/about"><p>about</p></Link>
        <Link to="/services"><p>services</p></Link>
        <Link to="/games"><p>games</p></Link>
      </div>

      <div className="msearch">
        <input type="search" placeholder='search favourite games' />
        <button > search</button>
      </div>
      </div>

    </div>
  )
}

export default Header
