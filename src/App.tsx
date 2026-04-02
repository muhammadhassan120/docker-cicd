import React, { useEffect, useRef, useState, useCallback } from "react";
import { Copy, GitHub, Linkedin, ExternalLink, Terminal, ChevronRight, Check } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrailingPos, setCursorTrailingPos] = useState({ x: -100, y: -100 });
  const [copied, setCopied] = useState(false);
  const cursorRef = useRef(cursorTrailingPos);

  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Mouse trailing
  useEffect(() => {
    let animationFrameId: number;
    
    const updateCursor = () => {
      cursorRef.current = {
        x: cursorRef.current.x + (cursorPos.x - cursorRef.current.x) * 0.12,
        y: cursorRef.current.y + (cursorPos.y - cursorRef.current.y) * 0.12,
      };
      setCursorTrailingPos(cursorRef.current);
      animationFrameId = requestAnimationFrame(updateCursor);
    };
    
    animationFrameId = requestAnimationFrame(updateCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id === 'stats-container') {
              setStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  // Three.js
  useEffect(() => {
    if (!threeCanvasRef.current) return;
    let animFrameId: number;
    let renderer: any;
    
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      const THREE = (window as any).THREE;
      if (!THREE) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      threeCanvasRef.current?.appendChild(renderer.domElement);

      // Particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 300;
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);
      
      const cyan = new THREE.Color("#00f5c4");
      const purple = new THREE.Color("#7c6dfa");

      for(let i = 0; i < particlesCount * 3; i+=3) {
        posArray[i] = (Math.random() - 0.5) * 10;
        posArray[i+1] = (Math.random() - 0.5) * 10;
        posArray[i+2] = (Math.random() - 0.5) * 10;
        
        const mixedColor = cyan.clone().lerp(purple, Math.random());
        colorArray[i] = mixedColor.r;
        colorArray[i+1] = mixedColor.g;
        colorArray[i+2] = mixedColor.b;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Nodes and Lines for Topology
      const nodes: any[] = [];
      const nodeGeometries = [
        new THREE.IcosahedronGeometry(0.05, 0),
        new THREE.OctahedronGeometry(0.05, 0)
      ];
      
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: cyan,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });

      for (let i = 0; i < 20; i++) {
        const geometry = nodeGeometries[Math.floor(Math.random() * nodeGeometries.length)];
        const mesh = new THREE.Mesh(geometry, nodeMaterial);
        mesh.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4 - 1
        );
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        
        mesh.userData.velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        );
        
        scene.add(mesh);
        nodes.push(mesh);
      }

      // Lines connecting nodes
      const lineMaterial = new THREE.LineBasicMaterial({
        color: purple,
        transparent: true,
        opacity: 0.15
      });
      
      const lines: any[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() > 0.7) {
            const points = [nodes[i].position, nodes[j].position];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, lineMaterial);
            line.userData = { nodeA: nodes[i], nodeB: nodes[j] };
            scene.add(line);
            lines.push(line);
          }
        }
      }

      camera.position.z = 3;

      let mouseX = 0;
      let mouseY = 0;

      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.0003;
        particlesMesh.rotation.x += 0.0003;
        
        particlesMesh.position.x += (mouseX * 0.001 - particlesMesh.position.x) * 0.05;
        particlesMesh.position.y += (-mouseY * 0.001 - particlesMesh.position.y) * 0.05;

        nodes.forEach(node => {
          node.position.add(node.userData.velocity);
          node.rotation.x += 0.001;
          node.rotation.y += 0.001;
          
          if (node.position.x > 4) node.position.x = -4;
          if (node.position.x < -4) node.position.x = 4;
          if (node.position.y > 4) node.position.y = -4;
          if (node.position.y < -4) node.position.y = 4;
          
          node.position.x += (mouseX * 0.0005);
          node.position.y += (-mouseY * 0.0005);
        });

        lines.forEach(line => {
          const positions = line.geometry.attributes.position.array;
          positions[0] = line.userData.nodeA.position.x;
          positions[1] = line.userData.nodeA.position.y;
          positions[2] = line.userData.nodeA.position.z;
          positions[3] = line.userData.nodeB.position.x;
          positions[4] = line.userData.nodeB.position.y;
          positions[5] = line.userData.nodeB.position.z;
          line.geometry.attributes.position.needsUpdate = true;
        });

        renderer.render(scene, camera);
      };
      
      animate();

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX - window.innerWidth / 2;
        mouseY = e.clientY - window.innerHeight / 2;
      };

      window.addEventListener('resize', onWindowResize);
      window.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('resize', onWindowResize);
        window.removeEventListener('mousemove', onMouseMove);
        if (threeCanvasRef.current && renderer.domElement) {
          threeCanvasRef.current.removeChild(renderer.domElement);
        }
      };
    };
    document.head.appendChild(script);

    return () => {
      cancelAnimationFrame(animFrameId);
      if (renderer) {
        renderer.dispose();
        if (threeCanvasRef.current && renderer.domElement.parentNode === threeCanvasRef.current) {
          threeCanvasRef.current.removeChild(renderer.domElement);
        }
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("muqaddam@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="portfolio-wrapper text-[#e8eaf0] font-sans relative overflow-x-hidden selection:bg-[#00f5c4] selection:text-[#04050d]">
      <style>{`
        :root {
          --bg-deep: #04050d;
          --bg-base: #070810;
          --bg-elevated: #0d0f1e;
          --cyan: #00f5c4;
          --purple: #7c6dfa;
          --orange: #f0522a;
          --gold: #f0c040;
          --text-primary: #e8eaf0;
          --text-muted: #5a6080;
          --border: rgba(255,255,255,0.06);
        }
        html { scroll-behavior: smooth; }
        .portfolio-wrapper {
          background-color: var(--bg-base);
          min-height: 100vh;
        }
        .scanlines::before {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, #00f5c4 2px, #00f5c4 4px);
          opacity: 0.03;
          pointer-events: none;
          z-index: 999;
        }
        .dot-grid {
          background-image: radial-gradient(var(--cyan) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: 0 0;
          opacity: 0.02;
          position: fixed; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:0;
        }
        .grain {
          position: fixed; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:998;
          opacity: 0.04;
          background: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
        }
        .glass-panel {
          background: rgba(13,15,30,0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border);
        }
        .font-display { font-family: 'Space Grotesk', sans-serif; font-weight: 700; letter-spacing: -0.03em; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute; width: 100%; height: 2px; bottom: -4px; left: 0;
          background: var(--cyan);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }

        .text-gradient {
          background: linear-gradient(90deg, var(--cyan), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .glow-cyan { text-shadow: 0 0 20px rgba(0, 245, 196, 0.5); }
        .glow-purple { text-shadow: 0 0 20px rgba(124, 109, 250, 0.5); }
        
        .box-glow-cyan:hover { box-shadow: 0 0 30px rgba(0, 245, 196, 0.15); border-color: rgba(0, 245, 196, 0.3); }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite; }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: 200%; animation: marquee 30s linear infinite; }

        @keyframes pulse-dot { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(40, 200, 64, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(40, 200, 64, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(40, 200, 64, 0); } }
        .pulse-dot { border-radius: 50%; animation: pulse-dot 2s infinite; }

        .project-card { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .project-card:hover { transform: translateY(-8px); }
        .project-card:hover .project-arrow { transform: rotate(45deg); color: var(--cyan); }
        
        .typewriter-line { overflow: hidden; white-space: nowrap; width: 0; border-right: 2px solid transparent; }
        .is-visible .typewriter-line { animation: type 1s steps(40, end) forwards; }
        @keyframes type { 
          from { width: 0; border-color: var(--cyan); }
          to { width: 100%; border-color: transparent; }
        }

        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
        
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .flow-line {
          position: relative;
          overflow: hidden;
        }
        .flow-line::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          animation: flow 2s linear infinite;
        }
      `}</style>

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#00f5c4] z-[1000] transition-all duration-150 ease-out shadow-[0_0_10px_#00f5c4]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Custom Cursor */}
      <div 
        className="fixed w-2 h-2 bg-[#00f5c4] rounded-full pointer-events-none z-[1000] mix-blend-screen hidden lg:block"
        style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%, -50%)' }}
      />
      <div 
        className="fixed w-8 h-8 border border-[#00f5c4] rounded-full pointer-events-none z-[1000] mix-blend-screen opacity-50 hidden lg:block transition-transform duration-75"
        style={{ left: cursorTrailingPos.x, top: cursorTrailingPos.y, transform: 'translate(-50%, -50%)' }}
      />

      {/* Global Overlays */}
      <div className="dot-grid" />
      <div className="scanlines" />
      <div className="grain" />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel border-b border-[#00f5c4]/20 shadow-[0_4px_30px_rgba(0,245,196,0.05)] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold text-[#00f5c4] glow-cyan select-none group block">
            <span className="text-[#5a6080] group-hover:text-white transition-colors">{"{"}</span> MQ <span className="text-[#5a6080] group-hover:text-white transition-colors">{"}"}</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-[#e8eaf0]">
            <a href="#about" className="nav-link hover:text-[#00f5c4] transition-colors">About</a>
            <a href="#projects" className="nav-link hover:text-[#00f5c4] transition-colors">Projects</a>
            <a href="#stack" className="nav-link hover:text-[#00f5c4] transition-colors">Stack</a>
            <a href="#contact" className="nav-link hover:text-[#00f5c4] transition-colors">Contact</a>
          </div>
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border-[#00f5c4]/30 text-xs font-mono">
            <div className="w-2 h-2 bg-[#28c840] pulse-dot" />
            <span className="text-[#00f5c4]">Open to Work</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div ref={threeCanvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />
        
        <div className="relative z-10 max-w-5xl mx-auto w-full pt-20 pointer-events-none">
          <div className="font-mono text-[#00f5c4] mb-6 flex items-center gap-2 animate-[fadeIn_1s_ease-out_0.2s_both] opacity-0" style={{animationFillMode: 'both'}}>
            <span>[ Cloud & DevOps Engineer ]</span>
            <span className="w-2 h-4 bg-[#00f5c4] animate-blink" />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 drop-shadow-2xl">
            <div className="text-white animate-[fadeInUp_1s_ease-out_0.4s_both] opacity-0" style={{animationFillMode: 'both'}}>Building Infrastructure</div>
            <div className="text-gradient pb-2 animate-[fadeInUp_1s_ease-out_0.5s_both] opacity-0" style={{animationFillMode: 'both'}}>That Never Sleeps.</div>
          </h1>
          
          <p className="text-lg md:text-xl text-[#5a6080] max-w-2xl mb-10 leading-relaxed animate-[fadeInUp_1s_ease-out_0.7s_both] opacity-0 font-sans font-light" style={{animationFillMode: 'both'}}>
            I automate deployments, architect resilient cloud systems, and ship code that runs at scale — from Karachi to the cloud.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-16 animate-[fadeInUp_1s_ease-out_0.9s_both] opacity-0 pointer-events-auto" style={{animationFillMode: 'both'}}>
            <a href="#projects" className="bg-[#00f5c4] text-[#04050d] font-bold px-8 py-4 rounded font-mono hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,245,196,0.4)]">
              View Projects <ChevronRight size={18} />
            </a>
            <button className="glass-panel text-white border-[#5a6080] font-bold px-8 py-4 rounded font-mono hover:bg-[#0d0f1e] hover:border-[#e8eaf0] transition-all duration-300 flex items-center gap-2 group">
              Download CV <Copy size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 border-y border-[var(--border)] py-6 glass-panel animate-[fadeIn_1s_ease-out_1.1s_both] opacity-0 backdrop-blur-xl" style={{animationFillMode: 'both'}}>
            <div className="text-center border-r border-[var(--border)]">
              <div className="font-display text-3xl text-[#00f5c4] glow-cyan">12+</div>
              <div className="font-mono text-xs text-[#5a6080] uppercase tracking-widest mt-1">Projects</div>
            </div>
            <div className="text-center border-r border-[var(--border)]">
              <div className="font-display text-3xl text-[#7c6dfa] glow-purple">99.9%</div>
              <div className="font-mono text-xs text-[#5a6080] uppercase tracking-widest mt-1">Uptime</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl text-[#f0c040]">10+</div>
              <div className="font-mono text-xs text-[#5a6080] uppercase tracking-widest mt-1">AWS Services</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronRight size={24} className="text-[#00f5c4] rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative border-t border-[var(--border)] bg-[var(--bg-deep)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 animate-on-scroll">
            <div className="h-[1px] w-12 bg-[#00f5c4]" />
            <h2 className="font-mono text-[#00f5c4] uppercase tracking-widest text-sm glow-cyan">System.info</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-[60%] animate-on-scroll">
              <h3 className="font-display text-4xl lg:text-5xl mb-6 text-white leading-tight">Self-taught.<br/>Karachi-based.<br/><span className="text-gradient">Automation-obsessed.</span></h3>
              <div className="space-y-4 text-[#5a6080] text-lg leading-relaxed font-sans font-light">
                <p>
                  I didn't start with cloud native architectures. I started breaking servers and figuring out how to put them back together faster. Today, I design systems that don't break in the first place.
                </p>
                <p>
                  My philosophy is simple: if you have to do it twice, automate it. From provisioning infrastructure to zero-downtime deployments, I treat every manual task as a bug waiting to be fixed.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] animate-on-scroll delay-200">
              <div className="glass-panel rounded-lg overflow-hidden border border-[#5a6080]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="bg-[#04050d] px-4 py-3 border-b border-[var(--border)] flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f0522a]" />
                  <div className="w-3 h-3 rounded-full bg-[#f0c040]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="ml-4 font-mono text-xs text-[#5a6080] select-none">bash - muqaddam</div>
                </div>
                <div className="p-6 font-mono text-sm text-[#e8eaf0] space-y-3 bg-[#0d0f1e]/50">
                  <div className="flex gap-3">
                    <span className="text-[#00f5c4] select-none">❯</span>
                    <span className="typewriter-line" style={{animationDelay: '0.5s'}}>$ whoami <span className="text-[#5a6080]">→</span> muqaddam</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#00f5c4] select-none">❯</span>
                    <span className="typewriter-line" style={{animationDelay: '1.5s'}}>$ cat skills.txt <span className="text-[#5a6080]">→</span> AWS | Terraform | Docker | Jenkins</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#00f5c4] select-none">❯</span>
                    <span className="typewriter-line" style={{animationDelay: '2.5s'}}>$ uptime <span className="text-[#5a6080]">→</span> always learning...</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#00f5c4] select-none">❯</span>
                    <span className="typewriter-line" style={{animationDelay: '3.5s'}}>$ status <span className="text-[#5a6080]">→</span> <span className="text-[#28c840] drop-shadow-[0_0_8px_rgba(40,200,64,0.5)]">open to opportunities</span></span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <span className="text-[#00f5c4] select-none">❯</span>
                    <span className="w-2.5 h-5 bg-[#00f5c4] animate-blink shadow-[0_0_8px_rgba(0,245,196,0.8)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Marquee */}
      <div className="border-y border-[var(--border)] bg-[#070810] overflow-hidden py-5 shadow-inner">
        <div className="animate-marquee font-mono text-sm text-[#5a6080] whitespace-nowrap tracking-wider font-bold">
          {Array(6).fill("AWS • Terraform • Docker • Kubernetes • Jenkins • GitHub Actions • Python • Bash • Ansible • CloudFormation • ECS • RDS • Lambda • S3 • CloudFront • ").join("")}
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 animate-on-scroll">
            <div className="h-[1px] w-12 bg-[#7c6dfa]" />
            <h2 className="font-mono text-[#7c6dfa] uppercase tracking-widest text-sm glow-purple">Work That Ships</h2>
          </div>

          {/* Featured Project */}
          <div className="mb-20 animate-on-scroll delay-100">
            <h3 className="font-display text-3xl mb-8 text-white">CI/CD Pipeline Architecture</h3>
            <div className="glass-panel p-8 md:p-12 rounded-xl border-[#7c6dfa]/30 box-glow-cyan overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs text-[#00f5c4] animate-pulse flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f5c4] rounded-full" />
                LIVE.MONITORING
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-4 relative">
                <div className="absolute top-1/2 left-[10%] w-[80%] h-1 bg-[#1a1c30] -translate-y-1/2 hidden lg:block rounded-full" />
                <div className="absolute top-1/2 left-[10%] w-[80%] h-1 bg-gradient-to-r from-[#00f5c4] via-[#7c6dfa] to-[#f0522a] -translate-y-1/2 hidden lg:block opacity-50 flow-line rounded-full" />
                
                {[
                  { icon: <Github size={24}/>, label: "PUSH", color: "#e8eaf0" },
                  { icon: <div className="w-6 h-6 border-2 border-current rounded-full" />, label: "WEBHOOK", color: "#f0c040" },
                  { icon: <Terminal size={24}/>, label: "BUILD", color: "#f0522a" },
                  { icon: <div className="w-6 h-6 border-2 border-current flex items-center justify-center font-bold text-[10px]">D</div>, label: "DOCKER", color: "#7c6dfa" },
                  { icon: <ExternalLink size={24}/>, label: "DEPLOY", color: "#00f5c4" },
                ].map((node, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-4 bg-[var(--bg-elevated)] p-6 rounded-xl border border-[var(--border)] w-full lg:w-40 shadow-2xl transition-transform hover:-translate-y-2" style={{boxShadow: `0 10px 30px ${node.color}15`}}>
                    <div style={{color: node.color}} className="drop-shadow-[0_0_10px_currentColor]">{node.icon}</div>
                    <div className="font-mono text-xs font-bold tracking-widest">{node.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "2-Tier Web Application", color: "#7c6dfa", desc: "A scalable two-tier architecture on AWS with automated infrastructure provisioning.", tags: ["Terraform", "EC2", "RDS", "VPC"] },
              { title: "Highly Available Architecture", color: "#00f5c4", desc: "Multi-AZ deployment with load balancing and auto-scaling for 99.99% uptime.", tags: ["ELB", "ASG", "Multi-AZ"] },
              { title: "Custom VPC Design", color: "#f0c040", desc: "Enterprise-grade VPC with public/private subnets, NAT gateway, and custom routing.", tags: ["VPC", "Subnets", "Routing"] },
              { title: "Serverless Image Processing", color: "#f0522a", desc: "Event-driven image processing pipeline with automatic resizing and CDN distribution.", tags: ["Lambda", "S3", "API GW"] },
              { title: "Global Media Delivery", color: "#00f5c4", desc: "Low-latency content delivery to 200+ edge locations worldwide.", tags: ["CloudFront", "Edge", "S3"] },
              { title: "Serverless Task Board", color: "#7c6dfa", desc: "Fully serverless task management with real-time notifications.", tags: ["DynamoDB", "SNS", "SES"] },
              { title: "Blue/Green Deployment", color: "#28c840", desc: "Zero-downtime deployment strategy with automated rollback capabilities.", tags: ["Beanstalk", "Terraform"] },
              { title: "Automated IAM Provisioning", color: "#f0c040", desc: "Bulk IAM user provisioning from CSV with least-privilege policies.", tags: ["Terraform", "IAM", "CSV"] },
              { title: "Static Website Hosting", color: "#00f5c4", desc: "Globally distributed static hosting with SSL and infrastructure-as-code.", tags: ["S3", "CloudFront", "Terraform"] },
            ].map((project, i) => (
              <div key={i} className="project-card animate-on-scroll glass-panel p-8 rounded-xl border-[var(--border)] relative group cursor-pointer flex flex-col h-full hover:border-white/20 overflow-hidden" style={{transitionDelay: `${(i%3)*100}ms`}}>
                <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}`}} />
                
                <div className="mb-8 w-14 h-14 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center transition-all group-hover:scale-110" style={{ color: project.color, boxShadow: `0 0 20px ${project.color}30` }}>
                  <Terminal size={24} />
                </div>
                <h4 className="font-display text-2xl mb-3 group-hover:text-white transition-colors">{project.title}</h4>
                <p className="text-[#5a6080] text-sm mb-8 flex-grow leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[#5a6080] group-hover:border-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-8 right-8 text-[#5a6080] project-arrow transition-transform duration-300">
                  <ExternalLink size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-32 px-6 relative border-t border-[var(--border)] bg-[var(--bg-deep)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 animate-on-scroll">
            <div className="h-[1px] w-12 bg-[#f0c040]" />
            <h2 className="font-mono text-[#f0c040] uppercase tracking-widest text-sm drop-shadow-[0_0_8px_rgba(240,192,64,0.5)]">The Weapons of Choice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Cloud & Infrastructure",
                color: "#f0c040",
                skills: ["AWS", "Terraform", "CloudFormation", "Ansible", "Pulumi"]
              },
              {
                title: "DevOps & CI/CD",
                color: "#00f5c4",
                skills: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI"]
              },
              {
                title: "Development & Scripting",
                color: "#7c6dfa",
                skills: ["Python", "Bash", "Node.js", "Git", "Linux"]
              }
            ].map((category, idx) => (
              <div key={idx} className="animate-on-scroll" style={{transitionDelay: `${idx*150}ms`}}>
                <h3 className="font-display text-2xl mb-8 text-white flex items-center gap-3">
                  <span className="w-3 h-3 rounded-sm" style={{backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}`}}/>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={skill} className="glass-panel p-5 rounded-lg border-[var(--border)] hover:border-white/20 transition-all duration-300 hover:translate-x-2 group relative overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{backgroundColor: category.color}} />
                      <div className="flex justify-between items-center font-mono text-sm relative z-10">
                        <span className="group-hover:text-white transition-colors text-[#e8eaf0]">{skill}</span>
                        <div className="w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all" style={{backgroundColor: category.color, boxShadow: `0 0 8px ${category.color}`}} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section id="stats-container" ref={statsRef} className="py-24 px-6 border-y border-[var(--border)] bg-[#070810] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f5c4]/5 via-transparent to-[#7c6dfa]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { num: "12", suffix: "+", label: "Projects Delivered", color: "#00f5c4" },
            { num: "99", suffix: ".9%", label: "Uptime Achieved", color: "#7c6dfa" },
            { num: "10", suffix: "+", label: "AWS Services", color: "#f0c040" },
            { num: "3", suffix: "+", label: "Years Building", color: "#f0522a" },
          ].map((stat, i) => (
            <div key={i} className="animate-on-scroll group" style={{transitionDelay: `${i*100}ms`}}>
              <div className="font-display text-5xl md:text-6xl mb-3 transition-transform group-hover:scale-110 duration-300" style={{color: stat.color, textShadow: `0 0 20px ${stat.color}60`}}>
                {statsVisible ? stat.num : "0"}{stat.suffix}
              </div>
              <div className="text-sm text-[#5a6080] font-mono tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative bg-[var(--bg-deep)]">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[#00f5c4] font-mono text-xs mb-8 glow-cyan">
            <div className="w-2 h-2 bg-[#00f5c4] rounded-full animate-pulse" />
            AVAILABLE FOR HIRE
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">Let's Build Something</h2>
          <p className="text-xl text-[#5a6080] mb-16 font-sans font-light max-w-2xl mx-auto">Open to new opportunities, collaborations, and interesting problems that require scalable solutions.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={copyEmail}
              className="relative glass-panel group overflow-hidden px-8 py-5 rounded-xl border border-[#00f5c4]/40 hover:border-[#00f5c4] transition-all flex items-center justify-center gap-4 box-glow-cyan w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-[#00f5c4]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 font-mono text-[#e8eaf0] text-lg">{copied ? "Copied to clipboard!" : "muqaddam@example.com"}</span>
              <span className="relative z-10 text-[#00f5c4]">{copied ? <Check size={24} /> : <Copy size={24} />}</span>
            </button>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <a href="#" className="glass-panel p-5 rounded-xl border border-[var(--border)] hover:border-white/30 transition-all flex items-center justify-center hover:-translate-y-1 w-full sm:w-auto group">
                <Github size={24} className="text-[#e8eaf0] group-hover:text-white transition-colors" />
              </a>
              
              <a href="#" className="glass-panel p-5 rounded-xl border border-[var(--border)] hover:border-white/30 transition-all flex items-center justify-center hover:-translate-y-1 w-full sm:w-auto group">
                <Linkedin size={24} className="text-[#e8eaf0] group-hover:text-[#0077b5] transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="mt-20 flex items-center justify-center gap-3 font-mono text-sm text-[#5a6080]">
            <span className="text-xl">📍</span> <span className="uppercase tracking-widest">Karachi, Pakistan</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#00f5c4]/20 shadow-[0_-4px_30px_rgba(0,245,196,0.05)] bg-[#04050d] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-sm text-[#5a6080]">
            © 2025 Muqaddam — Built with ☁️ & ❤️
          </div>
          
          <div className="flex items-center gap-6 font-mono text-xs text-[#5a6080]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span>•</span>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-2 font-mono text-xs text-[#28c840] drop-shadow-[0_0_5px_rgba(40,200,64,0.5)]">
            <div className="w-2 h-2 bg-[#28c840] pulse-dot" />
            All systems operational
          </div>
        </div>
      </footer>
    </div>
  );
}