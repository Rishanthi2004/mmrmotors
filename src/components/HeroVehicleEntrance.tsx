import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, Cpu, Gauge, Zap } from 'lucide-react';

interface HeroVehicleEntranceProps {
  onAnimationComplete: () => void;
}

export default function HeroVehicleEntrance({ onAnimationComplete }: HeroVehicleEntranceProps) {
  // Animation phase states: 'entering' -> 'stopping' -> 'highlighting' -> 'complete'
  const [phase, setPhase] = useState<'entering' | 'stopping' | 'highlighting' | 'complete'>('entering');
  const [activeHighlight, setActiveHighlight] = useState<number>(-1);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Respect reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setPhase('complete');
      onAnimationComplete();
      return;
    }

    // Phase 1 -> 2: Vehicle travels from left and enters stopping phase (1.8s)
    const stopTimer = setTimeout(() => {
      setPhase('stopping');
    }, 1800);

    // Phase 2 -> 3: Suspension settles, start parts diagnostic highlight sequence (2.4s)
    const highlightTimer = setTimeout(() => {
      setPhase('highlighting');
      setActiveHighlight(0); // Engine & Powertrain
    }, 2400);

    // Sequence through highlights:
    const h1Timer = setTimeout(() => setActiveHighlight(1), 3200); // Brakes & Wheels
    const h2Timer = setTimeout(() => setActiveHighlight(2), 4000); // Suspension & Chassis
    const h3Timer = setTimeout(() => setActiveHighlight(3), 4800); // Electrics & LED Lights

    // Phase 3 -> 4: Complete diagnostic sequence and trigger text reveal (5.5s)
    const completeTimer = setTimeout(() => {
      setPhase('complete');
      onAnimationComplete();
    }, 5500);

    return () => {
      clearTimeout(stopTimer);
      clearTimeout(highlightTimer);
      clearTimeout(h1Timer);
      clearTimeout(h2Timer);
      clearTimeout(h3Timer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  // Skip animation button handler for instant reveal if user clicks
  const handleFastForward = () => {
    setPhase('complete');
    onAnimationComplete();
  };

  const highlights = [
    {
      id: 'engine',
      title: 'Engine & Powertrain',
      status: 'Diagnostics Verified',
      icon: Cpu,
      x: '75%', // Front hood
      y: '42%',
      lineX2: '85%',
      lineY2: '15%',
      labelX: '72%',
      labelY: '2%',
    },
    {
      id: 'brakes',
      title: 'Braking System',
      status: 'Discs & Pads Inspected',
      icon: Gauge,
      x: '71%', // Front wheel
      y: '72%',
      lineX2: '82%',
      lineY2: '88%',
      labelX: '68%',
      labelY: '92%',
    },
    {
      id: 'suspension',
      title: 'Chassis & Suspension',
      status: 'Alignment Balanced',
      icon: ShieldCheck,
      x: '24%', // Rear wheel/suspension
      y: '72%',
      lineX2: '12%',
      lineY2: '88%',
      labelX: '0%',
      labelY: '92%',
    },
    {
      id: 'electrics',
      title: 'Lighting & Battery',
      status: 'Electrical System OK',
      icon: Zap,
      x: '86%', // Headlight
      y: '46%',
      lineX2: '94%',
      lineY2: '32%',
      labelX: '78%',
      labelY: '24%',
    },
  ];

  return (
    <div
      onClick={phase !== 'complete' ? handleFastForward : undefined}
      className={`relative w-full select-none ${phase !== 'complete' ? 'cursor-pointer' : ''}`}
      title={phase !== 'complete' ? 'Click to skip animation' : undefined}
    >
      {/* Outer Vehicle Motion Rig */}
      <motion.div
        initial={isReducedMotion ? { x: 0 } : { x: '-110%' }}
        animate={
          phase === 'entering'
            ? { x: '-5%' }
            : phase === 'stopping' || phase === 'highlighting' || phase === 'complete'
            ? { x: '0%' }
            : { x: '0%' }
        }
        transition={{
          duration: phase === 'entering' ? 1.8 : 0.8,
          ease: [0.12, 0.9, 0.22, 1] as const, // Natural automotive braking curve
        }}
        className="relative w-full max-w-[680px] mx-auto"
      >
        {/* Chassis Suspension Bounce Simulation Rig */}
        <motion.div
          animate={
            phase === 'stopping'
              ? {
                  y: [0, 5, -2, 1, 0], // Forward compression and subtle rebound
                  rotate: [0, 0.7, -0.4, 0.1, 0],
                }
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Detailed Modern Executive Passenger Sedan SVG */}
          <svg
            viewBox="0 0 900 360"
            className="w-full h-auto drop-shadow-2xl overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metallic Silver Body Gradient */}
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="25%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>

              {/* Roof & Pillars Gradient */}
              <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              {/* Tinted Privacy Glass Gradient */}
              <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="70%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              {/* Chrome Trim Gradient */}
              <linearGradient id="chromeTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>

              {/* Wheel Rim Metallic Gradient */}
              <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Orange Diagnostic Glow Filter */}
              <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Floor Shadow Gradient */}
              <radialGradient id="tireShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0f172a" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#1e293b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* 1. Realistic Road Floor Shadow (expands when car settles) */}
            <ellipse cx="450" cy="318" rx="410" ry="22" fill="url(#tireShadow)" />
            <ellipse cx="230" cy="312" rx="75" ry="12" fill="#0f172a" fillOpacity="0.45" />
            <ellipse cx="690" cy="312" rx="75" ry="12" fill="#0f172a" fillOpacity="0.45" />

            {/* 2. Main Car Body Geometry */}
            <g id="car-chassis">
              {/* Lower Sill & Underbody */}
              <path
                d="M130 270 L170 270 Q230 220 290 270 L630 270 Q690 220 750 270 L800 270 Q830 270 820 250 L810 230 Q800 215 760 210 L680 185 L540 120 Q480 90 380 90 L260 105 Q170 120 120 170 Q90 200 95 240 Q100 270 130 270 Z"
                fill="url(#bodyGradient)"
              />

              {/* Aerodynamic Roofline & Upper Greenhouse */}
              <path
                d="M260 110 C320 95 440 92 520 115 L665 185 L200 185 C215 155 235 125 260 110 Z"
                fill="url(#roofGradient)"
              />

              {/* Chrome Window Trim Outline */}
              <path
                d="M245 180 C265 145 300 115 365 106 C440 96 525 110 655 180 Z"
                stroke="url(#chromeTrim)"
                strokeWidth="3.5"
                fill="none"
              />

              {/* Tinted Windows (Front, Rear, Quarter) */}
              <path
                d="M255 178 C272 148 305 120 365 112 L435 112 L435 178 Z"
                fill="url(#glassGradient)"
              />
              <path
                d="M445 112 L535 114 C585 128 625 152 648 178 L445 178 Z"
                fill="url(#glassGradient)"
              />

              {/* B-Pillar in Matte Obsidian */}
              <rect x="435" y="110" width="10" height="68" fill="#090d16" />

              {/* Side Mirror */}
              <path
                d="M545 168 Q565 160 575 168 Q570 178 548 178 Z"
                fill="#e2e8f0"
                stroke="#64748b"
                strokeWidth="1.5"
              />
              {/* Mirror Indicator Strip (orange pulse) */}
              <path d="M552 170 L568 170" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />

              {/* Crisp Character Lines & Creases along flank */}
              <path
                d="M100 230 C200 220 500 200 810 220"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeOpacity="0.8"
                fill="none"
              />
              <path
                d="M120 234 C220 224 500 204 805 224"
                stroke="#64748b"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                fill="none"
              />

              {/* Lower Sculpted Flank Crease */}
              <path
                d="M295 258 L625 258"
                stroke="#cbd5e1"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Front Aerodynamic Fascia, Grille & Bumper */}
              <path
                d="M770 215 Q825 220 830 240 Q835 255 805 265 L765 268 Z"
                fill="#334155"
              />
              <path
                d="M785 235 L825 235 M780 245 L820 245 M775 255 L810 255"
                stroke="#1e293b"
                strokeWidth="2.5"
              />

              {/* Modern LED Headlight Cluster with Projector and Amber DRL */}
              <path
                d="M760 210 Q800 212 825 225 L795 232 Z"
                fill="#0f172a"
              />
              <path
                d="M765 212 Q800 215 822 225"
                stroke="#ffffff"
                strokeWidth="3"
                filter="drop-shadow(0 0 4px #ffffff)"
              />
              {/* Amber/Orange DRL Accent */}
              <path
                d="M770 217 Q802 219 820 226"
                stroke="#f97316"
                strokeWidth="2"
                filter="drop-shadow(0 0 6px #ea580c)"
              />
              <circle cx="785" cy="222" r="4.5" fill="#e0f2fe" filter="drop-shadow(0 0 5px #38bdf8)" />

              {/* Sleek Rear LED Taillight Blade */}
              <path
                d="M98 220 Q120 215 145 218 L140 228 Q115 228 98 228 Z"
                fill="#dc2626"
                filter="drop-shadow(0 0 6px #ef4444)"
              />
              <path d="M100 222 L142 222" stroke="#fca5a5" strokeWidth="2" />

              {/* Door Handles (Flush Chrome) */}
              <rect x="330" y="200" width="38" height="6" rx="3" fill="#cbd5e1" stroke="#64748b" />
              <rect x="475" y="200" width="38" height="6" rx="3" fill="#cbd5e1" stroke="#64748b" />
              {/* Door Cutlines */}
              <path d="M435 180 L435 268" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.7" />
              <path d="M285 180 L285 268" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.7" />
              <path d="M575 180 L575 268" stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.7" />
            </g>

            {/* 3. Rear Wheel Assembly (Spins during entering, halts on stop) */}
            <g transform="translate(230, 268)">
              {/* Wheel Well Shadow */}
              <circle cx="0" cy="0" r="62" fill="#090d16" />
              {/* Brake Disc */}
              <circle cx="0" cy="0" r="42" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
              {/* Orange Caliper */}
              <path d="M15 -35 A 40 40 0 0 0 -15 -35 L -10 -25 A 30 30 0 0 1 10 -25 Z" fill="#ea580c" />

              {/* Animated Rotating Tire & Multi-Spoke Alloy Rim */}
              <motion.g
                animate={
                  phase === 'entering'
                    ? { rotate: 360 * 3.5 }
                    : phase === 'stopping'
                    ? { rotate: [360 * 3.5, 360 * 3.8, 360 * 3.85] }
                    : { rotate: 0 }
                }
                transition={
                  phase === 'entering'
                    ? { duration: 1.8, ease: 'linear' }
                    : { duration: 0.8, ease: [0.12, 0.9, 0.22, 1] }
                }
              >
                {/* Rubber Tire with Tread Profile */}
                <circle cx="0" cy="0" r="54" stroke="#1e293b" strokeWidth="16" fill="none" />
                <circle cx="0" cy="0" r="46" stroke="#0f172a" strokeWidth="2" fill="none" />
                {/* Outer Alloy Rim */}
                <circle cx="0" cy="0" r="44" stroke="url(#rimGrad)" strokeWidth="4" fill="#0f172a" />
                {/* 10 Precision Alloy Spokes */}
                {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={42 * Math.cos((angle * Math.PI) / 180)}
                    y2={42 * Math.sin((angle * Math.PI) / 180)}
                    stroke="url(#rimGrad)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                ))}
                {/* Center Cap with Chrome Ring */}
                <circle cx="0" cy="0" r="11" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#ea580c" />
              </motion.g>
            </g>

            {/* 4. Front Wheel Assembly (Spins during entering, halts on stop) */}
            <g transform="translate(690, 268)">
              {/* Wheel Well Shadow */}
              <circle cx="0" cy="0" r="62" fill="#090d16" />
              {/* Brake Disc */}
              <circle cx="0" cy="0" r="42" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
              {/* Orange Caliper */}
              <path d="M15 -35 A 40 40 0 0 0 -15 -35 L -10 -25 A 30 30 0 0 1 10 -25 Z" fill="#ea580c" />

              {/* Animated Rotating Tire & Multi-Spoke Alloy Rim */}
              <motion.g
                animate={
                  phase === 'entering'
                    ? { rotate: 360 * 3.5 }
                    : phase === 'stopping'
                    ? { rotate: [360 * 3.5, 360 * 3.8, 360 * 3.85] }
                    : { rotate: 0 }
                }
                transition={
                  phase === 'entering'
                    ? { duration: 1.8, ease: 'linear' }
                    : { duration: 0.8, ease: [0.12, 0.9, 0.22, 1] }
                }
              >
                {/* Rubber Tire */}
                <circle cx="0" cy="0" r="54" stroke="#1e293b" strokeWidth="16" fill="none" />
                <circle cx="0" cy="0" r="46" stroke="#0f172a" strokeWidth="2" fill="none" />
                {/* Outer Alloy Rim */}
                <circle cx="0" cy="0" r="44" stroke="url(#rimGrad)" strokeWidth="4" fill="#0f172a" />
                {/* 10 Precision Alloy Spokes */}
                {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={42 * Math.cos((angle * Math.PI) / 180)}
                    y2={42 * Math.sin((angle * Math.PI) / 180)}
                    stroke="url(#rimGrad)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                ))}
                {/* Center Cap with Chrome Ring */}
                <circle cx="0" cy="0" r="11" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#ea580c" />
              </motion.g>
            </g>

            {/* 5. Automotive Diagnostic Highlight Effects (Orange Outlines & Scanner) */}
            <AnimatePresence>
              {(phase === 'highlighting' || phase === 'complete') && (
                <g id="diagnostic-overlays">
                  {/* Highlight 0: Engine & Powertrain */}
                  {activeHighlight === 0 && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.8, 1] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Hood / Engine Bay Glowing Orange Wireframe Contour */}
                      <path
                        d="M580 180 L680 185 L790 220 L760 210 L660 180 Z"
                        stroke="#f97316"
                        strokeWidth="3.5"
                        fill="rgba(249, 115, 22, 0.12)"
                        filter="url(#orangeGlow)"
                      />
                      <circle cx="680" cy="195" r="8" fill="#f97316" />
                      <circle cx="680" cy="195" r="18" stroke="#f97316" strokeWidth="2" strokeDasharray="4 3" />
                    </motion.g>
                  )}

                  {/* Highlight 1: Front Brakes & Wheels */}
                  {activeHighlight === 1 && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.8, 1] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <circle
                        cx="690"
                        cy="268"
                        r="66"
                        stroke="#f97316"
                        strokeWidth="3.5"
                        fill="rgba(249, 115, 22, 0.1)"
                        filter="url(#orangeGlow)"
                      />
                      <circle cx="690" cy="268" r="8" fill="#f97316" />
                      <circle cx="690" cy="268" r="76" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 4" />
                    </motion.g>
                  )}

                  {/* Highlight 2: Chassis & Rear Suspension */}
                  {activeHighlight === 2 && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.8, 1] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <circle
                        cx="230"
                        cy="268"
                        r="66"
                        stroke="#f97316"
                        strokeWidth="3.5"
                        fill="rgba(249, 115, 22, 0.1)"
                        filter="url(#orangeGlow)"
                      />
                      <path
                        d="M230 268 L690 268"
                        stroke="#f97316"
                        strokeWidth="2.5"
                        strokeDasharray="8 4"
                      />
                    </motion.g>
                  )}

                  {/* Highlight 3: LED Lighting & Battery */}
                  {activeHighlight === 3 && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.8, 1] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Forward Headlight Projector Beam in Vibrant Orange Glow */}
                      <path
                        d="M820 220 L900 210 L900 240 Z"
                        fill="rgba(249, 115, 22, 0.3)"
                        filter="url(#orangeGlow)"
                      />
                      <circle cx="820" cy="225" r="9" fill="#f97316" filter="url(#orangeGlow)" />
                    </motion.g>
                  )}
                </g>
              )}
            </AnimatePresence>
          </svg>

          {/* 6. Diagnostic Telemetry Callout Badges with Connecting Lines */}
          <AnimatePresence>
            {(phase === 'highlighting' || phase === 'complete') && (
              <div className="absolute inset-0 pointer-events-none">
                {highlights.map((item, index) => {
                  const isCurrent = activeHighlight === index;
                  if (!isCurrent && phase !== 'complete') return null;

                  // When complete, show a refined, subtle diagnostic badge
                  if (phase === 'complete' && index !== 0) return null;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      style={{
                        position: 'absolute',
                        left: phase === 'complete' ? '60%' : item.labelX,
                        top: phase === 'complete' ? '2%' : item.labelY,
                      }}
                      className="z-20"
                    >
                      <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white/95 border border-orange-500 text-neutral-900 rounded-sm shadow-xl shadow-orange-600/15 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block leading-tight">
                            {phase === 'complete' ? 'Vehicle Inspection Complete' : item.title}
                          </span>
                          <span className="text-[11px] font-semibold text-neutral-800 block leading-tight">
                            {phase === 'complete' ? '100% Quality & Safety Verified' : item.status}
                          </span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Progress pill indicator while animation runs */}
      {phase !== 'complete' && (
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-500 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
          <span>Vehicle Inspection in Progress · Click to Skip</span>
        </div>
      )}
    </div>
  );
}
