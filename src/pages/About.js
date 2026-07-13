import React from 'react';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { clinic } from '../data/site';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Dentist"
        title={`Meet ${clinic.doctor}`}
        intro="The dentist behind Tooth Crew Dental Care — and the simple belief that great dentistry should feel gentle, honest and human, not hurried."
      />

      <section className="section section-tight-top">
        <div className="container two-col about-grid">
          <div className="about-portrait" aria-hidden="true">
            <span className="brand-mark brand-mark-lg">
              <Icon name="tooth" size={56} />
            </span>
          </div>
          <div>
            <h2>A dentist who takes time to listen</h2>
            <p>
              {clinic.doctor} is a {clinic.doctorTitle} who founded {clinic.name}{' '}
              to give local families a place where dental care feels calm,
              comfortable and clearly explained.
            </p>
            <p>
              Whether it’s a child’s first check-up, a nervous patient’s filling,
              or a smile makeover, the aim is always the same: clear answers,
              gentle treatment, and a plan you understand.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> Dental care for all ages
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
                unnecessary treatment or pressure.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge">
                <Icon name="user" />
              </span>
              <h3>Prevention first</h3>
              <p>
                Regular check-ups and cleaning today can spare you bigger
                problems tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
