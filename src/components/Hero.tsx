import { useEffect, useRef, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const TYPEWRITER_TEXT =
  "I'm Jinix Chacko. Architecting digital twins & explainable systems.";

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

// Tech Crosshair SVG
function Crosshair({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2v6m0 8v6M2 12h6m8 0h6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liveMetric, setLiveMetric] = useState(142);
  const videoRef = useRef<HTMLVideoElement>(null);
  // HUD Metric Jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetric(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);


  async function handleCopy() {
    try {
      await navigator.clipboard.writeText('jinixch@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable, no-op */
    }
  }

  const whitePills = [
    { label: 'View PREHAB 2.0', href: '#work' },
    { label: 'Read Publications', href: '#research' },
  ];

  return (
    <section
      id="top"
      className="relative h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden bg-[#0a0a0a]"
    >
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4"
        muted
        playsInline
        preload="auto"
        autoPlay
        loop
        className="fixed inset-0 z-0 object-cover w-full h-full opacity-60 mix-blend-luminosity"
        style={{ objectPosition: '70% center', filter: 'contrast(1.2)' }}
      />
      {/* Scanline / Grid Overlay */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* HUD Elements */}
      <Crosshair className="absolute top-8 left-8 text-white hidden md:block z-10" />
      <Crosshair className="absolute top-8 right-8 text-white hidden md:block z-10" />
      <Crosshair className="absolute bottom-8 left-8 text-white hidden md:block z-10" />
      
      {/* HUD Code Snippet Top Right */}
      <div className="absolute top-24 right-10 z-10 hidden lg:block border border-white/10 bg-black/40 backdrop-blur-md p-4 rounded-lg font-mono text-[11px] text-emerald-400 w-64 shadow-2xl animate-float">
        <div className="flex gap-2 mb-2 pb-2 border-b border-white/10 opacity-60">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        </div>
        <div className="opacity-80">
          <span className="text-white">import</span> torch<br/>
          <span className="text-white">import</span> shap<br/>
          <br/>
          <span className="text-white/40"># Initialize Digital Twin</span><br/>
          model = PrehabGNN()<br/>
          state = sync_wearable_stream()<br/>
          risk_score = model.predict(state)<br/>
          <br/>
          <span className="text-white/40"># XAI Explainer</span><br/>
          explainer = shap.Explainer(model)<br/>
          shap_values = explainer(state)
        </div>
      </div>

      {/* HUD Live Metrics Bottom Right */}
      <div className="absolute bottom-12 right-10 z-10 hidden md:flex flex-col gap-4 animate-float-delayed">
        <div className="border border-white/10 bg-black/40 backdrop-blur-md p-4 rounded-lg shadow-2xl w-56 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">
            <span>System Status</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> ONLINE</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-white/40 text-[11px]">Active Nodes</span>
            <span className="text-white font-mono text-[14px]">1,204,592</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-white/40 text-[11px]">Inf. Latency</span>
            <span className="text-white font-mono text-[14px]">{liveMetric}ms</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-white/40 text-[11px]">Sync Rate</span>
            <span className="text-white font-mono text-[14px]">30 FPS</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl relative z-10">
        <p
          aria-hidden="true"
          className="pointer-events-none select-none mb-3 sm:mb-4 flex items-center gap-3"
        >
          <span className="text-emerald-400 font-mono" style={{ fontSize: '13px', letterSpacing: '0.1em' }}>
            &gt; SYSTEM AUTH: JINIX_CHACKO
          </span>
          <span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-sm text-emerald-400 rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(16,185,129,1)]"></span>
            Available for Hire
          </span>
        </p>

        <p
          className="text-white mb-6 sm:mb-8"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 5vw, 42px)',
            lineHeight: 1.25,
            fontWeight: 600,
            minHeight: 105,
          }}
        >
          {displayed}
          {!done && (
            <span
              className="cursor-blink inline-block w-[3px] h-[1em] bg-emerald-400 align-middle ml-[4px]"
              aria-hidden="true"
            />
          )}
        </p>

        <div className="flex flex-wrap gap-y-1 mt-4">
          {whitePills.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              className="inline-flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-md text-white rounded-full text-[13px] sm:text-[14px] px-5 sm:px-6 py-[0.5em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              style={{
                opacity: pillsVisible ? 1 : 0,
                transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              {pill.label}
            </a>
          ))}

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-md text-emerald-400 rounded-full text-[13px] sm:text-[14px] px-5 sm:px-6 py-[0.5em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            {copied ? 'Link Copied \u2713' : (
              <>Contact: jinixch@gmail.com</>
            )}
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
