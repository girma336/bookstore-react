import React from 'react';
import './Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navbar = () => (
  <div>
    <header className="head-nav">
      <div className="logo">BookStor Cms</div>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              style={{
                color: 'black', fontSize: '24px', textDecoration: 'none', opacity: '0.5',
              }}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              style={{
                color: 'black', fontSize: '24px', textDecoration: 'none', opacity: '0.5',
              }}
            >
              Category
            </Link>
          </li>
        </ul>
        <IoIosPerson className="icon-person" />
      </nav>
    </header>
  </div>
);

export default Navbar;
