import React from 'react';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { testimonials, clinic } from '../data/site';

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title="In their own words"
        intro={`Real experiences from people who visited ${clinic.name}. We’re grateful for the trust our patients place in us.`}
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {testimonials.map((t) => (
              <figure className="card testimonial-card" key={t.name}>
                <div className="stars" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon name="star" key={i} size={18} className="star" />
                  ))}
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="note" role="note" style={{ marginTop: '2.5rem' }}>
            <Icon name="warning" />
            <span>
              These stories reflect individual experiences and are shared for
              general reassurance only. They are not a guarantee of outcomes,
              which vary from person to person.
            </span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Share your story</span>
            <h2>Had a good experience with us?</h2>
            <p>
              We’d love to hear about it. Your feedback helps us keep improving
              and helps others feel at ease about visiting.
            </p>
          </div>
          <div className="card">
            <h3>Get in touch</h3>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> Call{' '}
                <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                  {clinic.phone}
                </a>
              </li>
              <li>
                <Icon name="check" size={18} /> Email {clinic.email}
              </li>
              <li>
                <Icon name="check" size={18} /> Tell us at your next visit
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
