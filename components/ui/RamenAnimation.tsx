import React from "react";

export default function RamenAnimation() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 100 110"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Steam wisps */}
        <g className="ramen-steam-1">
          <path d="M 30,48 Q 35,38 30,28 T 30,8" fill="none" stroke="var(--color-gold, #C9A84C)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
        <g className="ramen-steam-2">
          <path d="M 50,48 Q 55,38 50,28 T 50,3" fill="none" stroke="var(--color-gold, #C9A84C)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </g>
        <g className="ramen-steam-3">
          <path d="M 70,48 Q 75,38 70,28 T 70,8" fill="none" stroke="var(--color-gold, #C9A84C)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>

        {/* Chopsticks poking */}
        <g className="ramen-chopsticks">
          <line x1="82" y1="-5" x2="38" y2="52" stroke="var(--color-gold, #C9A84C)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="92" y1="0" x2="48" y2="57" stroke="var(--color-gold, #C9A84C)" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Noodles */}
        <g className="ramen-noodles">
          <path d="M 22,55 Q 36,42 50,55 T 78,55" fill="none" stroke="#F4A261" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 30,61 Q 50,48 70,61" fill="none" stroke="#E9C46A" strokeWidth="4.5" strokeLinecap="round" />
        </g>

        {/* Bowl */}
        <g className="ramen-bowl">
          <path d="M 8,54 Q 8,100 50,100 Q 92,100 92,54 Z" fill="currentColor" />
          <line x1="14" y1="62" x2="86" y2="62" stroke="var(--color-bg, #0f0f0f)" strokeWidth="2" opacity="0.4" />
          <line x1="22" y1="70" x2="78" y2="70" stroke="var(--color-bg, #0f0f0f)" strokeWidth="2" opacity="0.25" />
        </g>
      </svg>

      <style>{`
        .ramen-steam-1 {
          animation: ramen-rise1 2s infinite ease-in-out;
        }
        .ramen-steam-2 {
          animation: ramen-rise2 2s infinite ease-in-out 0.6s;
        }
        .ramen-steam-3 {
          animation: ramen-rise3 2s infinite ease-in-out 1.2s;
        }
        .ramen-chopsticks {
          transform-origin: 70% 50%;
          animation: ramen-chop 1.2s infinite alternate ease-in-out;
        }
        .ramen-bowl {
          transform-origin: 50% 100%;
          animation: ramen-rock 3s infinite ease-in-out;
        }
        .ramen-noodles {
          transform-origin: 50% 58%;
          animation: ramen-boil 0.8s infinite alternate ease-in-out;
        }

        @keyframes ramen-rise1 {
          0% { transform: translateY(12px); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-12px) scale(1.1); opacity: 0; }
        }
        @keyframes ramen-rise2 {
          0% { transform: translateY(15px); opacity: 0; }
          50% { opacity: 0.9; }
          100% { transform: translateY(-8px) scale(1.1); opacity: 0; }
        }
        @keyframes ramen-rise3 {
          0% { transform: translateY(8px); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-15px) scale(1.1); opacity: 0; }
        }
        @keyframes ramen-chop {
          0% { transform: translate(2px, -6px) rotate(3deg); }
          100% { transform: translate(-2px, 6px) rotate(-2deg); }
        }
        @keyframes ramen-rock {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1.2deg); }
          75% { transform: rotate(-1.2deg); }
        }
        @keyframes ramen-boil {
          0% { transform: translateY(2px) scaleY(0.96); }
          100% { transform: translateY(-3px) scaleY(1.04); }
        }
      `}</style>
    </div>
  );
}
