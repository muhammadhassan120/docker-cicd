import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MUQADDAM — Cloud & DevOps Engineer. AWS Architecture, Terraform, Docker, CI/CD. Karachi, Pakistan.">
  <meta name="keywords" content="Cloud Engineer, DevOps, AWS, Terraform, Docker, Kubernetes, Karachi, Pakistan, Portfolio">
  <meta name="author" content="Muqaddam">
  <meta property="og:title" content="MUQADDAM — Cloud & DevOps Engineer">
  <meta property="og:description" content="15-year-old Cloud Architect building production-grade AWS infrastructure.">
  <title>MUQADDAM — Cloud & DevOps Engineer</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <style>
    /* ============================================================
       MASTER RESET & CSS VARIABLES
    ============================================================ */
    *, *::before, *::after {
      margin: 0; padding: 0; box-sizing: border-box;
    }

    :root {
      --bg:           #03030a;
      --bg2:          #05050f;
      --bg3:          #080818;
      --bg4:          #0a0a1e;

      --blue:         #00d4ff;
      --blue-lt:      #44e3ff;
      --blue-dk:      #0088bb;
      --blue-glow:    rgba(0,212,255,0.45);
      --blue-glow2:   rgba(0,212,255,0.25);
      --blue-dim:     rgba(0,212,255,0.12);
      --blue-dim2:    rgba(0,212,255,0.07);
      --blue-trace:   rgba(0,212,255,0.04);
      --blue-vivid:   rgba(0,212,255,0.8);

      --gold:         #ffd700;
      --gold-lt:      #ffe566;
      --gold-dk:      #cc9900;
      --gold-glow:    rgba(255,215,0,0.40);
      --gold-glow2:   rgba(255,215,0,0.20);
      --gold-dim:     rgba(255,215,0,0.10);
      --gold-dim2:    rgba(255,215,0,0.06);

      --purple:       #9b59ff;
      --purple-glow:  rgba(155,89,255,0.35);
      --purple-dim:   rgba(155,89,255,0.12);

      --pink:         #ff3dde;
      --pink-glow:    rgba(255,61,222,0.3);

      --green:        #00ff88;
      --green-glow:   rgba(0,255,136,0.3);
      --green-dim:    rgba(0,255,136,0.1);

      --red:          #ff4444;
      --orange:       #ff8c00;

      --white:        #ffffff;
      --w95:          rgba(255,255,255,0.95);
      --w90:          rgba(255,255,255,0.90);
      --w80:          rgba(255,255,255,0.80);
      --w70:          rgba(255,255,255,0.70);
      --w60:          rgba(255,255,255,0.60);
      --w50:          rgba(255,255,255,0.50);
      --w40:          rgba(255,255,255,0.40);
      --w30:          rgba(255,255,255,0.30);
      --w20:          rgba(255,255,255,0.20);
      --w15:          rgba(255,255,255,0.15);
      --w10:          rgba(255,255,255,0.10);
      --w08:          rgba(255,255,255,0.08);
      --w05:          rgba(255,255,255,0.05);
      --w03:          rgba(255,255,255,0.03);

      --glass:        rgba(255,255,255,0.04);
      --glass2:       rgba(255,255,255,0.06);
      --glass3:       rgba(255,255,255,0.09);
      --glass-b:      rgba(255,255,255,0.09);
      --glass-b2:     rgba(255,255,255,0.13);

      --r-xs:  5px;
      --r-sm:  10px;
      --r:     16px;
      --r-lg:  24px;
      --r-xl:  36px;
      --r-2xl: 48px;

      --shadow-blue:  0 32px 80px rgba(0,212,255,0.12);
      --shadow-gold:  0 32px 80px rgba(255,215,0,0.1);
      --shadow-deep:  0 48px 120px rgba(0,0,0,0.7);

      --font-main:  'Space Grotesk', sans-serif;
      --font-mono:  'JetBrains Mono', monospace;
      --font-disp:  'Syne', sans-serif;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      font-family: var(--font-main);
      background: var(--bg);
      color: var(--white);
      overflow-x: hidden;
      cursor: none;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a, button, [role="button"] { cursor: none; }

    /* ============================================================
       SCROLLBAR
    ============================================================ */
    ::-webkit-scrollbar { width: 2px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, var(--blue), var(--purple), var(--gold));
      border-radius: 2px;
    }

    /* ============================================================
       LOADING SCREEN
    ============================================================ */
    #loader {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: var(--bg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      transition: opacity 0.8s ease, visibility 0.8s ease;
    }

    #loader.hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .loader-logo {
      font-family: var(--font-mono);
      font-size: 2.8rem;
      font-weight: 700;
      letter-spacing: 8px;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: loaderPulse 1.4s ease infinite;
    }

    @keyframes loaderPulse {
      0%,100% { opacity: 1; }
      50%      { opacity: 0.4; }
    }

    .loader-bar-wrap {
      width: 260px;
      height: 2px;
      background: var(--w08);
      border-radius: 2px;
      overflow: hidden;
    }

    .loader-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--blue), var(--gold), var(--purple));
      border-radius: 2px;
      animation: loaderFill 2.2s cubic-bezier(0.4,0,0.2,1) forwards;
    }

    @keyframes loaderFill {
      0%   { width: 0%; }
      60%  { width: 75%; }
      100% { width: 100%; }
    }

    .loader-text {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--w30);
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    /* ============================================================
       CUSTOM CURSOR — PREMIUM MULTI-LAYER
    ============================================================ */
    #c-dot {
      position: fixed;
      width: 6px; height: 6px;
      background: var(--white);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10001;
      transform: translate(-50%,-50%);
      transition: width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s;
      mix-blend-mode: difference;
    }

    #c-ring {
      position: fixed;
      width: 36px; height: 36px;
      border: 1px solid rgba(0,212,255,0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%,-50%);
      transition: width 0.35s ease, height 0.35s ease, border-color 0.35s, opacity 0.35s;
    }

    #c-trail {
      position: fixed;
      width: 80px; height: 80px;
      border: 1px solid rgba(0,212,255,0.12);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%,-50%);
      transition: width 0.55s ease, height 0.55s ease, opacity 0.55s;
    }

    .cursor-hover #c-ring {
      width: 60px; height: 60px;
      border-color: var(--gold);
      background: rgba(255,215,0,0.04);
    }

    .cursor-hover #c-trail {
      width: 120px; height: 120px;
      border-color: rgba(255,215,0,0.08);
    }

    .cursor-click #c-ring {
      width: 20px; height: 20px;
      background: rgba(0,212,255,0.2);
    }

    /* ============================================================
       CANVAS LAYERS
    ============================================================ */
    #particles-canvas {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: 0.7;
    }

    #webgl-canvas {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: 0.45;
    }

    /* ============================================================
       AURORA BACKGROUND — ENHANCED 5 BLOBS
    ============================================================ */
    .aurora {
      position: fixed;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .ab {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      will-change: transform;
    }

    .ab1 {
      width: 900px; height: 900px;
      background: radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%);
      top: -25%; left: -20%;
      animation: ab1 20s ease-in-out infinite;
    }

    .ab2 {
      width: 650px; height: 650px;
      background: radial-gradient(circle, rgba(255,215,0,0.1), transparent 70%);
      bottom: -18%; right: -18%;
      animation: ab2 26s ease-in-out infinite;
    }

    .ab3 {
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(155,89,255,0.09), transparent 70%);
      top: 35%; left: 35%;
      animation: ab3 34s ease-in-out infinite;
    }

    .ab4 {
      width: 380px; height: 380px;
      background: radial-gradient(circle, rgba(255,61,222,0.07), transparent 70%);
      top: 60%; left: 15%;
      animation: ab4 28s ease-in-out infinite;
    }

    .ab5 {
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(0,255,136,0.06), transparent 70%);
      top: 10%; right: 20%;
      animation: ab5 22s ease-in-out infinite;
    }

    @keyframes ab1 {
      0%,100% { transform: translate(0,0) scale(1); }
      33%      { transform: translate(100px,80px) scale(1.1); }
      66%      { transform: translate(-60px,100px) scale(0.92); }
    }
    @keyframes ab2 {
      0%,100% { transform: translate(0,0) scale(1); }
      33%      { transform: translate(-90px,-65px) scale(1.15); }
      66%      { transform: translate(60px,-80px) scale(0.88); }
    }
    @keyframes ab3 {
      0%,100% { transform: translate(0,0) scale(1); }
      50%      { transform: translate(80px,-80px) scale(1.6); }
    }
    @keyframes ab4 {
      0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
      50%      { transform: translate(-50px,40px) scale(1.3) rotate(180deg); }
    }
    @keyframes ab5 {
      0%,100% { transform: translate(0,0) scale(1); }
      50%      { transform: translate(40px,60px) scale(1.4); }
    }

    /* ============================================================
       OVERLAYS
    ============================================================ */
    .noise-overlay {
      position: fixed; inset: 0; z-index: 1;
      pointer-events: none; opacity: 0.028;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 256px;
    }

    .grid-overlay {
      position: fixed; inset: 0; z-index: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(0,212,255,0.022) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.022) 1px, transparent 1px);
      background-size: 72px 72px;
      mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
    }

    .scan-line {
      position: fixed; inset: 0; z-index: 1;
      pointer-events: none;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.03) 2px,
        rgba(0,0,0,0.03) 4px
      );
    }

    /* ============================================================
       NAVIGATION — ULTRA PREMIUM
    ============================================================ */
    #nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 2rem 6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
    }

    #nav.scrolled {
      padding: 1rem 6rem;
      background: rgba(3,3,10,0.85);
      backdrop-filter: blur(32px) saturate(180%);
      -webkit-backdrop-filter: blur(32px) saturate(180%);
      border-bottom: 1px solid rgba(0,212,255,0.08);
      box-shadow: 0 8px 40px rgba(0,0,0,0.4);
    }

    .nav-logo-wrap {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      text-decoration: none;
    }

    .nav-logo-icon {
      width: 40px; height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--blue), var(--blue-dk));
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 1rem;
      color: #000;
      box-shadow: 0 0 20px var(--blue-glow2), inset 0 1px 0 rgba(255,255,255,0.2);
      transition: box-shadow 0.3s, transform 0.3s;
    }

    .nav-logo-wrap:hover .nav-logo-icon {
      box-shadow: 0 0 40px var(--blue-glow);
      transform: rotate(5deg) scale(1.05);
    }

    .nav-logo-text {
      font-family: var(--font-mono);
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 4px;
      background: linear-gradient(135deg, var(--white), var(--blue-lt));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-center {
      display: flex;
      align-items: center;
      gap: 0;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 50px;
      padding: 0.35rem;
      backdrop-filter: blur(20px);
    }

    .nav-center a {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1.3rem;
      border-radius: 50px;
      font-size: 0.78rem;
      font-weight: 500;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--w60);
      transition: all 0.3s;
      position: relative;
    }

    .nav-center a:hover,
    .nav-center a.active {
      color: var(--white);
      background: rgba(0,212,255,0.1);
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.45rem 1rem;
      background: rgba(0,255,136,0.08);
      border: 1px solid rgba(0,255,136,0.18);
      border-radius: 50px;
      font-size: 0.7rem;
      color: var(--green);
      letter-spacing: 1.5px;
    }

    .nav-status-dot {
      width: 5px; height: 5px;
      background: var(--green);
      border-radius: 50%;
      box-shadow: 0 0 6px var(--green);
      animation: statusPulse 2s infinite;
    }

    @keyframes statusPulse {
      0%,100% { opacity: 1; transform: scale(1); box-shadow: 0 0 6px var(--green); }
      50%      { opacity: 0.5; transform: scale(0.7); box-shadow: 0 0 2px var(--green); }
    }

    .nav-hire {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.5rem;
      background: linear-gradient(135deg, var(--blue), var(--blue-dk));
      color: #000 !important;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 50px;
      box-shadow: 0 0 24px var(--blue-glow2), 0 4px 15px rgba(0,0,0,0.3);
      transition: all 0.3s;
    }

    .nav-hire:hover {
      box-shadow: 0 0 50px var(--blue-glow), 0 8px 25px rgba(0,0,0,0.4);
      transform: translateY(-2px);
    }

    /* hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: 1px solid var(--glass-b);
      border-radius: var(--r-sm);
      padding: 0.65rem 0.75rem;
    }

    .hamburger span {
      display: block;
      width: 20px; height: 1.5px;
      background: var(--w70);
      border-radius: 2px;
      transition: all 0.3s;
    }

    /* mobile nav */
    #mob-nav {
      position: fixed;
      inset: 0;
      z-index: 998;
      background: rgba(3,3,10,0.97);
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s;
    }

    #mob-nav.open { opacity: 1; pointer-events: all; }

    #mob-nav a {
      font-family: var(--font-disp);
      font-size: clamp(2rem, 8vw, 3.5rem);
      font-weight: 800;
      text-decoration: none;
      color: var(--w60);
      letter-spacing: 4px;
      text-transform: uppercase;
      transition: all 0.3s;
      position: relative;
    }

    #mob-nav a::before {
      content: attr(data-num);
      position: absolute;
      left: -2.5rem;
      top: 50%;
      transform: translateY(-50%);
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--blue);
      letter-spacing: 2px;
    }

    #mob-nav a:hover { color: var(--blue); }

    .mob-close {
      position: absolute;
      top: 2rem; right: 2.5rem;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: 50%;
      width: 48px; height: 48px;
      color: var(--w70);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }

    .mob-close:hover {
      background: var(--blue-dim);
      border-color: var(--blue);
      color: var(--white);
    }

    /* ============================================================
       HERO SECTION — NEXT LEVEL
    ============================================================ */
    #hero {
      position: relative;
      z-index: 2;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 9rem 2rem 6rem;
      overflow: hidden;
    }

    /* Massive layered orb system */
    .orb-system {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      pointer-events: none;
      z-index: 0;
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      transform: translate(-50%,-50%);
    }

    .orb1 {
      width: 700px; height: 700px;
      border: 1px solid rgba(0,212,255,0.06);
      background: radial-gradient(circle at 35% 35%,
        rgba(0,212,255,0.04), transparent 55%);
      animation: orbSpin1 25s linear infinite;
    }

    .orb2 {
      width: 520px; height: 520px;
      border: 1px solid rgba(255,215,0,0.05);
      animation: orbSpin1 35s linear infinite reverse;
    }

    .orb3 {
      width: 360px; height: 360px;
      border: 1px solid rgba(155,89,255,0.07);
      animation: orbSpin1 18s linear infinite;
    }

    .orb4 {
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%);
      filter: blur(20px);
      animation: orbPulse 5s ease-in-out infinite;
    }

    @keyframes orbSpin1 {
      from { transform: translate(-50%,-50%) rotate(0deg); }
      to   { transform: translate(-50%,-50%) rotate(360deg); }
    }

    @keyframes orbPulse {
      0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
      50%      { transform: translate(-50%,-50%) scale(1.4); opacity: 1; }
    }

    /* Orbital dots on ring */
    .orb1::before, .orb1::after {
      content: '';
      position: absolute;
      width: 6px; height: 6px;
      background: var(--blue);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--blue), 0 0 20px var(--blue-glow);
    }

    .orb1::before { top: -3px; left: 50%; transform: translateX(-50%); }
    .orb1::after  { bottom: -3px; left: 50%; transform: translateX(-50%); }

    .orb2::before, .orb2::after {
      content: '';
      position: absolute;
      width: 4px; height: 4px;
      background: var(--gold);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--gold), 0 0 16px var(--gold-glow);
    }

    .orb2::before { top: -2px; left: 50%; transform: translateX(-50%); }
    .orb2::after  { bottom: -2px; right: 25%; }

    /* 3D HERO CUBES — Enhanced */
    .cube-scene {
      position: absolute;
      perspective: 600px;
    }

    .cs-1 {
      top: 12%; right: 5%;
      width: 100px; height: 100px;
      animation: floatY 10s ease-in-out infinite;
    }

    .cs-2 {
      bottom: 20%; left: 6%;
      width: 60px; height: 60px;
      animation: floatY 13s ease-in-out infinite reverse;
    }

    .cs-3 {
      top: 20%; left: 8%;
      width: 45px; height: 45px;
      animation: floatY 8s ease-in-out infinite 2s;
    }

    .cs-4 {
      bottom: 30%; right: 8%;
      width: 35px; height: 35px;
      animation: floatY 11s ease-in-out infinite 1s;
    }

    @keyframes floatY {
      0%,100% { transform: translateY(0px); }
      50%      { transform: translateY(-26px); }
    }

    .cube3d {
      width: 100%; height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: spin3d 14s linear infinite;
    }

    .cs-2 .cube3d { animation-duration: 19s; animation-direction: reverse; }
    .cs-3 .cube3d { animation-duration: 11s; animation-timing-function: ease; }
    .cs-4 .cube3d { animation-duration: 24s; }

    @keyframes spin3d {
      0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
      33%  { transform: rotateX(120deg) rotateY(240deg) rotateZ(60deg); }
      66%  { transform: rotateX(240deg) rotateY(120deg) rotateZ(180deg); }
      100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
    }

    .cf {
      position: absolute;
      width: 100%; height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-size: 0.6rem;
      font-weight: 600;
      letter-spacing: 1px;
      border: 1px solid rgba(0,212,255,0.3);
      background: rgba(0,212,255,0.04);
      color: var(--blue);
      backdrop-filter: blur(4px);
    }

    /* Gold cube faces */
    .cs-2 .cf {
      border-color: rgba(255,215,0,0.3);
      background: rgba(255,215,0,0.04);
      color: var(--gold);
    }

    .cs-3 .cf {
      border-color: rgba(155,89,255,0.3);
      background: rgba(155,89,255,0.04);
      color: var(--purple);
    }

    .cs-4 .cf {
      border-color: rgba(0,255,136,0.3);
      background: rgba(0,255,136,0.04);
      color: var(--green);
    }

    /* Translate faces */
    .cf-fr { transform: translateZ(50px); }
    .cf-bk { transform: rotateY(180deg) translateZ(50px); }
    .cf-rt { transform: rotateY(90deg) translateZ(50px); }
    .cf-lt { transform: rotateY(-90deg) translateZ(50px); }
    .cf-tp { transform: rotateX(90deg) translateZ(50px); }
    .cf-bt { transform: rotateX(-90deg) translateZ(50px); }

    .cs-2 .cf-fr  { transform: translateZ(30px); }
    .cs-2 .cf-bk  { transform: rotateY(180deg) translateZ(30px); }
    .cs-2 .cf-rt  { transform: rotateY(90deg) translateZ(30px); }
    .cs-2 .cf-lt  { transform: rotateY(-90deg) translateZ(30px); }
    .cs-2 .cf-tp  { transform: rotateX(90deg) translateZ(30px); }
    .cs-2 .cf-bt  { transform: rotateX(-90deg) translateZ(30px); }

    .cs-3 .cf-fr  { transform: translateZ(22.5px); }
    .cs-3 .cf-bk  { transform: rotateY(180deg) translateZ(22.5px); }
    .cs-3 .cf-rt  { transform: rotateY(90deg) translateZ(22.5px); }
    .cs-3 .cf-lt  { transform: rotateY(-90deg) translateZ(22.5px); }
    .cs-3 .cf-tp  { transform: rotateX(90deg) translateZ(22.5px); }
    .cs-3 .cf-bt  { transform: rotateX(-90deg) translateZ(22.5px); }

    .cs-4 .cf-fr  { transform: translateZ(17.5px); }
    .cs-4 .cf-bk  { transform: rotateY(180deg) translateZ(17.5px); }
    .cs-4 .cf-rt  { transform: rotateY(90deg) translateZ(17.5px); }
    .cs-4 .cf-lt  { transform: rotateY(-90deg) translateZ(17.5px); }
    .cs-4 .cf-tp  { transform: rotateX(90deg) translateZ(17.5px); }
    .cs-4 .cf-bt  { transform: rotateX(-90deg) translateZ(17.5px); }

    /* Floating geometric shapes */
    .geo {
      position: absolute;
      pointer-events: none;
    }

    .geo-ring {
      width: 120px; height: 120px;
      border: 1px solid rgba(0,212,255,0.15);
      border-radius: 50%;
      top: 65%; right: 12%;
      animation: geoSpin 20s linear infinite;
    }

    .geo-ring::before {
      content: '';
      position: absolute;
      inset: 15px;
      border: 1px solid rgba(255,215,0,0.12);
      border-radius: 50%;
    }

    .geo-ring2 {
      width: 80px; height: 80px;
      border: 1px dashed rgba(155,89,255,0.2);
      border-radius: 50%;
      top: 25%; left: 14%;
      animation: geoSpin 15s linear infinite reverse;
    }

    .geo-tri {
      width: 0; height: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 44px solid rgba(0,212,255,0.08);
      top: 75%; left: 20%;
      filter: drop-shadow(0 0 8px rgba(0,212,255,0.3));
      animation: floatY 12s ease-in-out infinite 3s;
    }

    .geo-sq {
      width: 30px; height: 30px;
      border: 1px solid rgba(255,215,0,0.25);
      top: 45%; right: 18%;
      animation: geoSpin 18s linear infinite, floatY 9s ease-in-out infinite;
      transform-origin: center;
    }

    @keyframes geoSpin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    /* Hero content */
    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1000px;
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      background: rgba(0,212,255,0.06);
      border: 1px solid rgba(0,212,255,0.18);
      padding: 0.55rem 1.4rem;
      border-radius: 50px;
      font-size: 0.7rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--blue-lt);
      margin-bottom: 3rem;
      animation: fadeUpIn 0.8s ease both;
      backdrop-filter: blur(10px);
    }

    .p-dot {
      width: 6px; height: 6px;
      background: var(--green);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--green), 0 0 16px var(--green-glow);
      animation: statusPulse 2s infinite;
    }

    .hero-greeting {
      font-family: var(--font-mono);
      font-size: clamp(0.8rem, 1.5vw, 1rem);
      color: var(--blue);
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 1rem;
      animation: fadeUpIn 0.8s ease 0.1s both;
      display: block;
    }

    .hero-name {
      font-family: var(--font-disp);
      font-size: clamp(4.5rem, 14vw, 12rem);
      font-weight: 800;
      line-height: 0.85;
      letter-spacing: -6px;
      margin-bottom: 1.5rem;
      background: linear-gradient(
        135deg,
        var(--white) 0%,
        var(--blue-lt) 25%,
        var(--white) 45%,
        var(--gold) 65%,
        var(--white) 80%,
        var(--purple) 100%
      );
      background-size: 400% 400%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: heroGrad 8s ease infinite, fadeUpIn 0.9s ease 0.2s both;
      position: relative;
    }

    .hero-name::after {
      content: 'MUQADDAM';
      position: absolute;
      top: 0; left: 0; right: 0;
      font-family: var(--font-disp);
      font-size: inherit;
      font-weight: 800;
      letter-spacing: -6px;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px rgba(0,212,255,0.08);
      background: none;
      background-clip: unset;
      z-index: -1;
      transform: translate(3px, 3px);
      filter: blur(1px);
    }

    @keyframes heroGrad {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .hero-role-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      margin-bottom: 1.8rem;
      animation: fadeUpIn 0.8s ease 0.35s both;
    }

    .role-line {
      flex: 1;
      max-width: 80px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--blue));
    }

    .role-line.r { background: linear-gradient(90deg, var(--blue), transparent); }

    .hero-role {
      font-size: clamp(0.8rem, 2vw, 1.1rem);
      letter-spacing: 6px;
      text-transform: uppercase;
      color: var(--w60);
      font-weight: 400;
    }

    .hero-typed-wrap {
      font-size: clamp(1rem, 2.5vw, 1.4rem);
      color: var(--w40);
      min-height: 2em;
      margin-bottom: 1.2rem;
      animation: fadeUpIn 0.8s ease 0.45s both;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .typed-prefix {
      color: var(--w30);
      font-family: var(--font-mono);
      font-size: 0.85em;
    }

    #typed-out {
      color: var(--blue-lt);
      font-weight: 600;
      font-family: var(--font-mono);
    }

    .cursor-blink {
      display: inline-block;
      width: 2px;
      height: 1.1em;
      background: var(--blue);
      vertical-align: middle;
      margin-left: 2px;
      animation: blinkIt 1s step-end infinite;
    }

    @keyframes blinkIt { 0%,100%{opacity:1} 50%{opacity:0} }

    .hero-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 3.5rem;
      animation: fadeUpIn 0.8s ease 0.55s both;
      flex-wrap: wrap;
    }

    .hero-meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.84rem;
      color: var(--w40);
    }

    .hero-meta-item i {
      font-size: 0.8rem;
    }

    .hero-meta-item.loc i { color: var(--gold); }
    .hero-meta-item.age i { color: var(--purple); }
    .hero-meta-item.exp i { color: var(--green); }

    .meta-sep {
      width: 3px; height: 3px;
      background: var(--w20);
      border-radius: 50%;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      animation: fadeUpIn 0.8s ease 0.7s both;
      margin-bottom: 1.5rem;
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem 2.4rem;
      border-radius: var(--r-sm);
      font-family: var(--font-main);
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      border: none;
      position: relative;
      overflow: hidden;
      transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
      z-index: 1;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.35s;
      z-index: -1;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dk) 100%);
      color: #000;
      box-shadow:
        0 0 30px var(--blue-glow2),
        0 8px 30px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.2);
    }

    .btn-primary::before {
      background: linear-gradient(135deg, var(--blue-lt), var(--blue));
    }

    .btn-primary:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow:
        0 0 60px var(--blue-glow),
        0 20px 50px rgba(0,0,0,0.5);
      color: #000;
    }

    .btn-primary:hover::before { opacity: 1; }

    .btn-secondary {
      background: var(--glass);
      color: var(--white);
      border: 1px solid var(--glass-b2);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      border-color: var(--blue);
      color: var(--blue);
      background: var(--blue-dim);
      transform: translateY(-4px);
      box-shadow: 0 0 30px var(--blue-dim);
    }

    .btn-gold {
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dk) 100%);
      color: #000;
      box-shadow:
        0 0 28px var(--gold-glow2),
        0 8px 25px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.25);
    }

    .btn-gold:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow:
        0 0 60px var(--gold-glow),
        0 20px 50px rgba(0,0,0,0.5);
    }

    .btn i {
      font-size: 0.85em;
      transition: transform 0.3s;
    }

    .btn:hover i { transform: translateX(2px); }

    /* Scroll indicator */
    .scroll-hint {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      animation: fadeUpIn 1s ease 1.4s both;
    }

    .scroll-label {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      letter-spacing: 4px;
      color: var(--w25, rgba(255,255,255,0.25));
      text-transform: uppercase;
    }

    .scroll-mouse {
      width: 22px; height: 36px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 11px;
      position: relative;
      display: flex;
      justify-content: center;
    }

    .scroll-wheel {
      width: 2px; height: 6px;
      background: var(--blue);
      border-radius: 2px;
      margin-top: 6px;
      animation: scrollWheel 2s ease infinite;
      box-shadow: 0 0 6px var(--blue);
    }

    @keyframes scrollWheel {
      0%   { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(12px); opacity: 0; }
    }

    /* ============================================================
       STATS BAR
    ============================================================ */
    .stats-bar {
      position: relative;
      z-index: 2;
      padding: 0;
      border-top: 1px solid var(--glass-b);
      border-bottom: 1px solid var(--glass-b);
      background: linear-gradient(90deg,
        rgba(0,212,255,0.02) 0%,
        rgba(255,215,0,0.02) 50%,
        rgba(155,89,255,0.02) 100%
      );
    }

    .stats-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      divide-x: 1px solid var(--glass-b);
    }

    .stat-item {
      padding: 2.5rem 2rem;
      text-align: center;
      border-right: 1px solid var(--glass-b);
      position: relative;
      overflow: hidden;
      transition: background 0.3s;
    }

    .stat-item:last-child { border-right: none; }

    .stat-item::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--blue-trace);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .stat-item:hover::before { opacity: 1; }

    .stat-num {
      font-family: var(--font-disp);
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      font-weight: 800;
      line-height: 1;
      margin-bottom: 0.4rem;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.72rem;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--w40);
      font-weight: 500;
    }

    .stat-sub {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--blue);
      margin-top: 0.3rem;
      letter-spacing: 1px;
    }

    /* ============================================================
       MARQUEE STRIP — PREMIUM
    ============================================================ */
    .marquee-wrap {
      position: relative;
      z-index: 2;
      overflow: hidden;
      padding: 1.5rem 0;
      background: var(--bg2);
    }

    .marquee-wrap::before,
    .marquee-wrap::after {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      width: 200px;
      z-index: 1;
      pointer-events: none;
    }

    .marquee-wrap::before {
      left: 0;
      background: linear-gradient(90deg, var(--bg2), transparent);
    }

    .marquee-wrap::after {
      right: 0;
      background: linear-gradient(90deg, transparent, var(--bg2));
    }

    .marquee-track {
      display: flex;
      gap: 1.5rem;
      width: max-content;
      animation: mRun 30s linear infinite;
    }

    .marquee-track:hover { animation-play-state: paused; }

    @keyframes mRun {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    .m-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.45rem 1.1rem;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: 50px;
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--w60);
      white-space: nowrap;
      transition: all 0.3s;
    }

    .m-chip:hover {
      color: var(--blue);
      border-color: rgba(0,212,255,0.3);
      background: var(--blue-dim);
      box-shadow: 0 0 15px var(--blue-dim);
    }

    .m-chip i { font-size: 0.9rem; }
    .m-chip .ic-blue { color: var(--blue); }
    .m-chip .ic-gold { color: var(--gold); }
    .m-chip .ic-green { color: var(--green); }
    .m-chip .ic-purple { color: var(--purple); }

    /* ============================================================
       DIVIDER
    ============================================================ */
    .glow-divider {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(0,212,255,0.1) 30%,
        rgba(255,215,0,0.15) 50%,
        rgba(0,212,255,0.1) 70%,
        transparent 100%
      );
    }

    /* ============================================================
       SECTION LAYOUT
    ============================================================ */
    .section {
      position: relative;
      z-index: 2;
      padding: 10rem 6rem;
      max-width: 1320px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 6rem;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.9rem;
      font-family: var(--font-mono);
      font-size: 0.67rem;
      color: var(--blue);
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      opacity: 0;
      transform: translateY(16px);
      transition: all 0.6s ease;
    }

    .eyebrow::before {
      content: '';
      width: 40px; height: 1px;
      background: linear-gradient(90deg, transparent, var(--blue));
    }

    .eyebrow::after {
      content: '';
      width: 40px; height: 1px;
      background: linear-gradient(90deg, var(--blue), transparent);
    }

    .eyebrow.vis { opacity: 1; transform: translateY(0); }

    .section-title {
      font-family: var(--font-disp);
      font-size: clamp(2.5rem, 5.5vw, 5rem);
      font-weight: 800;
      line-height: 1.05;
      margin-bottom: 1.6rem;
      opacity: 0;
      transform: translateY(28px);
      transition: all 0.7s ease 0.1s;
    }

    .section-title.vis { opacity: 1; transform: translateY(0); }

    .section-title .acc-blue {
      background: linear-gradient(135deg, var(--blue), var(--blue-lt));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-title .acc-gold {
      background: linear-gradient(135deg, var(--gold), var(--gold-lt));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-title .acc-grad {
      background: linear-gradient(135deg, var(--blue), var(--purple), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-sub {
      font-size: 1.05rem;
      color: var(--w50);
      max-width: 600px;
      line-height: 1.9;
      opacity: 0;
      transform: translateY(16px);
      transition: all 0.6s ease 0.2s;
    }

    .section-sub.vis { opacity: 1; transform: translateY(0); }

    .sec-bg-num {
      position: absolute;
      top: 6rem;
      right: -1rem;
      font-family: var(--font-mono);
      font-size: clamp(100px, 18vw, 260px);
      font-weight: 800;
      color: rgba(255,255,255,0.012);
      pointer-events: none;
      user-select: none;
      line-height: 1;
    }

    /* ============================================================
       ABOUT SECTION
    ============================================================ */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 6rem;
      align-items: center;
    }

    /* Premium ID Card */
    .id-card-scene {
      perspective: 1400px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
    }

    .id-card {
      width: 320px;
      height: 480px;
      border-radius: 24px;
      position: relative;
      transform-style: preserve-3d;
      background: linear-gradient(
        145deg,
        rgba(0,212,255,0.06) 0%,
        rgba(255,255,255,0.03) 40%,
        rgba(255,215,0,0.04) 70%,
        rgba(155,89,255,0.04) 100%
      );
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow:
        0 0 80px rgba(0,212,255,0.08),
        0 40px 100px rgba(0,0,0,0.6),
        inset 0 1px 0 rgba(255,255,255,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s;
      overflow: hidden;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .id-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg,
        transparent,
        var(--blue),
        var(--gold),
        var(--purple),
        transparent
      );
    }

    .id-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at 30% 20%,
        rgba(0,212,255,0.08),
        transparent 55%
      );
      pointer-events: none;
    }

    /* Holographic shimmer */
    .id-holo {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        105deg,
        transparent 40%,
        rgba(0,212,255,0.04) 45%,
        rgba(255,215,0,0.06) 50%,
        rgba(155,89,255,0.04) 55%,
        transparent 60%
      );
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      animation: holoShimmer 4s ease infinite;
    }

    @keyframes holoShimmer {
      0%,100% { opacity: 0; background-position: 0% 0%; }
      50%      { opacity: 1; background-position: 100% 100%; }
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .card-badge {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      letter-spacing: 2px;
      color: var(--blue);
      background: var(--blue-dim);
      border: 1px solid rgba(0,212,255,0.2);
      padding: 0.3rem 0.7rem;
      border-radius: 50px;
    }

    .card-logo-mark {
      width: 32px; height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 700;
      color: #000;
    }

    .card-avatar {
      width: 86px; height: 86px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--blue), var(--purple), var(--gold));
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-disp);
      font-size: 2.2rem;
      font-weight: 800;
      color: #000;
      margin: 0 auto 1.2rem;
      box-shadow:
        0 0 30px var(--blue-glow2),
        0 0 60px rgba(0,212,255,0.1),
        inset 0 2px 4px rgba(255,255,255,0.2);
      position: relative;
    }

    .card-avatar::after {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      border: 1px solid rgba(0,212,255,0.25);
      animation: avatarRing 3s linear infinite;
    }

    @keyframes avatarRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    .card-info { text-align: center; }

    .card-name {
      font-family: var(--font-disp);
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 3px;
      margin-bottom: 0.3rem;
    }

    .card-role-tag {
      font-size: 0.7rem;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--blue);
      margin-bottom: 1rem;
    }

    .card-online {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: var(--green-dim);
      border: 1px solid rgba(0,255,136,0.2);
      border-radius: 50px;
      padding: 0.28rem 0.8rem;
      font-size: 0.68rem;
      color: var(--green);
      letter-spacing: 1.5px;
    }

    .card-online .od {
      width: 5px; height: 5px;
      background: var(--green);
      border-radius: 50%;
      box-shadow: 0 0 6px var(--green);
      animation: statusPulse 2s infinite;
    }

    .card-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--glass-b2), transparent);
      margin: 1.2rem 0;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.8rem;
    }

    .cg-item {
      text-align: center;
      padding: 0.8rem 0.4rem;
      background: var(--glass);
      border-radius: var(--r-sm);
      border: 1px solid var(--glass-b);
    }

    .cg-num {
      font-family: var(--font-mono);
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      margin-bottom: 0.2rem;
    }

    .cg-lbl {
      font-size: 0.58rem;
      color: var(--w40);
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .card-footer-info {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--w25, rgba(255,255,255,0.25));
      letter-spacing: 2px;
      text-align: center;
    }

    /* Mini terminal */
    .mini-terminal {
      width: 320px;
      background: rgba(5,5,15,0.9);
      border: 1px solid rgba(0,212,255,0.15);
      border-radius: var(--r);
      overflow: hidden;
      backdrop-filter: blur(20px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.05);
    }

    .term-header {
      padding: 0.75rem 1rem;
      background: rgba(0,0,0,0.4);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .term-dot {
      width: 10px; height: 10px;
      border-radius: 50%;
    }

    .td-r { background: #ff5f57; }
    .td-y { background: #ffbd2e; }
    .td-g { background: #28c840; }

    .term-title {
      margin-left: auto;
      font-family: var(--font-mono);
      font-size: 0.6rem;
      color: var(--w30);
      letter-spacing: 2px;
    }

    .term-body {
      padding: 1.2rem;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      line-height: 1.9;
    }

    .term-line { display: flex; gap: 0.5rem; margin-bottom: 0.15rem; }
    .term-prompt { color: var(--green); }
    .term-cmd    { color: var(--white); }
    .term-out    { color: var(--w50); padding-left: 1.2rem; display: block; }
    .term-key    { color: var(--blue); }
    .term-val    { color: var(--gold); }
    .term-success{ color: var(--green); padding-left: 1.2rem; display: block; }

    /* About text */
    .about-content {}

    .about-content h3 {
      font-family: var(--font-disp);
      font-size: clamp(1.5rem, 2.5vw, 2.2rem);
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 1.5rem;
    }

    .about-content p {
      color: var(--w65, rgba(255,255,255,0.65));
      line-height: 1.95;
      margin-bottom: 1.3rem;
      font-size: 1rem;
    }

    .about-content p strong {
      color: var(--white);
      font-weight: 600;
    }

    .about-content p em {
      color: var(--blue-lt);
      font-style: normal;
    }

    .feature-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.65rem;
      margin: 2rem 0;
    }

    .feat-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.88rem;
      color: var(--w70);
      padding: 0.6rem 0.8rem;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r-sm);
      transition: all 0.3s;
    }

    .feat-item:hover {
      border-color: rgba(0,212,255,0.2);
      background: var(--blue-dim);
      color: var(--white);
    }

    .feat-item i {
      color: var(--blue);
      font-size: 0.78rem;
      width: 14px;
      flex-shrink: 0;
    }

    .tags-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 2rem;
    }

    .tech-tag {
      padding: 0.3rem 0.85rem;
      border-radius: 50px;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      font-size: 0.76rem;
      color: var(--w60);
      font-family: var(--font-mono);
      transition: all 0.3s;
    }

    .tech-tag:hover {
      background: var(--blue-dim);
      border-color: rgba(0,212,255,0.3);
      color: var(--blue-lt);
    }

    .tech-tag.gold {
      border-color: rgba(255,215,0,0.2);
      color: var(--gold);
    }

    .tech-tag.gold:hover {
      background: var(--gold-dim);
      border-color: rgba(255,215,0,0.4);
    }

    /* ============================================================
       SKILLS SECTION — PREMIUM
    ============================================================ */
    .skills-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 1.5rem;
    }

    .skill-card {
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r-lg);
      padding: 2.2rem;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
      opacity: 0;
      transform: translateY(32px);
      transition:
        opacity 0.6s ease,
        transform 0.6s ease,
        border-color 0.35s,
        box-shadow 0.35s;
    }

    .skill-card.vis { opacity: 1; transform: translateY(0); }

    .skill-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, var(--blue-trace), transparent 60%);
      opacity: 0;
      transition: opacity 0.4s;
    }

    .skill-card:hover::before { opacity: 1; }

    .skill-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--blue), var(--gold), transparent);
      opacity: 0;
      transition: opacity 0.4s;
    }

    .skill-card:hover {
      border-color: rgba(0,212,255,0.2);
      box-shadow:
        0 30px 80px rgba(0,212,255,0.08),
        0 0 0 1px rgba(0,212,255,0.06);
      transform: translateY(-6px) !important;
    }

    .skill-card:hover::after { opacity: 1; }

    .sk-card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .sk-icon-box {
      width: 52px; height: 52px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      position: relative;
      flex-shrink: 0;
    }

    .sk-icon-box.blue {
      background: var(--blue-dim);
      border: 1px solid rgba(0,212,255,0.18);
      box-shadow: 0 0 20px var(--blue-dim);
    }

    .sk-icon-box.gold {
      background: var(--gold-dim);
      border: 1px solid rgba(255,215,0,0.18);
      box-shadow: 0 0 20px var(--gold-dim);
    }

    .sk-icon-box.purple {
      background: var(--purple-dim);
      border: 1px solid rgba(155,89,255,0.18);
      box-shadow: 0 0 20px var(--purple-dim);
    }

    .sk-icon-box.green {
      background: var(--green-dim);
      border: 1px solid rgba(0,255,136,0.18);
      box-shadow: 0 0 20px var(--green-dim);
    }

    .skill-card:hover .sk-icon-box { transform: scale(1.08) rotate(3deg); }
    .sk-icon-box { transition: transform 0.3s; }

    .sk-card-label {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }

    .sk-card-sub {
      font-size: 0.72rem;
      color: var(--w40);
      letter-spacing: 1px;
    }

    .skill-bar-group {}

    .s-row {
      margin-bottom: 1.1rem;
    }

    .s-row:last-child { margin-bottom: 0; }

    .s-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.45rem;
    }

    .s-name {
      font-size: 0.82rem;
      color: var(--w65, rgba(255,255,255,0.65));
      font-weight: 500;
    }

    .s-pct {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--blue);
      font-weight: 600;
    }

    .s-track {
      height: 3px;
      background: rgba(255,255,255,0.06);
      border-radius: 3px;
      overflow: visible;
      position: relative;
    }

    .s-fill {
      height: 100%;
      width: 0%;
      border-radius: 3px;
      background: linear-gradient(90deg, var(--blue), var(--gold));
      transition: width 1.6s cubic-bezier(0.4,0,0.2,1);
      position: relative;
    }

    .s-fill::after {
      content: '';
      position: absolute;
      right: -1px;
      top: 50%;
      transform: translateY(-50%);
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--gold);
      box-shadow: 0 0 8px var(--gold-glow2);
      opacity: 0;
      transition: opacity 0.3s 1.5s;
    }

    .s-fill.done::after { opacity: 1; }

    /* Skill cloud */
    .skill-cloud-section {
      margin-top: 4rem;
      padding: 3rem;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r-lg);
      text-align: center;
      opacity: 0;
      transform: translateY(28px);
      transition: all 0.6s ease 0.3s;
    }

    .skill-cloud-section.vis { opacity: 1; transform: translateY(0); }

    .skill-cloud-title {
      font-size: 0.7rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--w40);
      margin-bottom: 2rem;
    }

    .skill-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.7rem;
    }

    .sc-tag {
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: default;
      transition: all 0.3s;
      font-family: var(--font-mono);
    }

    .sc-tag.lvl-expert {
      background: rgba(0,212,255,0.1);
      border: 1px solid rgba(0,212,255,0.25);
      color: var(--blue-lt);
      font-size: 0.85rem;
    }

    .sc-tag.lvl-advanced {
      background: rgba(255,215,0,0.08);
      border: 1px solid rgba(255,215,0,0.2);
      color: var(--gold-lt);
    }

    .sc-tag.lvl-intermediate {
      background: rgba(155,89,255,0.08);
      border: 1px solid rgba(155,89,255,0.18);
      color: var(--purple);
    }

    .sc-tag.lvl-learning {
      background: var(--glass);
      border: 1px solid var(--glass-b);
      color: var(--w40);
      font-size: 0.72rem;
    }

    .sc-tag:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }

    /* ============================================================
       PROJECTS SECTION — PREMIUM CARDS
    ============================================================ */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 1.5rem;
    }

    /* featured project — full width */
    .proj-featured {
      grid-column: 1 / -1;
    }

    .project-card {
      position: relative;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r-lg);
      overflow: hidden;
      transition:
        border-color 0.4s,
        box-shadow 0.4s,
        transform 0.4s cubic-bezier(0.4,0,0.2,1);
      opacity: 0;
      transform: translateY(40px);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .project-card.vis { opacity: 1; transform: translateY(0); }

    .project-card:hover {
      border-color: rgba(0,212,255,0.22);
      box-shadow:
        0 40px 100px rgba(0,212,255,0.1),
        0 0 0 1px rgba(0,212,255,0.07);
    }

    /* Accent border top */
    .pc-accent {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
    }

    .ac-blue   { background: linear-gradient(90deg, var(--blue), var(--blue-lt)); }
    .ac-gold   { background: linear-gradient(90deg, var(--gold), var(--gold-lt)); }
    .ac-purple { background: linear-gradient(90deg, var(--purple), var(--pink)); }
    .ac-green  { background: linear-gradient(90deg, var(--green), var(--blue)); }
    .ac-multi  { background: linear-gradient(90deg, var(--blue), var(--gold), var(--purple), var(--pink)); }

    .pc-inner {
      padding: 2.5rem 2.5rem 2rem;
    }

    /* Featured layout */
    .proj-featured .pc-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      padding: 3rem;
    }

    .pc-left {}

    .pc-num {
      font-family: var(--font-mono);
      font-size: 4.5rem;
      font-weight: 800;
      line-height: 1;
      background: linear-gradient(135deg, rgba(0,212,255,0.2), rgba(255,215,0,0.15));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.8rem;
    }

    .pc-category {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--blue);
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .pc-category::before {
      content: '';
      width: 20px; height: 1px;
      background: var(--blue);
    }

    .pc-title {
      font-family: var(--font-disp);
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    .proj-featured .pc-title { font-size: 1.9rem; }

    .pc-desc {
      font-size: 0.88rem;
      color: var(--w50);
      line-height: 1.85;
      margin-bottom: 1.5rem;
    }

    .pc-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.5rem;
    }

    .pc-tag {
      padding: 0.22rem 0.7rem;
      border-radius: 50px;
      font-size: 0.7rem;
      font-family: var(--font-mono);
      background: var(--blue-dim);
      border: 1px solid rgba(0,212,255,0.18);
      color: var(--blue-lt);
    }

    .pc-tag.gold {
      background: var(--gold-dim);
      border-color: rgba(255,215,0,0.18);
      color: var(--gold-lt);
    }

    .pc-tag.purple {
      background: var(--purple-dim);
      border-color: rgba(155,89,255,0.18);
      color: var(--purple);
    }

    .pc-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.2rem;
      border-top: 1px solid var(--glass-b);
    }

    .pc-status {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.7rem;
      color: var(--w40);
    }

    .pc-status i { color: var(--gold); }

    .pc-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--blue);
      text-decoration: none;
      letter-spacing: 0.5px;
      transition: all 0.25s;
      padding: 0.45rem 1rem;
      border: 1px solid rgba(0,212,255,0.2);
      border-radius: 50px;
      background: var(--blue-dim2);
    }

    .pc-link:hover {
      background: var(--blue-dim);
      border-color: var(--blue);
      gap: 0.7rem;
      box-shadow: 0 0 20px var(--blue-dim);
    }

    /* Right side of featured card — architecture diagram */
    .pc-right {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .arch-block {
      background: rgba(0,212,255,0.04);
      border: 1px solid rgba(0,212,255,0.12);
      border-radius: var(--r-sm);
      padding: 0.8rem 1.2rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--w60);
      display: flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.3s;
    }

    .arch-block:hover {
      background: rgba(0,212,255,0.08);
      border-color: rgba(0,212,255,0.25);
      color: var(--white);
      transform: translateX(6px);
    }

    .arch-block i { color: var(--blue); width: 18px; text-align: center; }

    .arch-arrow {
      text-align: center;
      color: rgba(0,212,255,0.3);
      font-size: 0.8rem;
    }

    /* Radial glow */
    .pc-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        ellipse at var(--mx, 50%) var(--my, 50%),
        rgba(0,212,255,0.06),
        transparent 50%
      );
      opacity: 0;
      transition: opacity 0.4s;
      pointer-events: none;
    }

    .project-card:hover .pc-glow { opacity: 1; }

    /* ============================================================
       EXPERIENCE / TIMELINE SECTION
    ============================================================ */
    .timeline {
      position: relative;
      padding-left: 3rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0; bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom,
        transparent,
        var(--blue) 20%,
        var(--gold) 50%,
        var(--purple) 80%,
        transparent
      );
    }

    .tl-item {
      position: relative;
      padding-bottom: 4rem;
      opacity: 0;
      transform: translateX(-24px);
      transition: all 0.6s ease;
    }

    .tl-item.vis { opacity: 1; transform: translateX(0); }

    .tl-item:last-child { padding-bottom: 0; }

    .tl-dot {
      position: absolute;
      left: -3.4rem;
      top: 0.2rem;
      width: 14px; height: 14px;
      border-radius: 50%;
      border: 2px solid var(--blue);
      background: var(--bg);
      box-shadow: 0 0 12px var(--blue-glow2), 0 0 24px var(--blue-dim);
    }

    .tl-dot.gold {
      border-color: var(--gold);
      box-shadow: 0 0 12px var(--gold-glow2), 0 0 24px var(--gold-dim);
    }

    .tl-dot.purple {
      border-color: var(--purple);
      box-shadow: 0 0 12px var(--purple-glow), 0 0 24px var(--purple-dim);
    }

    .tl-dot::after {
      content: '';
      position: absolute;
      inset: 3px;
      border-radius: 50%;
      background: var(--blue);
    }

    .tl-dot.gold::after  { background: var(--gold); }
    .tl-dot.purple::after { background: var(--purple); }

    .tl-period {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      letter-spacing: 2px;
      color: var(--blue);
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }

    .tl-title {
      font-family: var(--font-disp);
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }

    .tl-org {
      font-size: 0.85rem;
      color: var(--gold);
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .tl-desc {
      font-size: 0.9rem;
      color: var(--w55, rgba(255,255,255,0.55));
      line-height: 1.85;
      max-width: 580px;
    }

    .tl-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 1rem;
    }

    .tl-tag {
      padding: 0.2rem 0.65rem;
      border-radius: 50px;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      font-size: 0.68rem;
      color: var(--w50);
      font-family: var(--font-mono);
    }

    /* ============================================================
       CONTACT SECTION — ULTRA PREMIUM
    ============================================================ */
    .contact-layout {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 5rem;
      align-items: start;
    }

    .contact-left {}

    .contact-cta-text {
      font-size: 0.85rem;
      color: var(--w50);
      line-height: 1.9;
      margin-bottom: 2.5rem;
    }

    .email-hero {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.3rem 2rem;
      background: var(--glass);
      border: 1px solid var(--glass-b2);
      border-radius: var(--r);
      text-decoration: none;
      color: var(--white);
      transition: all 0.35s;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(16px);
    }

    .email-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg,
        rgba(0,212,255,0.05),
        rgba(255,215,0,0.03)
      );
      opacity: 0;
      transition: opacity 0.35s;
    }

    .email-hero:hover {
      border-color: rgba(0,212,255,0.3);
      box-shadow: 0 0 50px rgba(0,212,255,0.1);
      transform: translateY(-3px);
    }

    .email-hero:hover::before { opacity: 1; }

    .email-icon {
      width: 50px; height: 50px;
      border-radius: 12px;
      background: var(--blue-dim);
      border: 1px solid rgba(0,212,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--blue);
      flex-shrink: 0;
    }

    .email-info {}

    .email-label {
      font-size: 0.65rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--w40);
      margin-bottom: 0.2rem;
    }

    .email-addr {
      font-family: var(--font-mono);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--white);
    }

    .email-arrow {
      margin-left: auto;
      color: var(--blue);
      font-size: 1rem;
      transition: transform 0.3s;
    }

    .email-hero:hover .email-arrow { transform: translateX(5px); }

    .contact-links-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .contact-link-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      padding: 2rem 1.5rem;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r);
      text-decoration: none;
      color: var(--white);
      transition: all 0.35s;
      opacity: 0;
      transform: translateY(24px);
    }

    .contact-link-card.vis { opacity: 1; transform: translateY(0); }

    .contact-link-card:hover {
      border-color: rgba(0,212,255,0.25);
      background: var(--blue-dim);
      transform: translateY(-5px);
      box-shadow: 0 20px 50px rgba(0,212,255,0.08);
    }

    .clc-icon {
      width: 54px; height: 54px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      background: var(--glass2);
      border: 1px solid var(--glass-b);
      transition: all 0.3s;
    }

    .contact-link-card:hover .clc-icon {
      background: var(--blue-dim);
      border-color: rgba(0,212,255,0.3);
      box-shadow: 0 0 20px var(--blue-glow2);
    }

    .clc-label {
      font-size: 0.62rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--w40);
    }

    .clc-val {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--w80);
    }

    /* Contact right — availability card */
    .avail-card {
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r-lg);
      padding: 2.5rem;
      backdrop-filter: blur(20px);
      opacity: 0;
      transform: translateY(28px);
      transition: all 0.6s ease 0.3s;
    }

    .avail-card.vis { opacity: 1; transform: translateY(0); }

    .avail-card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--r-lg);
      background: linear-gradient(135deg, rgba(0,255,136,0.04), transparent);
      pointer-events: none;
    }

    .avail-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
    }

    .avail-title {
      font-weight: 700;
      font-size: 1rem;
    }

    .avail-badge {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 0.8rem;
      background: var(--green-dim);
      border: 1px solid rgba(0,255,136,0.2);
      border-radius: 50px;
      font-size: 0.65rem;
      color: var(--green);
      letter-spacing: 1.5px;
    }

    .avail-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .avail-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.9rem 1rem;
      background: var(--glass);
      border: 1px solid var(--glass-b);
      border-radius: var(--r-sm);
      transition: all 0.3s;
    }

    .avail-item:hover {
      border-color: rgba(0,212,255,0.2);
      background: var(--blue-dim);
    }

    .avail-check {
      width: 28px; height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      flex-shrink: 0;
    }

    .avail-check.yes {
      background: var(--green-dim);
      border: 1px solid rgba(0,255,136,0.2);
      color: var(--green);
    }

    .avail-check.maybe {
      background: rgba(255,215,0,0.08);
      border: 1px solid rgba(255,215,0,0.2);
      color: var(--gold);
    }

    .avail-item-text {
      font-size: 0.88rem;
      color: var(--w70);
    }

    .avail-item-text strong { color: var(--white); font-weight: 600; }

    .avail-timezone {
      margin-top: 2rem;
      padding: 1rem;
      background: rgba(0,0,0,0.2);
      border-radius: var(--r-sm);
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--w40);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .avail-time-live {
      color: var(--blue);
      font-weight: 600;
    }

    /* ============================================================
       FOOTER — PREMIUM
    ============================================================ */
    footer {
      position: relative;
      z-index: 2;
      border-top: 1px solid var(--glass-b);
    }

    .footer-main {
      max-width: 1320px;
      margin: 0 auto;
      padding: 5rem 6rem 3rem;
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 4rem;
    }

    .footer-brand {}

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1.2rem;
      text-decoration: none;
    }

    .footer-logo-icon {
      width: 42px; height: 42px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--blue), var(--blue-dk));
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-weight: 700;
      color: #000;
      font-size: 1rem;
      box-shadow: 0 0 20px var(--blue-glow2);
    }

    .footer-logo-name {
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 4px;
      color: var(--white);
    }

    .footer-tagline {
      font-size: 0.88rem;
      color: var(--w40);
      line-height: 1.8;
      max-width: 300px;
    }

    .footer-social {
      display: flex;
      gap: 0.7rem;
      margin-top: 1.5rem;
    }

    .fsoc {
      width: 38px; height: 38px;
      border-radius: 50%;
      border: 1px solid var(--glass-b);
      background: var(--glass);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      color: var(--w50);
      text-decoration: none;
      transition: all 0.3s;
    }

    .fsoc:hover {
      border-color: var(--blue);
      background: var(--blue-dim);
      color: var(--blue);
      box-shadow: 0 0 16px var(--blue-dim);
      transform: translateY(-3px);
    }

    .footer-col-title {
      font-size: 0.72rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--w40);
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .footer-links a {
      text-decoration: none;
      color: var(--w50);
      font-size: 0.88rem;
      transition: all 0.25s;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .footer-links a::before {
      content: '';
      width: 0;
      height: 1px;
      background: var(--blue);
      transition: width 0.3s;
    }

    .footer-links a:hover {
      color: var(--blue-lt);
      padding-left: 4px;
    }

    .footer-links a:hover::before { width: 12px; }

    .footer-stack {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .footer-stack li {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--w40);
    }

    .footer-stack li i { color: var(--blue); width: 14px; }

    .footer-bottom {
      max-width: 1320px;
      margin: 0 auto;
      padding: 1.5rem 6rem 2.5rem;
      border-top: 1px solid var(--glass-b);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .fb-left {
      font-size: 0.78rem;
      color: var(--w30);
    }

    .fb-left span { color: var(--blue); }

    .fb-right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.72rem;
      color: var(--w25, rgba(255,255,255,0.25));
      font-family: var(--font-mono);
    }

    .fb-right i { color: var(--gold); }

    /* ============================================================
       SHARED ANIMATIONS
    ============================================================ */
    @keyframes fadeUpIn {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ============================================================
       RESPONSIVE
    ============================================================ */
    @media (max-width: 1100px) {
      .section  { padding: 8rem 3rem; }
      .about-grid { gap: 3.5rem; }
      .contact-layout { gap: 3rem; }
      .footer-main { gap: 2.5rem; }
      #nav, #nav.scrolled { padding-left: 2.5rem; padding-right: 2.5rem; }
      .nav-center { display: none; }
      .hamburger { display: flex; }
    }

    @media (max-width: 900px) {
      .about-grid { grid-template-columns: 1fr; }
      .id-card-scene { order: -1; }
      .contact-layout { grid-template-columns: 1fr; }
      .footer-main { grid-template-columns: 1fr 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      .proj-featured .pc-inner { grid-template-columns: 1fr; gap: 2rem; }
      .stats-inner { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .section { padding: 6rem 1.5rem; }
      .hero-name { letter-spacing: -3px; }
      .hero-cta { flex-direction: column; align-items: center; }
      .skills-layout { grid-template-columns: 1fr; }
      .feature-list { grid-template-columns: 1fr; }
      .contact-links-grid { grid-template-columns: 1fr; }
      .footer-main { grid-template-columns: 1fr; padding: 3rem 1.5rem; }
      .footer-bottom { padding: 1.5rem; }
      .stats-inner { grid-template-columns: 1fr 1fr; }
      .cube-scene { display: none; }
      .geo { display: none; }
      #nav, #nav.scrolled { padding: 1rem 1.5rem; }
      .nav-status { display: none; }
    }
  </style>
</head>
<body>

<!-- ======================================================
     LOADER
====================================================== -->
<div id="loader">
  <div class="loader-logo">MQ</div>
  <div class="loader-bar-wrap">
    <div class="loader-bar"></div>
  </div>
  <div class="loader-text">Initializing Cloud Stack</div>
</div>

<!-- ======================================================
     CURSOR
====================================================== -->
<div id="c-dot"></div>
<div id="c-ring"></div>
<div id="c-trail"></div>

<!-- ======================================================
     AURORA
====================================================== -->
<div class="aurora">
  <div class="ab ab1"></div>
  <div class="ab ab2"></div>
  <div class="ab ab3"></div>
  <div class="ab ab4"></div>
  <div class="ab ab5"></div>
</div>

<!-- OVERLAYS -->
<div class="noise-overlay"></div>
<div class="grid-overlay"></div>
<div class="scan-line"></div>

<!-- CANVAS -->
<canvas id="particles-canvas"></canvas>

<!-- ======================================================
     NAV
====================================================== -->
<nav id="nav">
  <a href="#hero" class="nav-logo-wrap">
    <div class="nav-logo-icon">MQ</div>
    <div class="nav-logo-text">MUQADDAM</div>
  </a>

  <div class="nav-center">
    <a href="#about-sec" data-section="about">About</a>
    <a href="#skills-sec" data-section="skills">Skills</a>
    <a href="#projects-sec" data-section="projects">Projects</a>
    <a href="#contact-sec" data-section="contact">Contact</a>
  </div>

  <div class="nav-right">
    <div class="nav-status">
      <div class="nav-status-dot"></div>
      Available
    </div>
    <a href="mailto:muqaddamhammad@gmail.com" class="nav-hire">
      <i class="fa-solid fa-paper-plane"></i> Hire Me
    </a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- MOBILE NAV -->
<div id="mob-nav">
  <button class="mob-close" id="mob-close">
    <i class="fa-solid fa-xmark"></i>
  </button>
  <a href="#about-sec"    data-num="01">About</a>
  <a href="#skills-sec"   data-num="02">Skills</a>
  <a href="#projects-sec" data-num="03">Projects</a>
  <a href="#contact-sec"  data-num="04">Contact</a>
</div>

<!-- ======================================================
     HERO
====================================================== -->
<section id="hero">

  <!-- Orb System -->
  <div class="orb-system">
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>
    <div class="orb orb3"></div>
    <div class="orb orb4"></div>
  </div>

  <!-- 3D Cubes -->
  <div class="cube-scene cs-1">
    <div class="cube3d">
      <div class="cf cf-fr">AWS</div>
      <div class="cf cf-bk">IaC</div>
      <div class="cf cf-rt">CI/CD</div>
      <div class="cf cf-lt">VPC</div>
      <div class="cf cf-tp">S3</div>
      <div class="cf cf-bt">ECS</div>
    </div>
  </div>

  <div class="cube-scene cs-2">
    <div class="cube3d">
      <div class="cf cf-fr"></div>
      <div class="cf cf-bk"></div>
      <div class="cf cf-rt"></div>
      <div class="cf cf-lt"></div>
      <div class="cf cf-tp"></div>
      <div class="cf cf-bt"></div>
    </div>
  </div>

  <div class="cube-scene cs-3">
    <div class="cube3d">
      <div class="cf cf-fr"></div>
      <div class="cf cf-bk"></div>
      <div class="cf cf-rt"></div>
      <div class="cf cf-lt"></div>
      <div class="cf cf-tp"></div>
      <div class="cf cf-bt"></div>
    </div>
  </div>

  <div class="cube-scene cs-4">
    <div class="cube3d">
      <div class="cf cf-fr"></div>
      <div class="cf cf-bk"></div>
      <div class="cf cf-rt"></div>
      <div class="cf cf-lt"></div>
      <div class="cf cf-tp"></div>
      <div class="cf cf-bt"></div>
    </div>
  </div>

  <!-- Geometric shapes -->
  <div class="geo geo-ring"></div>
  <div class="geo geo-ring2"></div>
  <div class="geo geo-tri"></div>
  <div class="geo geo-sq"></div>

  <!-- Hero Content -->
  <div class="hero-content">
    <div class="hero-eyebrow">
      <div class="p-dot"></div>
      Available for Opportunities &nbsp;·&nbsp; Karachi, PK
    </div>

    <span class="hero-greeting">Hello World — I'm</span>

    <h1 class="hero-name">MUQADDAM</h1>

    <div class="hero-role-wrap">
      <div class="role-line"></div>
      <span class="hero-role">Cloud &amp; DevOps Engineer</span>
      <div class="role-line r"></div>
    </div>

    <div class="hero-typed-wrap">
      <span class="typed-prefix">$&gt;</span>
      <span id="typed-out"></span>
      <span class="cursor-blink"></span>
    </div>

    <div class="hero-meta">
      <div class="hero-meta-item loc">
        <i class="fa-solid fa-location-dot"></i>
        Karachi, Pakistan
      </div>
      <div class="meta-sep"></div>
      <div class="hero-meta-item age">
        <i class="fa-solid fa-star"></i>
        15 Years Old
      </div>
      <div class="meta-sep"></div>
      <div class="hero-meta-item exp">
        <i class="fa-solid fa-circle-check"></i>
        Production-Grade AWS
      </div>
    </div>

    <div class="hero-cta">
      <a href="#projects-sec" class="btn btn-primary">
        <i class="fa-solid fa-rocket"></i>
        View Projects
      </a>
      <a href="#about-sec" class="btn btn-secondary">
        <i class="fa-solid fa-user"></i>
        About Me
      </a>
      <a href="mailto:muqaddamhammad@gmail.com" class="btn btn-gold">
        <i class="fa-solid fa-envelope"></i>
        Get In Touch
      </a>
    </div>
  </div>

  <!-- Scroll hint -->
  <div class="scroll-hint">
    <span class="scroll-label">Scroll</span>
    <div class="scroll-mouse">
      <div class="scroll-wheel"></div>
    </div>
  </div>

</section>

<!-- ======================================================
     STATS BAR
====================================================== -->
<div class="stats-bar">
  <div class="stats-inner">
    <div class="stat-item">
      <div class="stat-num" data-count="15">0</div>
      <div class="stat-label">Years Old</div>
      <div class="stat-sub">// youngest in room</div>
    </div>
    <div class="stat-item">
      <div class="stat-num" data-count="10">0</div>
      <div class="stat-label">AWS Services</div>
      <div class="stat-sub">// production deployed</div>
    </div>
    <div class="stat-item">
      <div class="stat-num" data-count="5">0</div>
      <div class="stat-label">Cloud Projects</div>
      <div class="stat-sub">// live &amp; running</div>
    </div>
    <div class="stat-item">
      <div class="stat-num" data-count="99">0</div>
      <div class="stat-label">Uptime %</div>
      <div class="stat-sub">// multi-az redundancy</div>
    </div>
  </div>
</div>

<!-- ======================================================
     MARQUEE
====================================================== -->
<div class="marquee-wrap">
  <div class="marquee-track" id="mq-track">
    <div class="m-chip"><i class="fa-brands fa-aws ic-gold"></i> AWS</div>
    <div class="m-chip"><i class="fa-brands fa-docker ic-blue"></i> Docker</div>
    <div class="m-chip"><i class="fa-solid fa-code-branch ic-gold"></i> Terraform</div>
    <div class="m-chip"><i class="fa-brands fa-github"></i> GitHub Actions</div>
    <div class="m-chip"><i class="fa-brands fa-linux"></i> Linux</div>
    <div class="m-chip"><i class="fa-solid fa-server ic-blue"></i> EC2</div>
    <div class="m-chip"><i class="fa-solid fa-database ic-gold"></i> RDS</div>
    <div class="m-chip"><i class="fa-solid fa-network-wired ic-purple"></i> VPC</div>
    <div class="m-chip"><i class="fa-solid fa-shield-halved ic-gold"></i> IAM</div>
    <div class="m-chip"><i class="fa-solid fa-bolt ic-blue"></i> Lambda</div>
    <div class="m-chip"><i class="fa-solid fa-boxes-stacked ic-gold"></i> S3</div>
    <div class="m-chip"><i class="fa-solid fa-globe ic-green"></i> CloudFront</div>
    <div class="m-chip"><i class="fa-solid fa-infinity ic-purple"></i> CI/CD</div>
    <div class="m-chip"><i class="fa-solid fa-diagram-project ic-blue"></i> CodePipeline</div>
    <div class="m-chip"><i class="fa-solid fa-key ic-gold"></i> ACM / SSL</div>
    <div class="m-chip"><i class="fa-solid fa-bell ic-purple"></i> CloudWatch</div>
    <!-- DUPLICATE for seamless loop -->
    <div class="m-chip"><i class="fa-brands fa-aws ic-gold"></i> AWS</div>
    <div class="m-chip"><i class="fa-brands fa-docker ic-blue"></i> Docker</div>
    <div class="m-chip"><i class="fa-solid fa-code-branch ic-gold"></i> Terraform</div>
    <div class="m-chip"><i class="fa-brands fa-github"></i> GitHub Actions</div>
    <div class="m-chip"><i class="fa-brands fa-linux"></i> Linux</div>
    <div class="m-chip"><i class="fa-solid fa-server ic-blue"></i> EC2</div>
    <div class="m-chip"><i class="fa-solid fa-database ic-gold"></i> RDS</div>
    <div class="m-chip"><i class="fa-solid fa-network-wired ic-purple"></i> VPC</div>
    <div class="m-chip"><i class="fa-solid fa-shield-halved ic-gold"></i> IAM</div>
    <div class="m-chip"><i class="fa-solid fa-bolt ic-blue"></i> Lambda</div>
    <div class="m-chip"><i class="fa-solid fa-boxes-stacked ic-gold"></i> S3</div>
    <div class="m-chip"><i class="fa-solid fa-globe ic-green"></i> CloudFront</div>
    <div class="m-chip"><i class="fa-solid fa-infinity ic-purple"></i> CI/CD</div>
    <div class="m-chip"><i class="fa-solid fa-diagram-project ic-blue"></i> CodePipeline</div>
    <div class="m-chip"><i class="fa-solid fa-key ic-gold"></i> ACM / SSL</div>
    <div class="m-chip"><i class="fa-solid fa-bell ic-purple"></i> CloudWatch</div>
  </div>
</div>

<div class="glow-divider"></div>

<!-- ======================================================
     ABOUT
====================================================== -->
<div id="about-sec" class="section">
  <span class="sec-bg-num">01</span>
  <div class="section-header">
    <div class="eyebrow">01 &mdash; About Me</div>
    <h2 class="section-title">
      Architecting the Cloud<br>
      at <span class="acc-gold">15 Years Old</span>
    </h2>
    <p class="section-sub">
      A self-taught Cloud &amp; DevOps Engineer from Karachi — deploying production-grade
      AWS infrastructure that enterprises trust.
    </p>
  </div>

  <div class="about-grid">

    <!-- Left: ID Card + Terminal -->
    <div class="id-card-scene">
      <div class="id-card" id="id-card">
        <div class="id-holo"></div>
        <div class="card-top">
          <div class="card-badge">CLOUD ENGINEER</div>
          <div class="card-logo-mark">MQ</div>
        </div>

        <div>
          <div class="card-avatar">M</div>
          <div class="card-info">
            <div class="card-name">MUQADDAM</div>
            <div class="card-role-tag">Cloud &amp; DevOps Engineer</div>
            <div class="card-online">
              <div class="od"></div>
              Open to Opportunities
            </div>
          </div>
        </div>

        <div>
          <div class="card-divider"></div>
          <div class="card-grid">
            <div class="cg-item">
              <div class="cg-num" data-count="15">0</div>
              <div class="cg-lbl">Age</div>
            </div>
            <div class="cg-item">
              <div class="cg-num" data-count="5">0</div>
              <div class="cg-lbl">Projects</div>
            </div>
            <div class="cg-item">
              <div class="cg-num" data-count="10">0</div>
              <div class="cg-lbl">Services</div>
            </div>
          </div>
          <div class="card-divider" style="margin-top:1rem"></div>
          <div class="card-footer-info">// karachi.pk &nbsp;|&nbsp; UTC+5</div>
        </div>
      </div>

      <!-- Mini Terminal -->
      <div class="mini-terminal">
        <div class="term-header">
          <div class="term-dot td-r"></div>
          <div class="term-dot td-y"></div>
          <div class="term-dot td-g"></div>
          <div class="term-title">bash &mdash; muqaddam@cloud</div>
        </div>
        <div class="term-body">
          <div class="term-line">
            <span class="term-prompt">$</span>
            <span class="term-cmd">cat whoami.json</span>
          </div>
          <span class="term-out">
            <span class="term-key">name</span>: <span class="term-val">"Muqaddam"</span>
          </span>
          <span class="term-out">
            <span class="term-key">age</span>: <span class="term-val">15</span>
          </span>
          <span class="term-out">
            <span class="term-key">role</span>: <span class="term-val">"Cloud &amp; DevOps Eng"</span>
          </span>
          <span class="term-out">
            <span class="term-key">location</span>: <span class="term-val">"Karachi, PK"</span>
          </span>
          <div class="term-line" style="margin-top:0.4rem">
            <span class="term-prompt">$</span>
            <span class="term-cmd">terraform apply</span>
          </div>
          <span class="term-success">✓ Apply complete! 10 added.</span>
          <div class="term-line">
            <span class="term-prompt">$</span>
            <span class="term-cmd">docker ps</span>
          </div>
          <span class="term-success">✓ 3 containers running</span>
          <div class="term-line" style="margin-top:0.2rem">
            <span class="term-prompt" style="color:var(--blue)">$</span>
            <span class="term-cmd" style="opacity:0.4">_</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Text -->
    <div class="about-content">
      <h3>Building tomorrow's infrastructure,&nbsp;<em>today.</em></h3>

      <p>
        I'm <strong>Muqaddam</strong>, a 15-year-old Cloud &amp; DevOps Engineer based in
        Karachi, Pakistan. While most teenagers are exploring basic programming, I'm
        deploying <strong>multi-AZ AWS architectures</strong>, writing Terraform modules,
        and building CI/CD pipelines that ship production code in minutes.
      </p>

      <p>
        My journey started with a simple question: <em>"How does the internet work at scale?"</em>
        That curiosity led me deep into AWS documentation, Terraform configurations, and
        Docker containers. Every project I build is <strong>production-grade</strong>,
        security-hardened, and built to last.
      </p>

      <p>
        I believe in <em>infrastructure as code</em>, zero-downtime deployments, and
        the principle of least privilege. Cloud engineering isn't just a skill for me —
        it's a craft I'm constantly refining.
      </p>

      <div class="feature-list">
        <div class="feat-item"><i class="fa-solid fa-check"></i> AWS EC2, S3, RDS, Lambda</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> Terraform IaC Modules</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> Docker &amp; Containerization</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> GitHub Actions CI/CD</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> IAM &amp; Security Hardening</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> Linux Administration</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> CloudFront CDN &amp; WAF</div>
        <div class="feat-item"><i class="fa-solid fa-check"></i> Multi-AZ High Availability</div>
      </div>

      <div class="tags-row">
        <span class="tech-tag">AWS</span>
        <span class="tech-tag">EC2</span>
        <span class="tech-tag">S3</span>
        <span class="tech-tag">CloudFront</span>
        <span class="tech-tag">RDS</span>
        <span class="tech-tag">Lambda</span>
        <span class="tech-tag">VPC</span>
        <span class="tech-tag">IAM</span>
        <span class="tech-tag gold">Terraform</span>
        <span class="tech-tag gold">Docker</span>
        <span class="tech-tag">GitHub Actions</span>
        <span class="tech-tag">Linux</span>
        <span class="tech-tag">CodeBuild</span>
        <span class="tech-tag">CodePipeline</span>
        <span class="tech-tag gold">Bash</span>
        <span class="tech-tag">CloudWatch</span>
        <span class="tech-tag">Route 53</span>
        <span class="tech-tag gold">ACM</span>
      </div>
    </div>
  </div>
</div>

<div class="glow-divider"></div>

<!-- ======================================================
     SKILLS
====================================================== -->
<div id="skills-sec" class="section">
  <span class="sec-bg-num">02</span>
  <div class="section-header">
    <div class="eyebrow">02 &mdash; Technical Skills</div>
    <h2 class="section-title">Technical <span class="acc-blue">Arsenal</span></h2>
    <p class="section-sub">
      Proficient in modern cloud infrastructure, containerization, DevOps automation,
      and security tooling — built through hands-on production deployments.
    </p>
  </div>

  <div class="skills-layout">

    <!-- AWS Card -->
    <div class="skill-card">
      <div class="sk-card-header">
        <div class="sk-icon-box gold">
          <i class="fa-brands fa-aws" style="color:var(--gold)"></i>
        </div>
        <div>
          <div class="sk-card-label">AWS Cloud Platform</div>
          <div class="sk-card-sub">Core Infrastructure Services</div>
        </div>
      </div>
      <div class="skill-bar-group">
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">EC2 &amp; Auto Scaling Groups</span>
            <span class="s-pct">90%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="90"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">S3 &amp; CloudFront CDN</span>
            <span class="s-pct">95%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="95"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">RDS &amp; DynamoDB</span>
            <span class="s-pct">82%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="82"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">IAM &amp; Security Policies</span>
            <span class="s-pct">88%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="88"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">VPC &amp; Network Architecture</span>
            <span class="s-pct">86%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="86"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Lambda &amp; Serverless</span>
            <span class="s-pct">84%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="84"></div></div>
        </div>
      </div>
    </div>

    <!-- Infrastructure & Containers -->
    <div class="skill-card">
      <div class="sk-card-header">
        <div class="sk-icon-box blue">
          <i class="fa-brands fa-docker" style="color:var(--blue)"></i>
        </div>
        <div>
          <div class="sk-card-label">Infrastructure &amp; Containers</div>
          <div class="sk-card-sub">IaC, Docker, Linux</div>
        </div>
      </div>
      <div class="skill-bar-group">
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Terraform (IaC)</span>
            <span class="s-pct">85%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="85"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Docker &amp; Docker Compose</span>
            <span class="s-pct">92%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="92"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Linux Administration</span>
            <span class="s-pct">88%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="88"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Shell Scripting (Bash)</span>
            <span class="s-pct">83%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="83"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Python / Boto3</span>
            <span class="s-pct">79%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="79"></div></div>
        </div>
      </div>
    </div>

    <!-- CI/CD & Automation -->
    <div class="skill-card">
      <div class="sk-card-header">
        <div class="sk-icon-box purple">
          <i class="fa-solid fa-gears" style="color:var(--purple)"></i>
        </div>
        <div>
          <div class="sk-card-label">CI/CD &amp; Automation</div>
          <div class="sk-card-sub">Pipelines, Build, Deploy</div>
        </div>
      </div>
      <div class="skill-bar-group">
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">GitHub Actions</span>
            <span class="s-pct">90%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="90"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">AWS CodeBuild</span>
            <span class="s-pct">82%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="82"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">AWS CodePipeline</span>
            <span class="s-pct">76%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="76"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">Elastic Beanstalk Deploy</span>
            <span class="s-pct">85%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="85"></div></div>
        </div>
        <div class="s-row">
          <div class="s-meta">
            <span class="s-name">CloudWatch &amp; Alarms</span>
            <span class="s-pct">80%</span>
          </div>
          <div class="s-track"><div class="s-fill" data-w="80"></div></div>
        </div>
      </div>
    </div>

  </div>

  <!-- Skill Cloud -->
  <div class="skill-cloud-section">
    <div class="skill-cloud-title">Full Technology Stack</div>
    <div class="skill-cloud">
      <span class="sc-tag lvl-expert">AWS</span>
      <span class="sc-tag lvl-expert">EC2</span>
      <span class="sc-tag lvl-expert">S3</span>
      <span class="sc-tag lvl-expert">Docker</span>
      <span class="sc-tag lvl-expert">GitHub Actions</span>
      <span class="sc-tag lvl-advanced">Terraform</span>
      <span class="sc-tag lvl-advanced">VPC</span>
      <span class="sc-tag lvl-advanced">IAM</span>
      <span class="sc-tag lvl-advanced">CloudFront</span>
      <span class="sc-tag lvl-advanced">Linux</span>
      <span class="sc-tag lvl-advanced">Lambda</span>
      <span class="sc-tag lvl-advanced">RDS</span>
      <span class="sc-tag lvl-intermediate">Bash</span>
      <span class="sc-tag lvl-intermediate">Python</span>
      <span class="sc-tag lvl-intermediate">Boto3</span>
      <span class="sc-tag lvl-intermediate">CodePipeline</span>
      <span class="sc-tag lvl-intermediate">CloudWatch</span>
      <span class="sc-tag lvl-intermediate">Route 53</span>
      <span class="sc-tag lvl-learning">Kubernetes</span>
      <span class="sc-tag lvl-learning">Ansible</span>
      <span class="sc-tag lvl-learning">EKS</span>
    </div>
  </div>
</div>

<div class="glow-divider"></div>

<!-- ======================================================
     PROJECTS
====================================================== -->
<div id="projects-sec" class="section">
  <span class="sec-bg-num">03</span>
  <div class="section-header">
    <div class="eyebrow">03 &mdash; Projects</div>
    <h2 class="section-title">Featured <span class="acc-blue">Cloud Projects</span></h2>
    <p class="section-sub">
      Production-grade AWS architectures — designed, deployed, and maintained entirely by me.
      Real infrastructure, real performance, real results.
    </p>
  </div>

  <div class="projects-grid">

    <!-- FEATURED: Project 1 -->
    <div class="project-card proj-featured">
      <div class="pc-accent ac-multi"></div>
      <div class="pc-glow"></div>
      <div class="pc-inner">
        <div class="pc-left">
          <div class="pc-num">01</div>
          <div class="pc-category">Static CDN Architecture</div>
          <h3 class="pc-title">S3 + CloudFront Global Site Delivery</h3>
          <p class="pc-desc">
            Architected a globally distributed static website with sub-100ms load times.
            S3 hosts assets with versioning and lifecycle policies. CloudFront distributes
            across 400+ edge locations. Route 53 manages the custom domain, ACM provides
            free SSL/TLS, and Origin Access Identity ensures private bucket access.
            Achieved 99.99% availability and 60% cost reduction vs traditional hosting.
          </p>
          <div class="pc-tags">
            <span class="pc-tag">S3</span>
            <span class="pc-tag">CloudFront</span>
            <span class="pc-tag">Route 53</span>
            <span class="pc-tag gold">ACM / SSL</span>
            <span class="pc-tag">OAI</span>
            <span class="pc-tag gold">Terraform</span>
          </div>
          <div class="pc-footer">
            <div class="pc-status">
              <i class="fa-solid fa-circle-dot" style="color:var(--green)"></i>
              Live in Production
            </div>
            <a href="https://github.com/muhammadhassan120" target="_blank" class="pc-link">
              View on GitHub <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="pc-right">
          <div class="arch-block"><i class="fa-brands fa-aws"></i> Route 53 — DNS Routing</div>
          <div class="arch-arrow">↓</div>
          <div class="arch-block"><i class="fa-solid fa-globe"></i> CloudFront — 400+ Edge PoPs</div>
          <div class="arch-arrow">↓</div>
          <div class="arch-block"><i class="fa-solid fa-lock"></i> ACM — SSL/TLS Certificate</div>
          <div class="arch-arrow">↓</div>
          <div class="arch-block"><i class="fa-solid fa-shield"></i> OAI — Bucket Protection</div>
          <div class="arch-arrow">↓</div>
          <div class="arch-block"><i class="fa-solid fa-boxes-stacked"></i> S3 — Static Assets</div>
          <div class="arch-arrow">↓</div>
          <div class="arch-block" style="border-color:rgba(0,255,136,0.2);background:rgba(0,255,136,0.04)">
            <i class="fa-solid fa-check" style="color:var(--green)"></i>
            <span style="color:var(--green)">Sub-100ms Global Load Time</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="project-card">
      <div class="pc-accent ac-blue"></div>
      <div class="pc-glow"></div>
      <div class="pc-inner">
        <div class="pc-num">02</div>
        <div class="pc-category">Security Automation</div>
        <h3 class="pc-title">IAM Automation &amp; Least-Privilege Engine</h3>
        <p class="pc-desc">
          Built Python/Boto3 scripts to automatically provision IAM users, roles,
          and custom policies following the least-privilege principle. Detects
          unused permissions, generates compliance reports, and enforces security
          best practices across multi-account AWS Organizations.
        </p>
        <div class="pc-tags">
          <span class="pc-tag">IAM</span>
          <span class="pc-tag">Python</span>
          <span class="pc-tag">Boto3</span>
          <span class="pc-tag gold">Organizations</span>
          <span class="pc-tag">Security Audit</span>
        </div>
        <div class="pc-footer">
          <div class="pc-status">
            <i class="fa-solid fa-diagram-project"></i>
            Security Automation
          </div>
          <a href="https://github.com/muhammadhassan120" target="_blank" class="pc-link">
            GitHub <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Project 3 -->
    <div class="project-card">
      <div class="pc-accent ac-gold"></div>
      <div class="pc-glow"></div>
      <div class="pc-inner">
        <div class="pc-num">03</div>
        <div class="pc-category">Serverless Architecture</div>
        <h3 class="pc-title">Serverless Task Board</h3>
        <p class="pc-desc">
          Full-stack serverless application with zero server management. Lambda
          handles compute logic, API Gateway exposes RESTful endpoints, DynamoDB
          stores task data with on-demand capacity, SNS triggers pub/sub
          notifications, and SES dispatches transactional email alerts —
          all at near-zero infrastructure cost.
        </p>
        <div class="pc-tags">
          <span class="pc-tag">Lambda</span>
          <span class="pc-tag">API Gateway</span>
          <span class="pc-tag gold">DynamoDB</span>
          <span class="pc-tag">SNS</span>
          <span class="pc-tag">SES</span>
        </div>
        <div class="pc-footer">
          <div class="pc-status">
            <i class="fa-solid fa-diagram-project"></i>
            Serverless
          </div>
          <a href="https://github.com/muhammadhassan120" target="_blank" class="pc-link">
            GitHub <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Project 4 -->
    <div class="project-card">
      <div class="pc-accent ac-purple"></div>
      <div class="pc-glow"></div>
      <div class="pc-inner">
        <div class="pc-num">04</div>
        <div class="pc-category">HA Architecture</div>
        <h3 class="pc-title">High-Availability Architecture</h3>
        <p class="pc-desc">
          Engineered a 99.99% uptime infrastructure using Application Load Balancer
          for intelligent traffic routing, Auto Scaling Groups with custom
          target-tracking policies, Multi-AZ RDS for automatic failover, and
          CloudWatch dashboards with alarm-triggered actions for real-time
          operations.
        </p>
        <div class="pc-tags">
          <span class="pc-tag">ALB</span>
          <span class="pc-tag">ASG</span>
          <span class="pc-tag purple">Multi-AZ RDS</span>
          <span class="pc-tag">EC2</span>
          <span class="pc-tag">CloudWatch</span>
        </div>
        <div class="pc-footer">
          <div class="pc-status">
            <i class="fa-solid fa-diagram-project"></i>
            High Availability
          </div>
          <a href="https://github.com/muhammadhassan120" target="_blank" class="pc-link">
            GitHub <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Project 5 -->
    <div class="project-card">
      <div class="pc-accent ac-green"></div>
      <div class="pc-glow"></div>
      <div class="pc-inner">
        <div class="pc-num">05</div>
        <div class="pc-category">Network Architecture</div>
        <h3 class="pc-title">Custom VPC Network Architecture</h3>
        <p class="pc-desc">
          Designed a production-grade VPC from scratch with public and private
          subnets spanning multiple Availability Zones, custom route tables,
          NAT Gateway for secure outbound traffic, Internet Gateway, and
          defense-in-depth security with layered Security Groups and Network ACLs.
        </p>
        <div class="pc-tags">
          <span class="pc-tag">VPC</span>
          <span class="pc-tag">Subnets</span>
          <span class="pc-tag gold">NAT Gateway</span>
          <span class="pc-tag">Route Tables</span>
          <span class="pc-tag">NACLs</span>
        </div>
        <div class="pc-footer">
          <div class="pc-status">
            <i class="fa-solid fa-network-wired"></i>
            Networking
          </div>
          <a href="https://github.com/muhammadhassan120" target="_blank" class="pc-link">
            GitHub <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="glow-divider"></div>

<!-- ======================================================
     EXPERIENCE / LEARNING TIMELINE
====================================================== -->
<div id="exp-sec" class="section">
  <span class="sec-bg-num">04</span>
  <div class="section-header">
    <div class="eyebrow">04 &mdash; Journey</div>
    <h2 class="section-title">My Cloud <span class="acc-grad">Journey</span></h2>
    <p class="section-sub">
      From curiosity to production — here's how I've grown as a
      Cloud &amp; DevOps Engineer.
    </p>
  </div>

  <div class="timeline">

    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-period">2024 — Present</div>
      <div class="tl-title">Cloud &amp; DevOps Engineer</div>
      <div class="tl-org">Self-Directed · Karachi, Pakistan</div>
      <div class="tl-desc">
        Deploying production-grade AWS architectures end-to-end. Building
        Terraform modules, containerizing applications with Docker, and
        automating deployments through GitHub Actions CI/CD pipelines.
        Focused on security hardening, cost optimization, and operational
        excellence across all projects.
      </div>
      <div class="tl-tags">
        <span class="tl-tag">AWS</span>
        <span class="tl-tag">Terraform</span>
        <span class="tl-tag">Docker</span>
        <span class="tl-tag">GitHub Actions</span>
        <span class="tl-tag">IAM</span>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot gold"></div>
      <div class="tl-period">2023 — 2024</div>
      <div class="tl-title">AWS &amp; Linux Fundamentals</div>
      <div class="tl-org">Self-Taught · Online Resources</div>
      <div class="tl-desc">
        Deep-dived into AWS core services — EC2, S3, VPC, IAM, RDS, and Lambda.
        Mastered Linux system administration, shell scripting, and
        networking fundamentals. Built first production VPC architecture and
        deployed containerized applications.
      </div>
      <div class="tl-tags">
        <span class="tl-tag">Linux</span>
        <span class="tl-tag">Bash</span>
        <span class="tl-tag">VPC</span>
        <span class="tl-tag">EC2</span>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot purple"></div>
      <div class="tl-period">2023</div>
      <div class="tl-title">The Beginning — "How does the internet scale?"</div>
      <div class="tl-org">Curiosity-Driven Discovery</div>
      <div class="tl-desc">
        Discovered cloud computing at 14. Started with AWS free tier, got
        obsessed with infrastructure architecture. Realized that servers,
        networks, and automation were my passion — and never looked back.
      </div>
      <div class="tl-tags">
        <span class="tl-tag">AWS Free Tier</span>
        <span class="tl-tag">First EC2</span>
        <span class="tl-tag">Networking</span>
      </div>
    </div>

  </div>
</div>

<div class="glow-divider"></div>

<!-- ======================================================
     CONTACT
====================================================== -->
<div id="contact-sec" class="section">
  <span class="sec-bg-num">05</span>
  <div class="section-header">
    <div class="eyebrow">05 &mdash; Contact</div>
    <h2 class="section-title">Let's <span class="acc-gold">Build Together</span></h2>
    <p class="section-sub">
      Open to internships, freelance cloud projects, and collaborations.
      Let's architect something extraordinary together.
    </p>
  </div>

  <div class="contact-layout">
    <div class="contact-left">
      <p class="contact-cta-text">
        Whether you need a robust AWS architecture, an automated CI/CD pipeline,
        or a secure VPC design — I'm ready to build it. Drop me a message and
        let's talk infrastructure.
      </p>

      <a href="mailto:muqaddamhammad@gmail.com" class="email-hero">
        <div class="email-icon">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div class="email-info">
          <div class="email-label">Send an Email</div>
          <div class="email-addr">muqaddamhammad@gmail.com</div>
        </div>
        <i class="fa-solid fa-arrow-right email-arrow"></i>
      </a>

      <div class="contact-links-grid">
        <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="contact-link-card">
          <div class="clc-icon">
            <i class="fa-brands fa-github"></i>
          </div>
          <div class="clc-label">GitHub</div>
          <div class="clc-val">muhammadhassan120</div>
        </a>
        <a href="mailto:muqaddamhammad@gmail.com" class="contact-link-card">
          <div class="clc-icon" style="color:var(--blue)">
            <i class="fa-solid fa-paper-plane"></i>
          </div>
          <div class="clc-label">Direct Message</div>
          <div class="clc-val">Send a Message</div>
        </a>
        <a href="#hero" class="contact-link-card">
          <div class="clc-icon" style="color:var(--gold)">
            <i class="fa-brands fa-aws"></i>
          </div>
          <div class="clc-label">AWS Projects</div>
          <div class="clc-val">View Portfolio</div>
        </a>
        <a href="#about-sec" class="contact-link-card">
          <div class="clc-icon" style="color:var(--purple)">
            <i class="fa-solid fa-file-lines"></i>
          </div>
          <div class="clc-label">Resume</div>
          <div class="clc-val">Download CV</div>
        </a>
      </div>
    </div>

    <!-- Availability Card -->
    <div class="avail-card" id="avail-card">
      <div class="avail-header">
        <div class="avail-title">Availability Status</div>
        <div class="avail-badge">
          <div class="nav-status-dot"></div>
          Open Now
        </div>
      </div>

      <ul class="avail-list">
        <li class="avail-item">
          <div class="avail-check yes"><i class="fa-solid fa-check"></i></div>
          <div class="avail-item-text">
            <strong>Internships</strong> — Remote &amp; Local
          </div>
        </li>
        <li class="avail-item">
          <div class="avail-check yes"><i class="fa-solid fa-check"></i></div>
          <div class="avail-item-text">
            <strong>Freelance Cloud Projects</strong> — AWS Architecture
          </div>
        </li>
        <li class="avail-item">
          <div class="avail-check yes"><i class="fa-solid fa-check"></i></div>
          <div class="avail-item-text">
            <strong>Collaborations</strong> — Open Source &amp; Startups
          </div>
        </li>
        <li class="avail-item">
          <div class="avail-check maybe"><i class="fa-solid fa-minus"></i></div>
          <div class="avail-item-text">
            <strong>Part-time Roles</strong> — Depending on scope
          </div>
        </li>
      </ul>

      <div class="avail-timezone">
        <span>// Local Time</span>
        <span class="avail-time-live" id="live-time">--:-- PKT</span>
      </div>
    </div>
  </div>
</div>

<!-- ======================================================
     FOOTER
====================================================== -->
<footer>
  <div class="footer-main">
    <div class="footer-brand">
      <a href="#hero" class="footer-logo">
        <div class="footer-logo-icon">MQ</div>
        <div class="footer-logo-name">MUQADDAM</div>
      </a>
      <p class="footer-tagline">
        Cloud &amp; DevOps Engineer from Karachi, Pakistan.
        Building production-grade AWS infrastructure — one architecture at a time.
      </p>
      <div class="footer-social">
        <a href="https://github.com/muhammadhassan120" target="_blank" class="fsoc">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="mailto:muqaddamhammad@gmail.com" class="fsoc">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="#hero" class="fsoc">
          <i class="fa-brands fa-aws"></i>
        </a>
      </div>
    </div>

    <div>
      <div class="footer-col-title">Navigation</div>
      <ul class="footer-links">
        <li><a href="#about-sec">About Me</a></li>
        <li><a href="#skills-sec">Technical Skills</a></li>
        <li><a href="#projects-sec">AWS Projects</a></li>
        <li><a href="#exp-sec">Journey</a></li>
        <li><a href="#contact-sec">Contact</a></li>
      </ul>
    </div>

    <div>
      <div class="footer-col-title">Built With</div>
      <ul class="footer-stack">
        <li><i class="fa-brands fa-aws"></i> AWS Elastic Beanstalk</li>
        <li><i class="fa-brands fa-docker"></i> Docker Container</li>
        <li><i class="fa-solid fa-hammer"></i> AWS CodeBuild</li>
        <li><i class="fa-solid fa-infinity"></i> GitHub Actions</li>
        <li><i class="fa-brands fa-node-js"></i> NestJS Backend</li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="fb-left">
      Designed &amp; Engineered by <span>MUQADDAM</span>
      &mdash; Cloud &amp; DevOps Engineer, Karachi, Pakistan
    </div>
    <div class="fb-right">
      <i class="fa-solid fa-heart"></i>
      Built on AWS &bull; Deployed via Docker &bull; Automated with CI/CD
    </div>
  </div>
</footer>

<!-- ======================================================
     JAVASCRIPT — PREMIUM ENGINE
====================================================== -->
<script>
(function() {
  'use strict';

  /* ================================================================
     LOADER
  ================================================================ */
  window.addEventListener('load', function() {
    setTimeout(function() {
      var loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
    }, 2600);
  });

  /* ================================================================
     CURSOR — PREMIUM 3-LAYER
  ================================================================ */
  var dot   = document.getElementById('c-dot');
  var ring  = document.getElementById('c-ring');
  var trail = document.getElementById('c-trail');
  var mx = 0, my = 0;
  var rx = 0, ry = 0;
  var tx = 0, ty = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function animCursor() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    tx += (mx - tx) * 0.065;
    ty += (my - ty) * 0.065;
    ring.style.left  = rx + 'px';
    ring.style.top   = ry + 'px';
    trail.style.left = tx + 'px';
    trail.style.top  = ty + 'px';
    requestAnimationFrame(animCursor);
  })();

  document.querySelectorAll('a, button, .project-card, .skill-card, .contact-link-card').forEach(function(el) {
    el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
  });

  document.addEventListener('mousedown', function() { document.body.classList.add('cursor-click'); });
  document.addEventListener('mouseup',   function() { document.body.classList.remove('cursor-click'); });

  /* ================================================================
     NAV — SCROLL + ACTIVE SECTION
  ================================================================ */
  var nav = document.getElementById('nav');

  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    highlightNav();
  }, { passive: true });

  function highlightNav() {
    var sections = ['about-sec','skills-sec','projects-sec','contact-sec'];
    var sy = window.scrollY + 200;
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var link = document.querySelector('.nav-center a[href="#' + id + '"]');
      if (!link) return;
      var top = el.offsetTop;
      var bot = top + el.offsetHeight;
      link.classList.toggle('active', sy >= top && sy < bot);
    });
  }

  /* ================================================================
     MOBILE NAV
  ================================================================ */
  var mobNav = document.getElementById('mob-nav');
  document.getElementById('hamburger').addEventListener('click', function() {
    mobNav.classList.add('open');
  });
  document.getElementById('mob-close').addEventListener('click', function() {
    mobNav.classList.remove('open');
  });
  mobNav.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { mobNav.classList.remove('open'); });
  });

  /* ================================================================
     PARTICLES — PREMIUM FIELD
  ================================================================ */
  var canvas = document.getElementById('particles-canvas');
  var ctx    = canvas.getContext('2d');
  var W, H, pts = [];
  var mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX; mouse.y = e.clientY;
  });

  var COLORS = ['0,212,255', '255,215,0', '155,89,255', '0,255,136'];

  function Pt() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = (Math.random() - 0.5) * 0.45;
    this.r  = Math.random() * 1.8 + 0.3;
    this.a  = Math.random() * 0.4 + 0.07;
    this.c  = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.baseVx = this.vx;
    this.baseVy = this.vy;
  }

  Pt.prototype.update = function() {
    /* Slight mouse repulsion */
    var dx = this.x - mouse.x;
    var dy = this.y - mouse.y;
    var d  = Math.sqrt(dx * dx + dy * dy);
    if (d < 100) {
      var force = (100 - d) / 100 * 0.8;
      this.vx += (dx / d) * force;
      this.vy += (dy / d) * force;
    }
    /* Friction */
    this.vx += (this.baseVx - this.vx) * 0.03;
    this.vy += (this.baseVy - this.vy) * 0.03;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
  };

  Pt.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + this.c + ',' + this.a + ')';
    ctx.fill();
  };

  for (var i = 0; i < 130; i++) pts.push(new Pt());

  function drawLines() {
    var len = pts.length;
    for (var a = 0; a < len; a++) {
      for (var b = a + 1; b < len; b++) {
        var dx = pts[a].x - pts[b].x;
        var dy = pts[a].y - pts[b].y;
        var d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          var op = 0.05 * (1 - d / 120);
          ctx.beginPath();
          ctx.moveTo(pts[a].x, pts[a].y);
          ctx.lineTo(pts[b].x, pts[b].y);
          ctx.strokeStyle = 'rgba(0,212,255,' + op + ')';
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }
  }

  (function animPts() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(function(p) { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animPts);
  })();

  /* ================================================================
     TYPED EFFECT
  ================================================================ */
  var phrases = [
    'build cloud infrastructure at scale.',
    'automate deployments with CI/CD.',
    'architect resilient AWS systems.',
    'containerize apps with Docker.',
    'write Infrastructure as Code.',
    'secure workloads with IAM.',
    'design multi-AZ networks.',
    'optimize cloud costs.'
  ];

  var pIdx = 0, cIdx = 0, del = false;
  var typedEl = document.getElementById('typed-out');

  function typeLoop() {
    var cur = phrases[pIdx];
    if (del) {
      typedEl.textContent = cur.substring(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        del = false;
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(typeLoop, 500);
        return;
      }
      setTimeout(typeLoop, 28);
    } else {
      typedEl.textContent = cur.substring(0, cIdx + 1);
      cIdx++;
      if (cIdx === cur.length) {
        del = true;
        setTimeout(typeLoop, 2600);
        return;
      }
      setTimeout(typeLoop, 52);
    }
  }

  setTimeout(typeLoop, 1400);

  /* ================================================================
     INTERSECTION OBSERVER — SCROLL REVEALS
  ================================================================ */
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.classList.add('vis');

      /* Animate skill bars */
      if (el.classList.contains('skill-card')) {
        el.querySelectorAll('.s-fill').forEach(function(bar) {
          bar.style.width = bar.getAttribute('data-w') + '%';
          setTimeout(function() { bar.classList.add('done'); }, 1600);
        });
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll([
    '.eyebrow',
    '.section-title',
    '.section-sub',
    '.skill-card',
    '.skill-cloud-section',
    '.project-card',
    '.tl-item',
    '.contact-link-card',
    '.avail-card'
  ].join(',')).forEach(function(el) { io.observe(el); });

  /* Stagger delays */
  document.querySelectorAll('.project-card').forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.09) + 's';
  });
  document.querySelectorAll('.skill-card').forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.12) + 's';
  });
  document.querySelectorAll('.tl-item').forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.15) + 's';
  });
  document.querySelectorAll('.contact-link-card').forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.1) + 's';
  });

  /* ================================================================
     COUNTER ANIMATION
  ================================================================ */
  var cio = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-count'), 10);
      var cur = 0;
      var step = target / 52;
      var suffix = target >= 99 ? '%' : (target >= 10 ? '+' : '');
      var timer = setInterval(function() {
        cur += step;
        if (cur >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(cur);
        }
      }, 24);
      cio.unobserve(el);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-count]').forEach(function(el) { cio.observe(el); });

  /* ================================================================
     ID CARD 3D TILT
  ================================================================ */
  var idCard = document.getElementById('id-card');
  if (idCard) {
    idCard.addEventListener('mousemove', function(e) {
      var r  = idCard.getBoundingClientRect();
      var x  = e.clientX - r.left;
      var y  = e.clientY - r.top;
      var rx2 =  (y - r.height / 2) / 16;
      var ry2 = -(x - r.width  / 2) / 16;
      idCard.style.transform =
        'perspective(1400px) rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg) scale(1.02)';
      idCard.style.boxShadow =
        '0 0 80px rgba(0,212,255,' + (0.05 + Math.abs(rx2) * 0.01) + '), 0 40px 100px rgba(0,0,0,0.7)';
    });

    idCard.addEventListener('mouseleave', function() {
      idCard.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)';
      idCard.style.boxShadow = '';
    });
  }

  /* ================================================================
     PROJECT CARDS — TILT + RADIAL GLOW
  ================================================================ */
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var r   = card.getBoundingClientRect();
      var x   = e.clientX - r.left;
      var y   = e.clientY - r.top;
      var rx2 =  (y - r.height / 2) / 28;
      var ry2 = -(x - r.width  / 2) / 28;
      card.style.transform =
        'translateY(-6px) perspective(1000px) rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg)';
      var glow = card.querySelector('.pc-glow');
      if (glow) {
        glow.style.setProperty('--mx', (x / r.width  * 100) + '%');
        glow.style.setProperty('--my', (y / r.height * 100) + '%');
      }
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  /* ================================================================
     LIVE CLOCK (PKT UTC+5)
  ================================================================ */
  function updateClock() {
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var pkt = new Date(utc + 5 * 3600000);
    var h   = String(pkt.getHours()).padStart(2, '0');
    var m   = String(pkt.getMinutes()).padStart(2, '0');
    var s   = String(pkt.getSeconds()).padStart(2, '0');
    var el  = document.getElementById('live-time');
    if (el) el.textContent = h + ':' + m + ':' + s + ' PKT';
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ================================================================
     SMOOTH SCROLL LINKS
  ================================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ================================================================
     AVAILABILITY CARD — PARALLAX
  ================================================================ */
  var availCard = document.getElementById('avail-card');
  if (availCard) {
    availCard.addEventListener('mousemove', function(e) {
      var r   = availCard.getBoundingClientRect();
      var x   = e.clientX - r.left;
      var y   = e.clientY - r.top;
      var rx2 =  (y - r.height / 2) / 30;
      var ry2 = -(x - r.width  / 2) / 30;
      availCard.style.transform =
        'perspective(1200px) rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg)';
    });
    availCard.addEventListener('mouseleave', function() {
      availCard.style.transform = '';
    });
  }

})();
</script>

</body>
</html>`;
  }
}