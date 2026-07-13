import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { orthodonticOptions, clinic } from '../data/site';

export default function Orthodontics() {
  return (
    <>
      <PageHero
        eyebrow="Orthodontics & Aligners"
        title="Straighter teeth, at any age"
        intro="Crowded, gapped or crooked teeth are easier to fix than you might think. We offer braces and clear aligners for children, teens and adults — with a plan that fits your life."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {orthodonticOptions.map((o) => (
              <div className="card" key={o.title}>
                <span className="icon-badge">
                  <Icon name="align" />
                </span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Braces or aligners?</span>
            <h2>The right fit for your smile</h2>
            <p>
              Both straighten teeth beautifully — the best choice depends on your
              bite, your lifestyle and how visible you want treatment to be.
            </p>
            <ol className="steps">
              <li>
                <strong>Assessment & scan</strong> — we map your teeth and bite
                to design the ideal movement.
              </li>
              <li>
                <strong>Choose your treatment</strong> — braces or discreet
                aligners, with a clear timeline and cost.
              </li>
              <li>
                <strong>Regular reviews</strong> — gentle adjustments until your
                smile is exactly where it should be.
              </li>
            </ol>
            <Link to="/contact" className="btn btn-primary">
              <Icon name="calendar" size={18} /> Book a Consultation
            </Link>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                Early check-ups matter for children — guiding growth at the right
                age can make later treatment simpler and shorter.
              </span>
            </div>
            <div className="card">
              <h3>Before you start</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> Bring any past dental records
                </li>
                <li>
                  <Icon name="check" size={18} /> Note any jaw pain or clicking
                </li>
                <li>
                  <Icon name="check" size={18} /> Ask us about flexible payment
                  plans
                </li>
              </ul>
              <p>
                Call{' '}
                <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                  {clinic.phone}
                </a>{' '}
                for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
