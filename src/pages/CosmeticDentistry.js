import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { cosmeticTreatments, clinic } from '../data/site';

export default function CosmeticDentistry() {
  return (
    <>
      <PageHero
        eyebrow="Cosmetic Dentistry"
        title="Love the way you smile"
        intro="Whether you want a brighter shade or a full smile makeover, we offer natural-looking treatments tailored to your face, your teeth and your goals."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {cosmeticTreatments.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon-badge">
                  <Icon name="sparkle" />
                </span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="note" role="note" style={{ marginTop: '2rem' }}>
            <Icon name="warning" />
            <span>
              Healthy teeth come first. We assess your gums and enamel before any
              cosmetic work, so your new smile is beautiful <em>and</em> built to
              last.
            </span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Your smile makeover, step by step</h2>
            <ol className="steps">
              <li>
                <strong>Smile consultation</strong> — we listen to what you’d
                like to change and examine your teeth.
              </li>
              <li>
                <strong>A personalised plan</strong> — we show you the options,
                timeline and costs before we begin.
              </li>
              <li>
                <strong>Your new smile</strong> — treatment carried out gently,
                with results you’ll be proud of.
              </li>
            </ol>
          </div>
          <div className="card">
            <h3>Good to know</h3>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> Natural-looking, custom results
              </li>
              <li>
                <Icon name="check" size={18} /> Flexible options for every budget
              </li>
              <li>
                <Icon name="check" size={18} /> No pressure — it’s your choice
              </li>
            </ul>
            <p>
              Curious what’s possible? Call{' '}
              <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                {clinic.phone}
              </a>{' '}
              or <Link to="/contact">book a consultation</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
