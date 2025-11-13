'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link href="/" className="navbar-brand fw-bold">
          <i className="bi bi-code-square me-2"></i>
          Bootstrap Boilerplate
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
          // onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div 
          className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                <i className="bi bi-house me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#features" className="nav-link">
                <i className="bi bi-star me-1"></i>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link">
                <i className="bi bi-info-circle me-1"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">
                <i className="bi bi-envelope me-1"></i>
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-gear me-1"></i>
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="#services" className="dropdown-item">
                    <i className="bi bi-tools me-2"></i>Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="dropdown-item">
                    <i className="bi bi-briefcase me-2"></i>Portfolio
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link href="#docs" className="dropdown-item">
                    <i className="bi bi-book me-2"></i>Documentation
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button 
                type="button" 
                className="btn btn-outline-light btn-sm ms-2 mt-1 mt-lg-0"
               
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}