import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHtml(): string {
    return String.raw`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#05060a" />
  <meta name="description" content="MUQADDAM — Cloud & DevOps Engineer from Karachi, Pakistan. AWS, Terraform, Docker, CI/CD, and premium cloud architecture portfolio." />
  <meta name="keywords" content="Cloud Engineer, DevOps, AWS, Terraform, Docker, Karachi, Pakistan, Portfolio" />
  <meta name="author" content="Muqaddam" />
  <meta property="og:title" content="MUQADDAM — Cloud & DevOps Engineer" />
  <meta property="og:description" content="Luxury-grade portfolio website with cinematic motion, 3D cards, and premium cloud engineering showcase." />
  <meta property="og:type" content="website" />
  <title>MUQADDAM — Cloud & DevOps Engineer</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <style>
    :root {
      --bg: #05060a;
      --bg2: #090b12;
      --bg3: #10131d;
      --card: rgba(255, 255, 255, 0.05);
      --card-strong: rgba(255, 255, 255, 0.08);
      --line: rgba(255, 255, 255, 0.1);
      --text: rgba(255, 255, 255, 0.96);
      --muted: rgba(255, 255, 255, 0.68);
      --soft: rgba(255, 255, 255, 0.45);
      --blue: #55d6ff;
      --blue2: #1f9dff;
      --gold: #f2c96b;
      --gold2: #ffdf9e;
      --purple: #ab7bff;
      --green: #6cf0b0;
      --shadow-blue: rgba(85, 214, 255, 0.26);
      --shadow-gold: rgba(242, 201, 107, 0.24);
      --shadow-white: rgba(255, 255, 255, 0.08);
      --radius-sm: 14px;
      --radius: 22px;
      --radius-lg: 30px;
      --radius-xl: 40px;
      --max: 1320px;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      background:
        radial-gradient(circle at 15% 15%, rgba(85, 214, 255, 0.12), transparent 25%),
        radial-gradient(circle at 85% 18%, rgba(242, 201, 107, 0.1), transparent 22%),
        radial-gradient(circle at 50% 85%, rgba(171, 123, 255, 0.1), transparent 28%),
        linear-gradient(180deg, #04050a 0%, #060810 45%, #04050a 100%);
      color: var(--text);
      overflow-x: hidden;
      line-height: 1.6;
      cursor: none;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
    }

    a, button { cursor: none; }
    ::selection { background: rgba(85, 214, 255, 0.25); color: white; }
    ::-webkit-scrollbar { width: 4px; height: 4px; }
    ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--blue), var(--gold)); border-radius: 999px; }
    ::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); }

    #cursor-dot,
    #cursor-ring,
    #cursor-glow {
      position: fixed;
      top: 0; left: 0;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    }
    #cursor-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      box-shadow: 0 0 16px rgba(85,214,255,0.8), 0 0 32px rgba(242,201,107,0.35);
      mix-blend-mode: screen;
    }
    #cursor-ring {
      width: 42px; height: 42px; border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.35);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      opacity: 0.8;
    }
    #cursor-glow {
      width: 180px; height: 180px; border-radius: 50%;
      background: radial-gradient(circle, rgba(85,214,255,0.12) 0%, rgba(85,214,255,0.04) 35%, transparent 70%);
      filter: blur(14px);
      opacity: 0.7;
    }
    body.cursor-expand #cursor-ring { width: 68px; height: 68px; border-color: rgba(242,201,107,0.8); }
    body.cursor-expand #cursor-dot { transform: translate(-50%, -50%) scale(1.7); }

    .ambient,
    .grid,
    .noise,
    #particles {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    .ambient {
      overflow: hidden;
    }
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.13;
      transform: translateZ(0);
    }
    .orb.one {
      width: 760px; height: 760px;
      top: -12%; left: -14%;
      background: radial-gradient(circle, rgba(85,214,255,0.8), transparent 68%);
      animation: driftOne 20s ease-in-out infinite;
    }
    .orb.two {
      width: 620px; height: 620px;
      bottom: -16%; right: -10%;
      background: radial-gradient(circle, rgba(242,201,107,0.8), transparent 70%);
      animation: driftTwo 24s ease-in-out infinite;
    }
    .orb.three {
      width: 500px; height: 500px;
      top: 28%; left: 43%;
      background: radial-gradient(circle, rgba(171,123,255,0.8), transparent 72%);
      animation: driftThree 28s ease-in-out infinite;
      opacity: 0.08;
    }
    @keyframes driftOne { 0%,100%{ transform: translate(0,0) scale(1);} 40%{ transform: translate(95px,70px) scale(1.1);} 70%{ transform: translate(-45px,100px) scale(0.95);} }
    @keyframes driftTwo { 0%,100%{ transform: translate(0,0) scale(1);} 35%{ transform: translate(-85px,-50px) scale(1.08);} 70%{ transform: translate(30px,-80px) scale(0.93);} }
    @keyframes driftThree { 0%,100%{ transform: translate(0,0) scale(1);} 50%{ transform: translate(65px,-50px) scale(1.22);} }

    .grid {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 64px 64px;
      mask-image: radial-gradient(circle at center, black 32%, transparent 82%);
      opacity: 0.55;
      z-index: 1;
    }
    .noise {
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 256px;
      z-index: 2;
    }

    .progress-bar {
      position: fixed;
      top: 0; left: 0;
      height: 2px;
      width: 0;
      z-index: 10001;
      background: linear-gradient(90deg, var(--blue), var(--gold));
      box-shadow: 0 0 20px rgba(85,214,255,0.45);
    }

    .wrap {
      position: relative;
      z-index: 3;
    }

    nav {
      position: fixed;
      inset: 0 0 auto 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.6rem 5rem;
      transition: padding 0.35s ease, background 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
    }
    nav.scrolled {
      padding-top: 0.95rem;
      padding-bottom: 0.95rem;
      background: rgba(5,6,10,0.72);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.85rem;
      text-decoration: none;
      color: white;
      font-weight: 800;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-family: 'Space Grotesk', sans-serif;
    }
    .brand-mark {
      width: 44px; height: 44px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      background: linear-gradient(145deg, rgba(85,214,255,0.14), rgba(242,201,107,0.08));
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 50px rgba(0,0,0,0.25);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .brand-mark span {
      font-size: 0.88rem;
      font-weight: 900;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2.1rem;
      list-style: none;
    }
    .nav-links a {
      text-decoration: none;
      color: var(--muted);
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 600;
      position: relative;
      transition: color 0.25s ease, transform 0.25s ease;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      left: 0; bottom: -7px;
      height: 1px; width: 0;
      background: linear-gradient(90deg, var(--blue), var(--gold));
      transition: width 0.28s ease;
    }
    .nav-links a:hover { color: white; transform: translateY(-1px); }
    .nav-links a:hover::after { width: 100%; }
    .nav-cta {
      padding: 0.9rem 1.35rem;
      border-radius: 999px;
      background: linear-gradient(135deg, rgba(85,214,255,0.95), rgba(31,157,255,0.9));
      color: #041019 !important;
      box-shadow: 0 10px 40px rgba(85,214,255,0.2), 0 0 0 1px rgba(255,255,255,0.08) inset;
    }
    .nav-cta::after { display: none; }

    .burger {
      display: none;
      width: 48px; height: 48px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      align-items: center; justify-content: center;
      gap: 4px; flex-direction: column;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .burger span { width: 18px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 99px; }

    .mobile-nav {
      position: fixed;
      inset: 0;
      z-index: 999;
      display: grid;
      place-items: center;
      gap: 1.5rem;
      background: rgba(5,6,10,0.96);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      opacity: 0;
      pointer-events: none;
      transform: scale(1.03);
      transition: opacity 0.35s ease, transform 0.35s ease;
    }
    .mobile-nav.open {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1);
    }
    .mobile-nav a {
      font-family: 'Space Grotesk', sans-serif;
      text-decoration: none;
      color: rgba(255,255,255,0.82);
      font-size: clamp(1.8rem, 7vw, 3.7rem);
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .mobile-close {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      width: 52px; height: 52px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      color: white;
      font-size: 1.1rem;
    }

    .section {
      width: min(calc(100% - 2rem), var(--max));
      margin: 0 auto;
      padding: 0 0 8.5rem;
      position: relative;
    }
    .hero {
      min-height: 100svh;
      padding: 8.5rem 0 4.5rem;
      display: grid;
      place-items: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-shell {
      position: relative;
      width: min(100%, 1100px);
      padding: 3.5rem 1rem 2rem;
      perspective: 1600px;
    }
    .hero-panel {
      position: relative;
      border-radius: 36px;
      padding: clamp(2rem, 5vw, 4rem);
      background:
        linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
        radial-gradient(circle at 50% 0%, rgba(85,214,255,0.14), transparent 38%),
        radial-gradient(circle at 100% 100%, rgba(242,201,107,0.1), transparent 28%);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow:
        0 30px 120px rgba(0,0,0,0.45),
        inset 0 1px 0 rgba(255,255,255,0.12),
        0 0 0 1px rgba(255,255,255,0.02) inset;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      transform-style: preserve-3d;
      transform: rotateX(0deg) rotateY(0deg);
      transition: transform 0.2s ease;
      overflow: hidden;
    }
    .hero-panel::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.14) 20%, transparent 36%),
        linear-gradient(300deg, transparent 0%, rgba(85,214,255,0.04) 32%, transparent 60%);
      opacity: 0.45;
      pointer-events: none;
      mix-blend-mode: screen;
      transform: translateZ(1px);
    }
    .hero-panel::after {
      content: '';
      position: absolute;
      inset: 1px;
      border-radius: 35px;
      border: 1px solid rgba(255,255,255,0.06);
      pointer-events: none;
    }

    .hero-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.55rem 1rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.72);
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 2.1rem;
    }
    .pulse {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 18px rgba(108,240,176,0.65);
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse { 0%,100%{ transform: scale(1); opacity: 1; } 50%{ transform: scale(0.7); opacity: 0.55; } }

    .eyebrow-line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
      color: rgba(255,255,255,0.56);
      text-transform: uppercase;
      letter-spacing: 0.24em;
      font-size: 0.72rem;
      font-weight: 700;
    }
    .eyebrow-line::before,
    .eyebrow-line::after {
      content: '';
      width: 48px; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(85,214,255,0.8), transparent);
    }

    h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3.7rem, 11vw, 10rem);
      line-height: 0.92;
      letter-spacing: -0.08em;
      font-weight: 800;
      margin-bottom: 1.15rem;
      background: linear-gradient(135deg, #ffffff 0%, #e9f9ff 16%, var(--blue) 42%, var(--gold) 72%, #ffffff 100%);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 7s ease-in-out infinite;
      transform: translateZ(48px);
    }
    @keyframes gradientShift {
      0%,100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .title-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .title-row .line {
      width: 42px; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
    }
    .title-row span {
      font-size: 0.84rem;
      color: rgba(255,255,255,0.66);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .typed {
      min-height: 1.8em;
      font-size: clamp(0.98rem, 2vw, 1.22rem);
      color: rgba(255,255,255,0.68);
      margin-bottom: 1.2rem;
    }
    .typed strong { color: var(--blue); }
    .caret {
      display: inline-block;
      width: 2px;
      height: 1.1em;
      vertical-align: middle;
      margin-left: 3px;
      background: linear-gradient(180deg, var(--blue), var(--gold));
      animation: blink 1s steps(1) infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }

    .subcopy {
      max-width: 760px;
      margin: 0 auto 2rem;
      font-size: clamp(1.02rem, 2vw, 1.18rem);
      color: rgba(255,255,255,0.72);
      line-height: 1.95;
    }
    .subcopy em { color: white; font-style: normal; }

    .hero-meta {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.9rem;
      margin-bottom: 2.2rem;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.62rem 0.98rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.72);
      font-size: 0.82rem;
      white-space: nowrap;
    }
    .chip i { color: var(--blue); }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2.8rem;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      border: 0;
      border-radius: 999px;
      padding: 1rem 1.4rem;
      text-decoration: none;
      font-size: 0.82rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 700;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
      will-change: transform;
    }
    .btn:hover { transform: translateY(-4px); }
    .btn-primary {
      color: #03131b;
      background: linear-gradient(135deg, rgba(85,214,255,1), rgba(31,157,255,1));
      box-shadow: 0 16px 50px rgba(85,214,255,0.25);
    }
    .btn-primary:hover { box-shadow: 0 24px 70px rgba(85,214,255,0.32); }
    .btn-secondary {
      color: white;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.09);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .btn-secondary:hover { border-color: rgba(85,214,255,0.35); box-shadow: 0 0 0 1px rgba(85,214,255,0.08) inset; }
    .btn-gold {
      color: #1b1202;
      background: linear-gradient(135deg, rgba(242,201,107,1), rgba(255,223,158,1));
      box-shadow: 0 16px 50px rgba(242,201,107,0.18);
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .stat {
      padding: 1.2rem 1rem;
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      text-align: center;
      transform: translateZ(20px);
    }
    .stat .n {
      font-size: clamp(1.7rem, 3vw, 2.2rem);
      font-weight: 800;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
      margin-bottom: 0.2rem;
    }
    .stat .l {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: rgba(255,255,255,0.52);
    }

    .scroll-indicator {
      margin-top: 2.4rem;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      color: rgba(255,255,255,0.45);
      font-size: 0.64rem;
      text-transform: uppercase;
      letter-spacing: 0.28em;
    }
    .scroll-indicator .bar {
      width: 1px; height: 62px;
      background: linear-gradient(to bottom, var(--blue), transparent);
      animation: scrollLine 2.1s ease-in-out infinite;
    }
    @keyframes scrollLine {
      0% { transform: scaleY(0.3); transform-origin: top; opacity: 0.4; }
      50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
      51% { transform-origin: bottom; }
      100% { transform: scaleY(0.3); transform-origin: bottom; opacity: 0.4; }
    }

    .floating-shape {
      position: absolute;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 16px 60px rgba(0,0,0,0.25);
      transform-style: preserve-3d;
    }
    .shape-a {
      width: 92px; height: 92px;
      top: 10%; right: 5%;
      animation: floatA 11s ease-in-out infinite;
      perspective: 900px;
    }
    .shape-a::before,
    .shape-b::before,
    .shape-c::before {
      content: '';
      position: absolute; inset: 12px;
      border-radius: inherit;
      border: 1px solid rgba(85,214,255,0.18);
    }
    .shape-a .inner {
      position: absolute; inset: 14px;
      border-radius: 18px;
      background: radial-gradient(circle at 30% 30%, rgba(85,214,255,0.16), rgba(85,214,255,0.03));
      transform: translateZ(28px) rotate(8deg);
    }
    .shape-b {
      width: 64px; height: 64px;
      bottom: 18%; left: 6%;
      transform: rotate(45deg);
      animation: floatB 13s ease-in-out infinite;
    }
    .shape-c {
      width: 46px; height: 46px;
      top: 16%; left: 7%;
      border-radius: 50%;
      animation: floatC 12s ease-in-out infinite;
    }
    .shape-c::before { border-radius: 50%; }
    @keyframes floatA { 0%,100%{ transform: translateY(0) rotateX(0deg) rotateY(0deg);} 50%{ transform: translateY(-18px) rotateX(18deg) rotateY(22deg);} }
    @keyframes floatB { 0%,100%{ transform: translateY(0) rotate(45deg);} 50%{ transform: translateY(-16px) rotate(60deg);} }
    @keyframes floatC { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(14px);} }

    .marquee {
      position: relative;
      z-index: 3;
      border-top: 1px solid rgba(255,255,255,0.08);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      overflow: hidden;
      background: linear-gradient(90deg, rgba(5,6,10,1), rgba(5,6,10,0.4), rgba(5,6,10,1));
    }
    .marquee-track {
      display: flex;
      gap: 0.9rem;
      width: max-content;
      padding: 1rem 0;
      animation: marquee 30s linear infinite;
    }
    .marquee:hover .marquee-track { animation-play-state: paused; }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      white-space: nowrap;
      padding: 0.55rem 1rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.72);
      font-size: 0.8rem;
      letter-spacing: 0.04em;
    }
    .pill i { color: var(--blue); }
    .pill .gold { color: var(--gold); }

    .section-head {
      position: relative;
      margin-bottom: 3rem;
      padding-top: 0.6rem;
    }
    .section-no {
      position: absolute;
      top: -1rem; right: 0;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 800;
      font-size: clamp(5rem, 14vw, 12rem);
      color: rgba(255,255,255,0.015);
      user-select: none;
      pointer-events: none;
      line-height: 1;
    }
    .section-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--blue);
      margin-bottom: 1rem;
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .section-kicker::before {
      content: '';
      width: 34px; height: 1px;
      background: linear-gradient(90deg, var(--blue), transparent);
    }
    .section-kicker.show,
    .section-title.show,
    .section-subtitle.show,
    .reveal.show {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.3rem, 5vw, 4.4rem);
      line-height: 1.05;
      letter-spacing: -0.05em;
      margin-bottom: 1rem;
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s;
    }
    .section-title .accent {
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .section-subtitle {
      max-width: 680px;
      color: var(--muted);
      font-size: 1.03rem;
      line-height: 1.9;
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.55s ease 0.18s, transform 0.55s ease 0.18s;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 2rem;
      align-items: center;
    }
    .portrait-stage {
      perspective: 1400px;
      display: grid;
      place-items: center;
    }
    .portrait {
      position: relative;
      width: min(100%, 370px);
      min-height: 500px;
      border-radius: 34px;
      padding: 2rem;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
        radial-gradient(circle at 30% 20%, rgba(85,214,255,0.14), transparent 35%),
        radial-gradient(circle at 80% 100%, rgba(242,201,107,0.1), transparent 35%);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 30px 90px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      transform-style: preserve-3d;
      overflow: hidden;
    }
    .portrait::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.12) 35%, transparent 50%);
      opacity: 0.5;
      pointer-events: none;
    }
    .portrait-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.4rem;
      color: rgba(255,255,255,0.7);
      font-size: 0.76rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .portrait-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.5rem 0.75rem;
      border-radius: 999px;
      background: rgba(0,255,136,0.08);
      border: 1px solid rgba(0,255,136,0.18);
      color: var(--green);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    .avatar {
      width: 94px; height: 94px;
      border-radius: 28px;
      display: grid;
      place-items: center;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      color: #061019;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      box-shadow: 0 14px 50px rgba(85,214,255,0.25);
      margin-bottom: 1rem;
    }
    .portrait h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      line-height: 1.05;
      margin-bottom: 0.4rem;
    }
    .portrait p {
      color: var(--muted);
      margin-bottom: 1.4rem;
      line-height: 1.85;
      font-size: 0.98rem;
    }
    .portrait-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.8rem;
      margin-top: 1.1rem;
    }
    .mini-card {
      padding: 0.95rem 0.9rem;
      border-radius: 18px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
    }
    .mini-card .v {
      display: block;
      font-weight: 800;
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
      background: linear-gradient(135deg, var(--blue), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .mini-card .k {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: rgba(255,255,255,0.5);
    }

    .content-card {
      padding: 1.8rem;
      border-radius: 30px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 18px 60px rgba(0,0,0,0.22);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .content-card h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.5rem, 3vw, 2.1rem);
      margin-bottom: 1rem;
      line-height: 1.15;
    }
    .content-card p {
      color: var(--muted);
      font-size: 1.01rem;
      line-height: 1.95;
      margin-bottom: 1rem;
    }
    .list-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
      margin: 1.5rem 0;
    }
    .list-item {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      color: rgba(255,255,255,0.78);
      font-size: 0.9rem;
      padding: 0.8rem 0.9rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
    }
    .list-item i { color: var(--blue); margin-top: 0.2rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-top: 1.2rem; }
    .tag {
      padding: 0.45rem 0.8rem;
      border-radius: 999px;
      background: rgba(85,214,255,0.08);
      border: 1px solid rgba(85,214,255,0.16);
      color: var(--blue);
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.06em;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    .glass-card {
      position: relative;
      padding: 1.5rem;
      border-radius: 24px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      overflow: hidden;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      opacity: 0;
      transform: translateY(24px);
    }
    .glass-card:hover {
      transform: translateY(-8px);
      border-color: rgba(85,214,255,0.22);
      box-shadow: 0 18px 50px rgba(0,0,0,0.26), 0 0 0 1px rgba(85,214,255,0.04) inset;
    }
    .glass-card .topline {
      width: 100%; height: 2px;
      background: linear-gradient(90deg, transparent, var(--blue), var(--gold), transparent);
      opacity: 0.7;
      margin-bottom: 1.1rem;
    }
    .glass-card .icon {
      width: 52px; height: 52px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      margin-bottom: 1rem;
      background: rgba(85,214,255,0.08);
      border: 1px solid rgba(85,214,255,0.15);
      color: var(--blue);
      font-size: 1.25rem;
    }
    .glass-card h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.08rem;
      margin-bottom: 0.85rem;
    }
    .glass-card p {
      color: var(--muted);
      line-height: 1.85;
      font-size: 0.94rem;
    }
    .skill-row { margin-top: 1rem; }
    .skill-head { display: flex; justify-content: space-between; gap: 1rem; margin-bottom: 0.4rem; }
    .skill-name { color: rgba(255,255,255,0.74); font-size: 0.84rem; }
    .skill-value { color: var(--blue); font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; }
    .track {
      width: 100%; height: 4px;
      background: rgba(255,255,255,0.08);
      border-radius: 99px;
      overflow: hidden;
    }
    .fill {
      height: 100%; width: 0;
      border-radius: 99px;
      background: linear-gradient(90deg, var(--blue), var(--gold));
      box-shadow: 0 0 18px rgba(85,214,255,0.2);
      transition: width 1.6s cubic-bezier(0.2,0.8,0.2,1);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
    .project {
      position: relative;
      padding: 1.7rem;
      border-radius: 28px;
      background:
        radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(85,214,255,0.08), transparent 36%),
        rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      overflow: hidden;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      opacity: 0;
      transform: translateY(28px);
      transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
      transform-style: preserve-3d;
    }
    .project:hover {
      border-color: rgba(85,214,255,0.2);
      box-shadow: 0 28px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.04) inset;
    }
    .project::before {
      content: '';
      position: absolute;
      inset: 0 auto auto 0;
      width: 100%; height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--gold));
      opacity: 0.8;
    }
    .project .num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 3.8rem;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 0.8rem;
      background: linear-gradient(180deg, rgba(85,214,255,0.16), rgba(255,255,255,0.02));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .project h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      line-height: 1.25;
      margin-bottom: 0.7rem;
    }
    .project p {
      color: var(--muted);
      line-height: 1.9;
      font-size: 0.93rem;
      margin-bottom: 1rem;
    }
    .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
    .project-tag {
      padding: 0.33rem 0.7rem;
      border-radius: 999px;
      background: rgba(242,201,107,0.08);
      border: 1px solid rgba(242,201,107,0.14);
      color: var(--gold2);
      font-size: 0.72rem;
      font-weight: 700;
    }
    .project-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.56);
      font-size: 0.76rem;
    }
    .project-link {
      color: var(--blue);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-weight: 700;
    }
    .project-link:hover i { transform: translateX(3px); }

    .roadmap {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    .step {
      padding: 1.5rem;
      border-radius: 24px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      opacity: 0;
      transform: translateY(24px);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
    }
    .step .i {
      width: 54px; height: 54px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      background: rgba(242,201,107,0.08);
      border: 1px solid rgba(242,201,107,0.14);
      color: var(--gold);
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .step h4 {
      font-family: 'Space Grotesk', sans-serif;
      margin-bottom: 0.5rem;
      font-size: 1.02rem;
    }
    .step p { color: var(--muted); font-size: 0.92rem; line-height: 1.86; }

    .contact {
      text-align: center;
      max-width: 780px;
      margin: 0 auto;
    }
    .email {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      margin: 2rem 0 1.25rem;
      padding: 1rem 1.35rem;
      border-radius: 999px;
      text-decoration: none;
      color: white;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 18px 70px rgba(0,0,0,0.18);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.94rem;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .contact-card {
      padding: 1.6rem;
      border-radius: 24px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      text-decoration: none;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.85rem;
      opacity: 0;
      transform: translateY(22px);
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    }
    .contact-card:hover {
      transform: translateY(-6px);
      border-color: rgba(85,214,255,0.22);
      box-shadow: 0 18px 50px rgba(0,0,0,0.2);
    }
    .contact-card .ic {
      width: 60px; height: 60px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(85,214,255,0.08);
      border: 1px solid rgba(85,214,255,0.14);
      color: var(--blue);
      font-size: 1.2rem;
    }
    .contact-card .lab {
      color: rgba(255,255,255,0.5);
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
    .contact-card .val {
      font-weight: 700;
      color: rgba(255,255,255,0.92);
    }
    .meta {
      margin-top: 1.8rem;
      color: rgba(255,255,255,0.45);
      font-size: 0.82rem;
    }

    footer {
      width: min(calc(100% - 2rem), var(--max));
      margin: 0 auto;
      padding: 1.4rem 0 2.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.5);
      font-size: 0.82rem;
    }
    footer strong {
      color: white;
      font-weight: 700;
    }

    .hero-fade {
      position: absolute;
      inset: auto 0 0 0;
      height: 180px;
      background: linear-gradient(to bottom, transparent, rgba(5,6,10,0.85), rgba(5,6,10,1));
      pointer-events: none;
      z-index: 4;
    }

    @media (max-width: 1080px) {
      nav { padding-left: 2rem; padding-right: 2rem; }
      .hero { padding-top: 7.2rem; }
      .about-grid,
      .projects-grid,
      .roadmap,
      .cards-grid {
        grid-template-columns: 1fr;
      }
      .hero-stats { grid-template-columns: 1fr; }
      .section-no { right: 0.2rem; }
    }

    @media (max-width: 760px) {
      .nav-links { display: none; }
      .burger { display: inline-flex; }
      .shape-a, .shape-b, .shape-c { display: none; }
      .hero-panel { padding: 1.5rem 1rem 1.2rem; border-radius: 28px; }
      .btn { width: 100%; justify-content: center; }
      .cta-row { width: 100%; }
      .portrait-grid, .list-grid, .contact-grid { grid-template-columns: 1fr; }
      footer { flex-direction: column; align-items: flex-start; }
      body { cursor: auto; }
      a, button { cursor: pointer; }
      #cursor-dot, #cursor-ring, #cursor-glow { display: none !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
        scroll-behavior: auto !important;
      }
    }
  </style>
</head>
<body>
  <div class="progress-bar" id="progressBar"></div>
  <div id="cursor-glow"></div>
  <div id="cursor-ring"></div>
  <div id="cursor-dot"></div>

  <div class="ambient">
    <div class="orb one"></div>
    <div class="orb two"></div>
    <div class="orb three"></div>
  </div>
  <div class="grid"></div>
  <div class="noise"></div>
  <canvas id="particles"></canvas>

  <nav id="nav">
    <a href="#hero" class="brand">
      <div class="brand-mark"><span>MQ</span></div>
      MUQADDAM
    </a>

    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#process">Process</a></li>
      <li><a href="#contact" class="nav-cta">Hire Me</a></li>
    </ul>

    <button class="burger" id="openMenu" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mobile-nav" id="mobileNav">
    <button class="mobile-close" id="closeMenu" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#process">Process</a>
    <a href="#contact">Contact</a>
  </div>

  <div class="wrap">
    <section class="hero" id="hero">
      <div class="floating-shape shape-a"><div class="inner"></div></div>
      <div class="floating-shape shape-b"></div>
      <div class="floating-shape shape-c"></div>
      <div class="hero-shell">
        <div class="hero-panel" id="heroPanel">
          <div class="hero-kicker"><span class="pulse"></span> Available for select opportunities</div>
          <div class="eyebrow-line">Premium Cloud Portfolio</div>
          <h1>MUQADDAM</h1>
          <div class="title-row"><span class="line"></span><span>Cloud &amp; DevOps Engineer</span><span class="line"></span></div>
          <div class="typed"><strong id="typed"></strong><span class="caret"></span></div>
          <p class="subcopy">
            I design <em>high-performance AWS infrastructure</em>, containerize apps with precision, and build deployment systems that feel engineered, not assembled.
          </p>

          <div class="hero-meta">
            <div class="chip"><i class="fa-solid fa-location-dot"></i> Karachi, Pakistan</div>
            <div class="chip"><i class="fa-solid fa-shield-halved"></i> Security-first</div>
            <div class="chip"><i class="fa-solid fa-bolt"></i> Fast delivery</div>
            <div class="chip"><i class="fa-brands fa-aws"></i> AWS native</div>
          </div>

          <div class="cta-row">
            <a href="#projects" class="btn btn-primary"><i class="fa-solid fa-rocket"></i> View Projects</a>
            <a href="#about" class="btn btn-secondary"><i class="fa-solid fa-user"></i> About Me</a>
            <a href="mailto:muqaddamhammad@gmail.com" class="btn btn-gold"><i class="fa-solid fa-envelope"></i> Get In Touch</a>
          </div>

          <div class="hero-stats">
            <div class="stat"><div class="n" data-count="15">0</div><div class="l">Years old</div></div>
            <div class="stat"><div class="n" data-count="5">0</div><div class="l">Core projects</div></div>
            <div class="stat"><div class="n" data-count="10">0</div><div class="l">AWS services</div></div>
          </div>

          <div class="scroll-indicator"><span>Scroll</span><div class="bar"></div></div>
        </div>
      </div>
      <div class="hero-fade"></div>
    </section>

    <div class="marquee">
      <div class="marquee-track" id="marqueeTrack">
        <span class="pill"><i class="fa-brands fa-aws"></i> AWS</span>
        <span class="pill"><i class="fa-brands fa-docker"></i> Docker</span>
        <span class="pill"><i class="fa-solid fa-code-branch gold"></i> Terraform</span>
        <span class="pill"><i class="fa-brands fa-github"></i> GitHub Actions</span>
        <span class="pill"><i class="fa-brands fa-linux"></i> Linux</span>
        <span class="pill"><i class="fa-solid fa-server"></i> EC2</span>
        <span class="pill"><i class="fa-solid fa-database gold"></i> RDS</span>
        <span class="pill"><i class="fa-solid fa-network-wired"></i> VPC</span>
        <span class="pill"><i class="fa-solid fa-shield-halved gold"></i> IAM</span>
        <span class="pill"><i class="fa-solid fa-bolt"></i> Lambda</span>
        <span class="pill"><i class="fa-solid fa-boxes-stacked gold"></i> S3</span>
        <span class="pill"><i class="fa-solid fa-globe"></i> CloudFront</span>
      </div>
    </div>

    <section class="section" id="about">
      <div class="section-head">
        <div class="section-no">01</div>
        <div class="section-kicker">About</div>
        <h2 class="section-title">Architecting cloud systems with <span class="accent">taste</span> and <span class="accent">discipline</span>.</h2>
        <p class="section-subtitle">I build infrastructure that looks elegant on the surface and behaves like a machine underneath: stable, secure, and deliberately over-engineered where it matters.</p>
      </div>

      <div class="about-grid">
        <div class="portrait-stage">
          <div class="portrait" id="portraitCard">
            <div class="portrait-top">
              <span>// profile</span>
              <span class="portrait-badge"><i class="fa-solid fa-circle"></i> open to work</span>
            </div>
            <div class="avatar">M</div>
            <h3>Muqaddam</h3>
            <p>Cloud &amp; DevOps Engineer from Karachi, focused on AWS, Terraform, Docker, CI/CD, and security-first infrastructure design.</p>
            <div class="portrait-grid">
              <div class="mini-card"><span class="v">15</span><span class="k">Age</span></div>
              <div class="mini-card"><span class="v">Karachi</span><span class="k">Location</span></div>
              <div class="mini-card"><span class="v">AWS</span><span class="k">Primary stack</span></div>
              <div class="mini-card"><span class="v">∞</span><span class="k">Curiosity</span></div>
            </div>
          </div>
        </div>

        <div class="content-card">
          <h3>Built to feel expensive. Built to work harder.</h3>
          <p>
            I am not just styling a portfolio. I am turning your engineering profile into a premium product page — the kind of site that feels like a luxury launch, not a generic résumé.
          </p>
          <p>
            The point is simple: when someone lands here, they should immediately assume you know what you are doing.
          </p>

          <div class="list-grid">
            <div class="list-item"><i class="fa-solid fa-circle-check"></i><span>Production-grade AWS architecture</span></div>
            <div class="list-item"><i class="fa-solid fa-circle-check"></i><span>Terraform infrastructure as code</span></div>
            <div class="list-item"><i class="fa-solid fa-circle-check"></i><span>Dockerized workflows and deployments</span></div>
            <div class="list-item"><i class="fa-solid fa-circle-check"></i><span>CI/CD with GitHub Actions</span></div>
            <div class="list-item"><i class="fa-solid fa-circle-check"></i><span>Security hardening and IAM design</span></div>
            <div class="list-item"><i class="fa-solid fa-circle-check"></i><span>Linux administration and troubleshooting</span></div>
          </div>

          <div class="tags">
            <span class="tag">AWS</span><span class="tag">Terraform</span><span class="tag">Docker</span><span class="tag">Linux</span><span class="tag">CI/CD</span><span class="tag">IAM</span><span class="tag">VPC</span><span class="tag">CloudFront</span><span class="tag">RDS</span><span class="tag">S3</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="section-head">
        <div class="section-no">02</div>
        <div class="section-kicker">Skills</div>
        <h2 class="section-title">A technical arsenal with <span class="accent">serious depth</span>.</h2>
        <p class="section-subtitle">This is the level of presentation that makes the engineering itself feel stronger, cleaner, and more believable.</p>
      </div>

      <div class="cards-grid">
        <div class="glass-card reveal">
          <div class="topline"></div>
          <div class="icon"><i class="fa-brands fa-aws" style="color: var(--gold)"></i></div>
          <h4>AWS Cloud Platform</h4>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">EC2 / Auto Scaling</span><span class="skill-value">90%</span></div><div class="track"><div class="fill" data-w="90"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">S3 / CloudFront</span><span class="skill-value">95%</span></div><div class="track"><div class="fill" data-w="95"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">RDS / DynamoDB</span><span class="skill-value">82%</span></div><div class="track"><div class="fill" data-w="82"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">IAM / Security</span><span class="skill-value">88%</span></div><div class="track"><div class="fill" data-w="88"></div></div></div>
        </div>

        <div class="glass-card reveal">
          <div class="topline"></div>
          <div class="icon"><i class="fa-brands fa-docker" style="color: var(--blue)"></i></div>
          <h4>Infrastructure &amp; Containers</h4>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">Terraform</span><span class="skill-value">85%</span></div><div class="track"><div class="fill" data-w="85"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">Docker / Compose</span><span class="skill-value">92%</span></div><div class="track"><div class="fill" data-w="92"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">Linux Admin</span><span class="skill-value">88%</span></div><div class="track"><div class="fill" data-w="88"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">Bash Scripting</span><span class="skill-value">83%</span></div><div class="track"><div class="fill" data-w="83"></div></div></div>
        </div>

        <div class="glass-card reveal">
          <div class="topline"></div>
          <div class="icon"><i class="fa-solid fa-gears" style="color: var(--purple)"></i></div>
          <h4>CI/CD &amp; Automation</h4>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">GitHub Actions</span><span class="skill-value">90%</span></div><div class="track"><div class="fill" data-w="90"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">AWS CodeBuild</span><span class="skill-value">82%</span></div><div class="track"><div class="fill" data-w="82"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">AWS CodePipeline</span><span class="skill-value">76%</span></div><div class="track"><div class="fill" data-w="76"></div></div></div>
          <div class="skill-row"><div class="skill-head"><span class="skill-name">Elastic Beanstalk</span><span class="skill-value">85%</span></div><div class="track"><div class="fill" data-w="85"></div></div></div>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="section-head">
        <div class="section-no">03</div>
        <div class="section-kicker">Projects</div>
        <h2 class="section-title">Featured work with a <span class="accent">high-end finish</span>.</h2>
        <p class="section-subtitle">These cards are built to feel like luxury case studies — crisp, confident, and visually expensive.</p>
      </div>

      <div class="projects-grid">
        <article class="project reveal">
          <div class="num">01</div>
          <h4>S3 + CloudFront Static Site Delivery</h4>
          <p>Designed a globally distributed static delivery stack with S3 hosting, CloudFront edge caching, Route 53 DNS, ACM SSL, and private bucket access.</p>
          <div class="project-tags"><span class="project-tag">S3</span><span class="project-tag">CloudFront</span><span class="project-tag">Route 53</span><span class="project-tag">ACM</span></div>
          <div class="project-foot"><span><i class="fa-solid fa-diagram-project"></i> CDN architecture</span><a class="project-link" href="https://github.com/muhammadhassan120" target="_blank" rel="noopener">GitHub <i class="fa-solid fa-arrow-right"></i></a></div>
        </article>

        <article class="project reveal">
          <div class="num">02</div>
          <h4>IAM Automation &amp; Least-Privilege Engine</h4>
          <p>Built Python/Boto3 automation for IAM users, roles, and policies with compliance checks, usage detection, and secure AWS Organization workflows.</p>
          <div class="project-tags"><span class="project-tag">IAM</span><span class="project-tag">Python</span><span class="project-tag">Boto3</span><span class="project-tag">Security</span></div>
          <div class="project-foot"><span><i class="fa-solid fa-diagram-project"></i> Security automation</span><a class="project-link" href="https://github.com/muhammadhassan120" target="_blank" rel="noopener">GitHub <i class="fa-solid fa-arrow-right"></i></a></div>
        </article>

        <article class="project reveal">
          <div class="num">03</div>
          <h4>Serverless Task Board</h4>
          <p>Full-stack serverless application using Lambda, API Gateway, DynamoDB, SNS, and SES to keep the stack lean and fully managed.</p>
          <div class="project-tags"><span class="project-tag">Lambda</span><span class="project-tag">API Gateway</span><span class="project-tag">DynamoDB</span><span class="project-tag">SNS</span></div>
          <div class="project-foot"><span><i class="fa-solid fa-diagram-project"></i> Serverless system</span><a class="project-link" href="https://github.com/muhammadhassan120" target="_blank" rel="noopener">GitHub <i class="fa-solid fa-arrow-right"></i></a></div>
        </article>

        <article class="project reveal">
          <div class="num">04</div>
          <h4>High-Availability Architecture</h4>
          <p>Engineered multi-AZ application flow with ALB, Auto Scaling, RDS failover, and CloudWatch alarms for operational resilience.</p>
          <div class="project-tags"><span class="project-tag">ALB</span><span class="project-tag">ASG</span><span class="project-tag">Multi-AZ</span><span class="project-tag">CloudWatch</span></div>
          <div class="project-foot"><span><i class="fa-solid fa-diagram-project"></i> HA architecture</span><a class="project-link" href="https://github.com/muhammadhassan120" target="_blank" rel="noopener">GitHub <i class="fa-solid fa-arrow-right"></i></a></div>
        </article>
      </div>
    </section>

    <section class="section" id="process">
      <div class="section-head">
        <div class="section-no">04</div>
        <div class="section-kicker">Process</div>
        <h2 class="section-title">A workflow that feels <span class="accent">premium</span> because it is intentional.</h2>
        <p class="section-subtitle">Good visual design alone is not enough. The structure must also create the feeling of trust, clarity, and control.</p>
      </div>

      <div class="roadmap">
        <div class="step reveal"><div class="i"><i class="fa-solid fa-compass-drafting"></i></div><h4>1. Architecture</h4><p>Define the stack, the purpose, the traffic flow, and the reliability model before touching the UI.</p></div>
        <div class="step reveal"><div class="i"><i class="fa-solid fa-wand-magic-sparkles"></i></div><h4>2. Visual polish</h4><p>Layer glass, gradients, motion, and hierarchy until the page starts to feel expensive.</p></div>
        <div class="step reveal"><div class="i"><i class="fa-solid fa-bullseye"></i></div><h4>3. Conversion</h4><p>Make the call-to-action obvious, high-confidence, and frictionless on every screen size.</p></div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="section-head">
        <div class="section-no">05</div>
        <div class="section-kicker">Contact</div>
        <h2 class="section-title">Let’s build something <span class="accent">serious</span>.</h2>
        <p class="section-subtitle">Open to internships, freelance cloud work, and collaboration. Keep the offer clear, useful, and worth my time.</p>
      </div>

      <div class="contact">
        <a class="email" href="mailto:muqaddamhammad@gmail.com"><i class="fa-solid fa-envelope"></i> muqaddamhammad@gmail.com</a>

        <div class="contact-grid">
          <a class="contact-card reveal" href="https://github.com/muhammadhassan120" target="_blank" rel="noopener">
            <div class="ic"><i class="fa-brands fa-github"></i></div>
            <div class="lab">GitHub</div>
            <div class="val">muhammadhassan120</div>
          </a>
          <a class="contact-card reveal" href="mailto:muqaddamhammad@gmail.com">
            <div class="ic"><i class="fa-solid fa-paper-plane"></i></div>
            <div class="lab">Email</div>
            <div class="val">Send a message</div>
          </a>
        </div>

        <div class="meta"><i class="fa-solid fa-location-dot"></i> Karachi, Pakistan • UTC+5</div>
      </div>
    </section>
  </div>

  <footer>
    <div>Designed &amp; built by <strong>MUQADDAM</strong> — Cloud &amp; DevOps Engineer</div>
    <div><i class="fa-brands fa-aws"></i> AWS • Docker • Terraform • CI/CD</div>
  </footer>

  <script>
    (function () {
      'use strict';

      var nav = document.getElementById('nav');
      var progressBar = document.getElementById('progressBar');
      var mobileNav = document.getElementById('mobileNav');
      var openMenu = document.getElementById('openMenu');
      var closeMenu = document.getElementById('closeMenu');
      var heroPanel = document.getElementById('heroPanel');
      var portraitCard = document.getElementById('portraitCard');
      var typed = document.getElementById('typed');
      var revealEls = document.querySelectorAll('.section-kicker, .section-title, .section-subtitle, .reveal');

      // Cursor
      var dot = document.getElementById('cursor-dot');
      var ring = document.getElementById('cursor-ring');
      var glow = document.getElementById('cursor-glow');
      var mx = window.innerWidth / 2;
      var my = window.innerHeight / 2;
      var rx = mx;
      var ry = my;
      var gx = mx;
      var gy = my;

      document.addEventListener('mousemove', function (e) {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      });

      (function animateCursor() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        gx += (mx - gx) * 0.06;
        gy += (my - gy) * 0.06;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        glow.style.left = gx + 'px';
        glow.style.top = gy + 'px';
        requestAnimationFrame(animateCursor);
      })();

      document.querySelectorAll('a, button, .project, .glass-card, .contact-card, .step').forEach(function (el) {
        el.addEventListener('mouseenter', function () { document.body.classList.add('cursor-expand'); });
        el.addEventListener('mouseleave', function () { document.body.classList.remove('cursor-expand'); });
      });

      // Scroll progress + nav state
      function updateProgress() {
        var h = document.documentElement;
        var max = h.scrollHeight - window.innerHeight;
        var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        progressBar.style.width = pct + '%';
        nav.classList.toggle('scrolled', window.scrollY > 48);
      }
      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();

      // Menu
      function openNav() { mobileNav.classList.add('open'); }
      function closeNav() { mobileNav.classList.remove('open'); }
      if (openMenu) openMenu.addEventListener('click', openNav);
      if (closeMenu) closeMenu.addEventListener('click', closeNav);
      mobileNav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });

      // Typing effect
      var phrases = [
        'Building cloud infrastructure with precision',
        'Automating deployments with CI/CD',
        'Designing resilient AWS systems',
        'Shipping containerized apps with Docker',
        'Turning Terraform into repeatable architecture',
        'Securing workloads with IAM and least privilege'
      ];
      var p = 0, c = 0, deleting = false;
      function tick() {
        var cur = phrases[p];
        if (!deleting) {
          typed.textContent = cur.slice(0, ++c);
          if (c === cur.length) {
            deleting = true;
            setTimeout(tick, 1700);
            return;
          }
          setTimeout(tick, 46);
        } else {
          typed.textContent = cur.slice(0, --c);
          if (c <= 0) {
            deleting = false;
            p = (p + 1) % phrases.length;
            setTimeout(tick, 420);
            return;
          }
          setTimeout(tick, 24);
        }
      }
      setTimeout(tick, 700);

      // Reveal observer
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.classList.add('show');
          if (el.classList.contains('glass-card')) {
            el.querySelectorAll('.fill').forEach(function (bar) {
              bar.style.width = bar.getAttribute('data-w') + '%';
            });
          }
        });
      }, { threshold: 0.14 });

      revealEls.forEach(function (el) { io.observe(el); });
      document.querySelectorAll('.glass-card, .project, .contact-card, .step').forEach(function (el) { io.observe(el); });

      // Counters
      var counterIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'), 10) || 0;
          var current = 0;
          var step = Math.max(1, Math.ceil(target / 40));
          var timer = setInterval(function () {
            current += step;
            if (current >= target) {
              el.textContent = target + (target >= 10 ? '+' : '');
              clearInterval(timer);
            } else {
              el.textContent = current;
            }
          }, 24);
          counterIO.unobserve(el);
        });
      }, { threshold: 0.6 });
      document.querySelectorAll('[data-count]').forEach(function (el) { counterIO.observe(el); });

      // Hero / portrait tilt
      function tiltOnMove(card, intensity) {
        if (!card) return;
        card.addEventListener('mousemove', function (e) {
          var r = card.getBoundingClientRect();
          var x = e.clientX - r.left;
          var y = e.clientY - r.top;
          var rx2 = (y - r.height / 2) / intensity;
          var ry2 = -(x - r.width / 2) / intensity;
          card.style.transform = 'rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg) translateY(-2px)';
        });
        card.addEventListener('mouseleave', function () {
          card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
      }
      tiltOnMove(heroPanel, 26);
      tiltOnMove(portraitCard, 22);

      // Project glow tilt
      document.querySelectorAll('.project').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
          var r = card.getBoundingClientRect();
          var x = e.clientX - r.left;
          var y = e.clientY - r.top;
          var rx2 = (y - r.height / 2) / 24;
          var ry2 = -(x - r.width / 2) / 24;
          card.style.setProperty('--gx', (x / r.width * 100) + '%');
          card.style.setProperty('--gy', (y / r.height * 100) + '%');
          card.style.transform = 'translateY(-4px) rotateX(' + rx2 + 'deg) rotateY(' + ry2 + 'deg)';
        });
        card.addEventListener('mouseleave', function () {
          card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
        });
      });

      // Particles
      var canvas = document.getElementById('particles');
      var ctx = canvas.getContext('2d');
      var W = 0, H = 0;
      var particles = [];

      function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize, { passive: true });

      function Particle() {
        this.reset();
      }
      Particle.prototype.reset = function () {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.34;
        this.vy = (Math.random() - 0.5) * 0.34;
        this.r = Math.random() * 1.6 + 0.35;
        this.a = Math.random() * 0.22 + 0.08;
        this.c = Math.random() > 0.58 ? '85,214,255' : '242,201,107';
      };
      Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset();
      };
      Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + this.c + ', ' + this.a + ')';
        ctx.fill();
      };

      for (var i = 0; i < 110; i++) particles.push(new Particle());

      function connect() {
        for (var a = 0; a < particles.length; a++) {
          for (var b = a + 1; b < particles.length; b++) {
            var dx = particles[a].x - particles[b].x;
            var dy = particles[a].y - particles[b].y;
            var d = Math.sqrt(dx * dx + dy * dy);
            if (d < 128) {
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.strokeStyle = 'rgba(85,214,255,' + (0.05 * (1 - d / 128)) + ')';
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(function (p) { p.update(); p.draw(); });
        connect();
        requestAnimationFrame(animate);
      }
      animate();
    })();
  </script>
</body>
</html>`;
  }
}
