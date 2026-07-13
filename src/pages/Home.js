import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand } from '../components/CTABand';
import {
  clinic,
  serviceCategories,
  conditions,
  testimonials,
  faqs,
} from '../data/site';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Family & cosmetic dentistry</span>
            <h1>Welcome to {clinic.name}.</h1>
            <p className="hero-lede">
              From routine check-ups and cleaning to whitening, aligners and
              same-day emergency relief, <strong>{clinic.name}</strong> looks
              after every smile with gentle, painless and caring attention.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <Icon name="calendar" size={18} /> Book an Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <Icon name="arrow" size={18} /> See Our Services
              </Link>
            </div>
            <ul className="hero-assure">
              <li>
                <Icon name="check" size={18} /> Walk-ins welcome
              </li>
              <li>
                <Icon name="check" size={18} /> Gentle, painless treatment
              </li>
              <li>
                <Icon name="check" size={18} /> All ages cared for
              </li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Clinic at a glance">
            <div className="hero-card-top">
              <span className="brand-mark" aria-hidden="true">
                <Icon name="tooth" size={22} />
              </span>
              <div>
                <strong>{clinic.name}</strong>
                <small>{clinic.doctorTitle}</small>
              </div>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>
                  <Icon name="user" size={18} /> Dentist
                </dt>
                <dd>{clinic.doctor}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="clock" size={18} /> Hours
                </dt>
                <dd>{clinic.hours}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="map" size={18} /> Location
                </dt>
                <dd>{clinic.address}</dd>
              </div>
            </dl>
            <a
              href={`tel:${clinic.phone.replace(/\s/g, '')}`}
              className="hero-phone"
            >
              <Icon name="phone" size={18} /> {clinic.phone}
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-tight trust-strip">
        <div className="container trust-grid">
          <div>
            <Icon name="tooth" size={22} />
            <strong>Preventive care</strong>
            <span>Check-ups & cleaning done gently</span>
          </div>
          <div>
            <Icon name="sparkle" size={22} />
            <strong>Cosmetic</strong>
            <span>Whitening, veneers & makeovers</span>
          </div>
          <div>
            <Icon name="align" size={22} />
            <strong>Orthodontics</strong>
            <span>Braces & clear aligners</span>
          </div>
          <div>
            <Icon name="firstaid" size={22} />
            <strong>Emergencies</strong>
            <span>Same-day relief for dental pain</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Complete dental care under one roof</h2>
            <p>
              Four simple areas of care, so you always know where to turn.
            </p>
          </div>
          <div className="grid grid-4">
            {serviceCategories.map((s) => (
              <Link to={s.to} key={s.to} className="card service-preview">
                <span className="icon-badge">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="card-link">
                  Learn more <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common concerns</span>
            <h2>Tooth trouble? You’re in the right place.</h2>
            <p>
              We regularly help with these everyday dental concerns — no worry
              too small to discuss.
            </p>
          </div>
          <div className="grid grid-4">
            {conditions.map((c) => (
              <div className="card condition-card" key={c.name}>
                <span className="icon-badge icon-badge-sm">
                  <Icon name={c.icon} size={20} />
                </span>
                <p>{c.name}</p>
              </div>
            ))}
          </div>
          <p className="center-note">
            This list is a guide only. If you have a concern not listed here,
            please <Link to="/contact">get in touch</Link> — we’re glad to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>Dentistry that puts you at ease</h2>
            <p>
              A trip to the dentist can feel stressful. We keep things simple:
              we listen first, explain clearly, and agree on a plan together.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> We explain your options in
                plain language
              </li>
              <li>
                <Icon name="check" size={18} /> We never rush your questions
              </li>
              <li>
                <Icon name="check" size={18} /> We focus on gentle, pain-free
                care
              </li>
            </ul>
            <Link to="/about" className="btn btn-secondary">
              Meet {clinic.doctor}
            </Link>
          </div>
          <div className="approach-card">
            <Icon name="quote" size={34} />
            <blockquote>
              “My goal is simple — help you understand your smile and feel
              confident about the next step.”
            </blockquote>
            <cite>— {clinic.doctor}</cite>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Patient stories</span>
            <h2>Trusted by local smiles</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure className="card testimonial-card" key={t.name}>
                <Icon name="quote" size={26} className="quote-mark" />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="center-note">
            <Link to="/testimonials">Read more patient stories →</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col faq-col">
          <div>
            <span className="eyebrow">Good to know</span>
            <h2>Questions, answered simply</h2>
            <p>A few things patients often ask before their first visit.</p>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 3).map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
