import React from 'react';

const paths = {
  stethoscope:
    'M4.5 3v5a4.5 4.5 0 0 0 9 0V3M9 12.5V17a4 4 0 0 0 8 0v-1M20 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
  certificate:
    'M9 15l-3-3 1.5-1.5L9 12l5-5 1.5 1.5L9 15Zm-2-9h7a1 1 0 0 1 1 1v1H6V7a1 1 0 0 1 1-1Zm-1 4h10v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10Z',
  syringe:
    'M3 21l4-4M14.5 4.5l5 5M12 7l-7 7 2 2 7-7M16 3l5 5-2 2-5-5 2-2Z',
  firstaid:
    'M11 8h2v3h3v2h-3v3h-2v-3H8v-2h3V8Zm1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z',
  calendar:
    'M7 3v3M13 3v3M3 9h14M5 5h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
  phone:
    'M4 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L13 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 0-2Z',
  map:
    'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z',
  clock:
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
  user:
    'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 7a7 7 0 0 1 14 0',
  heart:
    'M12 20s-7-4.5-9.5-9A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 9.5 5C19 15.5 12 20 12 20Z',
  shield:
    'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z',
  check:
    'M5 12.5l4.5 4.5L19 7',
  warning:
    'M12 4l9 16H3L12 4Zm0 6v4m0 3h.01',
  star:
    'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z',
  arrow:
    'M5 12h14M13 6l6 6-6 6',
  quote:
    'M7 7h4v4c0 2-1 3.5-3.5 4.5L6.5 14c1.5-.6 2-1.3 2-2H7V7Zm7 0h4v4c0 2-1 3.5-3.5 4.5L13.5 14c1.5-.6 2-1.3 2-2h-2V7Z',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6L6 18',
  tooth:
    'M17 2c-1.7 0-2.6.8-3.4 1.3-.5.3-1 .7-1.6.7s-1.1-.4-1.6-.7C9.6 2.8 8.7 2 7 2 4.5 2 3 4 3 6.5c0 1.8.7 3.4 1.2 5.5.5 2 .6 4 .9 5.9C5.4 20.5 5.7 22 7 22c1.4 0 1.6-2 2-4 .4-1.8.8-3 3-3s2.6 1.2 3 3c.4 2 .6 4 2 4 1.3 0 1.6-1.5 1.9-2.1.3-1.9.4-3.9.9-5.9.5-2.1 1.2-3.7 1.2-5.5C21 4 19.5 2 17 2Z',
  sparkle:
    'M12 3l1.9 5.6a2 2 0 0 0 1.5 1.5L21 12l-5.6 1.9a2 2 0 0 0-1.5 1.5L12 21l-1.9-5.6a2 2 0 0 0-1.5-1.5L3 12l5.6-1.9a2 2 0 0 0 1.5-1.5L12 3Z',
  align:
    'M4 7h16M4 12h16M4 17h16M9 4v16M15 4v16',
};

export default function Icon({ name, size = 24, strokeWidth = 1.8, className }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
