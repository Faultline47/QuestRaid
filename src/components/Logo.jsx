import React from 'react';

const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-cyan-glow drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
      >
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="font-sans font-bold text-xl tracking-tight text-white">
      Quest<span className="text-cyan-glow">Raid</span>
    </span>
  </div>
);

export default Logo;
