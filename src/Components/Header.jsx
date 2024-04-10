import React from 'react';
import {Link}  from "react-router-dom";
function Header() {
 
  return (
    <header className="bg-[#ffff00] text-white p-4 flex justify-between items-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-link text-black">E Learn</h2>
      <ul className="hidden md:flex space-x-4 text-black pop">
      <li><Link to="/">Home</Link></li>
          <li><Link to="/Courses">Courses</Link></li>
          <li><Link to="/Admission">Admission</Link></li>
          <li><Link to="/Courses">Testimonial</Link></li>
        </ul>
      <nav className="flex items-center space-x-4">
        
        <div className="log-sign flex items-center space-x-4">
          <a href="#" className="text-black pop">Log-in</a>
          <button className="bg-black text-white px-4 py-2 rounded-full pop">Sign Up</button>
        </div>
      </nav>
      <button className="md:hidden text-black">☰</button>
    </header>
  );
}

export default Header;
