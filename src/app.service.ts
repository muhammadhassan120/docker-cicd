import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MUQADDAM - Cloud & DevOps Engineer from Karachi, Pakistan. AWS, Terraform, Docker, CI/CD.">
  <meta name="keywords" content="Cloud Engineer, DevOps, AWS, Terraform, Docker, Karachi, Pakistan">
  <meta name="author" content="Muqaddam">
  <title>MUQADDAM — Cloud & DevOps Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <style>
    /* ============================================================
       RESET & CSS VARIABLES
    ============================================================ */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg:           #0a0a0f;
      --bg2:          #0d0d16;
      --bg3:          #111120;
      --blue:         #00d4ff;
      --blue-lt:      #33ddff;
      --blue-dk:      #0099cc;
      --blue-glow:    rgba(0,212,255,0.40);
      --blue-dim:     rgba(0,212,255,0.12);
      --blue-trace:   rgba(0,212,255,0.05);
      --gold:         #ffd700;
      --gold-lt:      #ffe340;
      --gold-glow:    rgba(255,215,0,0.30);
      --gold-dim:     rgba(255,215,0,0.10);
      --purple:       #9b59ff;
      --green:        #00ff88;
      --white:        #ffffff;
      --w90:          rgba(255,255,255,0.90);
      --w70:          rgba(255,255,255,0.70);
      --w50:          rgba(255,255,255,0.50);
      --w30:          rgba(255,255,255,0.30);
      --w15:          rgba(255,255,255,0.15);
      --w08:          rgba(255,255,255,0.08);
      --w04:          rgba(255,255,255,0.04);
      --glass:        rgba(255,255,255,0.04);
      --glass2:       rgba(255,255,255,0.07);
      --glass-b:      rgba(255,255,255,0.08);
      --r-xs:   6px;  --r-sm: 10px;
      --r:      16px; --r-lg: 24px;
      --r-xl:   32px;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Space Grotesk', sans-serif;
      background: var(--bg);
      color: var(--white);
      overflow-x: hidden;
      cursor: none;
      line-height: 1.6;
    }

    a, button { cursor: none; }

    /* ============================================================
       SCROLLBAR
    ============================================================ */
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, var(--blue), var(--gold));
      border-radius: 3px;
    }

    /* ============================================================
       CUSTOM CURSOR
    ============================================================ */
    #cursor-dot {
      position: fixed; width: 8px; height: 8px;
      background: var(--blue); border-radius: 50%;
      pointer-events: none; z-index: 10000;
      transform: translate(-50%,-50%);
      transition: width 0.2s, height 0.2s, background 0.2s;
      box-shadow: 0 0 12px var(--blue), 0 0 24px var(--blue-glow);
      mix-blend-mode: screen;
    }
    #cursor-ring {
      position: fixed; width: 38px; height: 38px;
      border: 1.5px solid rgba(0,212,255,0.55);
      border-radius: 50%; pointer-events: none; z-index: 9999;
      transform: translate(-50%,-50%);
      transition: width 0.35s ease, height 0.35s ease, border-color 0.35s;
    }
    .cursor-expand #cursor-ring {
      width: 64px; height: 64px; border-color: var(--gold);
    }

    /* ============================================================
       CANVAS (PARTICLES)
    ============================================================ */
    #particles-canvas {
      position: fixed; inset: 0;
      z-index: 0; pointer-events: none; opacity: 0.65;
    }

    /* ============================================================
       AURORA BACKGROUND
    ============================================================ */
    .aurora {
      position: fixed; inset: 0; z-index: 0;
      overflow: hidden; pointer-events: none;
    }
    .aurora-blob {
      position: absolute; border-radius: 50%;
      filter: blur(110px); opacity: 0.11;
    }
    .ab1 {
      width: 750px; height: 750px;
      background: radial-gradient(circle, var(--blue), transparent 70%);
      top: -20%; left: -15%;
      animation: ab1 18s ease-in-out infinite;
    }
    .ab2 {
      width: 550px; height: 550px;
      background: radial-gradient(circle, var(--gold), transparent 70%);
      bottom: -12%; right: -12%;
      animation: ab2 23s ease-in-out infinite;
    }
    .ab3 {
      width: 450px; height: 450px;
      background: radial-gradient(circle, var(--purple), transparent 70%);
      top: 40%; left: 38%;
      animation: ab3 30s ease-in-out infinite;
      opacity: 0.07;
    }
    @keyframes ab1 {
      0%,100% { transform: translate(0,0) scale(1); }
      33%  { transform: translate(90px,70px) scale(1.08); }
      66%  { transform: translate(-50px,90px) scale(0.94); }
    }
    @keyframes ab2 {
      0%,100% { transform: translate(0,0) scale(1); }
      33%  { transform: translate(-80px,-55px) scale(1.12); }
      66%  { transform: translate(50px,-70px) scale(0.9); }
    }
    @keyframes ab3 {
      0%,100% { transform: translate(0,0) scale(1); }
      50%  { transform: translate(60px,-60px) scale(1.5); }
    }

    /* ============================================================
       OVERLAYS (NOISE + GRID)
    ============================================================ */
    .noise-overlay {
      position: fixed; inset: 0; z-index: 1;
      pointer-events: none; opacity: 0.025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 256px;
    }
    .grid-overlay {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
      background-size: 64px 64px;
    }

    /* ============================================================
       NAVIGATION
    ============================================================ */
    nav#main-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 1.8rem 5rem;
      display: flex; align-items: center; justify-content: space-between;
      transition: all 0.45s cubic-bezier(0.4,0,0.2,1);
    }
    nav#main-nav.scrolled {
      padding: 1rem 5rem;
      background: rgba(10,10,15,0.88);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border-bottom: 1px solid var(--glass-b);
    }
    .nav-logo {
      font-size: 1.45rem; font-weight: 700;
      letter-spacing: 3px; text-decoration: none;
      background: linear-gradient(135deg, var(--blue) 0%, var(--gold) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: 'JetBrains Mono', monospace;
      transition: letter-spacing 0.3s;
    }
    .nav-logo:hover { letter-spacing: 6px; }
    .nav-links { display: flex; align-items: center; gap: 2.75rem; list-style: none; }
    .nav-links a {
      color: var(--w70); text-decoration: none;
      font-size: 0.8rem; font-weight: 500;
      letter-spacing: 1.8px; text-transform: uppercase;
      position: relative; transition: color 0.3s;
    }
    .nav-links a::after {
      content: ''; position: absolute;
      bottom: -5px; left: 0;
      width: 0; height: 1px; background: var(--blue);
      transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    .nav-links a:hover { color: var(--white); }
    .nav-links a:hover::after { width: 100%; }
    .nav-cta-btn {
      padding: 0.6rem 1.5rem !important;
      background: linear-gradient(135deg, var(--blue), var(--blue-dk)) !important;
      color: #000 !important; font-weight: 700 !important;
      border-radius: var(--r-xs);
      box-shadow: 0 0 22px var(--blue-glow);
      transition: box-shadow 0.3s, transform 0.3s !important;
      -webkit-text-fill-color: #000 !important;
    }
    .nav-cta-btn:hover {
      box-shadow: 0 0 48px var(--blue-glow) !important;
      transform: translateY(-2px);
    }
    .nav-cta-btn::after { display: none !important; }
    .hamburger-btn {
      display: none; flex-direction: column; gap: 5px; background: none;
      border: none; padding: 5px;
    }
    .hamburger-btn span {
      display: block; width: 22px; height: 2px;
      background: var(--w70); border-radius: 2px; transition: all 0.3s;
    }

    /* Mobile nav */
    .mobile-nav {
      position: fixed; inset: 0; z-index: 998;
      background: rgba(10,10,15,0.97);
      backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
      display: flex; flex-direction: column;
      justify-content: center; align-items: center; gap: 3.5rem;
      opacity: 0; pointer-events: none;
      transition: opacity 0.4s ease;
    }
    .mobile-nav.open { opacity: 1; pointer-events: all; }
    .mobile-nav a {
      font-size: 2.8rem; font-weight: 700; text-decoration: none;
      color: var(--w70); letter-spacing: 5px; text-transform: uppercase;
      transition: color 0.3s;
    }
    .mobile-nav a:hover { color: var(--blue); }
    .mob-close-btn {
      position: absolute; top: 2rem; right: 2.5rem;
      background: none; border: none;
      color: var(--w70); font-size: 1.6rem; transition: color 0.3s;
    }
    .mob-close-btn:hover { color: var(--white); }

    /* ============================================================
       HERO SECTION
    ============================================================ */
    #hero {
      position: relative; z-index: 2;
      min-height: 100vh;
      display: flex; flex-direction: column;
      justify-content: center; align-items: center;
      text-align: center; padding: 8rem 2rem 5rem;
      overflow: hidden;
    }

    /* Pulsing orb behind hero */
    .hero-orb {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      width: min(85vw, 680px); height: min(85vw, 680px);
      border-radius: 50%;
      background: radial-gradient(circle at 32% 30%, rgba(0,212,255,0.07), transparent 60%);
      border: 1px solid rgba(0,212,255,0.06);
      animation: orbPulse 7s ease-in-out infinite;
      pointer-events: none;
    }
    .hero-orb::before {
      content: ''; position: absolute; inset: 40px; border-radius: 50%;
      border: 1px solid rgba(255,215,0,0.045);
      animation: orbPulse 7s ease-in-out infinite reverse;
    }
    .hero-orb::after {
      content: ''; position: absolute; inset: 100px; border-radius: 50%;
      border: 1px solid rgba(0,212,255,0.07);
      animation: orbPulse 9s ease-in-out infinite;
    }
    @keyframes orbPulse {
      0%,100% { transform: scale(1); opacity: 1; }
      50%      { transform: scale(1.06); opacity: 0.7; }
    }

    /* 3D CSS CUBE — big, top-right */
    .cube-wrap {
      position: absolute; top: 14%; right: 6%;
      width: 90px; height: 90px; perspective: 450px;
      animation: cubeFloat 9s ease-in-out infinite;
    }
    .cube {
      width: 90px; height: 90px;
      position: relative; transform-style: preserve-3d;
      animation: cubeRotate 13s linear infinite;
    }
    @keyframes cubeRotate {
      from { transform: rotateX(0) rotateY(0); }
      to   { transform: rotateX(360deg) rotateY(360deg); }
    }
    @keyframes cubeFloat {
      0%,100% { transform: translateY(0); }
      50%     { transform: translateY(-22px); }
    }
    .c-face {
      position: absolute; width: 90px; height: 90px;
      background: rgba(0,212,255,0.055);
      border: 1px solid rgba(0,212,255,0.28);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; color: var(--blue);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 1px;
    }
    .c-face.front  { transform: translateZ(45px); }
    .c-face.back   { transform: rotateY(180deg) translateZ(45px); }
    .c-face.right  { transform: rotateY(90deg) translateZ(45px); }
    .c-face.left   { transform: rotateY(-90deg) translateZ(45px); }
    .c-face.top    { transform: rotateX(90deg) translateZ(45px); }
    .c-face.bottom { transform: rotateX(-90deg) translateZ(45px); }

    /* Small gold cube — bottom-left */
    .cube-wrap2 {
      position: absolute; bottom: 18%; left: 7%;
      width: 55px; height: 55px; perspective: 300px;
      animation: cubeFloat 12s ease-in-out infinite reverse;
    }
    .cube2 {
      width: 55px; height: 55px;
      position: relative; transform-style: preserve-3d;
      animation: cubeRotate 18s linear infinite reverse;
    }
    .c2-face {
      position: absolute; width: 55px; height: 55px;
      background: rgba(255,215,0,0.04);
      border: 1px solid rgba(255,215,0,0.22);
    }
    .c2-face.front  { transform: translateZ(27.5px); }
    .c2-face.back   { transform: rotateY(180deg) translateZ(27.5px); }
    .c2-face.right  { transform: rotateY(90deg) translateZ(27.5px); }
    .c2-face.left   { transform: rotateY(-90deg) translateZ(27.5px); }
    .c2-face.top    { transform: rotateX(90deg) translateZ(27.5px); }
    .c2-face.bottom { transform: rotateX(-90deg) translateZ(27.5px); }

    /* Floating diamond shape — top-left */
    .diamond-wrap {
      position: absolute; top: 18%; left: 6%;
      width: 40px; height: 40px;
      animation: cubeFloat 10s ease-in-out infinite;
    }
    .diamond {
      width: 40px; height: 40px;
      background: rgba(155,89,255,0.08);
      border: 1px solid rgba(155,89,255,0.3);
      transform: rotate(45deg);
      animation: diamondSpin 15s linear infinite;
    }
    @keyframes diamondSpin {
      from { transform: rotate(45deg); }
      to   { transform: rotate(405deg); }
    }

    /* Hero eyebrow */
    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 0.6rem;
      border: 1px solid var(--glass-b); background: var(--glass);
      padding: 0.5rem 1.3rem; border-radius: 50px;
      font-size: 0.72rem; color: var(--blue);
      letter-spacing: 2.5px; text-transform: uppercase;
      margin-bottom: 2.75rem;
      animation: fadeUp 0.7s ease both;
    }
    .pulse-dot {
      width: 6px; height: 6px; background: var(--green);
      border-radius: 50%; box-shadow: 0 0 8px var(--green);
      animation: pulseDot 2s ease infinite;
    }
    @keyframes pulseDot {
      0%,100% { opacity:1; transform:scale(1); }
      50%     { opacity:0.4; transform:scale(0.65); }
    }

    /* Hero name */
    .hero-name {
      font-size: clamp(3.8rem, 12vw, 9.5rem);
      font-weight: 700; letter-spacing: -4px; line-height: 0.88;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #ffffff 0%, var(--blue) 35%, var(--gold) 68%, #ffffff 100%);
      background-size: 400% 400%;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradShift 6s ease infinite, fadeUp 0.7s ease 0.2s both;
    }
    @keyframes gradShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Title row */
    .hero-title-row {
      display: flex; align-items: center; justify-content: center;
      gap: 1rem; margin-bottom: 1.6rem;
      animation: fadeUp 0.7s ease 0.35s both;
    }
    .htl { width: 44px; height: 1px; background: var(--blue); }
    .hero-title-text {
      font-size: clamp(0.85rem, 2.2vw, 1.15rem);
      font-weight: 400; color: var(--w70);
      letter-spacing: 5px; text-transform: uppercase;
    }

    /* Typed row */
    .hero-typed-row {
      font-size: clamp(0.95rem, 2.5vw, 1.35rem);
      color: var(--w50); min-height: 1.8em;
      margin-bottom: 1rem; letter-spacing: 0.5px;
      animation: fadeUp 0.7s ease 0.45s both;
    }
    .typed-accent { color: var(--blue); font-weight: 600; }
    .blink {
      display: inline-block; width: 2px; height: 1.1em;
      background: var(--blue); vertical-align: middle; margin-left: 2px;
      animation: blinkAnim 1s step-end infinite;
    }
    @keyframes blinkAnim { 0%,100%{opacity:1} 50%{opacity:0} }

    /* Location */
    .hero-loc {
      display: inline-flex; align-items: center; gap: 0.5rem;
      color: var(--w50); font-size: 0.9rem; margin-bottom: 3rem;
      animation: fadeUp 0.7s ease 0.55s both;
    }
    .hero-loc i { color: var(--gold); }

    /* CTA buttons */
    .hero-cta {
      display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
      animation: fadeUp 0.7s ease 0.7s both;
    }
    .btn {
      display: inline-flex; align-items: center; gap: 0.55rem;
      padding: 0.9rem 2.25rem; border-radius: var(--r-sm);
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600; font-size: 0.86rem;
      letter-spacing: 1.2px; text-transform: uppercase;
      text-decoration: none; border: none;
      transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), box-shadow 0.32s;
    }
    .btn-blue {
      background: linear-gradient(135deg, var(--blue), var(--blue-dk));
      color: #000;
      box-shadow: 0 0 32px var(--blue-glow), 0 8px 24px rgba(0,0,0,0.4);
    }
    .btn-blue:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 64px var(--blue-glow), 0 16px 40px rgba(0,0,0,0.5);
    }
    .btn-outline {
      background: transparent; color: var(--white);
      border: 1px solid var(--glass-b);
    }
    .btn-outline:hover {
      border-color: var(--blue); color: var(--blue);
      transform: translateY(-4px); box-shadow: 0 0 24px var(--blue-dim);
    }
    .btn-gold {
      background: linear-gradient(135deg, var(--gold), #cc9900);
      color: #000;
      box-shadow: 0 0 22px var(--gold-glow);
    }
    .btn-gold:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 48px var(--gold-glow), 0 12px 30px rgba(0,0,0,0.4);
    }

    /* Scroll indicator */
    .scroll-indicator {
      position: absolute; bottom: 2.5rem; left: 50%;
      transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 0.55rem;
      animation: fadeUp 0.7s ease 1s both;
    }
    .scroll-indicator span {
      font-size: 0.62rem; letter-spacing: 3px;
      text-transform: uppercase; color: var(--w30);
    }
    .scroll-line {
      width: 1px; height: 52px;
      background: linear-gradient(to bottom, var(--blue), transparent);
      animation: scrollAnim 2.2s ease infinite;
    }
    @keyframes scrollAnim {
      0%   { transform: scaleY(0); transform-origin: top; }
      50%  { transform: scaleY(1); transform-origin: top; }
      51%  { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }

    /* ============================================================
       TECH MARQUEE STRIP
    ============================================================ */
    .marquee-strip {
      position: relative; z-index: 2;
      padding: 1.6rem 0;
      border-top: 1px solid var(--glass-b);
      border-bottom: 1px solid var(--glass-b);
      overflow: hidden;
      background: linear-gradient(90deg, var(--bg) 0%, transparent 8%, transparent 92%, var(--bg) 100%);
    }
    .marquee-track {
      display: flex; gap: 2.5rem; width: max-content;
      animation: marqueeRun 28s linear infinite;
    }
    .marquee-track:hover { animation-play-state: paused; }
    @keyframes marqueeRun {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .m-item {
      display: flex; align-items: center; gap: 0.55rem;
      padding: 0.4rem 1.1rem;
      background: var(--glass); border: 1px solid var(--glass-b);
      border-radius: 50px; white-space: nowrap;
      font-size: 0.8rem; font-weight: 500; color: var(--w70);
      transition: all 0.3s;
    }
    .m-item:hover { color: var(--blue); border-color: rgba(0,212,255,0.3); }
    .m-item i { color: var(--blue); }
    .m-item .gi { color: var(--gold); }

    /* ============================================================
       SECTION LAYOUT
    ============================================================ */
    .sec {
      position: relative; z-index: 2;
      padding: 9rem 5rem;
      max-width: 1280px; margin: 0 auto;
    }
    .sec-header { margin-bottom: 5.5rem; }

    .sec-eyebrow {
      display: inline-flex; align-items: center; gap: 0.8rem;
      font-size: 0.68rem; color: var(--blue);
      letter-spacing: 4px; text-transform: uppercase; margin-bottom: 1.5rem;
      opacity: 0; transform: translateY(14px);
      transition: opacity 0.5s, transform 0.5s;
    }
    .sec-eyebrow::before { content: ''; width: 36px; height: 1px; background: var(--blue); }
    .sec-eyebrow.vis { opacity: 1; transform: translateY(0); }

    .sec-heading {
      font-size: clamp(2.2rem, 5vw, 4.2rem);
      font-weight: 700; line-height: 1.08;
      margin-bottom: 1.5rem;
      opacity: 0; transform: translateY(22px);
      transition: opacity 0.5s 0.1s, transform 0.5s 0.1s;
    }
    .sec-heading.vis { opacity: 1; transform: translateY(0); }
    .sec-heading .acc {
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sec-subtext {
      font-size: 1.05rem; color: var(--w50);
      max-width: 580px; line-height: 1.9;
      opacity: 0; transform: translateY(14px);
      transition: opacity 0.5s 0.2s, transform 0.5s 0.2s;
    }
    .sec-subtext.vis { opacity: 1; transform: translateY(0); }

    .sec-bg-num {
      position: absolute; top: 5rem; right: 0;
      font-size: clamp(120px, 18vw, 240px);
      font-weight: 800; line-height: 1;
      color: rgba(255,255,255,0.012);
      font-family: 'JetBrains Mono', monospace;
      pointer-events: none; user-select: none;
    }

    /* Glowing divider */
    .divider {
      position: relative; z-index: 2;
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,212,255,0.14), transparent);
    }

    /* ============================================================
       ABOUT SECTION
    ============================================================ */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      gap: 5.5rem; align-items: center;
    }

    /* Holographic 3D Card */
    .holo-wrap { perspective: 1300px; display: flex; justify-content: center; }
    .holo-card {
      position: relative; width: 310px; height: 440px;
      border-radius: var(--r-lg);
      background: linear-gradient(145deg,
        rgba(0,212,255,0.07) 0%,
        rgba(255,215,0,0.04) 50%,
        rgba(155,89,255,0.05) 100%);
      border: 1px solid var(--glass-b);
      backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px);
      padding: 2.75rem 2.25rem;
      display: flex; flex-direction: column; justify-content: space-between;
      box-shadow: 0 0 70px rgba(0,212,255,0.06), inset 0 1px 0 rgba(255,255,255,0.07);
      transition: transform 0.28s ease, box-shadow 0.28s;
      transform-style: preserve-3d;
    }
    .holo-card-bar {
      position: absolute; top: 0; left: 12%; right: 12%; height: 2px;
      background: linear-gradient(90deg, transparent, var(--blue), var(--gold), transparent);
      border-radius: 2px;
    }
    .holo-card::before {
      content: ''; position: absolute; inset: 0;
      border-radius: var(--r-lg);
      background: linear-gradient(135deg, rgba(0,212,255,0.09) 0%, transparent 45%, rgba(255,215,0,0.06) 100%);
      opacity: 0; transition: opacity 0.4s;
    }
    .holo-card:hover::before { opacity: 1; }

    .card-av {
      width: 76px; height: 76px; border-radius: 50%;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      display: flex; align-items: center; justify-content: center;
      font-size: 1.9rem; font-weight: 800; color: #000;
      margin-bottom: 1.3rem;
      box-shadow: 0 0 28px var(--blue-glow);
    }
    .card-nm { font-size: 1.65rem; font-weight: 700; margin-bottom: 0.2rem; }
    .card-rl {
      font-size: 0.73rem; color: var(--blue);
      letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 1.4rem;
    }
    .card-status {
      display: inline-flex; align-items: center; gap: 0.45rem;
      background: rgba(0,255,136,0.09);
      border: 1px solid rgba(0,255,136,0.2);
      border-radius: 50px; padding: 0.3rem 0.9rem;
      font-size: 0.7rem; color: var(--green);
    }
    .card-status .dot {
      width: 5px; height: 5px; background: var(--green);
      border-radius: 50%; animation: pulseDot 2s infinite;
    }
    .card-loc {
      font-size: 0.72rem; color: var(--w30);
      letter-spacing: 1.5px; margin-top: 1.2rem;
      font-family: 'JetBrains Mono', monospace;
    }
    .card-stats {
      display: flex; justify-content: space-between;
      padding-top: 1.5rem; border-top: 1px solid var(--glass-b);
    }
    .cs { text-align: center; }
    .cs-num {
      font-size: 1.9rem; font-weight: 700; line-height: 1;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .cs-lbl {
      font-size: 0.62rem; color: var(--w50);
      letter-spacing: 1.5px; text-transform: uppercase; margin-top: 0.25rem;
    }

    /* About text */
    .about-text h3 {
      font-size: 1.65rem; font-weight: 600; margin-bottom: 1.4rem; line-height: 1.28;
    }
    .about-text p {
      color: var(--w70); line-height: 1.9; margin-bottom: 1.25rem; font-size: 1.02rem;
    }
    .about-highlights {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 0.7rem; margin: 1.8rem 0;
    }
    .hl-item {
      display: flex; align-items: center; gap: 0.55rem;
      font-size: 0.87rem; color: var(--w70);
    }
    .hl-item i { color: var(--blue); font-size: 0.8rem; width: 14px; }
    .tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .tag {
      padding: 0.28rem 0.8rem; border-radius: 50px;
      background: var(--glass); border: 1px solid var(--glass-b);
      font-size: 0.78rem; color: var(--blue-lt);
      transition: all 0.25s;
    }
    .tag:hover { background: var(--blue-dim); border-color: rgba(0,212,255,0.3); }

    /* ============================================================
       SKILLS SECTION
    ============================================================ */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
      gap: 1.5rem;
    }
    .sk-card {
      background: var(--glass); border: 1px solid var(--glass-b);
      border-radius: var(--r); padding: 2rem;
      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
      transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                  border-color 0.35s, box-shadow 0.35s;
      opacity: 0; transform: translateY(28px);
      position: relative; overflow: hidden;
    }
    .sk-card.vis { opacity: 1; transform: translateY(0); }
    .sk-card::after {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, var(--blue), var(--gold), transparent);
      opacity: 0; transition: opacity 0.4s;
    }
    .sk-card:hover {
      transform: translateY(-7px) !important;
      border-color: rgba(0,212,255,0.18);
      box-shadow: 0 22px 65px rgba(0,212,255,0.07);
    }
    .sk-card:hover::after { opacity: 1; }

    .sk-icon {
      width: 50px; height: 50px; border-radius: 12px;
      background: var(--blue-dim); border: 1px solid rgba(0,212,255,0.14);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.35rem; margin-bottom: 1.6rem;
      transition: all 0.3s;
    }
    .sk-card:hover .sk-icon {
      background: rgba(0,212,255,0.19);
      box-shadow: 0 0 22px var(--blue-dim);
    }
    .sk-title { font-size: 1rem; font-weight: 600; margin-bottom: 1.5rem; }

    .sk-row { margin-bottom: 1rem; }
    .sk-row:last-child { margin-bottom: 0; }
    .sk-head { display: flex; justify-content: space-between; margin-bottom: 0.4rem; }
    .sk-name { font-size: 0.83rem; color: var(--w70); }
    .sk-pct { font-size: 0.8rem; color: var(--blue); font-family: 'JetBrains Mono', monospace; }
    .sk-track { height: 3px; background: var(--w08); border-radius: 3px; overflow: hidden; }
    .sk-fill {
      height: 100%; border-radius: 3px; width: 0;
      background: linear-gradient(90deg, var(--blue), var(--gold));
      transition: width 1.5s cubic-bezier(0.4,0,0.2,1);
      box-shadow: 0 0 6px var(--blue-dim);
    }

    /* ============================================================
       PROJECTS SECTION
    ============================================================ */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
      gap: 1.5rem;
    }
    .proj-card {
      background: var(--glass); border: 1px solid var(--glass-b);
      border-radius: var(--r); padding: 2.25rem;
      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
      transition: border-color 0.35s, box-shadow 0.35s;
      opacity: 0; transform: translateY(36px);
      position: relative; overflow: hidden;
    }
    .proj-card.vis { opacity: 1; transform: translateY(0); }
    .proj-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--gold));
    }
    .proj-card:hover {
      border-color: rgba(0,212,255,0.22);
      box-shadow: 0 32px 90px rgba(0,212,255,0.09);
    }
    .proj-glow {
      position: absolute; inset: 0;
      background: radial-gradient(
        ellipse at var(--gx,50%) var(--gy,50%),
        rgba(0,212,255,0.06), transparent 55%
      );
      opacity: 0; transition: opacity 0.4s; pointer-events: none;
    }
    .proj-card:hover .proj-glow { opacity: 1; }

    .proj-num {
      font-size: 3.8rem; font-weight: 800; line-height: 1;
      font-family: 'JetBrains Mono', monospace;
      background: linear-gradient(135deg, rgba(0,212,255,0.18), transparent);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; margin-bottom: 1rem;
    }
    .proj-title { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.85rem; line-height: 1.32; }
    .proj-desc { font-size: 0.88rem; color: var(--w50); line-height: 1.78; margin-bottom: 1.5rem; }
    .proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }
    .ptag {
      padding: 0.22rem 0.65rem; border-radius: 50px;
      background: var(--blue-dim); border: 1px solid rgba(0,212,255,0.18);
      font-size: 0.72rem; color: var(--blue);
    }
    .proj-footer {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 1rem; border-top: 1px solid var(--glass-b);
    }
    .proj-badge { display: flex; align-items: center; gap: 0.4rem; font-size: 0.72rem; color: var(--w50); }
    .proj-badge i { color: var(--gold); }
    .proj-link {
      display: inline-flex; align-items: center; gap: 0.35rem;
      font-size: 0.78rem; color: var(--blue); text-decoration: none;
      transition: gap 0.25s;
    }
    .proj-link:hover { gap: 0.65rem; }

    /* ============================================================
       CONTACT SECTION
    ============================================================ */
    .contact-center { max-width: 740px; margin: 0 auto; text-align: center; }
    .email-display {
      display: inline-flex; align-items: center; gap: 0.8rem;
      padding: 1rem 2.2rem; margin: 2rem 0;
      background: var(--glass); border: 1px solid var(--glass-b);
      border-radius: var(--r);
      font-size: 1.05rem; font-weight: 600;
      font-family: 'JetBrains Mono', monospace;
      text-decoration: none; color: var(--white);
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .email-display:hover {
      border-color: var(--blue); box-shadow: 0 0 32px var(--blue-dim);
    }
    .email-display i { color: var(--blue); }
    .contact-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 3rem; }
    .cc {
      background: var(--glass); border: 1px solid var(--glass-b);
      border-radius: var(--r); padding: 2.75rem 1.5rem;
      text-decoration: none; color: var(--white);
      display: flex; flex-direction: column; align-items: center; gap: 1rem;
      opacity: 0; transform: translateY(22px);
      transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                  border-color 0.35s, box-shadow 0.35s, opacity 0.5s;
    }
    .cc.vis { opacity: 1; transform: translateY(0); }
    .cc:hover {
      transform: translateY(-7px);
      border-color: var(--blue); box-shadow: 0 0 45px var(--blue-dim);
    }
    .cc-icon {
      width: 60px; height: 60px; border-radius: 50%;
      background: var(--blue-dim); border: 1px solid rgba(0,212,255,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.45rem; color: var(--blue); transition: all 0.3s;
    }
    .cc:hover .cc-icon {
      background: rgba(0,212,255,0.2); box-shadow: 0 0 24px var(--blue-glow);
    }
    .cc-label { font-size: 0.68rem; letter-spacing: 2px; text-transform: uppercase; color: var(--w50); }
    .cc-val { font-size: 0.95rem; font-weight: 600; }
    .contact-meta {
      display: flex; align-items: center; justify-content: center;
      gap: 0.5rem; margin-top: 3rem;
      font-size: 0.8rem; color: var(--w30);
    }
    .contact-meta i { color: var(--gold); }

    /* ============================================================
       FOOTER
    ============================================================ */
    footer {
      position: relative; z-index: 2;
      padding: 2.5rem 5rem;
      border-top: 1px solid var(--glass-b);
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem;
    }
    .ft-left { font-size: 0.82rem; color: var(--w50); }
    .ft-left span { color: var(--blue); }
    .ft-right {
      display: flex; align-items: center; gap: 0.55rem;
      font-size: 0.76rem; color: var(--w30);
    }
    .ft-right i { color: var(--gold); font-size: 0.8rem; }

    /* ============================================================
       SHARED ANIMATIONS
    ============================================================ */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ============================================================
       RESPONSIVE
    ============================================================ */
    @media (max-width: 960px) {
      nav#main-nav, nav#main-nav.scrolled { padding-left: 2rem; padding-right: 2rem; }
      .nav-links { display: none; }
      .hamburger-btn { display: flex; }
      .sec { padding: 6.5rem 2rem; }
      .about-grid { grid-template-columns: 1fr; gap: 3.5rem; }
      .holo-wrap { order: -1; }
      .contact-cards { grid-template-columns: 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      footer { padding: 2rem; }
    }
    @media (max-width: 640px) {
      .cube-wrap, .cube-wrap2, .diamond-wrap { display: none; }
      .hero-name { letter-spacing: -2px; }
      .hero-cta { flex-direction: column; align-items: center; }
      .skills-grid { grid-template-columns: 1fr; }
      .about-highlights { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- CURSOR -->
<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<!-- AURORA -->
<div class="aurora">
  <div class="aurora-blob ab1"></div>
  <div class="aurora-blob ab2"></div>
  <div class="aurora-blob ab3"></div>
</div>

<!-- OVERLAYS -->
<div class="noise-overlay"></div>
<div class="grid-overlay"></div>
<canvas id="particles-canvas"></canvas>

<!-- NAV -->
<nav id="main-nav">
  <a href="#hero" class="nav-logo">MQ</a>
  <ul class="nav-links">
    <li><a href="#about-sec">About</a></li>
    <li><a href="#skills-sec">Skills</a></li>
    <li><a href="#projects-sec">Projects</a></li>
    <li><a href="#contact-sec" class="nav-cta-btn">Hire Me</a></li>
  </ul>
  <button class="hamburger-btn" id="hamburger-btn" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobile-nav">
  <button class="mob-close-btn" id="mob-close"><i class="fa-solid fa-xmark"></i></button>
  <a href="#about-sec">About</a>
  <a href="#skills-sec">Skills</a>
  <a href="#projects-sec">Projects</a>
  <a href="#contact-sec">Contact</a>
</div>

<!-- ======================================================
     HERO
====================================================== -->
<section id="hero">
  <div class="hero-orb"></div>

  <!-- 3D Big Cube (top-right) -->
  <div class="cube-wrap">
    <div class="cube">
      <div class="c-face front">AWS</div>
      <div class="c-face back">IaC</div>
      <div class="c-face right">CI/CD</div>
      <div class="c-face left">VPC</div>
      <div class="c-face top">S3</div>
      <div class="c-face bottom">ECS</div>
    </div>
  </div>

  <!-- 3D Small Gold Cube (bottom-left) -->
  <div class="cube-wrap2">
    <div class="cube2">
      <div class="c2-face front"></div>
      <div class="c2-face back"></div>
      <div class="c2-face right"></div>
      <div class="c2-face left"></div>
      <div class="c2-face top"></div>
      <div class="c2-face bottom"></div>
    </div>
  </div>

  <!-- Spinning Diamond (top-left) -->
  <div class="diamond-wrap">
    <div class="diamond"></div>
  </div>

  <div class="hero-eyebrow">
    <div class="pulse-dot"></div>
    Available for Opportunities
  </div>

  <h1 class="hero-name">MUQADDAM</h1>

  <div class="hero-title-row">
    <div class="htl"></div>
    <span class="hero-title-text">Cloud &amp; DevOps Engineer</span>
    <div class="htl"></div>
  </div>

  <div class="hero-typed-row">
    <span class="typed-accent" id="typed-out"></span><span class="blink"></span>
  </div>

  <div class="hero-loc">
    <i class="fa-solid fa-location-dot"></i>
    Karachi, Pakistan
  </div>

  <div class="hero-cta">
    <a href="#projects-sec" class="btn btn-blue">
      <i class="fa-solid fa-rocket"></i> View Projects
    </a>
    <a href="#about-sec" class="btn btn-outline">
      <i class="fa-solid fa-user"></i> About Me
    </a>
    <a href="mailto:muqaddamhammad@gmail.com" class="btn btn-gold">
      <i class="fa-solid fa-envelope"></i> Get In Touch
    </a>
  </div>

  <div class="scroll-indicator">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- TECH MARQUEE -->
<div class="marquee-strip">
  <div class="marquee-track" id="mTrack">
    <div class="m-item"><i class="fa-brands fa-aws gi"></i> AWS</div>
    <div class="m-item"><i class="fa-brands fa-docker"></i> Docker</div>
    <div class="m-item"><i class="fa-solid fa-code-branch gi"></i> Terraform</div>
    <div class="m-item"><i class="fa-brands fa-github"></i> GitHub Actions</div>
    <div class="m-item"><i class="fa-brands fa-linux"></i> Linux</div>
    <div class="m-item"><i class="fa-solid fa-cloud"></i> EC2</div>
    <div class="m-item"><i class="fa-solid fa-database gi"></i> RDS</div>
    <div class="m-item"><i class="fa-solid fa-network-wired"></i> VPC</div>
    <div class="m-item"><i class="fa-solid fa-shield-halved gi"></i> IAM</div>
    <div class="m-item"><i class="fa-solid fa-bolt"></i> Lambda</div>
    <div class="m-item"><i class="fa-solid fa-boxes-stacked gi"></i> S3</div>
    <div class="m-item"><i class="fa-solid fa-globe"></i> CloudFront</div>
    <div class="m-item"><i class="fa-solid fa-infinity"></i> CI/CD</div>
    <div class="m-item"><i class="fa-solid fa-server gi"></i> Elastic Beanstalk</div>
    <div class="m-item"><i class="fa-brands fa-aws gi"></i> AWS</div>
    <div class="m-item"><i class="fa-brands fa-docker"></i> Docker</div>
    <div class="m-item"><i class="fa-solid fa-code-branch gi"></i> Terraform</div>
    <div class="m-item"><i class="fa-brands fa-github"></i> GitHub Actions</div>
    <div class="m-item"><i class="fa-brands fa-linux"></i> Linux</div>
    <div class="m-item"><i class="fa-solid fa-cloud"></i> EC2</div>
    <div class="m-item"><i class="fa-solid fa-database gi"></i> RDS</div>
    <div class="m-item"><i class="fa-solid fa-network-wired"></i> VPC</div>
    <div class="m-item"><i class="fa-solid fa-shield-halved gi"></i> IAM</div>
    <div class="m-item"><i class="fa-solid fa-bolt"></i> Lambda</div>
    <div class="m-item"><i class="fa-solid fa-boxes-stacked gi"></i> S3</div>
    <div class="m-item"><i class="fa-solid fa-globe"></i> CloudFront</div>
    <div class="m-item"><i class="fa-solid fa-infinity"></i> CI/CD</div>
    <div class="m-item"><i class="fa-solid fa-server gi"></i> Elastic Beanstalk</div>
  </div>
</div>
<div class="divider"></div>

<!-- ======================================================
     ABOUT
====================================================== -->
<div id="about-sec" class="sec">
  <span class="sec-bg-num">01</span>
  <div class="sec-header">
    <div class="sec-eyebrow">01 &mdash; About Me</div>
    <h2 class="sec-heading">Architecting the Cloud<br>at <span class="acc">15 Years Old</span></h2>
    <p class="sec-subtext">
      A self-taught Cloud &amp; DevOps Engineer from Karachi, building production-grade
      AWS infrastructure that enterprises trust.
    </p>
  </div>

  <div class="about-grid">
    <!-- Holographic Card -->
    <div class="holo-wrap">
      <div class="holo-card" id="holo-card">
        <div class="holo-card-bar"></div>
        <div>
          <div class="card-av">M</div>
          <div class="card-nm">MUQADDAM</div>
          <div class="card-rl">Cloud &amp; DevOps Engineer</div>
          <div class="card-status">
            <div class="dot"></div>
            Open to Opportunities
          </div>
          <div class="card-loc">// karachi.pk &nbsp;|&nbsp; UTC+5</div>
        </div>
        <div class="card-stats">
          <div class="cs">
            <div class="cs-num" data-count="15">0</div>
            <div class="cs-lbl">Age</div>
          </div>
          <div class="cs">
            <div class="cs-num" data-count="5">0</div>
            <div class="cs-lbl">Projects</div>
          </div>
          <div class="cs">
            <div class="cs-num" data-count="10">0</div>
            <div class="cs-lbl">AWS Services</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Text -->
    <div class="about-text">
      <h3>Building tomorrow's infrastructure,&nbsp;today.</h3>
      <p>
        I'm Muqaddam, a 15-year-old Cloud &amp; DevOps Engineer based in Karachi, Pakistan.
        While most teenagers are still learning basic programming, I'm deploying multi-AZ AWS
        architectures, writing Terraform modules, and building CI/CD pipelines that ship
        production code in minutes.
      </p>
      <p>
        My journey started with a simple question: <em>"How does the internet actually work at scale?"</em>
        That curiosity led me deep into AWS documentation, Terraform configs, and Docker containers —
        and I've never looked back. Every project I build is production-grade, security-hardened,
        and built to last.
      </p>
      <div class="about-highlights">
        <div class="hl-item"><i class="fa-solid fa-circle-check"></i> AWS EC2, S3, RDS, Lambda</div>
        <div class="hl-item"><i class="fa-solid fa-circle-check"></i> Terraform Infrastructure-as-Code</div>
        <div class="hl-item"><i class="fa-solid fa-circle-check"></i> Docker &amp; Container Orchestration</div>
        <div class="hl-item"><i class="fa-solid fa-circle-check"></i> GitHub Actions CI/CD</div>
        <div class="hl-item"><i class="fa-solid fa-circle-check"></i> IAM &amp; Security Hardening</div>
        <div class="hl-item"><i class="fa-solid fa-circle-check"></i> Linux System Administration</div>
      </div>
      <div class="tag-row">
        <span class="tag">AWS</span>
        <span class="tag">EC2</span>
        <span class="tag">S3</span>
        <span class="tag">CloudFront</span>
        <span class="tag">RDS</span>
        <span class="tag">Lambda</span>
        <span class="tag">VPC</span>
        <span class="tag">IAM</span>
        <span class="tag">Terraform</span>
        <span class="tag">Docker</span>
        <span class="tag">GitHub Actions</span>
        <span class="tag">Linux</span>
        <span class="tag">CodeBuild</span>
        <span class="tag">CodePipeline</span>
      </div>
    </div>
  </div>
</div>
<div class="divider"></div>

<!-- ======================================================
     SKILLS
====================================================== -->
<div id="skills-sec" class="sec">
  <span class="sec-bg-num">02</span>
  <div class="sec-header">
    <div class="sec-eyebrow">02 &mdash; Technical Skills</div>
    <h2 class="sec-heading">Technical <span class="acc">Arsenal</span></h2>
    <p class="sec-subtext">
      Proficient in modern cloud infrastructure, containerization, and DevOps automation tooling.
    </p>
  </div>

  <div class="skills-grid">
    <!-- AWS -->
    <div class="sk-card">
      <div class="sk-icon"><i class="fa-brands fa-aws" style="color:var(--gold)"></i></div>
      <div class="sk-title">AWS Cloud Platform</div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">EC2 &amp; Auto Scaling Groups</span><span class="sk-pct">90%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="90"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">S3 &amp; CloudFront CDN</span><span class="sk-pct">95%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="95"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">RDS &amp; DynamoDB</span><span class="sk-pct">82%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="82"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">IAM &amp; Security Policies</span><span class="sk-pct">88%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="88"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">VPC &amp; Network Architecture</span><span class="sk-pct">86%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="86"></div></div>
      </div>
    </div>

    <!-- IaC & Containers -->
    <div class="sk-card">
      <div class="sk-icon"><i class="fa-brands fa-docker" style="color:var(--blue)"></i></div>
      <div class="sk-title">Infrastructure &amp; Containers</div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">Terraform (IaC)</span><span class="sk-pct">85%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="85"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">Docker &amp; Docker Compose</span><span class="sk-pct">92%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="92"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">Linux Administration</span><span class="sk-pct">88%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="88"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">Shell Scripting (Bash)</span><span class="sk-pct">83%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="83"></div></div>
      </div>
    </div>

    <!-- CI/CD -->
    <div class="sk-card">
      <div class="sk-icon"><i class="fa-solid fa-gears" style="color:var(--purple)"></i></div>
      <div class="sk-title">CI/CD &amp; Automation</div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">GitHub Actions</span><span class="sk-pct">90%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="90"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">AWS CodeBuild</span><span class="sk-pct">82%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="82"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">AWS CodePipeline</span><span class="sk-pct">76%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="76"></div></div>
      </div>
      <div class="sk-row">
        <div class="sk-head"><span class="sk-name">Elastic Beanstalk Deploy</span><span class="sk-pct">85%</span></div>
        <div class="sk-track"><div class="sk-fill" data-w="85"></div></div>
      </div>
    </div>
  </div>
</div>
<div class="divider"></div>

<!-- ======================================================
     PROJECTS
====================================================== -->
<div id="projects-sec" class="sec">
  <span class="sec-bg-num">03</span>
  <div class="sec-header">
    <div class="sec-eyebrow">03 &mdash; Projects</div>
    <h2 class="sec-heading">Featured <span class="acc">AWS Projects</span></h2>
    <p class="sec-subtext">
      Production-grade cloud architectures — designed, deployed, and maintained entirely by me.
    </p>
  </div>

  <div class="projects-grid">

    <!-- PROJECT 1 -->
    <div class="proj-card">
      <div class="proj-glow"></div>
      <div class="proj-num">01</div>
      <h3 class="proj-title">S3 + CloudFront Static Site Delivery</h3>
      <p class="proj-desc">
        Architected a globally distributed static website with sub-100ms load times.
        S3 hosts assets with versioning and lifecycle policies. CloudFront distributes
        across 400+ edge locations. Route 53 manages the custom domain, ACM provides
        free SSL/TLS, and Origin Access Identity ensures private bucket access.
      </p>
      <div class="proj-tags">
        <span class="ptag">S3</span>
        <span class="ptag">CloudFront</span>
        <span class="ptag">Route 53</span>
        <span class="ptag">ACM / SSL</span>
        <span class="ptag">OAI</span>
      </div>
      <div class="proj-footer">
        <span class="proj-badge"><i class="fa-solid fa-diagram-project"></i> Static CDN Architecture</span>
        <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="proj-link">
          GitHub <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- PROJECT 2 -->
    <div class="proj-card">
      <div class="proj-glow"></div>
      <div class="proj-num">02</div>
      <h3 class="proj-title">IAM Automation &amp; Least-Privilege Engine</h3>
      <p class="proj-desc">
        Built Python/Boto3 scripts to automatically provision IAM users, roles, and
        custom policies following the least-privilege principle. Detects unused
        permissions, generates compliance reports, and enforces security best
        practices across multi-account AWS Organizations.
      </p>
      <div class="proj-tags">
        <span class="ptag">IAM</span>
        <span class="ptag">Python</span>
        <span class="ptag">Boto3</span>
        <span class="ptag">Organizations</span>
        <span class="ptag">Security Audit</span>
      </div>
      <div class="proj-footer">
        <span class="proj-badge"><i class="fa-solid fa-diagram-project"></i> Security Automation</span>
        <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="proj-link">
          GitHub <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- PROJECT 3 -->
    <div class="proj-card">
      <div class="proj-glow"></div>
      <div class="proj-num">03</div>
      <h3 class="proj-title">Serverless Task Board</h3>
      <p class="proj-desc">
        Full-stack serverless application with zero server management. Lambda handles
        compute logic, API Gateway exposes RESTful endpoints, DynamoDB stores task
        data with on-demand capacity, SNS triggers pub/sub notifications, and SES
        dispatches transactional email alerts — all at near-zero infrastructure cost.
      </p>
      <div class="proj-tags">
        <span class="ptag">Lambda</span>
        <span class="ptag">API Gateway</span>
        <span class="ptag">DynamoDB</span>
        <span class="ptag">SNS</span>
        <span class="ptag">SES</span>
      </div>
      <div class="proj-footer">
        <span class="proj-badge"><i class="fa-solid fa-diagram-project"></i> Serverless Architecture</span>
        <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="proj-link">
          GitHub <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- PROJECT 4 -->
    <div class="proj-card">
      <div class="proj-glow"></div>
      <div class="proj-num">04</div>
      <h3 class="proj-title">High-Availability Architecture</h3>
      <p class="proj-desc">
        Engineered a 99.99% uptime infrastructure using Application Load Balancer for
        intelligent traffic routing, Auto Scaling Groups with custom target-tracking
        policies, Multi-AZ RDS for automatic failover, and CloudWatch dashboards
        with alarm-triggered actions for real-time operations.
      </p>
      <div class="proj-tags">
        <span class="ptag">ALB</span>
        <span class="ptag">ASG</span>
        <span class="ptag">Multi-AZ RDS</span>
        <span class="ptag">EC2</span>
        <span class="ptag">CloudWatch</span>
      </div>
      <div class="proj-footer">
        <span class="proj-badge"><i class="fa-solid fa-diagram-project"></i> HA Architecture</span>
        <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="proj-link">
          GitHub <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- PROJECT 5 -->
    <div class="proj-card">
      <div class="proj-glow"></div>
      <div class="proj-num">05</div>
      <h3 class="proj-title">Custom VPC Network Architecture</h3>
      <p class="proj-desc">
        Designed a production-grade VPC from scratch with public and private subnets
        spanning multiple Availability Zones, custom route tables, NAT Gateway for
        secure outbound traffic, Internet Gateway, and defense-in-depth security
        with layered Security Groups and Network ACLs.
      </p>
      <div class="proj-tags">
        <span class="ptag">VPC</span>
        <span class="ptag">Subnets</span>
        <span class="ptag">NAT Gateway</span>
        <span class="ptag">Route Tables</span>
        <span class="ptag">NACLs</span>
      </div>
      <div class="proj-footer">
        <span class="proj-badge"><i class="fa-solid fa-diagram-project"></i> Network Architecture</span>
        <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="proj-link">
          GitHub <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

  </div>
</div>
<div class="divider"></div>

<!-- ======================================================
     CONTACT
====================================================== -->
<div id="contact-sec" class="sec">
  <span class="sec-bg-num">04</span>
  <div class="sec-header">
    <div class="sec-eyebrow">04 &mdash; Contact</div>
    <h2 class="sec-heading">Let's <span class="acc">Build Together</span></h2>
    <p class="sec-subtext">
      Open to internships, freelance cloud projects, and collaborations.
      Let's architect something extraordinary.
    </p>
  </div>

  <div class="contact-center">
    <a href="mailto:muqaddamhammad@gmail.com" class="email-display">
      <i class="fa-solid fa-envelope"></i>
      muqaddamhammad@gmail.com
    </a>

    <div class="contact-cards">
      <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="cc">
        <div class="cc-icon"><i class="fa-brands fa-github"></i></div>
        <div class="cc-label">GitHub</div>
        <div class="cc-val">muhammadhassan120</div>
      </a>
      <a href="mailto:muqaddamhammad@gmail.com" class="cc">
        <div class="cc-icon"><i class="fa-solid fa-paper-plane"></i></div>
        <div class="cc-label">Email</div>
        <div class="cc-val">Send a Message</div>
      </a>
    </div>

    <div class="contact-meta">
      <i class="fa-solid fa-location-dot"></i>
      Karachi, Pakistan &nbsp;&bull;&nbsp; UTC+5
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="ft-left">
    Designed &amp; Built by <span>MUQADDAM</span> &mdash; Cloud &amp; DevOps Engineer, Karachi
  </div>
  <div class="ft-right">
    <i class="fa-brands fa-aws"></i>
    AWS Elastic Beanstalk &bull; Docker &bull; CodeBuild
  </div>
</footer>

<!-- ======================================================
     JAVASCRIPT
====================================================== -->
<script>
(function() {
  'use strict';

  /* ---- CURSOR ---- */
  var cdot  = document.getElementById('cursor-dot');
  var cring = document.getElementById('cursor-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    cdot.style.left = mx + 'px';
    cdot.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    cring.style.left = rx + 'px';
    cring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a,button,.proj-card').forEach(function(el) {
    el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-expand'); });
    el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-expand'); });
  });

  /* ---- NAV ---- */
  var nav = document.getElementById('main-nav');
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 55);
  }, { passive: true });

  /* ---- MOBILE MENU ---- */
  var mobileNav = document.getElementById('mobile-nav');
  document.getElementById('hamburger-btn').addEventListener('click', function() {
    mobileNav.classList.add('open');
  });
  document.getElementById('mob-close').addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  mobileNav.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { mobileNav.classList.remove('open'); });
  });

  /* ---- PARTICLES ---- */
  var canvas = document.getElementById('particles-canvas');
  var ctx    = canvas.getContext('2d');
  var W, H, parts = [];

  function resizeCanvas() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.38;
    this.vy = (Math.random() - 0.5) * 0.38;
    this.r  = Math.random() * 1.6 + 0.3;
    this.a  = Math.random() * 0.38 + 0.08;
    this.c  = Math.random() > 0.58 ? '255,215,0' : '0,212,255';
  }
  Particle.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
  };
  Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + this.c + ',' + this.a + ')';
    ctx.fill();
  };

  for (var i = 0; i < 110; i++) parts.push(new Particle());

  function drawConnections() {
    var len = parts.length;
    for (var a = 0; a < len; a++) {
      for (var b = a + 1; b < len; b++) {
        var dx = parts[a].x - parts[b].x;
        var dy = parts[a].y - parts[b].y;
        var d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 128) {
          ctx.beginPath();
          ctx.moveTo(parts[a].x, parts[a].y);
          ctx.lineTo(parts[b].x, parts[b].y);
          ctx.strokeStyle = 'rgba(0,212,255,' + (0.045 * (1 - d / 128)) + ')';
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  (function animParticles() {
    ctx.clearRect(0, 0, W, H);
    parts.forEach(function(p) { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animParticles);
  })();

  /* ---- TYPING EFFECT ---- */
  var phrases = [
    'Building cloud infrastructure at scale',
    'Automating deployments with CI/CD',
    'Architecting resilient AWS systems',
    'Containerizing apps with Docker',
    'Infrastructure as Code with Terraform',
    'Securing workloads with IAM policies'
  ];
  var pIdx = 0, cIdx = 0, deleting = false;
  var typedEl = document.getElementById('typed-out');

  function typeChar() {
    var cur = phrases[pIdx];
    if (deleting) {
      typedEl.textContent = cur.substring(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(typeChar, 420);
        return;
      }
      setTimeout(typeChar, 32);
    } else {
      typedEl.textContent = cur.substring(0, cIdx + 1);
      cIdx++;
      if (cIdx === cur.length) {
        deleting = true;
        setTimeout(typeChar, 2400);
        return;
      }
      setTimeout(typeChar, 54);
    }
  }
  setTimeout(typeChar, 1100);

  /* ---- INTERSECTION OBSERVER (scroll reveals + skill bars) ---- */
  var revealIO = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('vis');
      if (el.classList.contains('sk-card')) {
        el.querySelectorAll('.sk-fill').forEach(function(bar) {
          bar.style.width = bar.getAttribute('data-w') + '%';
        });
      }
    });
  }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.sec-eyebrow,.sec-heading,.sec-subtext,.sk-card,.proj-card,.cc'
  ).forEach(function(el) {
    revealIO.observe(el);
  });

  /* Stagger project cards */
  document.querySelectorAll('.proj-card').forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.09) + 's';
  });
  document.querySelectorAll('.sk-card').forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.11) + 's';
  });

  /* ---- COUNTER ANIMATION ---- */
  var counterIO = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el     = entry.target;
      var target = parseInt(el.getAttribute('data-count'), 10);
      var cur    = 0;
      var step   = target / 48;
      var timer  = setInterval(function() {
        cur += step;
        if (cur >= target) {
          el.textContent = target + (target >= 10 ? '+' : '');
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(cur);
        }
      }, 26);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(function(el) {
    counterIO.observe(el);
  });

  /* ---- HOLO CARD 3D TILT ---- */
  var holoCard = document.getElementById('holo-card');
  if (holoCard) {
    holoCard.addEventListener('mousemove', function(e) {
      var r  = holoCard.getBoundingClientRect();
      var x  = e.clientX - r.left;
      var y  = e.clientY - r.top;
      var rx2 =  (y - r.height / 2) / 13;
      var ry2 = -(x - r.width  / 2) / 13;
      holoCard.style.transform =
        'perspective(1300px) rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg) scale(1.025)';
    });
    holoCard.addEventListener('mouseleave', function() {
      holoCard.style.transform = 'perspective(1300px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  /* ---- PROJECT CARD: TILT + RADIAL GLOW ---- */
  document.querySelectorAll('.proj-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var r   = card.getBoundingClientRect();
      var x   = e.clientX - r.left;
      var y   = e.clientY - r.top;
      var rx2 =  (y - r.height / 2) / 24;
      var ry2 = -(x - r.width  / 2) / 24;
      card.style.transform =
        'translateY(-5px) perspective(900px) rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg)';
      var glow = card.querySelector('.proj-glow');
      if (glow) {
        glow.style.setProperty('--gx', (x / r.width  * 100) + '%');
        glow.style.setProperty('--gy', (y / r.height * 100) + '%');
      }
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'translateY(0) perspective(900px) rotateX(0) rotateY(0)';
    });
  });

})();
</script>
</body>
</html>`;
  }
}
