import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="MUQADDAM — Cloud & DevOps Engineer from Karachi, Pakistan. Premium AWS, Terraform, Docker, CI/CD portfolio." />
  <meta name="keywords" content="Cloud Engineer, DevOps, AWS, Terraform, Docker, CI/CD, Karachi, Pakistan, Portfolio" />
  <meta name="author" content="Muqaddam" />
  <meta name="theme-color" content="#07080d" />
  <title>MUQADDAM — Premium Cloud & DevOps Portfolio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <style>
    /* =========================================================
       RESET
    ========================================================= */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #07080d;
      --bg-2: #0a0d14;
      --bg-3: #101521;
      --panel: rgba(255, 255, 255, 0.06);
      --panel-2: rgba(255, 255, 255, 0.09);
      --panel-3: rgba(255, 255, 255, 0.13);
      --line: rgba(255, 255, 255, 0.10);
      --line-2: rgba(255, 255, 255, 0.16);
      --text: #f7f8fc;
      --text-soft: rgba(247, 248, 252, 0.78);
      --text-dim: rgba(247, 248, 252, 0.52);
      --text-faint: rgba(247, 248, 252, 0.28);
      --cyan: #7ce7ff;
      --cyan-strong: #00d4ff;
      --cyan-deep: #0aa6c6;
      --gold: #f4cf7a;
      --gold-strong: #ffdf95;
      --gold-deep: #cda24e;
      --violet: #8b78ff;
      --emerald: #39f2a4;
      --danger: #ff7d7d;
      --shadow-xl: 0 40px 120px rgba(0, 0, 0, 0.55);
      --shadow-lg: 0 24px 80px rgba(0, 0, 0, 0.45);
      --radius-xs: 10px;
      --radius-sm: 14px;
      --radius-md: 20px;
      --radius-lg: 28px;
      --radius-xl: 36px;
      --container: 1360px;
      --spot-x: 50%;
      --spot-y: 30%;
      --nav-h: 88px;
    }

    html {
      scroll-behavior: smooth;
      background: var(--bg);
    }

    body {
      font-family: "Plus Jakarta Sans", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.12), transparent 35%),
        radial-gradient(circle at 90% 15%, rgba(139, 120, 255, 0.10), transparent 28%),
        radial-gradient(circle at 70% 80%, rgba(244, 207, 122, 0.10), transparent 30%),
        linear-gradient(180deg, #06070b 0%, #090b11 35%, #0a0d14 100%);
      overflow-x: hidden;
      min-height: 100vh;
      position: relative;
    }

    @media (hover: hover) and (pointer: fine) {
      body, a, button {
        cursor: none;
      }
    }

    body.menu-open {
      overflow: hidden;
    }

    body.loaded #preloader {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: scale(1.03);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font: inherit;
      background: none;
      border: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    ul {
      list-style: none;
    }

    ::selection {
      background: rgba(0, 212, 255, 0.18);
      color: #fff;
    }

    /* =========================================================
       SCROLLBAR
    ========================================================= */
    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: var(--bg);
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, var(--cyan-strong), var(--gold));
      border-radius: 100px;
    }

    /* =========================================================
       PRELOADER
    ========================================================= */
    #preloader {
      position: fixed;
      inset: 0;
      z-index: 12000;
      background:
        radial-gradient(circle at 50% 40%, rgba(0, 212, 255, 0.08), transparent 28%),
        radial-gradient(circle at 50% 50%, rgba(244, 207, 122, 0.05), transparent 40%),
        linear-gradient(180deg, #06070b 0%, #080a11 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      transition: opacity 0.9s ease, visibility 0.9s ease, transform 1s ease;
    }

    .preloader-logo {
      width: 86px;
      height: 86px;
      border-radius: 22px;
      display: grid;
      place-items: center;
      font-family: "JetBrains Mono", monospace;
      font-size: 1.45rem;
      font-weight: 700;
      letter-spacing: 4px;
      color: #000;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      box-shadow:
        0 0 30px rgba(0, 212, 255, 0.28),
        0 0 60px rgba(244, 207, 122, 0.12);
      animation: preloaderPulse 2s ease-in-out infinite;
    }

    .preloader-line {
      width: min(320px, 78vw);
      height: 4px;
      border-radius: 999px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.08);
      position: relative;
    }

    .preloader-line span {
      position: absolute;
      inset: 0;
      transform-origin: left center;
      animation: loadingBar 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      background: linear-gradient(90deg, var(--cyan-strong), var(--gold));
      box-shadow: 0 0 24px rgba(0, 212, 255, 0.26);
    }

    .preloader-text {
      font-size: 0.72rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    @keyframes preloaderPulse {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-4px) scale(1.02); }
    }

    @keyframes loadingBar {
      0% { transform: scaleX(0.08); opacity: 0.5; }
      35% { transform: scaleX(0.45); opacity: 1; }
      70% { transform: scaleX(0.82); opacity: 1; }
      100% { transform: scaleX(1); opacity: 0.7; }
    }

    /* =========================================================
       PREMIUM BACKGROUND SYSTEM
    ========================================================= */
    #scene-canvas,
    .noise-layer,
    .grid-layer,
    .vignette-layer,
    .page-spotlight,
    .beam {
      position: fixed;
      inset: 0;
      pointer-events: none;
    }

    #scene-canvas {
      z-index: 0;
      opacity: 0.75;
    }

    .page-spotlight {
      z-index: 1;
      background:
        radial-gradient(circle 280px at var(--spot-x) var(--spot-y), rgba(0, 212, 255, 0.10), transparent 70%),
        radial-gradient(circle 420px at calc(var(--spot-x) + 12%) calc(var(--spot-y) + 10%), rgba(244, 207, 122, 0.06), transparent 72%);
      mix-blend-mode: screen;
      opacity: 0.85;
    }

    .noise-layer {
      z-index: 2;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23a)'/%3E%3C/svg%3E");
      background-size: 240px 240px;
    }

    .grid-layer {
      z-index: 1;
      background-image:
        linear-gradient(rgba(124, 231, 255, 0.028) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124, 231, 255, 0.028) 1px, transparent 1px);
      background-size: 72px 72px;
      mask-image: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 80%, transparent 100%);
    }

    .vignette-layer {
      z-index: 3;
      background:
        radial-gradient(circle at center, transparent 38%, rgba(0, 0, 0, 0.35) 100%);
    }

    .beam {
      z-index: 1;
      opacity: 0.22;
      filter: blur(50px);
    }

    .beam.left {
      background: linear-gradient(180deg, rgba(0, 212, 255, 0.0), rgba(0, 212, 255, 0.14), rgba(0, 212, 255, 0.0));
      transform: skewX(-22deg) translateX(-28vw);
      width: 26vw;
    }

    .beam.right {
      background: linear-gradient(180deg, rgba(244, 207, 122, 0.0), rgba(244, 207, 122, 0.12), rgba(244, 207, 122, 0.0));
      transform: skewX(18deg) translateX(75vw);
      width: 20vw;
    }

    /* =========================================================
       CURSOR
    ========================================================= */
    #cursor-dot,
    #cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 11000;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    #cursor-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--cyan-strong);
      transform: translate(-50%, -50%);
      box-shadow:
        0 0 16px rgba(0, 212, 255, 0.55),
        0 0 30px rgba(0, 212, 255, 0.25);
    }

    #cursor-ring {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid rgba(124, 231, 255, 0.48);
      box-shadow: inset 0 0 18px rgba(124, 231, 255, 0.05);
      transition:
        width 0.25s ease,
        height 0.25s ease,
        border-color 0.25s ease,
        background 0.25s ease;
    }

    body.cursor-ready #cursor-dot,
    body.cursor-ready #cursor-ring {
      opacity: 1;
    }

    body.cursor-active #cursor-ring {
      width: 66px;
      height: 66px;
      border-color: rgba(244, 207, 122, 0.72);
      background: rgba(244, 207, 122, 0.04);
    }

    /* =========================================================
       TOP PROGRESS
    ========================================================= */
    #scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 2px;
      width: 0%;
      z-index: 2000;
      background: linear-gradient(90deg, var(--cyan-strong), var(--gold));
      box-shadow: 0 0 18px rgba(0, 212, 255, 0.28);
    }

    /* =========================================================
       NAVIGATION
    ========================================================= */
    #main-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1500;
      height: var(--nav-h);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
    }

    .nav-shell {
      width: min(calc(100% - 40px), 1320px);
      height: 64px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 18px 0 20px;
      background: rgba(8, 10, 16, 0.34);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
      transition: all 0.4s ease;
    }

    #main-nav.scrolled .nav-shell {
      background: rgba(8, 10, 16, 0.75);
      border-color: rgba(255, 255, 255, 0.12);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
    }

    .nav-brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .nav-mark {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      font-family: "JetBrains Mono", monospace;
      font-size: 0.95rem;
      color: #000;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      box-shadow:
        0 8px 18px rgba(0, 212, 255, 0.20),
        0 6px 14px rgba(244, 207, 122, 0.12);
    }

    .nav-brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.05;
    }

    .nav-brand-text strong {
      font-size: 0.92rem;
      letter-spacing: 2.2px;
    }

    .nav-brand-text span {
      font-size: 0.62rem;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-links a {
      font-size: 0.75rem;
      letter-spacing: 2.6px;
      text-transform: uppercase;
      color: var(--text-soft);
      position: relative;
      transition: color 0.25s ease;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0%;
      height: 1px;
      background: linear-gradient(90deg, var(--cyan-strong), var(--gold));
      transition: width 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--text);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 18px;
      border-radius: 14px;
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #061018;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      box-shadow:
        0 10px 22px rgba(0, 212, 255, 0.18),
        0 6px 14px rgba(244, 207, 122, 0.10);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .nav-cta:hover {
      transform: translateY(-2px);
      box-shadow:
        0 16px 34px rgba(0, 212, 255, 0.22),
        0 10px 18px rgba(244, 207, 122, 0.12);
    }

    .hamburger {
      display: none;
      width: 46px;
      height: 46px;
      border-radius: 14px;
      border: 1px solid var(--line);
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.04);
    }

    .hamburger-inner {
      width: 18px;
      height: 12px;
      position: relative;
    }

    .hamburger-inner span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 100px;
      background: var(--text);
    }

    .hamburger-inner span:nth-child(1) { top: 0; }
    .hamburger-inner span:nth-child(2) { top: 5px; }
    .hamburger-inner span:nth-child(3) { top: 10px; }

    .mobile-nav {
      position: fixed;
      inset: 0;
      z-index: 1499;
      background:
        radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.08), transparent 28%),
        radial-gradient(circle at 80% 80%, rgba(244, 207, 122, 0.08), transparent 28%),
        rgba(6, 8, 13, 0.96);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.35s ease, visibility 0.35s ease;
    }

    .mobile-nav.open {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }

    .mobile-nav a {
      font-size: clamp(2rem, 8vw, 3rem);
      font-weight: 800;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: var(--text-soft);
      transition: color 0.25s ease, transform 0.25s ease;
    }

    .mobile-nav a:hover {
      color: var(--text);
      transform: translateY(-3px);
    }

    .mobile-close {
      position: absolute;
      top: 28px;
      right: 28px;
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.04);
      color: var(--text-soft);
      font-size: 1.2rem;
    }

    /* =========================================================
       RIGHT SECTION RAIL
    ========================================================= */
    .section-rail {
      position: fixed;
      right: 22px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1200;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .rail-link {
      position: relative;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.18);
      background: rgba(255,255,255,0.04);
      transition: all 0.25s ease;
    }

    .rail-link::before {
      content: attr(data-label);
      position: absolute;
      right: 22px;
      top: 50%;
      transform: translateY(-50%) translateX(8px);
      white-space: nowrap;
      font-size: 0.62rem;
      letter-spacing: 2.6px;
      text-transform: uppercase;
      color: var(--text-dim);
      opacity: 0;
      transition: opacity 0.25s ease, transform 0.25s ease;
      pointer-events: none;
    }

    .rail-link:hover::before,
    .rail-link.active::before {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }

    .rail-link.active {
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      border-color: transparent;
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.28);
    }

    /* =========================================================
       SHARED LAYOUT
    ========================================================= */
    main {
      position: relative;
      z-index: 5;
    }

    .container {
      width: min(calc(100% - 40px), var(--container));
      margin: 0 auto;
    }

    .section {
      position: relative;
      padding: 8.5rem 0;
    }

    .section + .section {
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    .section-number {
      position: absolute;
      right: 0;
      top: 4rem;
      font-size: clamp(110px, 16vw, 240px);
      font-weight: 800;
      line-height: 1;
      color: rgba(255,255,255,0.028);
      font-family: "JetBrains Mono", monospace;
      user-select: none;
      pointer-events: none;
      letter-spacing: -8px;
    }

    .section-head {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 2rem;
      align-items: end;
      margin-bottom: 3.6rem;
    }

    .section-kicker {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 0.72rem;
      letter-spacing: 3.5px;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 1.25rem;
    }

    .section-kicker::before {
      content: "";
      width: 42px;
      height: 1px;
      background: linear-gradient(90deg, var(--cyan-strong), transparent);
    }

    .section-title {
      font-size: clamp(2.4rem, 5.8vw, 5rem);
      line-height: 0.98;
      letter-spacing: -0.04em;
      max-width: 760px;
    }

    .section-title .gradient {
      background: linear-gradient(135deg, var(--cyan) 0%, var(--gold) 70%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-lead {
      max-width: 540px;
      justify-self: end;
      color: var(--text-soft);
      line-height: 1.9;
      font-size: 1rem;
    }

    .glass-panel {
      background:
        linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
      border: 1px solid rgba(255,255,255,0.10);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.06),
        var(--shadow-lg);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
    }

    [data-tilt] {
      transform-style: preserve-3d;
      transform: perspective(1400px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0);
      transition: transform 0.18s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      will-change: transform;
    }

    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.75s ease, transform 0.75s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .muted {
      color: var(--text-dim);
    }

    .mono {
      font-family: "JetBrains Mono", monospace;
    }

    /* =========================================================
       HERO
    ========================================================= */
    #hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: calc(var(--nav-h) + 2rem) 0 4rem;
      overflow: clip;
    }

    .hero-layout {
      display: grid;
      grid-template-columns: 1.02fr 0.98fr;
      gap: 2.5rem;
      align-items: center;
      width: 100%;
    }

    .hero-copy {
      position: relative;
      z-index: 2;
      max-width: 720px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
      color: var(--cyan);
      letter-spacing: 2.6px;
      font-size: 0.7rem;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hero-badge .live-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--emerald);
      box-shadow: 0 0 14px rgba(57, 242, 164, 0.8);
      animation: pulseLive 2s ease-in-out infinite;
    }

    @keyframes pulseLive {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(0.65); opacity: 0.5; }
    }

    .hero-title {
      font-size: clamp(4rem, 10vw, 9rem);
      line-height: 0.90;
      letter-spacing: -0.065em;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #ffffff 0%, #b8f6ff 28%, #8de8ff 45%, #f4cf7a 76%, #ffffff 100%);
      background-size: 260% 260%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: heroGradient 8s ease infinite;
    }

    @keyframes heroGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .hero-subtitle {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 1.2rem;
    }

    .hero-subtitle-line {
      width: 46px;
      height: 1px;
      background: linear-gradient(90deg, var(--cyan), transparent);
    }

    .hero-subtitle span {
      font-size: clamp(0.86rem, 2vw, 1rem);
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--text-soft);
    }

    .hero-typing {
      min-height: 2rem;
      margin-bottom: 1.2rem;
      font-size: clamp(1rem, 2vw, 1.22rem);
      color: var(--text-dim);
    }

    .hero-typing strong {
      color: var(--cyan);
      font-weight: 700;
    }

    .typing-caret {
      display: inline-block;
      width: 2px;
      height: 1.1em;
      vertical-align: middle;
      margin-left: 4px;
      background: var(--cyan-strong);
      animation: blinkCaret 1s step-end infinite;
    }

    @keyframes blinkCaret {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .hero-description {
      max-width: 650px;
      font-size: 1.02rem;
      line-height: 1.95;
      color: var(--text-soft);
      margin-bottom: 2rem;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 2rem;
    }

    .magnetic-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-width: 190px;
      padding: 15px 22px;
      border-radius: 16px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 0.77rem;
      font-weight: 700;
      position: relative;
      overflow: hidden;
      transform: translate3d(var(--tx, 0px), var(--ty, 0px), 0);
      transition:
        transform 0.2s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease,
        background 0.3s ease;
    }

    .btn-primary {
      color: #031019;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      box-shadow:
        0 16px 34px rgba(0, 212, 255, 0.18),
        0 10px 18px rgba(244, 207, 122, 0.10);
    }

    .btn-primary:hover {
      box-shadow:
        0 24px 44px rgba(0, 212, 255, 0.22),
        0 16px 24px rgba(244, 207, 122, 0.14);
    }

    .btn-secondary {
      border: 1px solid rgba(255,255,255,0.12);
      color: var(--text);
      background: rgba(255,255,255,0.04);
    }

    .btn-secondary:hover {
      border-color: rgba(124, 231, 255, 0.38);
      box-shadow: 0 16px 34px rgba(0, 212, 255, 0.08);
    }

    .btn-ghost {
      border: 1px solid rgba(255,255,255,0.10);
      color: var(--gold);
      background: rgba(244,207,122,0.06);
    }

    .btn-ghost:hover {
      border-color: rgba(244,207,122,0.35);
      box-shadow: 0 16px 34px rgba(244, 207, 122, 0.08);
    }

    .hero-metrics {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .metric-pill {
      min-width: 160px;
      padding: 14px 16px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .metric-pill strong {
      display: block;
      font-size: 1.25rem;
      line-height: 1;
      margin-bottom: 6px;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .metric-pill span {
      font-size: 0.72rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .hero-stage-wrap {
      position: relative;
      min-height: 760px;
      perspective: 1800px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-stage {
      position: relative;
      width: min(680px, 94vw);
      height: 680px;
      transform-style: preserve-3d;
      transition: transform 0.2s ease;
    }

    .hero-stage::before {
      content: "";
      position: absolute;
      inset: 8% 8%;
      border-radius: 50%;
      background:
        radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.08), transparent 58%),
        radial-gradient(circle at 50% 50%, rgba(244, 207, 122, 0.04), transparent 70%);
      filter: blur(24px);
      transform: translateZ(-80px);
    }

    .orbit-ring {
      position: absolute;
      inset: 50%;
      transform-style: preserve-3d;
      border-radius: 50%;
      border: 1px solid rgba(124, 231, 255, 0.14);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
    }

    .orbit-ring.r1 {
      width: 520px;
      height: 520px;
      margin-left: -260px;
      margin-top: -260px;
      transform: rotateX(72deg) rotateY(12deg);
      animation: ringSpinA 16s linear infinite;
    }

    .orbit-ring.r2 {
      width: 430px;
      height: 430px;
      margin-left: -215px;
      margin-top: -215px;
      transform: rotateX(72deg) rotateY(-18deg);
      border-color: rgba(244, 207, 122, 0.16);
      animation: ringSpinB 13s linear infinite reverse;
    }

    .orbit-ring.r3 {
      width: 610px;
      height: 610px;
      margin-left: -305px;
      margin-top: -305px;
      transform: rotateX(78deg) rotateZ(30deg);
      border-color: rgba(139, 120, 255, 0.12);
      animation: ringSpinC 22s linear infinite;
    }

    @keyframes ringSpinA {
      from { transform: rotateX(72deg) rotateY(12deg) rotateZ(0deg); }
      to { transform: rotateX(72deg) rotateY(12deg) rotateZ(360deg); }
    }

    @keyframes ringSpinB {
      from { transform: rotateX(72deg) rotateY(-18deg) rotateZ(0deg); }
      to { transform: rotateX(72deg) rotateY(-18deg) rotateZ(360deg); }
    }

    @keyframes ringSpinC {
      from { transform: rotateX(78deg) rotateZ(30deg) rotateY(0deg); }
      to { transform: rotateX(78deg) rotateZ(30deg) rotateY(360deg); }
    }

    .stage-core {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 220px;
      height: 220px;
      margin-left: -110px;
      margin-top: -110px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 30%, rgba(255,255,255,0.75), rgba(255,255,255,0.08) 18%, transparent 26%),
        radial-gradient(circle at 50% 45%, rgba(0, 212, 255, 0.24), rgba(0, 212, 255, 0.08) 35%, transparent 65%),
        linear-gradient(180deg, rgba(124,231,255,0.18), rgba(244,207,122,0.08));
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow:
        0 0 80px rgba(0, 212, 255, 0.14),
        0 0 120px rgba(244, 207, 122, 0.06),
        inset 0 12px 24px rgba(255,255,255,0.08);
      display: grid;
      place-items: center;
      transform: translateZ(50px);
      animation: coreFloat 8s ease-in-out infinite;
      overflow: hidden;
    }

    .stage-core::before {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .stage-core::after {
      content: "";
      position: absolute;
      inset: -10%;
      background: conic-gradient(from 0deg, transparent, rgba(124,231,255,0.12), transparent, rgba(244,207,122,0.12), transparent);
      animation: coreSweep 7s linear infinite;
      opacity: 0.8;
    }

    @keyframes coreFloat {
      0%, 100% { transform: translateZ(50px) translateY(0px); }
      50% { transform: translateZ(50px) translateY(-10px); }
    }

    @keyframes coreSweep {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .core-label {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      text-align: center;
      transform: translateZ(40px);
    }

    .core-label strong {
      font-family: "JetBrains Mono", monospace;
      font-size: 2.2rem;
      letter-spacing: 6px;
      color: #fff;
    }

    .core-label span {
      font-size: 0.68rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-soft);
    }

    .orbital-chip {
      position: absolute;
      padding: 10px 14px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.05);
      color: var(--text-soft);
      font-size: 0.72rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      box-shadow: var(--shadow-lg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      animation: floatTag 7s ease-in-out infinite;
    }

    .orbital-chip i {
      margin-right: 8px;
      color: var(--cyan);
    }

    .orbital-chip.chip-a { top: 14%; left: 12%; animation-delay: 0s; }
    .orbital-chip.chip-b { top: 14%; right: 9%; animation-delay: 1.2s; }
    .orbital-chip.chip-c { bottom: 19%; left: 7%; animation-delay: 2.1s; }
    .orbital-chip.chip-d { bottom: 12%; right: 14%; animation-delay: 2.8s; }
    .orbital-chip.chip-e { top: 52%; right: -2%; animation-delay: 3.4s; }

    @keyframes floatTag {
      0%, 100% { transform: translateY(0px) translateZ(0); }
      50% { transform: translateY(-10px) translateZ(6px); }
    }

    .float-card {
      position: absolute;
      border-radius: 24px;
      padding: 1.15rem;
      overflow: hidden;
    }

    .float-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.08), transparent 55%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .float-card:hover::before {
      opacity: 1;
    }

    .terminal-card {
      top: 6%;
      left: 6%;
      width: 300px;
      transform: translateZ(110px);
      animation: panelFloatA 7s ease-in-out infinite;
    }

    .stats-card {
      top: 10%;
      right: 8%;
      width: 220px;
      transform: translateZ(80px);
      animation: panelFloatB 8s ease-in-out infinite;
    }

    .architecture-card {
      bottom: 8%;
      left: 50%;
      width: 350px;
      transform: translateX(-50%) translateZ(90px);
      animation: panelFloatC 9s ease-in-out infinite;
    }

    @keyframes panelFloatA {
      0%, 100% { transform: translateZ(110px) translateY(0px); }
      50% { transform: translateZ(110px) translateY(-8px); }
    }

    @keyframes panelFloatB {
      0%, 100% { transform: translateZ(80px) translateY(0px); }
      50% { transform: translateZ(80px) translateY(-12px); }
    }

    @keyframes panelFloatC {
      0%, 100% { transform: translateX(-50%) translateZ(90px) translateY(0px); }
      50% { transform: translateX(-50%) translateZ(90px) translateY(-10px); }
    }

    .panel-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .panel-head-left {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      color: var(--text-dim);
    }

    .panel-dots {
      display: flex;
      gap: 6px;
    }

    .panel-dots span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: block;
      background: rgba(255,255,255,0.18);
    }

    .panel-dots span:nth-child(1) { background: #ff7b7b; }
    .panel-dots span:nth-child(2) { background: #ffd96b; }
    .panel-dots span:nth-child(3) { background: #4df3ae; }

    .terminal-lines {
      display: grid;
      gap: 10px;
      font-family: "JetBrains Mono", monospace;
      font-size: 0.74rem;
      color: var(--text-soft);
      line-height: 1.7;
      position: relative;
      z-index: 2;
    }

    .terminal-lines .prompt {
      color: var(--cyan);
      margin-right: 8px;
    }

    .terminal-lines .success {
      color: var(--emerald);
    }

    .terminal-lines .warn {
      color: var(--gold);
    }

    .stats-grid {
      display: grid;
      gap: 12px;
      position: relative;
      z-index: 2;
    }

    .mini-stat {
      padding: 12px 14px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
    }

    .mini-stat strong {
      display: block;
      font-size: 1.25rem;
      margin-bottom: 4px;
      line-height: 1;
      color: var(--text);
    }

    .mini-stat span {
      font-size: 0.66rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .architecture-card h4 {
      font-size: 0.84rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1rem;
      position: relative;
      z-index: 2;
    }

    .arch-flow {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      position: relative;
      z-index: 2;
    }

    .arch-node {
      padding: 14px 10px;
      border-radius: 16px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      min-height: 92px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .arch-node i {
      color: var(--cyan);
      font-size: 1rem;
    }

    .arch-node span {
      font-size: 0.66rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-soft);
      line-height: 1.5;
    }

    .hero-mini-cube,
    .hero-mini-cube::before,
    .hero-mini-cube::after {
      position: absolute;
      width: 44px;
      height: 44px;
      border: 1px solid rgba(124,231,255,0.22);
      background: rgba(124,231,255,0.04);
      transform-style: preserve-3d;
    }

    .hero-mini-cube {
      top: 18%;
      right: 18%;
      transform: rotateX(60deg) rotateZ(45deg);
      animation: spinCube 10s linear infinite;
    }

    .hero-mini-cube::before {
      content: "";
      transform: translateZ(22px);
    }

    .hero-mini-cube::after {
      content: "";
      transform: translateY(22px) rotateX(90deg);
    }

    .hero-mini-cube.gold {
      left: 18%;
      right: auto;
      top: auto;
      bottom: 16%;
      border-color: rgba(244,207,122,0.25);
      background: rgba(244,207,122,0.04);
      animation-duration: 14s;
      animation-direction: reverse;
    }

    @keyframes spinCube {
      from { transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg); }
      to { transform: rotateX(60deg) rotateZ(45deg) rotateY(360deg); }
    }

    .hero-scroll {
      position: absolute;
      left: 50%;
      bottom: 26px;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      z-index: 4;
    }

    .hero-scroll span {
      font-size: 0.62rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .hero-scroll-line {
      width: 1px;
      height: 54px;
      background: linear-gradient(180deg, rgba(124,231,255,0.8), transparent);
      animation: scrollLine 2.1s ease infinite;
    }

    @keyframes scrollLine {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      51% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }

    /* =========================================================
       TECH STRIP
    ========================================================= */
    .tech-strip {
      position: relative;
      z-index: 5;
      overflow: hidden;
      border-top: 1px solid rgba(255,255,255,0.07);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      background:
        linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)),
        rgba(255,255,255,0.02);
    }

    .tech-track {
      display: flex;
      align-items: center;
      gap: 14px;
      width: max-content;
      padding: 18px 0;
      animation: marqueeFlow 28s linear infinite;
    }

    .tech-strip:hover .tech-track {
      animation-play-state: paused;
    }

    @keyframes marqueeFlow {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .tech-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.04);
      color: var(--text-soft);
      font-size: 0.8rem;
      white-space: nowrap;
    }

    .tech-pill i {
      color: var(--cyan);
    }

    .tech-pill.gold i {
      color: var(--gold);
    }

    /* =========================================================
       ABOUT
    ========================================================= */
    .about-grid {
      display: grid;
      grid-template-columns: 420px 1fr;
      gap: 2rem;
      align-items: start;
    }

    .profile-card {
      border-radius: 30px;
      padding: 1.4rem;
      position: sticky;
      top: 110px;
      overflow: hidden;
    }

    .profile-card::after {
      content: "";
      position: absolute;
      inset: auto -15% -25% auto;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,212,255,0.18), transparent 65%);
      filter: blur(18px);
      opacity: 0.8;
    }

    .profile-top {
      padding: 1.2rem;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      margin-bottom: 1rem;
      position: relative;
      z-index: 2;
    }

    .profile-avatar {
      width: 82px;
      height: 82px;
      border-radius: 22px;
      display: grid;
      place-items: center;
      margin-bottom: 1rem;
      color: #000;
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      box-shadow: 0 18px 40px rgba(0, 212, 255, 0.16);
    }

    .profile-name {
      font-size: 1.75rem;
      line-height: 1;
      margin-bottom: 0.45rem;
    }

    .profile-role {
      font-size: 0.76rem;
      letter-spacing: 2.8px;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 1rem;
    }

    .profile-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      font-size: 0.68rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--emerald);
      border: 1px solid rgba(57,242,164,0.18);
      background: rgba(57,242,164,0.08);
    }

    .profile-meta {
      display: grid;
      gap: 10px;
      margin-top: 1rem;
      font-size: 0.78rem;
      color: var(--text-dim);
      font-family: "JetBrains Mono", monospace;
    }

    .profile-kpis {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      position: relative;
      z-index: 2;
    }

    .kpi-box {
      padding: 18px 12px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      text-align: center;
    }

    .kpi-box strong {
      display: block;
      font-size: 1.75rem;
      line-height: 1;
      margin-bottom: 6px;
      background: linear-gradient(135deg, var(--cyan), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .kpi-box span {
      font-size: 0.62rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .about-copy {
      display: grid;
      gap: 1.2rem;
    }

    .story-card,
    .principle-card {
      border-radius: 26px;
      padding: 1.6rem;
    }

    .story-card p {
      color: var(--text-soft);
      line-height: 1.95;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .story-card p:last-child {
      margin-bottom: 0;
    }

    .story-quote {
      margin-top: 1.2rem;
      padding: 1.1rem 1.2rem;
      border-left: 2px solid var(--cyan);
      background: rgba(255,255,255,0.03);
      border-radius: 0 16px 16px 0;
      color: var(--text);
      line-height: 1.8;
    }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .principle-card h4 {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    .principle-card p {
      color: var(--text-soft);
      line-height: 1.85;
      font-size: 0.94rem;
      margin-bottom: 1rem;
    }

    .principle-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      color: var(--cyan);
      border: 1px solid rgba(124,231,255,0.16);
      background: rgba(124,231,255,0.08);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 0.2rem;
    }

    .tag-chip {
      padding: 10px 14px;
      border-radius: 999px;
      font-size: 0.74rem;
      letter-spacing: 1.5px;
      color: var(--text-soft);
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      transition: all 0.25s ease;
    }

    .tag-chip:hover {
      color: var(--text);
      border-color: rgba(124,231,255,0.25);
      background: rgba(124,231,255,0.08);
    }

    /* =========================================================
       CAPABILITIES
    ========================================================= */
    .cap-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
    }

    .cap-card {
      border-radius: 28px;
      padding: 1.5rem;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .cap-card::after {
      content: "";
      position: absolute;
      top: 0;
      left: 12%;
      right: 12%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--cyan), var(--gold), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .cap-card:hover::after {
      opacity: 1;
    }

    .cap-top {
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.1rem;
    }

    .cap-icon {
      width: 56px;
      height: 56px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      font-size: 1.2rem;
      color: var(--cyan);
      border: 1px solid rgba(124,231,255,0.16);
      background: rgba(124,231,255,0.08);
    }

    .cap-label {
      font-size: 0.68rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-dim);
      margin-bottom: 0.45rem;
    }

    .cap-title {
      font-size: 1.25rem;
      margin-bottom: 0.6rem;
    }

    .cap-desc {
      font-size: 0.95rem;
      color: var(--text-soft);
      line-height: 1.85;
      margin-bottom: 1.35rem;
    }

    .meter {
      margin-bottom: 1rem;
    }

    .meter:last-child {
      margin-bottom: 0;
    }

    .meter-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: var(--text-soft);
    }

    .meter-head strong {
      font-weight: 600;
      color: var(--text);
    }

    .meter-head span {
      color: var(--cyan);
      font-family: "JetBrains Mono", monospace;
    }

    .meter-track {
      height: 5px;
      border-radius: 999px;
      overflow: hidden;
      background: rgba(255,255,255,0.06);
    }

    .meter-fill {
      height: 100%;
      width: 0;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--cyan-strong), var(--gold));
      box-shadow: 0 0 18px rgba(0, 212, 255, 0.18);
      transition: width 1.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* =========================================================
       PROJECTS
    ========================================================= */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.2rem;
    }

    .project-span-7 { grid-column: span 7; }
    .project-span-5 { grid-column: span 5; }
    .project-span-4 { grid-column: span 4; }
    .project-span-6 { grid-column: span 6; }

    .project-card {
      position: relative;
      border-radius: 30px;
      padding: 1.6rem;
      overflow: hidden;
      min-height: 100%;
    }

    .project-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.08), transparent 45%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .project-card:hover::before {
      opacity: 1;
    }

    .project-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 1rem;
      position: relative;
      z-index: 2;
    }

    .project-index {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.82rem;
      letter-spacing: 2px;
      color: var(--gold);
      text-transform: uppercase;
    }

    .project-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.68rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .project-status .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--emerald);
      box-shadow: 0 0 12px rgba(57, 242, 164, 0.6);
    }

    .project-title {
      position: relative;
      z-index: 2;
      font-size: clamp(1.35rem, 2vw, 2rem);
      line-height: 1.1;
      margin-bottom: 0.9rem;
      max-width: 640px;
    }

    .project-desc {
      position: relative;
      z-index: 2;
      color: var(--text-soft);
      line-height: 1.9;
      margin-bottom: 1.2rem;
      font-size: 0.96rem;
      max-width: 700px;
    }

    .project-tags {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 1.2rem;
    }

    .project-tags span {
      padding: 10px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: var(--text-soft);
      font-size: 0.72rem;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }

    .project-meta {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 1.25rem;
    }

    .project-metric {
      padding: 14px 14px;
      border-radius: 18px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .project-metric strong {
      display: block;
      font-size: 1rem;
      margin-bottom: 4px;
      color: var(--text);
    }

    .project-metric span {
      font-size: 0.66rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .project-flow {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 1.25rem;
    }

    .project-node {
      padding: 14px 10px;
      border-radius: 16px;
      text-align: center;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .project-node i {
      font-size: 1rem;
      color: var(--cyan);
      margin-bottom: 8px;
    }

    .project-node span {
      display: block;
      font-size: 0.66rem;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      color: var(--text-soft);
      line-height: 1.5;
    }

    .project-footer {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    .project-badge {
      font-size: 0.74rem;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      color: var(--text-dim);
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .project-badge i {
      color: var(--gold);
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 0.8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--cyan);
      transition: gap 0.25s ease, color 0.25s ease;
    }

    .project-link:hover {
      gap: 14px;
      color: var(--text);
    }

    /* =========================================================
       PROCESS
    ========================================================= */
    .process-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.2rem;
    }

    .step-card {
      border-radius: 26px;
      padding: 1.5rem;
      height: 100%;
    }

    .step-number {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 0.9rem;
    }

    .step-title {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }

    .step-desc {
      color: var(--text-soft);
      line-height: 1.85;
      font-size: 0.94rem;
    }

    .ops-board {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 1.2rem;
    }

    .pipeline-card,
    .ops-metrics {
      border-radius: 28px;
      padding: 1.5rem;
    }

    .pipeline-head,
    .ops-metrics h3 {
      margin-bottom: 1rem;
    }

    .pipeline-head span,
    .ops-metrics .eyebrow {
      display: inline-block;
      font-size: 0.68rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 0.6rem;
    }

    .pipeline-head h3,
    .ops-metrics h3 {
      font-size: 1.4rem;
    }

    .pipeline-flow {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }

    .pipeline-node {
      min-height: 120px;
      border-radius: 20px;
      padding: 1rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.7rem;
    }

    .pipeline-node i {
      color: var(--cyan);
      font-size: 1.05rem;
    }

    .pipeline-node strong {
      font-size: 0.85rem;
      line-height: 1.45;
    }

    .pipeline-node span {
      font-size: 0.66rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .ops-stats {
      display: grid;
      gap: 10px;
    }

    .ops-stat {
      padding: 14px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .ops-stat strong {
      font-size: 0.92rem;
    }

    .ops-stat span {
      font-size: 0.74rem;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* =========================================================
       CONTACT
    ========================================================= */
    .contact-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 1.2rem;
    }

    .contact-hero,
    .contact-side {
      border-radius: 30px;
      padding: 1.7rem;
    }

    .contact-kicker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: var(--gold);
      font-size: 0.7rem;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    .contact-title {
      font-size: clamp(2rem, 4vw, 4rem);
      line-height: 1;
      letter-spacing: -0.04em;
      margin-bottom: 1rem;
      max-width: 700px;
    }

    .contact-text {
      color: var(--text-soft);
      line-height: 1.95;
      max-width: 680px;
      margin-bottom: 1.5rem;
    }

    .email-hero {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      padding: 18px 22px;
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.10);
      font-size: clamp(1rem, 2vw, 1.16rem);
      font-weight: 700;
      font-family: "JetBrains Mono", monospace;
      margin-bottom: 1.5rem;
      transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
      word-break: break-all;
    }

    .email-hero i {
      color: var(--cyan);
    }

    .email-hero:hover {
      transform: translateY(-3px);
      border-color: rgba(124,231,255,0.34);
      box-shadow: 0 18px 42px rgba(0, 212, 255, 0.10);
    }

    .contact-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .contact-side-grid {
      display: grid;
      gap: 10px;
    }

    .contact-side-card {
      padding: 1.2rem;
      border-radius: 22px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
    }

    .contact-side-card:hover {
      transform: translateY(-4px);
      border-color: rgba(124,231,255,0.24);
      box-shadow: 0 14px 34px rgba(0, 212, 255, 0.06);
    }

    .contact-side-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .contact-side-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      color: var(--cyan);
      font-size: 1.05rem;
      border: 1px solid rgba(124,231,255,0.16);
      background: rgba(124,231,255,0.08);
    }

    .contact-side-label {
      font-size: 0.66rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-dim);
      margin-bottom: 4px;
    }

    .contact-side-value {
      font-size: 0.95rem;
      font-weight: 700;
    }

    .contact-side-arrow {
      color: var(--text-dim);
      font-size: 0.85rem;
    }

    /* =========================================================
       FOOTER
    ========================================================= */
    footer {
      position: relative;
      z-index: 5;
      padding: 1.8rem 0 2.4rem;
      border-top: 1px solid rgba(255,255,255,0.07);
    }

    .footer-row {
      width: min(calc(100% - 40px), var(--container));
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-left {
      color: var(--text-dim);
      font-size: 0.8rem;
      line-height: 1.8;
    }

    .footer-left span {
      color: var(--cyan);
    }

    .footer-right {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text-faint);
      font-size: 0.76rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .footer-right i {
      color: var(--gold);
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */
    @media (max-width: 1180px) {
      .hero-layout,
      .section-head,
      .about-grid,
      .ops-board,
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .section-lead {
        justify-self: start;
      }

      .hero-stage-wrap {
        min-height: 680px;
      }

      .profile-card {
        position: relative;
        top: 0;
      }

      .project-span-7,
      .project-span-5,
      .project-span-4,
      .project-span-6 {
        grid-column: span 12;
      }

      .cap-grid,
      .principles-grid,
      .process-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .pipeline-flow {
        grid-template-columns: repeat(3, 1fr);
      }

      .section-number {
        display: none;
      }
    }

    @media (max-width: 920px) {
      .nav-links,
      .nav-cta,
      .section-rail {
        display: none;
      }

      .hamburger {
        display: inline-flex;
      }

      #hero {
        min-height: auto;
        padding-top: calc(var(--nav-h) + 1.5rem);
        padding-bottom: 4rem;
      }

      .hero-stage-wrap {
        min-height: 620px;
      }

      .terminal-card {
        width: 260px;
      }

      .architecture-card {
        width: 300px;
      }

      .arch-flow,
      .project-flow,
      .project-meta {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 680px) {
      .container,
      .footer-row {
        width: min(calc(100% - 24px), var(--container));
      }

      .nav-shell {
        width: min(calc(100% - 24px), 1320px);
      }

      .hero-title {
        font-size: clamp(3.2rem, 16vw, 5.2rem);
      }

      .hero-subtitle {
        gap: 10px;
      }

      .hero-subtitle span {
        letter-spacing: 3px;
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .magnetic-btn {
        width: 100%;
      }

      .metric-pill {
        width: 100%;
      }

      .cap-grid,
      .principles-grid,
      .process-grid,
      .profile-kpis,
      .contact-side-grid,
      .project-meta,
      .project-flow,
      .pipeline-flow {
        grid-template-columns: 1fr;
      }

      .hero-stage-wrap {
        min-height: 520px;
      }

      .hero-stage {
        width: min(100%, 520px);
        height: 520px;
      }

      .orbit-ring.r1 {
        width: 400px;
        height: 400px;
        margin-left: -200px;
        margin-top: -200px;
      }

      .orbit-ring.r2 {
        width: 330px;
        height: 330px;
        margin-left: -165px;
        margin-top: -165px;
      }

      .orbit-ring.r3 {
        width: 460px;
        height: 460px;
        margin-left: -230px;
        margin-top: -230px;
      }

      .stage-core {
        width: 170px;
        height: 170px;
        margin-left: -85px;
        margin-top: -85px;
      }

      .core-label strong {
        font-size: 1.65rem;
        letter-spacing: 4px;
      }

      .orbital-chip,
      .hero-mini-cube {
        display: none;
      }

      .terminal-card,
      .stats-card,
      .architecture-card {
        position: absolute;
      }

      .terminal-card {
        top: 2%;
        left: 4%;
        width: 230px;
      }

      .stats-card {
        top: 6%;
        right: 4%;
        width: 180px;
      }

      .architecture-card {
        bottom: 4%;
        width: 92%;
      }

      .project-footer,
      .footer-row {
        flex-direction: column;
        align-items: flex-start;
      }

      .email-hero {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }

      .reveal {
        opacity: 1 !important;
        transform: none !important;
      }

      #scene-canvas,
      .page-spotlight,
      .beam {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <!-- PRELOADER -->
  <div id="preloader">
    <div class="preloader-logo">MQ</div>
    <div class="preloader-line"><span></span></div>
    <div class="preloader-text">Compiling premium cloud experience</div>
  </div>

  <!-- CURSOR -->
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>

  <!-- BACKGROUND -->
  <div id="scroll-progress"></div>
  <div class="page-spotlight" id="page-spotlight"></div>
  <div class="noise-layer"></div>
  <div class="grid-layer"></div>
  <div class="vignette-layer"></div>
  <div class="beam left"></div>
  <div class="beam right"></div>
  <canvas id="scene-canvas"></canvas>

  <!-- NAV -->
  <nav id="main-nav">
    <div class="nav-shell">
      <a href="#hero" class="nav-brand" aria-label="Muqaddam Home">
        <div class="nav-mark">MQ</div>
        <div class="nav-brand-text">
          <strong>MUQADDAM</strong>
          <span>Cloud & DevOps Engineer</span>
        </div>
      </a>

      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#projects">Projects</a>
        <a href="#process">Process</a>
      </div>

      <a href="#contact" class="nav-cta">
        <i class="fa-solid fa-sparkles"></i>
        Hire Me
      </a>

      <button class="hamburger" id="hamburger-btn" aria-label="Open menu">
        <div class="hamburger-inner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>

  <!-- MOBILE NAV -->
  <div class="mobile-nav" id="mobile-nav">
    <button class="mobile-close" id="mobile-close" aria-label="Close menu">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <a href="#about">About</a>
    <a href="#capabilities">Capabilities</a>
    <a href="#projects">Projects</a>
    <a href="#process">Process</a>
    <a href="#contact">Contact</a>
  </div>

  <!-- SECTION RAIL -->
  <div class="section-rail">
    <a href="#hero" class="rail-link active" data-label="Hero"></a>
    <a href="#about" class="rail-link" data-label="About"></a>
    <a href="#capabilities" class="rail-link" data-label="Skills"></a>
    <a href="#projects" class="rail-link" data-label="Projects"></a>
    <a href="#process" class="rail-link" data-label="Process"></a>
    <a href="#contact" class="rail-link" data-label="Contact"></a>
  </div>

  <main>
    <!-- HERO -->
    <section id="hero">
      <div class="container hero-layout">
        <div class="hero-copy">
          <div class="hero-badge reveal">
            <span class="live-dot"></span>
            Available for internships, freelance & cloud builds
          </div>

          <h1 class="hero-title reveal">MUQADDAM</h1>

          <div class="hero-subtitle reveal">
            <div class="hero-subtitle-line"></div>
            <span>Cloud & DevOps Engineer / Karachi, Pakistan</span>
          </div>

          <div class="hero-typing reveal">
            <strong id="typed-text"></strong><span class="typing-caret"></span>
          </div>

          <p class="hero-description reveal">
            I build AWS infrastructure with the same standards luxury brands apply to craft:
            precision, polish, restraint, and unforgettable execution. From Terraform-driven environments
            to CI/CD pipelines and resilient cloud architecture, every system is designed to feel sharp,
            secure, and production-ready.
          </p>

          <div class="hero-actions reveal">
            <a href="#projects" class="magnetic-btn btn-primary magnetic">
              <i class="fa-solid fa-rocket"></i>
              Explore Portfolio
            </a>
            <a href="#capabilities" class="magnetic-btn btn-secondary magnetic">
              <i class="fa-solid fa-layer-group"></i>
              Technical Arsenal
            </a>
            <a href="mailto:muqaddamhammad@gmail.com" class="magnetic-btn btn-ghost magnetic">
              <i class="fa-solid fa-envelope"></i>
              Start a Project
            </a>
          </div>

          <div class="hero-metrics reveal">
            <div class="metric-pill">
              <strong>15+</strong>
              <span>Years Old, Already Shipping</span>
            </div>
            <div class="metric-pill">
              <strong>5+</strong>
              <span>Production-style AWS Projects</span>
            </div>
            <div class="metric-pill">
              <strong>10+</strong>
              <span>AWS Services in Practice</span>
            </div>
          </div>
        </div>

        <div class="hero-stage-wrap reveal">
          <div class="hero-stage" id="hero-stage">
            <div class="orbit-ring r1"></div>
            <div class="orbit-ring r2"></div>
            <div class="orbit-ring r3"></div>

            <div class="stage-core">
              <div class="core-label">
                <strong>MQ</strong>
                <span>Cloud Core</span>
              </div>
            </div>

            <div class="orbital-chip chip-a"><i class="fa-brands fa-aws"></i> AWS</div>
            <div class="orbital-chip chip-b"><i class="fa-solid fa-code-branch"></i> Terraform</div>
            <div class="orbital-chip chip-c"><i class="fa-brands fa-docker"></i> Docker</div>
            <div class="orbital-chip chip-d"><i class="fa-solid fa-infinity"></i> CI/CD</div>
            <div class="orbital-chip chip-e"><i class="fa-solid fa-shield-halved"></i> Security</div>

            <div class="float-card terminal-card glass-panel" data-tilt>
              <div class="panel-head">
                <div class="panel-head-left">Deployment Console</div>
                <div class="panel-dots"><span></span><span></span><span></span></div>
              </div>
              <div class="terminal-lines">
                <div><span class="prompt">$</span> terraform plan</div>
                <div class="success">+ vpc.production</div>
                <div class="success">+ alb.edge-gateway</div>
                <div class="success">+ asg.web-cluster</div>
                <div class="warn">~ iam.least-privilege-policy</div>
                <div><span class="prompt">$</span> github actions deploy</div>
                <div class="success">status: shipped beautifully</div>
              </div>
            </div>

            <div class="float-card stats-card glass-panel" data-tilt>
              <div class="panel-head">
                <div class="panel-head-left">Premium Metrics</div>
                <div class="panel-dots"><span></span><span></span><span></span></div>
              </div>
              <div class="stats-grid">
                <div class="mini-stat">
                  <strong>99.99%</strong>
                  <span>HA Design Target</span>
                </div>
                <div class="mini-stat">
                  <strong>&lt;100ms</strong>
                  <span>Edge Delivery Goal</span>
                </div>
                <div class="mini-stat">
                  <strong>IaC</strong>
                  <span>Everything Versioned</span>
                </div>
              </div>
            </div>

            <div class="float-card architecture-card glass-panel" data-tilt>
              <h4>Reference Architecture</h4>
              <div class="arch-flow">
                <div class="arch-node">
                  <i class="fa-solid fa-globe"></i>
                  <span>Route 53</span>
                </div>
                <div class="arch-node">
                  <i class="fa-solid fa-network-wired"></i>
                  <span>CloudFront</span>
                </div>
                <div class="arch-node">
                  <i class="fa-solid fa-server"></i>
                  <span>EC2 / ALB</span>
                </div>
                <div class="arch-node">
                  <i class="fa-solid fa-database"></i>
                  <span>RDS</span>
                </div>
              </div>
            </div>

            <div class="hero-mini-cube"></div>
            <div class="hero-mini-cube gold"></div>
          </div>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
      </div>
    </section>

    <!-- TECH STRIP -->
    <section class="tech-strip">
      <div class="tech-track">
        <div class="tech-pill gold"><i class="fa-brands fa-aws"></i>AWS Architecture</div>
        <div class="tech-pill"><i class="fa-solid fa-code-branch"></i>Terraform IaC</div>
        <div class="tech-pill"><i class="fa-brands fa-docker"></i>Docker</div>
        <div class="tech-pill gold"><i class="fa-brands fa-github"></i>GitHub Actions</div>
        <div class="tech-pill"><i class="fa-solid fa-shield-halved"></i>Least-Privilege Security</div>
        <div class="tech-pill gold"><i class="fa-solid fa-server"></i>EC2 / ALB / ASG</div>
        <div class="tech-pill"><i class="fa-solid fa-bolt"></i>Serverless Systems</div>
        <div class="tech-pill gold"><i class="fa-solid fa-network-wired"></i>VPC Design</div>
        <div class="tech-pill"><i class="fa-solid fa-boxes-stacked"></i>S3 / CloudFront</div>
        <div class="tech-pill gold"><i class="fa-solid fa-chart-line"></i>Monitoring & Operations</div>

        <div class="tech-pill gold"><i class="fa-brands fa-aws"></i>AWS Architecture</div>
        <div class="tech-pill"><i class="fa-solid fa-code-branch"></i>Terraform IaC</div>
        <div class="tech-pill"><i class="fa-brands fa-docker"></i>Docker</div>
        <div class="tech-pill gold"><i class="fa-brands fa-github"></i>GitHub Actions</div>
        <div class="tech-pill"><i class="fa-solid fa-shield-halved"></i>Least-Privilege Security</div>
        <div class="tech-pill gold"><i class="fa-solid fa-server"></i>EC2 / ALB / ASG</div>
        <div class="tech-pill"><i class="fa-solid fa-bolt"></i>Serverless Systems</div>
        <div class="tech-pill gold"><i class="fa-solid fa-network-wired"></i>VPC Design</div>
        <div class="tech-pill"><i class="fa-solid fa-boxes-stacked"></i>S3 / CloudFront</div>
        <div class="tech-pill gold"><i class="fa-solid fa-chart-line"></i>Monitoring & Operations</div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="container">
        <div class="section-number">01</div>

        <div class="section-head">
          <div class="reveal">
            <div class="section-kicker">Manifesto</div>
            <h2 class="section-title">
              Infrastructure with <span class="gradient">taste, discipline, and scale</span>.
            </h2>
          </div>
          <p class="section-lead reveal">
            Not just cloud deployments — curated systems. Every layer is shaped around resilience,
            automation, security, and a presentation standard that feels premium from the first scroll
            to the final architecture decision.
          </p>
        </div>

        <div class="about-grid">
          <div class="reveal">
            <div class="profile-card glass-panel" data-tilt>
              <div class="profile-top">
                <div class="profile-avatar">M</div>
                <div class="profile-name">Muqaddam</div>
                <div class="profile-role">Cloud & DevOps Engineer</div>
                <div class="profile-status">
                  <i class="fa-solid fa-circle"></i>
                  Open to opportunities
                </div>
                <div class="profile-meta">
                  <div>// karachi.pk</div>
                  <div>// utc+5</div>
                  <div>// premium cloud execution</div>
                </div>
              </div>

              <div class="profile-kpis">
                <div class="kpi-box">
                  <strong data-count="15">0</strong>
                  <span>Age</span>
                </div>
                <div class="kpi-box">
                  <strong data-count="5">0</strong>
                  <span>Projects</span>
                </div>
                <div class="kpi-box">
                  <strong data-count="10">0</strong>
                  <span>AWS Tools</span>
                </div>
              </div>
            </div>
          </div>

          <div class="about-copy">
            <div class="reveal">
              <div class="story-card glass-panel">
                <p>
                  I'm Muqaddam, a 15-year-old Cloud & DevOps Engineer from Karachi, Pakistan.
                  While many people are still discovering what infrastructure even means, I'm already
                  architecting AWS environments, containerizing workloads, automating delivery pipelines,
                  and learning how world-class systems are built behind the scenes.
                </p>
                <p>
                  My obsession is simple: make cloud infrastructure feel elegant. That means clean architecture,
                  versioned environments, fast deployment paths, least-privilege security, and systems that look
                  as intentional in code as they feel in production.
                </p>
                <div class="story-quote">
                  “How does the internet work beautifully at scale?” — that question pulled me into AWS,
                  Terraform, Docker, Linux, automation, and the craft of building infrastructure that is both
                  technically sharp and aesthetically precise.
                </div>
              </div>
            </div>

            <div class="principles-grid">
              <div class="reveal">
                <div class="principle-card glass-panel" data-tilt>
                  <div class="principle-icon"><i class="fa-solid fa-cubes-stacked"></i></div>
                  <h4>Architecture First</h4>
                  <p>
                    I design systems from the network up: topology, traffic flow, security boundaries,
                    availability strategy, and deployment behavior.
                  </p>
                  <div class="tag-cloud">
                    <span class="tag-chip">VPC</span>
                    <span class="tag-chip">ALB</span>
                    <span class="tag-chip">ASG</span>
                  </div>
                </div>
              </div>

              <div class="reveal">
                <div class="principle-card glass-panel" data-tilt>
                  <div class="principle-icon"><i class="fa-solid fa-terminal"></i></div>
                  <h4>Automation Always</h4>
                  <p>
                    Manual processes break luxury execution. I prefer Terraform, scripted provisioning,
                    CI/CD flows, and reproducible deployments.
                  </p>
                  <div class="tag-cloud">
                    <span class="tag-chip">Terraform</span>
                    <span class="tag-chip">GitHub Actions</span>
                    <span class="tag-chip">Bash</span>
                  </div>
                </div>
              </div>

              <div class="reveal">
                <div class="principle-card glass-panel" data-tilt>
                  <div class="principle-icon"><i class="fa-solid fa-shield-halved"></i></div>
                  <h4>Security by Design</h4>
                  <p>
                    Strong systems are restrictive by default: IAM boundaries, private routing,
                    layered controls, and thoughtful operational visibility.
                  </p>
                  <div class="tag-cloud">
                    <span class="tag-chip">IAM</span>
                    <span class="tag-chip">NACLs</span>
                    <span class="tag-chip">CloudWatch</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="reveal">
              <div class="tag-cloud">
                <span class="tag-chip">AWS</span>
                <span class="tag-chip">EC2</span>
                <span class="tag-chip">S3</span>
                <span class="tag-chip">CloudFront</span>
                <span class="tag-chip">Route 53</span>
                <span class="tag-chip">RDS</span>
                <span class="tag-chip">DynamoDB</span>
                <span class="tag-chip">Lambda</span>
                <span class="tag-chip">VPC</span>
                <span class="tag-chip">IAM</span>
                <span class="tag-chip">Terraform</span>
                <span class="tag-chip">Docker</span>
                <span class="tag-chip">GitHub Actions</span>
                <span class="tag-chip">Linux</span>
                <span class="tag-chip">CloudWatch</span>
                <span class="tag-chip">CodeBuild</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-number">02</div>

        <div class="section-head">
          <div class="reveal">
            <div class="section-kicker">Capabilities</div>
            <h2 class="section-title">
              A technical <span class="gradient">arsenal built for modern cloud delivery</span>.
            </h2>
          </div>
          <p class="section-lead reveal">
            My stack covers the full lifecycle: design, provisioning, security, deployment,
            operations, and optimization — all wrapped in a premium, disciplined build mindset.
          </p>
        </div>

        <div class="cap-grid">
          <div class="reveal">
            <div class="cap-card glass-panel" data-tilt>
              <div class="cap-top">
                <div>
                  <div class="cap-label">Domain 01</div>
                  <div class="cap-title">AWS Cloud Platform</div>
                </div>
                <div class="cap-icon"><i class="fa-brands fa-aws"></i></div>
              </div>
              <div class="cap-desc">
                Production-style AWS knowledge across compute, networking, storage, edge delivery,
                data, and security layers.
              </div>

              <div class="meter">
                <div class="meter-head"><strong>EC2 / ASG / ALB</strong><span>90%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="90"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>S3 / CloudFront / Route 53</strong><span>95%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="95"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>RDS / DynamoDB</strong><span>82%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="82"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>IAM / Security Controls</strong><span>88%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="88"></div></div>
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="cap-card glass-panel" data-tilt>
              <div class="cap-top">
                <div>
                  <div class="cap-label">Domain 02</div>
                  <div class="cap-title">Infrastructure as Code</div>
                </div>
                <div class="cap-icon"><i class="fa-solid fa-code-branch"></i></div>
              </div>
              <div class="cap-desc">
                Infrastructure should be repeatable, auditable, and elegant. I focus on Terraform-driven
                systems and clean environment provisioning.
              </div>

              <div class="meter">
                <div class="meter-head"><strong>Terraform Modules</strong><span>85%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="85"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>Reusable Environments</strong><span>84%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="84"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>Linux / Bash Automation</strong><span>88%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="88"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>Config Discipline</strong><span>91%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="91"></div></div>
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="cap-card glass-panel" data-tilt>
              <div class="cap-top">
                <div>
                  <div class="cap-label">Domain 03</div>
                  <div class="cap-title">Containers & Delivery</div>
                </div>
                <div class="cap-icon"><i class="fa-brands fa-docker"></i></div>
              </div>
              <div class="cap-desc">
                Containerized applications and streamlined delivery pipelines that reduce friction and
                increase confidence in every release.
              </div>

              <div class="meter">
                <div class="meter-head"><strong>Docker / Compose</strong><span>92%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="92"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>GitHub Actions</strong><span>90%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="90"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>CodeBuild / CodePipeline</strong><span>79%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="79"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>Elastic Beanstalk Deploys</strong><span>85%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="85"></div></div>
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="cap-card glass-panel" data-tilt>
              <div class="cap-top">
                <div>
                  <div class="cap-label">Domain 04</div>
                  <div class="cap-title">Security & Operations</div>
                </div>
                <div class="cap-icon"><i class="fa-solid fa-shield-halved"></i></div>
              </div>
              <div class="cap-desc">
                Least-privilege security, monitoring, layered network design, and systems built with
                operational awareness from day one.
              </div>

              <div class="meter">
                <div class="meter-head"><strong>IAM Policy Design</strong><span>88%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="88"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>VPC / Routing / NACLs</strong><span>86%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="86"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>CloudWatch Visibility</strong><span>80%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="80"></div></div>
              </div>
              <div class="meter">
                <div class="meter-head"><strong>Least-Privilege Discipline</strong><span>93%</span></div>
                <div class="meter-track"><div class="meter-fill" data-progress="93"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section" id="projects">
      <div class="container">
        <div class="section-number">03</div>

        <div class="section-head">
          <div class="reveal">
            <div class="section-kicker">Featured Work</div>
            <h2 class="section-title">
              Selected <span class="gradient">cloud architecture projects</span>.
            </h2>
          </div>
          <p class="section-lead reveal">
            These are not random experiments. They are intentional infrastructure exercises that reflect
            how I think about performance, security, scale, and real-world deployment quality.
          </p>
        </div>

        <div class="projects-grid">
          <div class="reveal project-span-7">
            <article class="project-card glass-panel" data-tilt>
              <div class="project-top">
                <div class="project-index">Project 01</div>
                <div class="project-status"><span class="dot"></span> Edge Delivery</div>
              </div>
              <h3 class="project-title">S3 + CloudFront Static Site Delivery System</h3>
              <p class="project-desc">
                A premium static delivery architecture focused on performance and clean operational design.
                S3 handles versioned assets, CloudFront distributes globally, Route 53 manages the domain,
                ACM secures the edge, and access is locked down using private origin strategy. Simple on the surface,
                but beautifully structured behind the scenes.
              </p>

              <div class="project-tags">
                <span>S3</span>
                <span>CloudFront</span>
                <span>Route 53</span>
                <span>ACM</span>
                <span>OAI / Private Access</span>
              </div>

              <div class="project-meta">
                <div class="project-metric">
                  <strong>Global Edge</strong>
                  <span>Fast distribution</span>
                </div>
                <div class="project-metric">
                  <strong>SSL Ready</strong>
                  <span>Trusted delivery</span>
                </div>
                <div class="project-metric">
                  <strong>Low Ops</strong>
                  <span>Lean maintenance</span>
                </div>
              </div>

              <div class="project-flow">
                <div class="project-node"><i class="fa-solid fa-globe"></i><span>DNS</span></div>
                <div class="project-node"><i class="fa-solid fa-bolt"></i><span>Edge CDN</span></div>
                <div class="project-node"><i class="fa-solid fa-boxes-stacked"></i><span>Origin Bucket</span></div>
                <div class="project-node"><i class="fa-solid fa-lock"></i><span>Private Access</span></div>
              </div>

              <div class="project-footer">
                <div class="project-badge">
                  <i class="fa-solid fa-diagram-project"></i>
                  Elegant static edge architecture
                </div>
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="project-link">
                  View GitHub <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>

          <div class="reveal project-span-5">
            <article class="project-card glass-panel" data-tilt>
              <div class="project-top">
                <div class="project-index">Project 02</div>
                <div class="project-status"><span class="dot"></span> Security Automation</div>
              </div>
              <h3 class="project-title">IAM Automation & Least-Privilege Engine</h3>
              <p class="project-desc">
                Python and Boto3 automation for IAM provisioning, policy shaping, permission review,
                and compliance-oriented account hygiene.
              </p>
              <div class="project-tags">
                <span>IAM</span>
                <span>Python</span>
                <span>Boto3</span>
                <span>Organizations</span>
              </div>
              <div class="project-meta">
                <div class="project-metric"><strong>Least-Privilege</strong><span>Security-first</span></div>
                <div class="project-metric"><strong>Auditable</strong><span>Policy visibility</span></div>
                <div class="project-metric"><strong>Scalable</strong><span>Multi-account logic</span></div>
              </div>
              <div class="project-footer">
                <div class="project-badge"><i class="fa-solid fa-shield-halved"></i> Identity governance</div>
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="project-link">
                  View GitHub <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>

          <div class="reveal project-span-4">
            <article class="project-card glass-panel" data-tilt>
              <div class="project-top">
                <div class="project-index">Project 03</div>
                <div class="project-status"><span class="dot"></span> Serverless</div>
              </div>
              <h3 class="project-title">Serverless Task Board</h3>
              <p class="project-desc">
                Event-driven app flow using Lambda, API Gateway, DynamoDB, SNS, and SES for an efficient,
                low-ops application model.
              </p>
              <div class="project-tags">
                <span>Lambda</span>
                <span>API Gateway</span>
                <span>DynamoDB</span>
                <span>SNS</span>
                <span>SES</span>
              </div>
              <div class="project-footer">
                <div class="project-badge"><i class="fa-solid fa-bolt"></i> Zero-server operations</div>
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="project-link">
                  View GitHub <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>

          <div class="reveal project-span-4">
            <article class="project-card glass-panel" data-tilt>
              <div class="project-top">
                <div class="project-index">Project 04</div>
                <div class="project-status"><span class="dot"></span> High Availability</div>
              </div>
              <h3 class="project-title">Application High-Availability Stack</h3>
              <p class="project-desc">
                ALB routing, Auto Scaling Groups, Multi-AZ RDS, and CloudWatch-driven observability
                for resilient application hosting patterns.
              </p>
              <div class="project-tags">
                <span>ALB</span>
                <span>ASG</span>
                <span>RDS</span>
                <span>CloudWatch</span>
              </div>
              <div class="project-footer">
                <div class="project-badge"><i class="fa-solid fa-server"></i> 99.99% design mindset</div>
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="project-link">
                  View GitHub <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>

          <div class="reveal project-span-4">
            <article class="project-card glass-panel" data-tilt>
              <div class="project-top">
                <div class="project-index">Project 05</div>
                <div class="project-status"><span class="dot"></span> Network Design</div>
              </div>
              <h3 class="project-title">Custom Multi-AZ VPC Network Architecture</h3>
              <p class="project-desc">
                Public/private subnet strategy, NAT gateway routing, security groups, NACLs, and layered
                network segmentation for production-grade traffic control.
              </p>
              <div class="project-tags">
                <span>VPC</span>
                <span>Subnets</span>
                <span>NAT Gateway</span>
                <span>Route Tables</span>
              </div>
              <div class="project-footer">
                <div class="project-badge"><i class="fa-solid fa-network-wired"></i> Defense-in-depth networking</div>
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="project-link">
                  View GitHub <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section" id="process">
      <div class="container">
        <div class="section-number">04</div>

        <div class="section-head">
          <div class="reveal">
            <div class="section-kicker">Operating Model</div>
            <h2 class="section-title">
              How I turn ideas into <span class="gradient">clean, deployable cloud systems</span>.
            </h2>
          </div>
          <p class="section-lead reveal">
            Good infrastructure is not only what gets built — it is how it is built. My process
            favors clarity, repeatability, and confidence at every stage.
          </p>
        </div>

        <div class="process-grid">
          <div class="reveal">
            <div class="step-card glass-panel" data-tilt>
              <div class="step-number">01 / Discover</div>
              <div class="step-title">Understand the system</div>
              <div class="step-desc">
                I map the objective, expected traffic, security boundaries, deployment needs,
                and likely failure points before building anything.
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="step-card glass-panel" data-tilt>
              <div class="step-number">02 / Architect</div>
              <div class="step-title">Shape the cloud design</div>
              <div class="step-desc">
                I define the AWS components, network flow, IAM approach, environment separation,
                and operational model with intentional structure.
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="step-card glass-panel" data-tilt>
              <div class="step-number">03 / Automate</div>
              <div class="step-title">Provision with code</div>
              <div class="step-desc">
                Terraform, scripts, and CI/CD pipelines reduce manual work and turn infrastructure
                into something reliable, repeatable, and easier to evolve.
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="step-card glass-panel" data-tilt>
              <div class="step-number">04 / Refine</div>
              <div class="step-title">Observe and improve</div>
              <div class="step-desc">
                Monitoring, security review, deployment feedback, and structural cleanup help
                polish a build from functional to genuinely premium.
              </div>
            </div>
          </div>
        </div>

        <div class="ops-board">
          <div class="reveal">
            <div class="pipeline-card glass-panel" data-tilt>
              <div class="pipeline-head">
                <span>Reference Pipeline</span>
                <h3>From commit to cloud, with minimal friction</h3>
              </div>

              <div class="pipeline-flow">
                <div class="pipeline-node">
                  <i class="fa-brands fa-github"></i>
                  <strong>Source Commit</strong>
                  <span>Versioned change</span>
                </div>
                <div class="pipeline-node">
                  <i class="fa-solid fa-vial"></i>
                  <strong>Checks & Validation</strong>
                  <span>Lint / plan / review</span>
                </div>
                <div class="pipeline-node">
                  <i class="fa-solid fa-box-open"></i>
                  <strong>Build Artifact</strong>
                  <span>Image / package prep</span>
                </div>
                <div class="pipeline-node">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                  <strong>Deploy</strong>
                  <span>Automated release</span>
                </div>
                <div class="pipeline-node">
                  <i class="fa-solid fa-chart-column"></i>
                  <strong>Observe</strong>
                  <span>Metrics / alarms / logs</span>
                </div>
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="ops-metrics glass-panel" data-tilt>
              <div class="eyebrow">Operational Priorities</div>
              <h3>What I optimize for</h3>

              <div class="ops-stats">
                <div class="ops-stat">
                  <strong>Security posture</strong>
                  <span>least privilege</span>
                </div>
                <div class="ops-stat">
                  <strong>Deployment speed</strong>
                  <span>repeatable automation</span>
                </div>
                <div class="ops-stat">
                  <strong>Availability mindset</strong>
                  <span>redundancy aware</span>
                </div>
                <div class="ops-stat">
                  <strong>Operational clarity</strong>
                  <span>visible by design</span>
                </div>
                <div class="ops-stat">
                  <strong>Clean infrastructure code</strong>
                  <span>maintainable systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section" id="contact">
      <div class="container">
        <div class="section-number">05</div>

        <div class="section-head">
          <div class="reveal">
            <div class="section-kicker">Contact</div>
            <h2 class="section-title">
              Let’s build something <span class="gradient">technically elite</span>.
            </h2>
          </div>
          <p class="section-lead reveal">
            Open to internships, freelance AWS projects, DevOps collaborations, and ambitious builds
            that need real execution — not just pretty diagrams.
          </p>
        </div>

        <div class="contact-grid">
          <div class="reveal">
            <div class="contact-hero glass-panel" data-tilt>
              <div class="contact-kicker">
                <i class="fa-solid fa-sparkles"></i>
                Premium collaboration
              </div>
              <h3 class="contact-title">
                If the brief demands precision, speed, and polished cloud thinking — I’m ready.
              </h3>
              <p class="contact-text">
                Whether you need a static AWS delivery setup, a Terraform-first environment, a CI/CD flow,
                better IAM discipline, or a more elegant cloud foundation overall, I’d love to hear about it.
              </p>

              <a href="mailto:muqaddamhammad@gmail.com" class="email-hero">
                <i class="fa-solid fa-envelope"></i>
                muqaddamhammad@gmail.com
              </a>

              <div class="contact-actions">
                <a href="mailto:muqaddamhammad@gmail.com" class="magnetic-btn btn-primary magnetic">
                  <i class="fa-solid fa-paper-plane"></i>
                  Send an Email
                </a>
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="magnetic-btn btn-secondary magnetic">
                  <i class="fa-brands fa-github"></i>
                  View GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="reveal">
            <div class="contact-side glass-panel" data-tilt>
              <div class="contact-side-grid">
                <a href="https://github.com/muhammadhassan120" target="_blank" rel="noopener" class="contact-side-card">
                  <div class="contact-side-left">
                    <div class="contact-side-icon"><i class="fa-brands fa-github"></i></div>
                    <div>
                      <div class="contact-side-label">GitHub</div>
                      <div class="contact-side-value">muhammadhassan120</div>
                    </div>
                  </div>
                  <div class="contact-side-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>

                <a href="mailto:muqaddamhammad@gmail.com" class="contact-side-card">
                  <div class="contact-side-left">
                    <div class="contact-side-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div>
                      <div class="contact-side-label">Email</div>
                      <div class="contact-side-value">Send a message</div>
                    </div>
                  </div>
                  <div class="contact-side-arrow"><i class="fa-solid fa-arrow-right"></i></div>
                </a>

                <div class="contact-side-card">
                  <div class="contact-side-left">
                    <div class="contact-side-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                      <div class="contact-side-label">Location</div>
                      <div class="contact-side-value">Karachi, Pakistan</div>
                    </div>
                  </div>
                  <div class="contact-side-arrow"><i class="fa-solid fa-earth-asia"></i></div>
                </div>

                <div class="contact-side-card">
                  <div class="contact-side-left">
                    <div class="contact-side-icon"><i class="fa-solid fa-clock"></i></div>
                    <div>
                      <div class="contact-side-label">Timezone</div>
                      <div class="contact-side-value">UTC +5</div>
                    </div>
                  </div>
                  <div class="contact-side-arrow"><i class="fa-solid fa-check"></i></div>
                </div>

                <div class="contact-side-card">
                  <div class="contact-side-left">
                    <div class="contact-side-icon"><i class="fa-solid fa-briefcase"></i></div>
                    <div>
                      <div class="contact-side-label">Availability</div>
                      <div class="contact-side-value">Open for opportunities</div>
                    </div>
                  </div>
                  <div class="contact-side-arrow"><i class="fa-solid fa-sparkles"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-row">
      <div class="footer-left">
        Designed & built by <span>MUQADDAM</span> — Cloud & DevOps Engineer from Karachi, Pakistan.
      </div>
      <div class="footer-right">
        <i class="fa-brands fa-aws"></i>
        AWS • Terraform • Docker • CI/CD • Security
      </div>
    </div>
  </footer>

  <script>
    (function () {
      "use strict";

      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* =====================================================
         PRELOADER
      ===================================================== */
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.body.classList.add("loaded");
        }, 900);
      });

      /* =====================================================
         CUSTOM CURSOR + SPOTLIGHT
      ===================================================== */
      var isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      var cursorDot = document.getElementById("cursor-dot");
      var cursorRing = document.getElementById("cursor-ring");
      var spotlight = document.getElementById("page-spotlight");

      if (isFinePointer && !reducedMotion) {
        document.body.classList.add("cursor-ready");

        var mouseX = window.innerWidth / 2;
        var mouseY = window.innerHeight / 2;
        var ringX = mouseX;
        var ringY = mouseY;

        document.addEventListener("mousemove", function (e) {
          mouseX = e.clientX;
          mouseY = e.clientY;

          cursorDot.style.left = mouseX + "px";
          cursorDot.style.top = mouseY + "px";

          document.documentElement.style.setProperty("--spot-x", mouseX + "px");
          document.documentElement.style.setProperty("--spot-y", mouseY + "px");
        });

        function animateRing() {
          ringX += (mouseX - ringX) * 0.14;
          ringY += (mouseY - ringY) * 0.14;
          cursorRing.style.left = ringX + "px";
          cursorRing.style.top = ringY + "px";
          requestAnimationFrame(animateRing);
        }

        animateRing();

        document.querySelectorAll("a, button, [data-tilt]").forEach(function (el) {
          el.addEventListener("mouseenter", function () {
            document.body.classList.add("cursor-active");
          });
          el.addEventListener("mouseleave", function () {
            document.body.classList.remove("cursor-active");
          });
        });
      } else {
        if (cursorDot) cursorDot.style.display = "none";
        if (cursorRing) cursorRing.style.display = "none";
        if (spotlight) spotlight.style.display = "none";
      }

      /* =====================================================
         NAV + PROGRESS
      ===================================================== */
      var nav = document.getElementById("main-nav");
      var progress = document.getElementById("scroll-progress");

      function updateScrollUI() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        progress.style.width = percent + "%";
        nav.classList.toggle("scrolled", scrollTop > 24);
      }

      updateScrollUI();
      window.addEventListener("scroll", updateScrollUI, { passive: true });

      /* =====================================================
         MOBILE NAV
      ===================================================== */
      var mobileNav = document.getElementById("mobile-nav");
      var mobileOpen = document.getElementById("hamburger-btn");
      var mobileClose = document.getElementById("mobile-close");

      function closeMobileNav() {
        mobileNav.classList.remove("open");
        document.body.classList.remove("menu-open");
      }

      function openMobileNav() {
        mobileNav.classList.add("open");
        document.body.classList.add("menu-open");
      }

      if (mobileOpen) {
        mobileOpen.addEventListener("click", openMobileNav);
      }

      if (mobileClose) {
        mobileClose.addEventListener("click", closeMobileNav);
      }

      mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileNav);
      });

      /* =====================================================
         TYPING EFFECT
      ===================================================== */
      var typedEl = document.getElementById("typed-text");
      var phrases = [
        "Designing AWS systems with editorial precision",
        "Automating infrastructure through Terraform and CI/CD",
        "Hardening cloud environments with least-privilege security",
        "Turning technical architecture into polished execution",
        "Building resilient systems with beauty and discipline"
      ];

      if (typedEl) {
        if (reducedMotion) {
          typedEl.textContent = phrases[0];
        } else {
          var phraseIndex = 0;
          var charIndex = 0;
          var deleting = false;

          function typeLoop() {
            var current = phrases[phraseIndex];

            if (!deleting) {
              typedEl.textContent = current.substring(0, charIndex + 1);
              charIndex++;

              if (charIndex === current.length) {
                deleting = true;
                setTimeout(typeLoop, 1800);
                return;
              }

              setTimeout(typeLoop, 48);
            } else {
              typedEl.textContent = current.substring(0, charIndex - 1);
              charIndex--;

              if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeLoop, 300);
                return;
              }

              setTimeout(typeLoop, 26);
            }
          }

          setTimeout(typeLoop, 1200);
        }
      }

      /* =====================================================
         REVEAL ON SCROLL
      ===================================================== */
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          entry.target.querySelectorAll("[data-progress]").forEach(function (bar) {
            var w = bar.getAttribute("data-progress");
            bar.style.width = w + "%";
          });

          revealObserver.unobserve(entry.target);
        });
      }, {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
      });

      document.querySelectorAll(".reveal").forEach(function (item) {
        revealObserver.observe(item);
      });

      /* =====================================================
         COUNTERS
      ===================================================== */
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var el = entry.target;
          var target = parseInt(el.getAttribute("data-count") || "0", 10);
          var current = 0;
          var steps = 44;
          var increment = target / steps;

          var timer = setInterval(function () {
            current += increment;

            if (current >= target) {
              el.textContent = target + "+";
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toString();
            }
          }, 28);

          counterObserver.unobserve(el);
        });
      }, {
        threshold: 0.5
      });

      document.querySelectorAll("[data-count]").forEach(function (counter) {
        counterObserver.observe(counter);
      });

      /* =====================================================
         TILT CARDS + GLOW FOLLOW
      ===================================================== */
      if (!reducedMotion) {
        document.querySelectorAll("[data-tilt]").forEach(function (card) {
          card.addEventListener("mousemove", function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var rotateX = ((y - rect.height / 2) / rect.height) * -12;
            var rotateY = ((x - rect.width / 2) / rect.width) * 14;

            card.style.setProperty("--rx", rotateX + "deg");
            card.style.setProperty("--ry", rotateY + "deg");
            card.style.setProperty("--mx", (x / rect.width) * 100 + "%");
            card.style.setProperty("--my", (y / rect.height) * 100 + "%");
          });

          card.addEventListener("mouseleave", function () {
            card.style.setProperty("--rx", "0deg");
            card.style.setProperty("--ry", "0deg");
            card.style.setProperty("--mx", "50%");
            card.style.setProperty("--my", "50%");
          });
        });
      }

      /* =====================================================
         HERO 3D PARALLAX
      ===================================================== */
      var heroStage = document.getElementById("hero-stage");

      if (heroStage && !reducedMotion && isFinePointer) {
        heroStage.addEventListener("mousemove", function (e) {
          var rect = heroStage.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;

          var rotateY = ((x - rect.width / 2) / rect.width) * 18;
          var rotateX = ((y - rect.height / 2) / rect.height) * -16;

          heroStage.style.transform =
            "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        });

        heroStage.addEventListener("mouseleave", function () {
          heroStage.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
      }

      /* =====================================================
         MAGNETIC BUTTONS
      ===================================================== */
      if (!reducedMotion && isFinePointer) {
        document.querySelectorAll(".magnetic").forEach(function (btn) {
          btn.addEventListener("mousemove", function (e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;

            btn.style.setProperty("--tx", x * 0.12 + "px");
            btn.style.setProperty("--ty", y * 0.12 + "px");
          });

          btn.addEventListener("mouseleave", function () {
            btn.style.setProperty("--tx", "0px");
            btn.style.setProperty("--ty", "0px");
          });
        });
      }

      /* =====================================================
         ACTIVE SECTION RAIL
      ===================================================== */
      var railLinks = document.querySelectorAll(".rail-link");
      var sectionMap = {};

      railLinks.forEach(function (link) {
        var id = link.getAttribute("href");
        if (!id) return;
        var section = document.querySelector(id);
        if (section) {
          sectionMap[id] = link;
        }
      });

      var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;

          railLinks.forEach(function (link) {
            link.classList.remove("active");
          });

          if (sectionMap[id]) {
            sectionMap[id].classList.add("active");
          }
        });
      }, {
        threshold: 0.45
      });

      Object.keys(sectionMap).forEach(function (id) {
        var section = document.querySelector(id);
        if (section) sectionObserver.observe(section);
      });

      /* =====================================================
         PREMIUM CANVAS BACKGROUND
      ===================================================== */
      var canvas = document.getElementById("scene-canvas");
      var ctx = canvas.getContext("2d");

      if (canvas && ctx && !reducedMotion) {
        var width = 0;
        var height = 0;
        var particles = [];
        var particleCount = window.innerWidth < 768 ? 44 : 86;
        var mouse = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };

        function resizeCanvas() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        }

        function Particle() {
          this.reset();
        }

        Particle.prototype.reset = function () {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.22;
          this.vy = (Math.random() - 0.5) * 0.22;
          this.radius = Math.random() * 1.6 + 0.4;
          this.alpha = Math.random() * 0.35 + 0.08;
          this.tint = Math.random() > 0.78 ? "244,207,122" : "0,212,255";
        };

        Particle.prototype.update = function () {
          var dx = mouse.x - this.x;
          var dy = mouse.y - this.y;
          var dist = Math.sqrt(dx * dx + dy * dy) || 1;
          var force = Math.max(0, 140 - dist) / 140;

          this.x += this.vx - (dx / dist) * force * 0.02;
          this.y += this.vy - (dy / dist) * force * 0.02;

          if (this.x < -20) this.x = width + 20;
          if (this.x > width + 20) this.x = -20;
          if (this.y < -20) this.y = height + 20;
          if (this.y > height + 20) this.y = -20;
        };

        Particle.prototype.draw = function () {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + this.tint + "," + this.alpha + ")";
          ctx.fill();
        };

        function initParticles() {
          particles = [];
          for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
          }
        }

        function drawConnections() {
          for (var a = 0; a < particles.length; a++) {
            for (var b = a + 1; b < particles.length; b++) {
              var dx = particles[a].x - particles[b].x;
              var dy = particles[a].y - particles[b].y;
              var dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = "rgba(124,231,255," + (0.07 * (1 - dist / 120)) + ")";
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            }
          }
        }

        function drawMouseAura() {
          var gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
          gradient.addColorStop(0, "rgba(0,212,255,0.08)");
          gradient.addColorStop(0.45, "rgba(0,212,255,0.02)");
          gradient.addColorStop(1, "rgba(0,212,255,0)");
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
          ctx.fill();
        }

        function animateCanvas() {
          ctx.clearRect(0, 0, width, height);

          drawMouseAura();

          particles.forEach(function (p) {
            p.update();
            p.draw();
          });

          drawConnections();
          requestAnimationFrame(animateCanvas);
        }

        resizeCanvas();
        initParticles();
        animateCanvas();

        window.addEventListener("resize", function () {
          particleCount = window.innerWidth < 768 ? 44 : 86;
          resizeCanvas();
          initParticles();
        });

        window.addEventListener("mousemove", function (e) {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
        }, { passive: true });
      } else if (canvas) {
        canvas.style.display = "none";
      }
    })();
  </script>
</body>
</html>`;
  }
}