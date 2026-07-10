import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { certificateTypes, clinic } from '../data/site';

export default function Certificates() {
  return (
    <>
      <PageHero
        eyebrow="Medical Certificates"
        title="Certificates you can rely on"
        intro="Need proof of fitness or time off? We issue medical certificates only after a proper in-person examination, so they’re valid and trustworthy."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {certificateTypes.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon-badge">
                  <Icon name="certificate" />
                </span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="note" role="note" style={{ marginTop: '2rem' }}>
            <Icon name="warning" />
            <span>
              Every certificate requires a real check-up. We do not backdate
              documents or issue them without seeing you — this protects you and
              the people who rely on the certificate.
            </span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Getting your certificate, made easy</h2>
            <ol className="steps">
              <li>
                <strong>Book or walk in</strong> and tell us which certificate
                you need.
              </li>
              <li>
                <strong>We examine you</strong> and complete any required
                checks.
              </li>
              <li>
                <strong>You receive the signed certificate</strong>, usually the
                same visit.
              </li>
            </ol>
          </div>
          <div className="card">
            <h3>What to bring</h3>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> A photo ID
              </li>
              <li>
                <Icon name="check" size={18} /> Any form your employer or
                school requires
              </li>
              <li>
                <Icon name="check" size={18} /> Previous reports, if relevant
              </li>
            </ul>
            <p>
              Questions? Call{' '}
              <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                {clinic.phone}
              </a>{' '}
              or <Link to="/contact">reach out here</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
