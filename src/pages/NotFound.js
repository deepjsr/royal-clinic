import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: '6rem', textAlign: 'center' }}>
      <div className="container">
        <span className="icon-badge" style={{ margin: '0 auto 1rem' }}>
          <Icon name="warning" />
        </span>
        <h1>Page not found</h1>
        <p>We couldn’t find that page. Let’s get you back on track.</p>
        <Link to="/" className="btn btn-primary">
          <Icon name="arrow" size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
