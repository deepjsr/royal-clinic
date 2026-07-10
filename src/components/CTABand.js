import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { clinic } from '../data/site';

export function CTABand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Not sure what you need? We’re happy to help.</h2>
          <p>
            Call us, walk in, or book a visit — our team will point you to the
            right care.
          </p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary">
            <Icon name="calendar" size={18} /> Book a Visit
          </Link>
          <a
            href={`tel:${clinic.phone.replace(/\s/g, '')}`}
            className="btn btn-secondary"
          >
            <Icon name="phone" size={18} /> {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
