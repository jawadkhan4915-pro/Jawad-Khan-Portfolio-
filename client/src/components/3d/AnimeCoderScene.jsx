import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────────
   AnimeCoderScene – Anime-style SVG background with a chibi
   Japanese coder character. Uses animejs v4 named API + CSS
   animations for a stunning, lag-free experience.
───────────────────────────────────────────────────────────────── */

export const AnimeCoderScene = () => {
  const containerRef = useRef(null);
  const animsRef = useRef([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        // animejs v4 uses named exports
        const animeModule = await import('animejs');
        if (!mounted) return;

        // In animejs v4 the main animate fn is a named export
        const animate = animeModule.animate || animeModule.default?.animate;
        const createTimeline = animeModule.createTimeline || animeModule.default?.createTimeline;

        if (!animate) {
          console.warn('AnimeCoderScene: animate not found in animejs exports');
          return;
        }

        const el = containerRef.current;
        if (!el) return;

        const qs = (sel) => el.querySelector(sel);
        const qsa = (sel) => [...(el.querySelectorAll(sel) || [])];

        // ── Code particles float up ────────────────────────────
        qsa('.code-particle').forEach((p, i) => {
          animsRef.current.push(
            animate(p, {
              translateY: [0, -55, 0],
              translateX: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.6, 1, 0.6],
              duration: 3000 + i * 350,
              ease: 'inOutSine',
              loop: true,
              delay: i * 400,
            })
          );
        });

        // ── Cherry blossom petals drift and fall ───────────────
        qsa('.petal').forEach((petal, i) => {
          animsRef.current.push(
            animate(petal, {
              translateY: [0, 90 + i * 8],
              translateX: [-20 + (i * 12), 20 - (i * 12)],
              rotate: [0, 360],
              opacity: [{ to: 0, duration: 0 }, { to: 0.85, duration: 600 }, { to: 0.85, duration: 3000 }, { to: 0, duration: 1000 }],
              duration: 5000 + i * 450,
              ease: 'inOutQuad',
              loop: true,
              delay: i * 700,
            })
          );
        });

        // ── Monitor screen glow ────────────────────────────────
        qsa('.monitor-glow').forEach((g) => {
          animsRef.current.push(
            animate(g, {
              opacity: [0.4, 0.8, 0.4],
              duration: 2400,
              ease: 'inOutSine',
              loop: true,
            })
          );
        });

        // ── Cursor blink ───────────────────────────────────────
        const cursor = qs('.code-cursor');
        if (cursor) {
          animsRef.current.push(
            animate(cursor, {
              opacity: [1, 0, 1],
              duration: 900,
              ease: 'steps(1)',
              loop: true,
            })
          );
        }

        // ── Holographic rings pulse ────────────────────────────
        qsa('.holo-ring').forEach((ring, i) => {
          animsRef.current.push(
            animate(ring, {
              scale: [1, 1.12, 1],
              opacity: [0.15, 0.55, 0.15],
              duration: 3200 + i * 700,
              ease: 'inOutSine',
              loop: true,
              delay: i * 500,
            })
          );
        });

        // ── Chibi character idle bounce ────────────────────────
        const character = qs('.chibi-group');
        if (character) {
          animsRef.current.push(
            animate(character, {
              translateY: [0, -7, 0],
              duration: 2600,
              ease: 'inOutSine',
              loop: true,
            })
          );
        }

        // ── Glasses glint flash ────────────────────────────────
        const glint = qs('.glasses-glint');
        if (glint) {
          animsRef.current.push(
            animate(glint, {
              opacity: [0, 1, 0],
              translateX: [0, 10],
              duration: 1600,
              ease: 'outQuart',
              loop: true,
              delay: 3000,
              loopDelay: 4500,
            })
          );
        }

        // ── Data stream lines dash ─────────────────────────────
        qsa('.data-stream').forEach((s, i) => {
          animsRef.current.push(
            animate(s, {
              strokeDashoffset: [30, 0],
              opacity: [0, 0.7, 0],
              duration: 2200 + i * 300,
              ease: 'inOutQuart',
              loop: true,
              delay: i * 600,
            })
          );
        });

        // ── Code lines flicker ─────────────────────────────────
        qsa('.code-line-anim').forEach((line, i) => {
          animsRef.current.push(
            animate(line, {
              opacity: [0.15, 0.95, 0.15],
              duration: 1400,
              ease: 'inOutSine',
              loop: true,
              delay: i * 320,
            })
          );
        });

        // ── Neon grid scroll ───────────────────────────────────
        const grid = qs('.neon-grid');
        if (grid) {
          animsRef.current.push(
            animate(grid, {
              translateY: [0, 32],
              duration: 7000,
              ease: 'linear',
              loop: true,
            })
          );
        }

        // ── Coffee steam rise ──────────────────────────────────
        qsa('.steam').forEach((s, i) => {
          animsRef.current.push(
            animate(s, {
              translateY: [0, -20],
              opacity: [0.7, 0],
              duration: 1800 + i * 200,
              ease: 'outQuad',
              loop: true,
              delay: i * 400,
            })
          );
        });

        // ── Ambient dots float ─────────────────────────────────
        qsa('.ambient-dot').forEach((dot, i) => {
          animsRef.current.push(
            animate(dot, {
              translateY: [0, -(14 + i * 2), 0],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.05, 0.8],
              duration: 5000 + i * 250,
              ease: 'inOutSine',
              loop: true,
              delay: i * 350,
            })
          );
        });

        // ── Typing effect on monitor: cycle through code lines ─
        let lineIdx = 0;
        const typingLines = qsa('.typing-line');
        if (typingLines.length > 0) {
          const cycleLines = () => {
            typingLines.forEach((l, i) => {
              l.style.opacity = i === lineIdx ? '1' : '0.15';
            });
            lineIdx = (lineIdx + 1) % typingLines.length;
          };
          const id = setInterval(cycleLines, 800);
          animsRef.current.push({ pause: () => clearInterval(id) });
        }

        // ── Wifi signal bars animate ───────────────────────────
        qsa('.wifi-bar').forEach((bar, i) => {
          animsRef.current.push(
            animate(bar, {
              opacity: [0.2, 1, 0.2],
              duration: 1200,
              ease: 'inOutSine',
              loop: true,
              delay: i * 200,
            })
          );
        });

      } catch (err) {
        console.warn('AnimeCoderScene animation error:', err.message);
      }
    };

    init();

    return () => {
      mounted = false;
      animsRef.current.forEach(a => { try { a.pause?.(); } catch (_) {} });
      animsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ── Scene background gradient ──────────────────────── */}
      <div className="anime-bg-gradient" />

      {/* ── Neon grid floor ─────────────────────────────────── */}
      <svg className="neon-grid absolute bottom-0 left-0 w-full" height="280" viewBox="0 0 1440 280" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gridFadeG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(200,169,110,0.20)" />
            <stop offset="100%" stopColor="rgba(200,169,110,0.0)" />
          </linearGradient>
        </defs>
        {[40,80,120,160,200,240,280].map(y => (
          <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="url(#gridFadeG)" strokeWidth="0.9" />
        ))}
        {Array.from({ length: 25 }, (_, i) => i * 60).map(x => (
          <line key={x} x1={x} y1="0" x2={x + 70} y2="280" stroke="rgba(125,174,130,0.13)" strokeWidth="0.7" />
        ))}
      </svg>

      {/* ── Main scene SVG ────────────────────────────────── */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="820"
        height="540"
        viewBox="0 0 820 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients & Filters */}
          <radialGradient id="monGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7ECFFF" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#C8A96E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="deskGlow2" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#7DAE82" stopOpacity="0.20" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="neonF" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softF" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="screenF" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="1.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* SVG Patterns & Clips */}
          <clipPath id="mainScreen">
            <rect x="262" y="160" width="192" height="128" rx="4" />
          </clipPath>
          <clipPath id="sideScreen">
            <rect x="486" y="148" width="158" height="116" rx="4" />
          </clipPath>
          {/* Fills */}
          <linearGradient id="screenBg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#060e1e" />
            <stop offset="100%" stopColor="#040f0c" />
          </linearGradient>
          <linearGradient id="deskGd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3c28" />
            <stop offset="100%" stopColor="#1a1d14" />
          </linearGradient>
          <linearGradient id="monGd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2d26" />
            <stop offset="100%" stopColor="#1a1d14" />
          </linearGradient>
          <linearGradient id="chairGd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2e1f14" />
            <stop offset="100%" stopColor="#0e0905" />
          </linearGradient>
          <linearGradient id="skinGd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDDBB4" />
            <stop offset="100%" stopColor="#F5C890" />
          </linearGradient>
          <linearGradient id="hairGd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#18083a" />
            <stop offset="100%" stopColor="#2c1060" />
          </linearGradient>
          <linearGradient id="hoodiGd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f4eb5" />
            <stop offset="50%" stopColor="#1a3e7a" />
            <stop offset="100%" stopColor="#102560" />
          </linearGradient>
          <linearGradient id="pocketGd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a3e7a" />
            <stop offset="100%" stopColor="#0f2348" />
          </linearGradient>
          <linearGradient id="cupGd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a3a1a" />
            <stop offset="100%" stopColor="#3a2210" />
          </linearGradient>
          <linearGradient id="streamG1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7ECFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#7ECFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7ECFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="streamG2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7DAE82" stopOpacity="0" />
            <stop offset="50%" stopColor="#7DAE82" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7DAE82" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ─ AMBIENT DESK GLOW ─────────────────────────────── */}
        <ellipse cx="410" cy="445" rx="360" ry="55" fill="url(#deskGlow2)" opacity="0.55" />

        {/* ─ HOLOGRAPHIC RINGS ──────────────────────────────── */}
        <circle className="holo-ring" cx="410" cy="295" r="215" stroke="#C8A96E" strokeWidth="0.6" opacity="0.13" />
        <circle className="holo-ring" cx="410" cy="295" r="168" stroke="#7DAE82" strokeWidth="0.5" opacity="0.10" />
        <circle className="holo-ring" cx="410" cy="295" r="122" stroke="#7ECFFF" strokeWidth="0.5" opacity="0.15" />

        {/* ─ DESK ──────────────────────────────────────────── */}
        <rect x="112" y="390" width="596" height="24" rx="7" fill="url(#deskGd)" />
        <rect x="112" y="390" width="596" height="4" rx="2" fill="#C8A96E" opacity="0.18" />
        <rect x="112" y="390" width="596" height="1.5" rx="1" fill="rgba(255,255,255,0.07)" />
        {/* Legs */}
        <rect x="145" y="414" width="20" height="90" rx="5" fill="#222518" />
        <rect x="655" y="414" width="20" height="90" rx="5" fill="#222518" />
        {/* Leg bars */}
        <rect x="142" y="458" width="26" height="6" rx="3" fill="#1a1d14" />
        <rect x="652" y="458" width="26" height="6" rx="3" fill="#1a1d14" />

        {/* ─ DATA STREAMS ──────────────────────────────────── */}
        <line className="data-stream" x1="155" y1="350" x2="335" y2="390" stroke="url(#streamG1)" strokeWidth="1.6" strokeDasharray="9 7" />
        <line className="data-stream" x1="665" y1="330" x2="485" y2="388" stroke="url(#streamG2)" strokeWidth="1.6" strokeDasharray="9 7" />
        <line className="data-stream" x1="215" y1="210" x2="300" y2="290" stroke="#C8A96E" strokeWidth="1.1" strokeDasharray="6 9" opacity="0.38" />
        <line className="data-stream" x1="605" y1="215" x2="520" y2="272" stroke="#7DAE82" strokeWidth="1.1" strokeDasharray="6 9" opacity="0.38" />

        {/* ─ SIDE MONITOR (right) ──────────────────────────── */}
        <rect x="482" y="244" width="166" height="122" rx="8" fill="url(#monGd)" />
        <rect x="486" y="248" width="158" height="114" rx="5" fill="url(#screenBg2)" />
        <g clipPath="url(#sideScreen)">
          <rect x="486" y="248" width="158" height="114" fill="url(#screenBg2)" />
          {/* Terminal bar */}
          <rect x="486" y="248" width="158" height="14" fill="#0a1a2e" />
          <circle cx="494" cy="255" r="3" fill="#FF6B6B" />
          <circle cx="504" cy="255" r="3" fill="#FFD93D" />
          <circle cx="514" cy="255" r="3" fill="#6BCB77" />
          <text x="528" y="259" fill="#516070" fontSize="5.5" fontFamily="monospace">portfolio.jsx</text>
          {/* Code content */}
          <text className="code-line-anim typing-line" x="492" y="278" fill="#7ECFFF" fontSize="7" fontFamily="monospace">import React from 'react'</text>
          <text className="code-line-anim typing-line" x="492" y="289" fill="#C8A96E" fontSize="7" fontFamily="monospace">const App = () =&gt; {'{'}</text>
          <text className="code-line-anim typing-line" x="499" y="300" fill="#7DAE82" fontSize="7" fontFamily="monospace">  return &lt;div&gt;</text>
          <text className="code-line-anim typing-line" x="499" y="311" fill="#D4C5A9" fontSize="7" fontFamily="monospace">    &lt;Hero /&gt;</text>
          <text className="code-line-anim typing-line" x="499" y="322" fill="#D4C5A9" fontSize="7" fontFamily="monospace">    &lt;Skills /&gt;</text>
          <text className="code-line-anim typing-line" x="499" y="333" fill="#7DAE82" fontSize="7" fontFamily="monospace">  &lt;/div&gt;</text>
          <text className="code-line-anim typing-line" x="492" y="344" fill="#C8A96E" fontSize="7" fontFamily="monospace">{'}'}</text>
          <text className="code-line-anim typing-line" x="492" y="355" fill="#FF6B9D" fontSize="7" fontFamily="monospace">export default App</text>
        </g>
        {/* Side monitor stand */}
        <rect x="552" y="366" width="28" height="12" rx="3" fill="#252825" />
        <rect x="542" y="378" width="48" height="6" rx="3" fill="#1a1d14" />
        {/* Side monitor LED */}
        <circle cx="638" cy="253" r="2.5" fill="#7DAE82" filter="url(#neonF)" />
        {/* Side monitor glow overlay */}
        <rect className="monitor-glow" x="482" y="244" width="166" height="122" rx="8" fill="url(#monGlow2)" opacity="0.38" />

        {/* ─ MAIN MONITOR (center-left) ────────────────────── */}
        <rect x="258" y="156" width="200" height="134" rx="9" fill="url(#monGd)" />
        <rect x="262" y="160" width="192" height="126" rx="6" fill="url(#screenBg2)" />
        <g clipPath="url(#mainScreen)">
          <rect x="262" y="160" width="192" height="128" fill="url(#screenBg2)" />
          {/* Terminal bar */}
          <rect x="262" y="160" width="192" height="16" fill="#071322" />
          <circle cx="271" cy="168" r="3.5" fill="#FF6B6B" />
          <circle cx="282" cy="168" r="3.5" fill="#FFD93D" />
          <circle cx="293" cy="168" r="3.5" fill="#6BCB77" />
          <text x="312" y="172" fill="#516070" fontSize="5.5" fontFamily="monospace">jawad@portfolio:~$</text>
          {/* Terminal content */}
          <text className="code-line-anim" x="268" y="192" fill="#7ECFFF" fontSize="7.5" fontFamily="monospace">$ npm run dev</text>
          <text className="code-line-anim" x="268" y="204" fill="#7DAE82" fontSize="7" fontFamily="monospace">  ✓ ready on :5173</text>
          <text className="code-line-anim" x="268" y="216" fill="#C8A96E" fontSize="7" fontFamily="monospace">  ✓ 142 modules loaded</text>
          <text className="code-line-anim" x="268" y="228" fill="#FF6B9D" fontSize="7" fontFamily="monospace">  → anime scene active</text>
          <text className="code-line-anim" x="268" y="240" fill="#D4C5A9" fontSize="7" fontFamily="monospace">  ⚡ HMR watching...</text>
          {/* Blinking cursor line */}
          <text x="268" y="255" fill="#7ECFFF" fontSize="7.5" fontFamily="monospace">$ <tspan className="code-cursor">▋</tspan></text>
        </g>
        {/* Monitor stand */}
        <rect x="338" y="290" width="26" height="14" rx="3" fill="#252825" />
        <rect x="328" y="304" width="46" height="7" rx="3" fill="#1a1d14" />
        {/* Main monitor LED */}
        <circle cx="450" cy="162" r="2.5" fill="#7ECFFF" filter="url(#neonF)" />
        {/* Main monitor glow */}
        <rect className="monitor-glow" x="258" y="156" width="200" height="134" rx="9" fill="url(#monGlow2)" opacity="0.42" />

        {/* ─ KEYBOARD ─────────────────────────────────────── */}
        <rect x="255" y="394" width="185" height="16" rx="4" fill="#252825" />
        {[400, 408, 416].map((y, ri) =>
          Array.from({ length: 14 }, (_, ki) => (
            <rect key={`k${ri}${ki}`}
              x={259 + ki * 12} y={y} width="10" height="6" rx="2"
              fill={ki === 4 && ri === 1 ? '#C8A96E' : '#1a1d14'}
              stroke="rgba(200,169,110,0.13)" strokeWidth="0.5" />
          ))
        )}

        {/* ─ MOUSE ─────────────────────────────────────────── */}
        <rect x="462" y="396" width="26" height="38" rx="10" fill="#1e2218" stroke="rgba(200,169,110,0.2)" strokeWidth="1" />
        <line x1="475" y1="396" x2="475" y2="415" stroke="rgba(200,169,110,0.25)" strokeWidth="1" />
        <rect x="471" y="400" width="8" height="3" rx="1.5" fill="#C8A96E" opacity="0.3" />

        {/* ─ COFFEE MUG ────────────────────────────────────── */}
        {/* Steam */}
        <path className="steam" d="M165 366 Q169 357 165 346" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path className="steam" d="M173 369 Q177 358 173 348" stroke="rgba(255,255,255,0.22)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path className="steam" d="M181 366 Q185 356 181 345" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Cup body */}
        <path d="M152 373 L157 396 L192 396 L197 373 Z" fill="url(#cupGd)" />
        <rect x="152" y="369" width="45" height="8" rx="4" fill="#6a4020" />
        {/* Handle */}
        <path d="M197 378 Q213 378 213 386 Q213 393 197 393" stroke="#6a4020" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        {/* Coffee surface */}
        <rect x="155" y="373" width="37" height="5" rx="2" fill="#1e0a04" opacity="0.9" />
        {/* Cup text */}
        <text x="165" y="389" fill="rgba(200,169,110,0.55)" fontSize="8.5" fontFamily="monospace">&lt;/&gt;</text>

        {/* ─ BOOKS ─────────────────────────────────────────── */}
        <rect x="112" y="372" width="36" height="9" rx="2.5" fill="#4a2a6a" />
        <rect x="114" y="363" width="33" height="9" rx="2.5" fill="#1a4a7a" />
        <rect x="116" y="354" width="29" height="9" rx="2.5" fill="#5a1a1a" />
        <rect x="112" y="372" width="4" height="9" fill="#6a3a8a" />
        <rect x="114" y="363" width="4" height="9" fill="#2a5a8a" />
        <rect x="116" y="354" width="4" height="9" fill="#7a2a2a" />
        {/* Book titles (tiny lines) */}
        <line x1="120" y1="376" x2="144" y2="376" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
        <line x1="122" y1="367" x2="143" y2="367" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />

        {/* ─ PLANT ─────────────────────────────────────────── */}
        <path d="M680 375 L673 396 L703 396 L696 375 Z" fill="#6a3a1a" />
        <rect x="669" y="371" width="37" height="7" rx="3" fill="#7a4a2a" />
        <ellipse cx="686" cy="373" rx="16" ry="5" fill="#2a1a0a" />
        {/* Stems */}
        <path d="M686 373 Q676 355 664 345" stroke="#5a8a3a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M686 373 Q697 350 707 340" stroke="#5a8a3a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M686 373 Q683 353 680 337" stroke="#5a8a3a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {/* Leaves */}
        <ellipse cx="660" cy="342" rx="13" ry="7" fill="#5a9a4a" transform="rotate(-30 660 342)" />
        <ellipse cx="710" cy="337" rx="13" ry="7" fill="#7aaa5a" transform="rotate(30 710 337)" />
        <ellipse cx="677" cy="333" rx="11" ry="6" fill="#6a9a5a" transform="rotate(-10 677 333)" />
        {/* Leaf veins */}
        <line x1="660" y1="342" x2="652" y2="335" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <line x1="710" y1="337" x2="718" y2="330" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

        {/* ─ HEADPHONE CORD ────────────────────────────────── */}
        <path d="M359 268 Q320 310 310 330" stroke="#888" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />

        {/* ─ CHAIR ─────────────────────────────────────────── */}
        {/* Back */}
        <rect x="326" y="296" width="128" height="98" rx="12" fill="url(#chairGd)" />
        <rect x="330" y="300" width="120" height="90" rx="10" fill="#1a100a" opacity="0.45" />
        {/* Horizontal seam lines */}
        <line x1="330" y1="328" x2="450" y2="328" stroke="rgba(200,169,110,0.09)" strokeWidth="1" />
        <line x1="330" y1="356" x2="450" y2="356" stroke="rgba(200,169,110,0.09)" strokeWidth="1" />
        {/* Armrests */}
        <rect x="302" y="356" width="24" height="10" rx="5" fill="#1a100a" />
        <rect x="454" y="356" width="24" height="10" rx="5" fill="#1a100a" />
        {/* Seat */}
        <rect x="314" y="400" width="152" height="18" rx="9" fill="url(#chairGd)" />
        {/* Post */}
        <rect x="380" y="418" width="20" height="44" rx="4" fill="#0a0806" />
        {/* Base */}
        <ellipse cx="390" cy="464" rx="40" ry="7" fill="#0a0806" />
        <circle cx="354" cy="466" r="6" fill="#141210" />
        <circle cx="390" cy="468" r="6" fill="#141210" />
        <circle cx="426" cy="466" r="6" fill="#141210" />

        {/* ─ FLOATING CODE PARTICLES ───────────────────────── */}
        {[
          { x: 62,  y: 205, text: 'const',    color: '#7ECFFF' },
          { x: 696, y: 185, text: '() =>',    color: '#C8A96E' },
          { x: 92,  y: 132, text: '{',        color: '#7DAE82' },
          { x: 728, y: 265, text: 'async',    color: '#FF6B9D' },
          { x: 52,  y: 295, text: 'await',    color: '#C8A96E' },
          { x: 740, y: 133, text: 'return',   color: '#7ECFFF' },
          { x: 138, y: 82,  text: '.map()',   color: '#7DAE82' },
          { x: 665, y: 82,  text: 'useState', color: '#FF6B9D' },
          { x: 705, y: 340, text: '.then()',  color: '#C8A96E' },
          { x: 75,  y: 360, text: 'export',   color: '#7ECFFF' },
        ].map((item, i) => (
          <text
            key={i}
            className="code-particle"
            x={item.x} y={item.y}
            fill={item.color}
            fontSize="11.5"
            fontFamily="monospace"
            fontWeight="600"
            opacity="0.52"
            filter="url(#neonF)"
          >{item.text}</text>
        ))}

        {/* ─ CHERRY BLOSSOM PETALS ──────────────────────────── */}
        {[
          { x: 82,  y: 118, r: 22  },
          { x: 706, y: 98,  r: -32 },
          { x: 148, y: 58,  r: 47  },
          { x: 650, y: 148, r: -18 },
          { x: 210, y: 188, r: 62  },
          { x: 596, y: 68,  r: -48 },
          { x: 30,  y: 268, r: 12  },
          { x: 778, y: 205, r: 74  },
          { x: 740, y: 440, r: -22 },
          { x: 60,  y: 440, r: 35  },
        ].map((p, i) => (
          <g key={i} className="petal" transform={`translate(${p.x},${p.y}) rotate(${p.r})`} opacity="0">
            <ellipse cx="0" cy="-8" rx="5.5" ry="9" fill="#FFB7C5" opacity="0.85" />
            <ellipse cx="0" cy="-8" rx="5.5" ry="9" fill="#FF8FA3" opacity="0.85" transform="rotate(72)" />
            <ellipse cx="0" cy="-8" rx="5.5" ry="9" fill="#FFB7C5" opacity="0.85" transform="rotate(144)" />
            <ellipse cx="0" cy="-8" rx="5.5" ry="9" fill="#FF8FA3" opacity="0.85" transform="rotate(216)" />
            <ellipse cx="0" cy="-8" rx="5.5" ry="9" fill="#FFB7C5" opacity="0.85" transform="rotate(288)" />
            <circle cx="0" cy="0" r="3" fill="#FFE5ED" />
          </g>
        ))}

        {/* ─ STATIC STARS ──────────────────────────────────── */}
        {[
          [78, 78], [716, 58], [160, 44], [638, 92], [36, 178], [762, 150], [510, 48], [270, 38],
          [480, 465], [310, 480], [560, 475],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={1.5 + (i % 2) * 0.5} fill="#C8A96E" opacity={0.45 + (i % 3) * 0.18} />
            <circle cx={x + 11} cy={y - 9} r={1 + (i % 2) * 0.4} fill="#7ECFFF" opacity={0.38 + (i % 4) * 0.12} />
          </g>
        ))}

        {/* ─ WIFI SIGNAL (top right corner) ───────────────── */}
        <g transform="translate(750, 58)" opacity="0.5">
          <path className="wifi-bar" d="M-14 0 Q0 -14 14 0" stroke="#7ECFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path className="wifi-bar" d="M-9 5 Q0 -3 9 5" stroke="#7ECFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path className="wifi-bar" d="M-4 10 Q0 6 4 10" stroke="#7ECFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <circle cx="0" cy="13" r="2.5" fill="#7ECFFF" />
        </g>

        {/* ─ BATTERY (top left corner) ─────────────────────── */}
        <g transform="translate(68, 58)" opacity="0.42">
          <rect x="-18" y="-7" width="32" height="14" rx="4" stroke="#7DAE82" strokeWidth="1.5" fill="none" />
          <rect x="14" y="-4" width="5" height="8" rx="1.5" fill="#7DAE82" />
          <rect x="-16" y="-5" width="25" height="10" rx="2.5" fill="#7DAE82" opacity="0.65" />
        </g>
      </svg>

      {/* ── Ambient floating dots ────────────────────────── */}
      {Array.from({ length: 22 }, (_, i) => (
        <div
          key={i}
          className="ambient-dot"
          style={{
            left: `${4 + i * 4.4}%`,
            top: `${8 + ((i * 41) % 72)}%`,
            animationDelay: `${i * 0.32}s`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            backgroundColor: i % 3 === 0 ? '#C8A96E' : i % 3 === 1 ? '#7DAE82' : '#7ECFFF',
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};
