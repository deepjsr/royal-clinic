import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { emergencyItems, clinic } from '../data/site';

export default function EmergencyCare() {
  return (
    <>
      <PageHero
        eyebrow="Emergency Dental Care"
        title="Dental pain? We’ll see you fast."
        intro="A sudden toothache or broken tooth can be frightening. We keep same-day slots for emergencies, ease your pain quickly, and get your smile back on track."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="section-head">
            <h2>We can help with</h2>
          </div>
          <div className="grid grid-2">
            {emergencyItems.map((f) => (
              <div className="card" key={f.title}>
                <span className="icon-badge">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">In the moment</span>
            <h2>Simple first steps while you reach us</h2>
            <ul className="steps steps-unordered">
              <li>
                <strong>For a knocked-out tooth:</strong> hold it by the crown,
                keep it in milk or saliva, and come in immediately.
              </li>
              <li>
                <strong>For toothache:</strong> rinse with warm salt water and
                take your usual pain relief — avoid placing aspirin on the gum.
              </li>
              <li>
                <strong>For swelling:</strong> apply a cold compress to the
                cheek and call us straight away.
              </li>
            </ul>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                <strong>Call emergency services</strong> for severe facial
                swelling affecting breathing or swallowing, or heavy bleeding
                after trauma. {clinic.emergency}
              </span>
            </div>
            <div className="card">
              <h3>Then come see us</h3>
              <p>
                Once the pain is under control, we’ll treat the cause, protect
                the tooth, and plan any restoration you need.
              </p>
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
