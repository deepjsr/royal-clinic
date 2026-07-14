import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navItems, clinic } from '../data/site';
import Icon from './Icon';

function ServicesSubmenu({ onNavigate }) {
  const services = navItems.find((i) => i.children);
  return (
    <ul className="submenu" role="menu">
      {services.children.map((c) => (
        <li key={c.to} role="none">
          <Link to={c.to} role="menuitem" onClick={onNavigate}>
            {c.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location]);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesSoon = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/home" className="brand" aria-label={`${clinic.name} home`}>
          <img src="/logo1.png" alt={clinic.name} className="brand-mark" />
          <span className="brand-text">
            <strong>{clinic.name}</strong>
            <small>{clinic.tagline}</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
          <span className="visually-hidden">Menu</span>
        </button>

        <nav id="primary-nav" className={open ? 'open' : ''} aria-label="Main">
          <ul className="nav-list">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <li
                    key={item.to}
                    className={`nav-item has-sub ${servicesOpen ? 'active' : ''}`}
                    onMouseEnter={openServices}
                    onMouseLeave={closeServicesSoon}
                  >
                    <NavLink
                      to={item.to}
                      className="nav-link"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((s) => !s)}
                    >
                      {item.label}
                      <Icon name="arrow" size={16} className="caret" />
                    </NavLink>
                    <ServicesSubmenu onNavigate={() => setServicesOpen(false)} />
                  </li>
                );
              }
              return (
                <li key={item.to} className="nav-item">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className="nav-link"
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
            <li className="nav-item nav-cta">
              <Link to="/contact" className="btn btn-primary">
                <Icon name="calendar" size={18} /> Book a Visit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
