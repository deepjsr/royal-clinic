import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { serviceCategories, clinic } from '../data/site';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your smile needs"
        intro="From routine cleaning to whitening, aligners and emergency relief, here’s the care we provide — grouped so you can find the right help fast."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2 service-row">
            {serviceCategories.map((s, i) => (
              <div className={`card service-block ${i % 2 ? 'reverse' : ''}`} key={s.to}>
                <span className="icon-badge">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <Link to={s.to} className="btn btn-secondary">
                    Explore <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="note" role="note" style={{ marginTop: '2.5rem' }}>
            <Icon name="warning" />
            <span>
              <strong>In dental pain right now?</strong> {clinic.emergency} For
              severe toothache, swelling or a broken tooth, see our{' '}
              <Link to="/services/emergency">emergency dental care</Link> page.
            </span>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
