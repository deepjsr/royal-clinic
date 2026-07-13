import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { firstAidItems, clinic } from '../data/site';

export default function FirstAid() {
  return (
    <>
      <PageHero
        eyebrow="First Aid & Urgent Care"
        title="Quick help when something happens"
        intro="Cuts, burns, falls or fainting can be frightening. We provide prompt first aid and assessment, and refer you to a hospital when more is needed."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="section-head">
            <h2>We can help with</h2>
          </div>
          <div className="grid grid-2">
            {firstAidItems.map((f) => (
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
                <strong>For bleeding:</strong> press firmly with a clean cloth
                and keep pressure on.
              </li>
              <li>
                <strong>For burns:</strong> cool under cool (not ice-cold) running
                water for 10–20 minutes.
              </li>
              <li>
                <strong>For fainting:</strong> lay the person down, raise the
                legs, and loosen tight clothing.
              </li>
            </ul>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                <strong>Call emergency services</strong> for heavy bleeding that
                won’t stop, difficulty breathing, unconsciousness, or a serious
                fall. {clinic.emergency}
              </span>
            </div>
            <div className="card">
              <h3>Then come see us</h3>
              <p>
                Once the immediate danger is handled, we’ll treat the injury,
                check for infection, and advise on healing at home.
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
