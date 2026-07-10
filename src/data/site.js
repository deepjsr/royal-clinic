export const clinic = {
  name: 'Royal Health',
  tagline: 'Compassionate care for everyday health',
  doctor: 'Dr. Mohammed Abdul Tajmool',
  doctorTitle: 'General Physician',
  phone: '+91 00000 00000',
  email: 'care@royalhealth.example',
  address: 'Royal Health Clinic, Main Road, Your City',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
  emergency: 'For life-threatening emergencies, call your local emergency number immediately.',
};

export const navItems = [
  { to: '/', label: 'Home' },
  {
    to: '/services',
    label: 'Services',
    children: [
      { to: '/services/treatment', label: 'Treatment for Common Illnesses' },
      { to: '/services/certificates', label: 'Medical Certificates' },
      { to: '/services/vaccinations', label: 'Vaccinations' },
      { to: '/services/first-aid', label: 'First Aid & Urgent Care' },
    ],
  },
  { to: '/about', label: 'About Dr. Tajmool' },
  { to: '/testimonials', label: 'Patient Stories' },
  { to: '/contact', label: 'Contact' },
];

export const serviceCategories = [
  {
    to: '/services/treatment',
    icon: 'stethoscope',
    title: 'Treatment for Common Illnesses',
    blurb:
      'Gentle, thorough care for everyday ailments — from fever and cough to stomach troubles and more.',
  },
  {
    to: '/services/certificates',
    icon: 'certificate',
    title: 'Medical Certificates',
    blurb:
      'Fitness, sick-leave and job certificates issued after a proper in-person examination.',
  },
  {
    to: '/services/vaccinations',
    icon: 'syringe',
    title: 'Vaccinations',
    blurb:
      'Routine and travel vaccinations including rabies prevention, given safely by our team.',
  },
  {
    to: '/services/first-aid',
    icon: 'firstaid',
    title: 'First Aid & Urgent Care',
    blurb:
      'Prompt help for cuts, burns, injuries and fainting — calm care when you need it most.',
  },
];

export const conditions = [
  { icon: 'heart', name: 'Fever & high temperature' },
  { icon: 'user', name: 'Cough, cold & sore throat' },
  { icon: 'warning', name: 'Headache & body aches' },
  { icon: 'shield', name: 'Vomiting & loose motions' },
  { icon: 'stethoscope', name: 'Stomach pain & acidity' },
  { icon: 'firstaid', name: 'Dog bites & animal scratches' },
  { icon: 'warning', name: 'Breathlessness & chest discomfort' },
  { icon: 'clock', name: 'General weakness & fatigue' },
];

export const certificateTypes = [
  {
    title: 'Fitness Certificate',
    desc: 'Confirms you are medically fit for work, study, sports or travel, based on a check-up.',
  },
  {
    title: 'Sick Leave Certificate',
    desc: 'Documents time off needed for an illness or recovery, for your employer or school.',
  },
  {
    title: 'Job / Pre-employment Certificate',
    desc: 'A health assessment certificate often required before starting a new job.',
  },
  {
    title: 'Recovery / Fit-to-return Certificate',
    desc: 'Shows you have recovered and are cleared to return to normal activities.',
  },
];

export const vaccines = [
  {
    title: 'Rabies Vaccination',
    desc: 'After animal bites or scratches, timely rabies shots are essential. We guide the full course.',
  },
  {
    title: 'Tetanus (TT)',
    desc: 'Recommended after injuries or as a routine booster to prevent serious infection.',
  },
  {
    title: 'Seasonal Flu Vaccine',
    desc: 'A yearly vaccine that helps protect you and those around you from influenza.',
  },
  {
    title: 'Travel & Routine Vaccines',
    desc: 'Protective vaccines for travel or everyday prevention — ask what suits your needs.',
  },
];

export const firstAidItems = [
  {
    icon: 'firstaid',
    title: 'Cuts, wounds & injuries',
    desc: 'Cleaning, dressing and stitches where needed, plus advice on healing at home.',
  },
  {
    icon: 'warning',
    title: 'Burns & scalds',
    desc: 'Immediate cooling and treatment to ease pain and lower the risk of scarring.',
  },
  {
    icon: 'user',
    title: 'Fainting & dizziness',
    desc: 'Assessment of the cause and simple steps to help you feel steady again.',
  },
  {
    icon: 'heart',
    title: 'Sudden illness',
    desc: 'Quick evaluation of sudden symptoms with referral to a hospital when required.',
  },
];

export const testimonials = [
  {
    name: 'A. Rahman',
    role: 'Treated for persistent fever',
    quote:
      'Dr. Tajmool took the time to listen and explained everything in simple words. I felt cared for, not rushed.',
  },
  {
    name: 'Priya S.',
    role: 'Needed a fitness certificate for a new job',
    quote:
      'The whole process was smooth and honest. I got my certificate the same day after a proper check-up.',
  },
  {
    name: 'Mr. Khan',
    role: 'Dog bite — rabies course',
    quote:
      'I was panicking after the bite. The team stayed calm, explained the vaccine schedule, and guided me through it.',
  },
  {
    name: 'Lakshmi M.',
    role: 'Brought her child for cough & cold',
    quote:
      'Such a friendly, reassuring clinic. My son was comfortable the whole time and recovered quickly.',
  },
];

export const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'Walk-ins are welcome during clinic hours, and you can also book ahead by phone to reduce waiting time.',
  },
  {
    q: 'Are certificates given without a check-up?',
    a: 'No. Every certificate is issued only after a proper in-person examination — this keeps the document valid and reliable.',
  },
  {
    q: 'What should I bring for a vaccination?',
    a: 'Bring any previous vaccine records if you have them, and let us know about allergies or past reactions.',
  },
  {
    q: 'Is the clinic suitable for children?',
    a: 'Yes. We see patients of all ages and aim to keep the experience calm and comfortable for families.',
  },
];
