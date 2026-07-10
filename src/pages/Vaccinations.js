import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { vaccines, clinic } from '../data/site';

export default function Vaccinations() {
  return (
    <>
      <PageHero
        eyebrow="Vaccinations"
        title="Protection made simple"
        intro="Vaccines are one of the easiest ways to stay healthy. Our team gives routine and travel vaccines — including the full rabies course — safely and with clear after-care advice."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {vaccines.map((v) => (
              <div className="card" key={v.title}>
                <span className="icon-badge">
                  <Icon name="syringe" />
                </span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">After an animal bite</span>
            <h2>Dog bite or scratch? Act quickly.</h2>
            <p>
              Animal bites and scratches can carry rabies — a serious infection.
              The right steps early make all the difference.
            </p>
            <ol className="steps">
              <li>
                <strong>Wash the wound</strong> gently but thoroughly with soap
                and running water for several minutes.
              </li>
              <li>
                <strong>Apply an antiseptic</strong> and cover with a clean
                dressing.
              </li>
              <li>
                <strong>Come in as soon as possible</strong> — we’ll start the
                rabies vaccine course and advise on any other care.
              </li>
            </ol>
            <Link to="/contact" className="btn btn-primary">
              <Icon name="calendar" size={18} /> Book a Visit
            </Link>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                Don’t wait for symptoms after a suspected rabies exposure —
                once symptoms appear, the infection is usually fatal. Seek care
                the same day.
              </span>
            </div>
            <div className="card">
              <h3>Before your vaccine</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> Bring any prior vaccine records
                </li>
                <li>
                  <Icon name="check" size={18} /> Tell us about allergies or past
                  reactions
                </li>
                <li>
                  <Icon name="check" size={18} /> Ask us which vaccines you need
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
