import React from 'react';
import './Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/category',
      text: 'Category',
    },
  ];
  return (
    <div>
      <header className="head-nav">
        <div className="logo">BookStore Cms</div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  activeClassName="active-link"
                  exact
                  className="link"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <IoIosPerson className="icon-person" />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
