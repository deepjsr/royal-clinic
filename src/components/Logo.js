import React from 'react';

export default function Logo({ size = 40, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Dark Outer Circle Background */}
      <circle cx="250" cy="250" r="230" fill="#0b0f19" />

      {/* Cyan Border Ring */}
      <circle
        cx="250"
        cy="250"
        r="222"
        fill="none"
        stroke="#00cbff"
        strokeWidth="15"
      />

      {/* Main Stylized Tooth and Wave Graphic */}
      <path
        d="M 110 180 
           C 90 150, 130 130, 165 155 
           C 180 165, 195 200, 215 190 
           C 230 180, 220 145, 245 155 
           C 275 165, 245 250, 230 280 
           C 245 295, 300 360, 445 305 
           C 370 375, 275 365, 218 305 
           C 200 300, 185 280, 175 255 
           C 155 210, 135 240, 135 290 
           C 135 340, 155 355, 168 345 
           C 180 335, 160 290, 150 260 
           C 145 245, 158 220, 165 240 
           C 175 270, 190 290, 205 300 
           C 180 250, 155 195, 125 190 
           C 115 190, 115 185, 110 180 Z"
        fill="#00cbff"
      />

      {/* Dental Implant Screw Threads */}
      <g fill="#00cbff">
        {/* Top Thread */}
        <path d="M 200 304 C 185 304, 182 312, 198 315 C 210 317, 215 312, 200 304 Z" />
        {/* Middle Thread */}
        <path d="M 197 320 C 185 320, 183 328, 197 331 C 208 333, 211 327, 197 320 Z" />
        {/* Bottom Tip */}
        <path d="M 195 336 C 187 336, 186 352, 194 352 C 201 352, 202 342, 195 336 Z" />
      </g>
    </svg>
  );
}
