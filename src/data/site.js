export const clinic = {
  name: 'Tooth Crew Dental Care',
  tagline: 'Healthy smiles, gentle care',
  doctor: 'Dr. Jyothsna',
  doctorTitle: 'Chief Dental Surgeon',
  phone: '088866 87799',
  email: 'hello@toothcrew.example',
  address:
    'MIG 286, KPHB Road, 4, Remedy Hospital Ln, opp. Global Edge School, Kukatpally, Hyderabad, Telangana 500072',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'MIG 286, KPHB Road, 4, Remedy Hospital Ln, opp. Global Edge School, Kukatpally, Hyderabad, Telangana 500072'
    ),
  whatsapp: '918886687799',
  hours: 'Mon – Sun: 10:00 AM – 9:00 PM',
  emergency: 'For severe facial swelling, uncontrolled bleeding or trauma, call your local emergency number immediately.',
};

export const navItems = [
  { to: '/home', label: 'Home' },
  {
    to: '/services',
    label: 'Services',
    children: [
      { to: '/services/general-dentistry', label: 'General & Preventive Dentistry' },
      { to: '/services/cosmetic-dentistry', label: 'Cosmetic Dentistry' },
      { to: '/services/orthodontics', label: 'Orthodontics & Aligners' },
      { to: '/services/emergency', label: 'Emergency Dental Care' },
    ],
  },
  { to: '/about', label: 'About the Dentist' },
  { to: '/testimonials', label: 'Patient Stories' },
  { to: '/contact', label: 'Contact' },
];

export const serviceCategories = [
  {
    to: '/services/general-dentistry',
    icon: 'tooth',
    title: 'General & Preventive Dentistry',
    blurb:
      'Routine check-ups, professional cleaning, fillings and gum care to keep your smile healthy for life.',
  },
  {
    to: '/services/cosmetic-dentistry',
    icon: 'sparkle',
    title: 'Cosmetic Dentistry',
    blurb:
      'Teeth whitening, veneers and smile makeovers that brighten and reshape your smile beautifully.',
  },
  {
    to: '/services/orthodontics',
    icon: 'align',
    title: 'Orthodontics & Aligners',
    blurb:
      'Braces and clear aligners for children and adults — straighter teeth and a confident bite.',
  },
  {
    to: '/services/emergency',
    icon: 'firstaid',
    title: 'Emergency Dental Care',
    blurb:
      'Same-day relief for severe toothache, broken teeth and swelling — prompt, calm treatment when it hurts.',
  },
];

export const conditions = [
  { icon: 'tooth', name: 'Toothache & sensitivity' },
  { icon: 'warning', name: 'Cavities & tooth decay' },
  { icon: 'shield', name: 'Bleeding or swollen gums' },
  { icon: 'sparkle', name: 'Stained or discoloured teeth' },
  { icon: 'tooth', name: 'Chipped or broken teeth' },
  { icon: 'user', name: 'Bad breath (halitosis)' },
  { icon: 'warning', name: 'Wisdom tooth pain' },
  { icon: 'clock', name: 'Missing teeth & gaps' },
];

export const cosmeticTreatments = [
  {
    title: 'Teeth Whitening',
    desc: 'Safe, professional whitening that lifts years of stains for a noticeably brighter smile.',
  },
  {
    title: 'Veneers & Bonding',
    desc: 'Thin, custom shells and tooth-coloured bonding to reshape chipped, worn or uneven teeth.',
  },
  {
    title: 'Smile Makeover',
    desc: 'A tailored plan that combines treatments to transform the look of your whole smile.',
  },
  {
    title: 'Tooth-Coloured Fillings',
    desc: 'Natural-looking fillings that repair decay while blending seamlessly with your teeth.',
  },
];

export const orthodonticOptions = [
  {
    title: 'Metal & Ceramic Braces',
    desc: 'Reliable, precise braces to correct crowding, gaps and bite problems at any age.',
  },
  {
    title: 'Clear Aligners',
    desc: 'Discreet, removable aligners that straighten teeth gradually with barely-there comfort.',
  },
  {
    title: 'Kids’ Orthodontics',
    desc: 'Early assessment and gentle treatment to guide healthy jaw and teeth development.',
  },
  {
    title: 'Retainers & Follow-up',
    desc: 'Custom retainers and regular reviews to keep your new smile perfectly in place.',
  },
];

export const emergencyItems = [
  {
    icon: 'firstaid',
    title: 'Severe toothache',
    desc: 'Fast diagnosis and pain relief, whether it’s decay, infection or a cracked tooth.',
  },
  {
    icon: 'warning',
    title: 'Knocked-out or broken tooth',
    desc: 'Quick action to save or restore the tooth after a fall, sports injury or accident.',
  },
  {
    icon: 'shield',
    title: 'Dental abscess & swelling',
    desc: 'Prompt treatment of infection to drain, relieve pain and stop it spreading.',
  },
  {
    icon: 'user',
    title: 'Lost filling or crown',
    desc: 'Same-visit repair or replacement so you can eat and smile comfortably again.',
  },
];

export const testimonials = [
  {
    name: 'Arukiran Jonnalagadda',
    role: 'Google review',
    quote:
      'Quality treatment in affordable prices and very good service by Dr Jyothsna.',
  },
  {
    name: 'Haritha Boga',
    role: 'Google review',
    quote: 'Environment is hygiene and best staff.',
  },
  {
    name: 'Balakrishna Kokkula',
    role: 'Google review',
    quote:
      'Doctor was very cooperative and felt like worth treatment with affordable price.',
  },
];

export const faqs = [
  {
    q: 'How often should I get a dental check-up?',
    a: 'For most people, a check-up and professional cleaning every six months keeps teeth and gums healthy and catches problems early.',
  },
  {
    q: 'Do you offer painless treatment?',
    a: 'Yes. We use gentle techniques and effective local anaesthesia, so procedures are as comfortable and pain-free as possible.',
  },
  {
    q: 'Are walk-ins welcome or do I need an appointment?',
    a: 'Walk-ins are welcome during clinic hours, and booking ahead by phone helps reduce your waiting time.',
  },
  {
    q: 'Is the clinic suitable for children?',
    a: 'Absolutely. We see patients of all ages and make dental visits calm, friendly and reassuring for kids and families.',
  },
];
