import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/CTABand';
import Icon from '../components/Icon';
import { clinic } from '../data/site';

const reasons = [
  'Common illness (fever, cough, cold, etc.)',
  'Medical certificate',
  'Vaccination',
  'First aid / injury',
  'General enquiry',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    reason: reasons[0],
    message: '',
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title="Let’s get you the care you need"
        intro="Book a consultation, ask a question, or just let us know you’re coming. We’ll respond as quickly as we can."
      />

      <section className="section section-tight-top">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Reach us directly</h2>
            <ul className="contact-list">
              <li>
                <span className="icon-badge icon-badge-sm">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <strong>Call / WhatsApp</strong>
                  <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                    {clinic.phone}
                  </a>
                </div>
              </li>
              <li>
                <span className="icon-badge icon-badge-sm">
                  <Icon name="map" size={20} />
                </span>
                <div>
                  <strong>Visit</strong>
                  <span>{clinic.address}</span>
                </div>
              </li>
              <li>
                <span className="icon-badge icon-badge-sm">
                  <Icon name="clock" size={20} />
                </span>
                <div>
                  <strong>Hours</strong>
                  <span>{clinic.hours}</span>
                </div>
              </li>
              <li>
                <span className="icon-badge icon-badge-sm">
                  <Icon name="user" size={20} />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                </div>
              </li>
            </ul>

            <div className="note" role="note" style={{ marginTop: '1.5rem' }}>
              <Icon name="warning" />
              <span>{clinic.emergency}</span>
            </div>
          </div>

          <div className="card contact-form-card">
            {sent ? (
              <div className="form-success" role="status">
                <span className="icon-badge">
                  <Icon name="check" />
                </span>
                <h3>Thank you, {form.name || 'friend'}!</h3>
                <p>
                  We’ve received your request
                  {form.reason ? ` about “${form.reason}”` : ''}. Our team will
                  get back to you shortly on {form.phone || 'your contact number'}.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: '',
                      phone: '',
                      reason: reasons[0],
                      message: '',
                    });
                  }}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h3>Request a visit or ask a question</h3>
                <label htmlFor="name">
                  Your name <span className="req">*</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update}
                    placeholder="e.g. A. Rahman"
                  />
                </label>

                <label htmlFor="phone">
                  Contact number <span className="req">*</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update}
                    placeholder="e.g. +91 00000 00000"
                  />
                </label>

                <label htmlFor="reason">
                  What do you need help with?
                  <select
                    id="reason"
                    name="reason"
                    value={form.reason}
                    onChange={update}
                  >
                    {reasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="message">
                  Anything you’d like us to know? (optional)
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={update}
                    placeholder="Briefly describe your concern…"
                  />
                </label>

                <button type="submit" className="btn btn-primary btn-block">
                  <Icon name="calendar" size={18} /> Send Request
                </button>
                <p className="form-fineprint">
                  This form helps us prepare for your visit. It is not for
                  emergencies and does not replace a personal consultation.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section section-alt faq-cta">
        <div className="container">
          <p>
            Prefer to read first? Explore our{' '}
            <Link to="/services">services</Link> or{' '}
            <Link to="/about">meet Dr. Tajmool</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
