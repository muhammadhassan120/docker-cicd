import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CI/CD Pipeline | Muqaddam</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --accent: #00f5c4;
      --accent2: #7c6dfa;
      --accent3: #f0522a;
      --bg: #070810;
      --bg2: #0d0f1e;
      --bg3: #12152a;
      --border: rgba(255,255,255,0.07);
      --text: #e8eaf0;
      --muted: #5a6080;
      --success: #00f5c4;
      --warning: #f0c040;
    }

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Space Grotesk', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      overflow-x: hidden;
      cursor: none;
    }

    /* Custom Cursor */
    .cursor {
      width: 8px; height: 8px;
      background: var(--accent);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: screen;
    }
    .cursor-ring {
      width: 36px; height: 36px;
      border: 1px solid rgba(0,245,196,0.4);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.15s ease;
      mix-blend-mode: screen;
    }

    /* Canvas */
    #bg-canvas {
      position: fixed; top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: 0;
      opacity: 0.5;
    }

    /* Scanline overlay */
    body::before {
      content: '';
      position: fixed; inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.08) 2px,
        rgba(0,0,0,0.08) 4px
      );
      pointer-events: none;
      z-index: 1;
    }

    /* Grid overlay */
    body::after {
      content: '';
      position: fixed; inset: 0;
      background-image:
        linear-gradient(rgba(0,245,196,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,245,196,0.02) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: 1;
    }

    /* Main Layout */
    .wrapper {
      position: relative;
      z-index: 10;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 24px;
      gap: 64px;
    }

    /* ─── HEADER ─── */
    header {
      width: 100%;
      max-width: 960px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0; left: 50%; transform: translateX(-50%);
      padding: 20px 40px;
      z-index: 100;
      background: linear-gradient(to bottom, rgba(7,8,16,0.95), transparent);
    }

    .logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--accent);
      letter-spacing: 0.05em;
      display: flex; align-items: center; gap: 8px;
    }
    .logo-dot {
      width: 6px; height: 6px;
      background: var(--accent);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(0,245,196,0.4); }
      50% { opacity: 0.7; transform: scale(0.9); box-shadow: 0 0 0 6px rgba(0,245,196,0); }
    }

    .status-pill {
      display: flex; align-items: center; gap: 8px;
      background: rgba(0,245,196,0.07);
      border: 1px solid rgba(0,245,196,0.2);
      border-radius: 100px;
      padding: 6px 14px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--accent);
    }
    .status-dot {
      width: 6px; height: 6px;
      background: var(--accent);
      border-radius: 50%;
      animation: blink 1.4s infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }

    /* ─── HERO ─── */
    .hero {
      max-width: 820px;
      width: 100%;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s forwards;
    }
    @keyframes fadeUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--muted);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .eyebrow::before, .eyebrow::after {
      content: '';
      width: 30px; height: 1px;
      background: var(--muted);
    }

    h1 {
      font-size: clamp(2.6rem, 6vw, 5rem);
      font-weight: 700;
      line-height: 1.05;
      letter-spacing: -0.03em;
      margin-bottom: 24px;
    }
    .word-1 { color: #fff; }
    .word-2 {
      background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.1rem;
      color: var(--muted);
      line-height: 1.7;
      max-width: 520px;
      margin: 0 auto 40px;
      font-weight: 400;
    }

    .counter-row {
      display: flex;
      justify-content: center;
      gap: 48px;
      margin-top: 8px;
    }
    .counter {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    .counter-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.8rem;
      font-weight: 500;
      color: #fff;
      line-height: 1;
    }
    .counter-num span { color: var(--accent); }
    .counter-label {
      font-size: 11px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    /* ─── PIPELINE STAGES ─── */
    .pipeline-section {
      width: 100%;
      max-width: 960px;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s forwards;
    }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 20px;
    }

    .pipeline-track {
      position: relative;
      display: flex;
      align-items: stretch;
      gap: 0;
    }

    .pipeline-track::before {
      content: '';
      position: absolute;
      top: 28px; left: 28px; right: 28px;
      height: 1px;
      background: linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3), var(--accent2), var(--accent));
      opacity: 0.3;
      z-index: 0;
    }

    .stage {
      flex: 1;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding: 0 8px;
      cursor: pointer;
    }

    .stage-icon {
      width: 56px; height: 56px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px;
      border: 1px solid var(--border);
      background: var(--bg2);
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
      position: relative;
      overflow: hidden;
    }
    .stage-icon::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(circle at center, rgba(0,245,196,0.15), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .stage.active .stage-icon {
      border-color: var(--accent);
      box-shadow: 0 0 0 4px rgba(0,245,196,0.08), 0 0 20px rgba(0,245,196,0.15);
      transform: translateY(-4px) scale(1.06);
    }
    .stage.active .stage-icon::before { opacity: 1; }

    .stage:hover .stage-icon {
      transform: translateY(-4px) scale(1.06);
      border-color: rgba(0,245,196,0.5);
    }

    .stage-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--muted);
      text-align: center;
      font-family: 'JetBrains Mono', monospace;
      transition: color 0.3s;
    }
    .stage.active .stage-name { color: var(--accent); }

    .stage-status {
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 100px;
      font-family: 'JetBrains Mono', monospace;
    }
    .stage-status.done {
      background: rgba(0,245,196,0.1);
      color: var(--accent);
      border: 1px solid rgba(0,245,196,0.2);
    }
    .stage-status.running {
      background: rgba(240,192,64,0.1);
      color: var(--warning);
      border: 1px solid rgba(240,192,64,0.2);
      animation: statusPulse 1.5s infinite;
    }
    @keyframes statusPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    /* ─── TERMINAL LOG ─── */
    .terminal {
      width: 100%;
      max-width: 960px;
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s forwards;
    }

    .terminal-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      background: rgba(255,255,255,0.03);
      border-bottom: 1px solid var(--border);
    }
    .dot { width: 12px; height: 12px; border-radius: 50%; }
    .dot-r { background: #ff5f57; }
    .dot-y { background: #febc2e; }
    .dot-g { background: #28c840; }

    .terminal-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--muted);
      margin-left: 4px;
    }

    .terminal-body {
      padding: 24px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.8;
      min-height: 220px;
      max-height: 280px;
      overflow-y: auto;
    }
    .terminal-body::-webkit-scrollbar { width: 4px; }
    .terminal-body::-webkit-scrollbar-track { background: transparent; }
    .terminal-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

    .log-line { display: flex; gap: 12px; }
    .log-time { color: var(--muted); min-width: 80px; }
    .log-badge {
      padding: 0 6px;
      border-radius: 4px;
      font-size: 10px;
      display: inline-flex; align-items: center;
      min-width: 52px; justify-content: center;
    }
    .badge-info { background: rgba(124,109,250,0.15); color: var(--accent2); }
    .badge-ok { background: rgba(0,245,196,0.1); color: var(--accent); }
    .badge-warn { background: rgba(240,192,64,0.1); color: var(--warning); }
    .badge-run { background: rgba(255,255,255,0.05); color: #fff; }

    .log-msg { color: #c8cfe8; flex: 1; }
    .log-msg .hl { color: var(--accent); }
    .log-msg .hl2 { color: var(--accent2); }
    .log-msg .hl3 { color: var(--warning); }

    .cursor-blink {
      display: inline-block;
      width: 8px; height: 14px;
      background: var(--accent);
      margin-left: 4px;
      animation: blinkCursor 1s step-end infinite;
      vertical-align: text-bottom;
    }
    @keyframes blinkCursor {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    /* ─── STACK GRID ─── */
    .stack-grid {
      width: 100%;
      max-width: 960px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.1s forwards;
    }

    .stack-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .stack-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, var(--card-glow, rgba(0,245,196,0.06)), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .stack-card:hover {
      transform: translateY(-6px);
      border-color: rgba(255,255,255,0.15);
    }
    .stack-card:hover::after { opacity: 1; }

    .stack-icon { font-size: 28px; line-height: 1; }
    .stack-name {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.02em;
    }
    .stack-role {
      font-size: 10px;
      color: var(--muted);
      text-align: center;
      font-family: 'JetBrains Mono', monospace;
    }

    /* ─── FOOTER ─── */
    footer {
      max-width: 960px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 32px;
      border-top: 1px solid var(--border);
      opacity: 0;
      animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.3s forwards;
    }

    .footer-left {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--muted);
    }
    .footer-left strong {
      color: #fff;
      font-weight: 500;
    }

    .footer-right {
      display: flex; align-items: center; gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--muted);
    }
    .heartbeat {
      font-size: 14px;
      animation: heartbeat 1.6s ease infinite;
      display: inline-block;
    }
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      14% { transform: scale(1.25); }
      28% { transform: scale(1); }
      42% { transform: scale(1.15); }
      70% { transform: scale(1); }
    }

    @media (max-width: 640px) {
      .stack-grid { grid-template-columns: repeat(3, 1fr); }
      .counter-row { gap: 28px; }
      header { padding: 16px 20px; }
      .pipeline-track { flex-wrap: wrap; gap: 16px; }
      .pipeline-track::before { display: none; }
    }
  </style>
</head>
<body>
  <div class="cursor" id="cursor"></div>
  <div class="cursor-ring" id="ring"></div>
  <canvas id="bg-canvas"></canvas>

  <header>
    <div class="logo">
      <div class="logo-dot"></div>
      pipeline.muqaddam.dev
    </div>
    <div class="status-pill">
      <div class="status-dot"></div>
      all systems operational
    </div>
  </header>

  <div class="wrapper">
    <!-- HERO -->
    <section class="hero">
      <div class="eyebrow">automated deployment active</div>
      <h1>
        <span class="word-1">Production</span><br>
        <span class="word-2">CI/CD Pipeline</span>
      </h1>
      <p class="subtitle">
        Push to main. Watch it build, containerize, and deploy — zero manual steps, zero downtime.
      </p>
      <div class="counter-row">
        <div class="counter">
          <div class="counter-num" id="c1">0<span>s</span></div>
          <div class="counter-label">avg build time</div>
        </div>
        <div class="counter">
          <div class="counter-num" id="c2">0<span>%</span></div>
          <div class="counter-label">uptime</div>
        </div>
        <div class="counter">
          <div class="counter-num" id="c3">0</div>
          <div class="counter-label">deploys today</div>
        </div>
      </div>
    </section>

    <!-- PIPELINE STAGES -->
    <section class="pipeline-section">
      <div class="section-label">// pipeline stages</div>
      <div class="pipeline-track" id="pipeline">
        <div class="stage active" data-i="0">
          <div class="stage-icon">⚡</div>
          <div class="stage-name">PUSH</div>
          <div class="stage-status done">done</div>
        </div>
        <div class="stage active" data-i="1">
          <div class="stage-icon">🔍</div>
          <div class="stage-name">WEBHOOK</div>
          <div class="stage-status done">done</div>
        </div>
        <div class="stage active" data-i="2">
          <div class="stage-icon">🔧</div>
          <div class="stage-name">BUILD</div>
          <div class="stage-status done">done</div>
        </div>
        <div class="stage active" data-i="3">
          <div class="stage-icon">🐳</div>
          <div class="stage-name">DOCKER</div>
          <div class="stage-status done">done</div>
        </div>
        <div class="stage active" data-i="4">
          <div class="stage-icon">☁️</div>
          <div class="stage-name">DEPLOY</div>
          <div class="stage-status running">live</div>
        </div>
      </div>
    </section>

    <!-- TERMINAL -->
    <div class="terminal">
      <div class="terminal-bar">
        <div class="dot dot-r"></div>
        <div class="dot dot-y"></div>
        <div class="dot dot-g"></div>
        <div class="terminal-title">jenkins — pipeline executor — main branch</div>
      </div>
      <div class="terminal-body" id="terminal-log">
      </div>
    </div>

    <!-- STACK GRID -->
    <section>
      <div class="section-label" style="max-width:960px;width:100%;margin-bottom:20px;">// tech stack</div>
      <div class="stack-grid">
        <div class="stack-card" style="--card-glow: rgba(124,109,250,0.08)">
          <div class="stack-icon">🐙</div>
          <div class="stack-name">GitHub</div>
          <div class="stack-role">source control</div>
        </div>
        <div class="stack-card" style="--card-glow: rgba(240,192,64,0.08)">
          <div class="stack-icon">🤖</div>
          <div class="stack-name">Jenkins</div>
          <div class="stack-role">ci/cd engine</div>
        </div>
        <div class="stack-card" style="--card-glow: rgba(41,182,246,0.08)">
          <div class="stack-icon">🐳</div>
          <div class="stack-name">Docker</div>
          <div class="stack-role">containerization</div>
        </div>
        <div class="stack-card" style="--card-glow: rgba(231,56,49,0.08)">
          <div class="stack-icon">🦅</div>
          <div class="stack-name">NestJS</div>
          <div class="stack-role">backend runtime</div>
        </div>
        <div class="stack-card" style="--card-glow: rgba(255,153,0,0.08)">
          <div class="stack-icon">☁️</div>
          <div class="stack-name">AWS EC2</div>
          <div class="stack-role">cloud host</div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="footer-left">Engineered by <strong>Muqaddam</strong> &mdash; Karachi, PK</div>
      <div class="footer-right">
        <span class="heartbeat">♥</span>
        <span>automated with passion</span>
      </div>
    </footer>
  </div>

  <script>
    // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function animCursor() {
      cursor.style.left = (mx - 4) + 'px'; cursor.style.top = (my - 4) + 'px';
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = (rx - 18) + 'px'; ring.style.top = (ry - 18) + 'px';
      requestAnimationFrame(animCursor);
    })();
    document.querySelectorAll('a, button, .stage, .stack-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; ring.style.transform = 'scale(1.4)'; });
      el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; ring.style.transform = 'scale(1)'; });
    });

    // Animated particle canvas
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.r = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? '0,245,196' : '124,109,250';
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + this.color + ',' + this.alpha + ')';
        ctx.fill();
      }
    }
    for (let i = 0; i < 120; i++) particles.push(new Particle());

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(0,245,196,' + (0.06 * (1 - dist/100)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animCanvas() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animCanvas);
    }
    animCanvas();

    // Animate counters
    function animCount(id, target, suffix, duration) {
      const el = document.getElementById(id);
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / duration, 1);
        const val = Math.round(prog * target);
        el.innerHTML = val + '<span>' + suffix + '</span>';
        if (prog < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    setTimeout(() => {
      animCount('c1', 47, 's', 1200);
      animCount('c2', 99, '%', 1600);
      animCount('c3', 12, '', 900);
    }, 800);

    // Terminal log simulation
    const logs = [
      { time: '09:41:02', badge: 'INFO', cls: 'badge-info', msg: 'Webhook received from <span class="hl">github.com/muqaddam</span>' },
      { time: '09:41:03', badge: 'RUN', cls: 'badge-run', msg: 'Cloning branch <span class="hl2">main</span> → workspace' },
      { time: '09:41:05', badge: 'RUN', cls: 'badge-run', msg: 'Installing dependencies <span class="hl3">npm ci</span>' },
      { time: '09:41:18', badge: 'OK', cls: 'badge-ok', msg: 'Dependencies installed — <span class="hl">0 vulnerabilities</span>' },
      { time: '09:41:19', badge: 'RUN', cls: 'badge-run', msg: 'Building NestJS app <span class="hl3">nest build</span>' },
      { time: '09:41:31', badge: 'OK', cls: 'badge-ok', msg: 'Build complete → <span class="hl">dist/</span> ready' },
      { time: '09:41:32', badge: 'RUN', cls: 'badge-run', msg: 'Building Docker image <span class="hl3">docker build -t pipeline-app .</span>' },
      { time: '09:41:44', badge: 'OK', cls: 'badge-ok', msg: 'Image built → <span class="hl">pipeline-app:latest</span> (142MB)' },
      { time: '09:41:45', badge: 'RUN', cls: 'badge-run', msg: 'Stopping old container and spinning new one' },
      { time: '09:41:46', badge: 'OK', cls: 'badge-ok', msg: 'Container live on <span class="hl">:3000</span> — health check passed ✓' },
      { time: '09:41:47', badge: 'OK', cls: 'badge-ok', msg: 'Pipeline complete in <span class="hl">45s</span> — deploy successful 🚀' },
    ];

    const termEl = document.getElementById('terminal-log');
    let li = 0;
    function addLog() {
      if (li >= logs.length) {
        const blink = document.createElement('span');
        blink.className = 'cursor-blink';
        termEl.appendChild(blink);
        return;
      }
      const l = logs[li++];
      const div = document.createElement('div');
      div.className = 'log-line';
      div.style.opacity = '0';
      div.style.transform = 'translateX(-10px)';
      div.style.transition = 'all 0.3s ease';
      div.innerHTML = '<span class="log-time">' + l.time + '</span><span class="log-badge ' + l.cls + '">' + l.badge + '</span><span class="log-msg">' + l.msg + '</span>';
      termEl.appendChild(div);
      requestAnimationFrame(() => {
        div.style.opacity = '1';
        div.style.transform = 'translateX(0)';
      });
      termEl.scrollTop = termEl.scrollHeight;
      setTimeout(addLog, 280 + Math.random() * 200);
    }
    setTimeout(addLog, 1400);
  </script>
</body>
</html>`;
  }
}