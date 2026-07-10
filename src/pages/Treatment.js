import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { conditions } from '../data/site';

export default function Treatment() {
  return (
    <>
      <PageHero
        eyebrow="Treatment for Common Illnesses"
        title="Feeling unwell? Let’s get you sorted."
        intro="Most days, health worries are everyday ones — and that’s exactly what we’re here for. Clear diagnosis, gentle treatment, and advice you can actually follow."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="section-head">
            <h2>Conditions we commonly treat</h2>
            <p>
              If you’re experiencing any of these, book a visit or simply walk
              in.
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
                <strong>Tell us what’s wrong</strong> — in your own words, no
                medical terms needed.
              </li>
              <li>
                <strong>A careful check-up</strong> — we examine and may suggest
                simple tests if helpful.
              </li>
              <li>
                <strong>A clear plan</strong> — treatment, medicines and
                home-care explained plainly.
              </li>
              <li>
                <strong>Follow-up</strong> — we’re here if symptoms don’t settle.
              </li>
            </ol>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                <strong>Breathlessness, severe chest pain or a very high fever
                in a baby</strong> can be serious. Seek emergency care straight
                away.
              </span>
            </div>
            <div className="card">
              <h3>How we keep it simple for you</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> Plain-language explanations
                </li>
                <li>
                  <Icon name="check" size={18} /> Honest guidance on when to
                  worry
                </li>
                <li>
                  <Icon name="check" size={18} /> Affordable, sensible treatment
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
