import React from 'react';
import { Link } from 'react-router-dom';
import { clinic, navItems } from '../data/site';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">
              <Icon name="tooth" size={20} />
            </span>
            <strong>{clinic.name}</strong>
          </div>
          <p className="footer-blurb">
            {clinic.tagline}. Caring for families with gentle, honest dentistry
            and approachable treatment.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link to={i.to}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Visit & Contact</h4>
          <ul className="footer-contact">
            <li>
              <Icon name="map" size={18} />{' '}
              <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
                {clinic.address}
              </a>
            </li>
            <li>
              <Icon name="phone" size={18} />{' '}
              <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                {clinic.phone}
              </a>
            </li>
            <li>
              <Icon name="clock" size={18} /> {clinic.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </p>
        <p className="footer-disclaimer">
          This website shares general dental information only and is not a
          substitute for personal advice from a qualified dentist.
        </p>
      </div>
    </footer>
  );
}
