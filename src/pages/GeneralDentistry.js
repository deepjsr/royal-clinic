import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { conditions } from '../data/site';

export default function GeneralDentistry() {
  return (
    <>
      <PageHero
        eyebrow="General & Preventive Dentistry"
        title="Everyday care that keeps smiles healthy"
        intro="Regular check-ups, cleaning and gentle treatment are the foundation of a healthy mouth. We catch problems early and keep your teeth and gums in great shape."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="section-head">
            <h2>Concerns we commonly treat</h2>
            <p>
              If you’re noticing any of these, book a visit or simply walk in.
            </p>
          </div>
          <div className="grid grid-3">
            {conditions.map((c) => (
              <div className="card condition-card" key={c.name}>
                <span className="icon-badge icon-badge-sm">
                  <Icon name={c.icon} size={20} />
                </span>
                <p>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">What to expect</span>
            <h2>A calm visit, step by step</h2>
            <ol className="steps">
              <li>
                <strong>Tell us what’s bothering you</strong> — in your own
                words, no dental jargon needed.
              </li>
              <li>
                <strong>A thorough examination</strong> — we check your teeth,
                gums and bite, with X-rays if helpful.
              </li>
              <li>
                <strong>A clear treatment plan</strong> — cleaning, fillings or
                gum care explained plainly, with costs upfront.
              </li>
              <li>
                <strong>Prevention & follow-up</strong> — home-care tips and
                reminders so problems don’t come back.
              </li>
            </ol>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                <strong>Facial swelling, severe pain or a knocked-out tooth</strong>{' '}
                should be seen the same day. Visit our{' '}
                <Link to="/services/emergency">emergency dental care</Link> page.
              </span>
            </div>
            <div className="card">
              <h3>How we keep it comfortable</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> Gentle, painless techniques
                </li>
                <li>
                  <Icon name="check" size={18} /> Honest advice on what you
                  actually need
                </li>
                <li>
                  <Icon name="check" size={18} /> Transparent, sensible pricing
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                <Icon name="calendar" size={18} /> Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
