import React from 'react';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { clinic } from '../data/site';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Dr. Tajmool"
        title={`Meet ${clinic.doctor}`}
        intro="The doctor behind Royal Health — and the simple belief that good care should feel human, not hurried."
      />

      <section className="section section-tight-top">
        <div className="container two-col about-grid">
          <div className="about-portrait" aria-hidden="true">
            <span className="brand-mark brand-mark-lg">
              <Icon name="user" size={56} />
            </span>
          </div>
          <div>
            <h2>A doctor who takes time to listen</h2>
            <p>
              {clinic.doctor} is a {clinic.doctorTitle} who founded {clinic.name}{' '}
              to give local families a place where everyday health concerns are
              taken seriously — and explained simply.
            </p>
            <p>
              Whether it’s a child’s cough, a parent’s certificate for work, or a
              worrying animal bite, the aim is always the same: clear answers,
              kind treatment, and a plan you understand.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> General physician for all ages
              </li>
              <li>
                <Icon name="check" size={18} /> Calm, judgement-free consultations
              </li>
              <li>
                <Icon name="check" size={18} /> Focus on prevention, not just cure
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>What matters to us</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <span className="icon-badge">
                <Icon name="heart" />
              </span>
              <h3>Approachable care</h3>
              <p>
                No question is too small. We welcome worries that others might
                brush aside.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge">
                <Icon name="shield" />
              </span>
              <h3>Honest advice</h3>
              <p>
                We tell you what you need — and what you don’t — without
                unnecessary tests or medicine.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge">
                <Icon name="user" />
              </span>
              <h3>Prevention first</h3>
              <p>
                Vaccines and check-ups today can spare you bigger problems
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
