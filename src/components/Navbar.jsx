import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">B-Nduna</a>
        <button 
          className={`navbar-toggler ${!isOpen ? 'collapsed' : ''}`} 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-collapse collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll active" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link js-scroll" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll" href="#work">Work</a></li>
            <li className="nav-item"><a className="nav-link js-scroll" href="#blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link js-scroll" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}