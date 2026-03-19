import { useState, useEffect } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&family=DM+Mono:wght@400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --c1: #f43f8e;
    --c2: #f97316;
    --c3: #06b6d4;
    --c4: #8b5cf6;
    --c5: #10b981;
    --c6: #facc15;
  }

  .page {
    background: linear-gradient(135deg, #e0e7ff 0%, #fce7f3 40%, #cffafe 80%, #fef9c3 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    font-family: 'Nunito', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .bg-blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.45; pointer-events: none; }
  .bg-blob-1 { width: 400px; height: 400px; background: #c4b5fd; top: -100px; left: -100px; animation: drift1 8s ease-in-out infinite; }
  .bg-blob-2 { width: 350px; height: 350px; background: #fbcfe8; bottom: -80px; right: -80px; animation: drift2 10s ease-in-out infinite; }
  .bg-blob-3 { width: 260px; height: 260px; background: #a5f3fc; top: 50%; left: 60%; animation: drift3 7s ease-in-out infinite; }
  @keyframes drift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,30px)} }
  @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,-40px)} }
  @keyframes drift3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,30px)} }

  .card {
    background: rgba(255,255,255,0.72);
    backdrop-filter: blur(24px);
    border: 1.5px solid rgba(255,255,255,0.9);
    border-radius: 36px;
    padding: 52px 60px 44px;
    box-shadow: 0 8px 40px rgba(139,92,246,0.12), 0 2px 8px rgba(244,63,142,0.08), inset 0 1px 0 rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
    z-index: 10;
  }

  .scene {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ring-rainbow {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #f43f8e, #f97316, #facc15, #10b981, #06b6d4, #8b5cf6, #f43f8e);
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 5px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 5px));
    animation: spin1 3s linear infinite;
    filter: drop-shadow(0 0 10px rgba(139,92,246,0.4));
  }
  @keyframes spin1 { to { transform: rotate(360deg); } }

  .ring-dash {
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    border: 2.5px dashed rgba(244,63,142,0.3);
    animation: spin2 6s linear infinite reverse;
  }
  @keyframes spin2 { to { transform: rotate(360deg); } }

  .ring-dots { position: absolute; inset: 36px; border-radius: 50%; animation: spin3 4s linear infinite; }
  .orbit-dot { position: absolute; border-radius: 50%; top: 50%; left: 50%; }
  @keyframes spin3 { to { transform: rotate(360deg); } }

  .ring-glow {
    position: absolute;
    inset: 60px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #06b6d4;
    border-right-color: #06b6d4;
    filter: drop-shadow(0 0 10px #06b6d4) drop-shadow(0 0 20px rgba(6,182,212,0.35));
    animation: spin4 2s cubic-bezier(0.68,-0.55,0.27,1.55) infinite;
  }
  @keyframes spin4 { to { transform: rotate(360deg); } }

  .center-wrap { position: absolute; inset: 88px; display: flex; align-items: center; justify-content: center; }
  .blob {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #c4b5fd, #fbcfe8, #a5f3fc);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: morph 3s ease-in-out infinite, blob-spin 8s linear infinite;
    box-shadow: 0 0 0 5px rgba(255,255,255,0.85), 0 8px 32px rgba(139,92,246,0.2), inset 0 2px 4px rgba(255,255,255,0.7);
    position: relative;
  }
  .blob::after {
    content: '';
    position: absolute;
    inset: 10px;
    background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.3));
    border-radius: inherit;
    animation: morph 3s ease-in-out infinite reverse;
  }
  @keyframes morph {
    0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    33%      { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    66%      { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
  }
  @keyframes blob-spin { to { transform: rotate(360deg); } }

  .sparkles { position: absolute; inset: 0; pointer-events: none; animation: sparks-spin 10s linear infinite reverse; }
  .sparkle { position: absolute; top: 50%; left: 50%; animation: sparkle-pop 2s ease-in-out infinite; }
  @keyframes sparks-spin { to { transform: rotate(360deg); } }
  @keyframes sparkle-pop {
    0%,100% { transform: scale(0.7) translate(-50%,-50%); opacity: 0.5; }
    50%      { transform: scale(1.4) translate(-50%,-50%); opacity: 1; }
  }

  .progress-wrap { width: 240px; display: flex; flex-direction: column; gap: 10px; }
  .progress-track { width: 100%; height: 8px; background: rgba(139,92,246,0.1); border-radius: 99px; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0,0,0,0.06); }
  .progress-fill {
    height: 100%;
    border-radius: 99px;
    background: linear-gradient(90deg, #8b5cf6, #f43f8e, #f97316);
    background-size: 200% 100%;
    animation: fill-shift 2s linear infinite;
    transition: width 0.3s ease;
    box-shadow: 0 0 12px rgba(244,63,142,0.4);
  }
  @keyframes fill-shift { 0%{background-position:0%} 100%{background-position:200%} }

  .progress-row { display: flex; justify-content: space-between; align-items: center; }
  .progress-label { font-family:'DM Mono',monospace; font-size:11px; font-weight:500; color:#8b5cf6; letter-spacing:1.5px; text-transform:uppercase; }
  .progress-pct { font-family:'DM Mono',monospace; font-size:13px; font-weight:500; color:#f43f8e; }

  .big-number {
    font-family: 'Nunito', sans-serif;
    font-size: 72px;
    font-weight: 900;
    line-height: 1;
    background: linear-gradient(135deg, #8b5cf6 0%, #f43f8e 50%, #f97316 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -3px;
    filter: drop-shadow(0 4px 12px rgba(244,63,142,0.15));
  }

  .status-pill { display:flex; align-items:center; gap:8px; background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.22); border-radius:99px; padding:6px 16px; }
  .status-dot { width:7px; height:7px; background:#10b981; border-radius:50%; animation:blink 1.2s ease-in-out infinite; box-shadow:0 0 8px #10b981; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .status-text { font-family:'DM Mono',monospace; font-size:11px; color:#10b981; letter-spacing:1px; font-weight:500; }

  .steps { display:flex; gap:8px; align-items:center; }
  .step { width:8px; height:8px; border-radius:50%; background:rgba(139,92,246,0.18); transition:all 0.4s ease; }
  .step.active { width:24px; border-radius:99px; background:linear-gradient(90deg,#8b5cf6,#f43f8e); box-shadow:0 0 10px rgba(244,63,142,0.35); }
  .step.done { background:#10b981; box-shadow:0 0 6px rgba(16,185,129,0.4); }
`;

const ORBIT_DOTS = [
  { angle: 0,   r: 95, size: 9, color: "#f43f8e" },
  { angle: 72,  r: 95, size: 7, color: "#f97316" },
  { angle: 144, r: 95, size: 9, color: "#facc15" },
  { angle: 216, r: 95, size: 7, color: "#10b981" },
  { angle: 288, r: 95, size: 9, color: "#8b5cf6" },
];

const INNER_DOTS = [
  { angle: 0,   r: 58, size: 6, color: "#06b6d4" },
  { angle: 120, r: 58, size: 6, color: "#f43f8e" },
  { angle: 240, r: 58, size: 6, color: "#facc15" },
];

const SPARKLE_POS = [
  { top: "3%",  left: "48%", delay: "0s",   emoji: "✦", color: "#f43f8e", size: 16 },
  { top: "48%", left: "97%", delay: "0.4s", emoji: "✧", color: "#8b5cf6", size: 11 },
  { top: "93%", left: "50%", delay: "0.8s", emoji: "✦", color: "#f97316", size: 16 },
  { top: "48%", left: "1%",  delay: "1.2s", emoji: "✧", color: "#06b6d4", size: 11 },
  { top: "13%", left: "83%", delay: "0.2s", emoji: "⊹", color: "#facc15", size: 13 },
  { top: "80%", left: "16%", delay: "1s",   emoji: "⊹", color: "#10b981", size: 13 },
];

const MESSAGES = ["Warming up…", "Fetching magic…", "Almost ready…", "Polishing pixels…", "Done soon!"];

function useCounter(end = 100, duration = 7000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const raf = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return val;
}

export default function LoadingSpinner() {
  const pct = useCounter(100, 7000);
  const step = Math.min(Math.floor(pct / 20), 4);
  const msgIdx = Math.min(Math.floor(pct / 20), MESSAGES.length - 1);

  return (
    <>
      <style>{style}</style>
      <div className="page">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />

        <div className="card">
          <div className="scene">
            <div className="ring-rainbow" />
            <div className="ring-dash" />

            {/* outer orbit dots */}
            <div className="ring-dots">
              {ORBIT_DOTS.map((d, i) => {
                const rad = (d.angle * Math.PI) / 180;
                const x = Math.cos(rad) * d.r;
                const y = Math.sin(rad) * d.r;
                return (
                  <div key={i} className="orbit-dot" style={{
                    width: d.size, height: d.size, background: d.color, borderRadius: "50%",
                    boxShadow: `0 0 ${d.size * 3}px ${d.size}px ${d.color}44`,
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                  }} />
                );
              })}
            </div>

            <div className="ring-glow" />

            {/* inner orbit dots */}
            <div className="ring-dots" style={{ inset: 58, animationDuration: "5s", animationDirection: "reverse" }}>
              {INNER_DOTS.map((d, i) => {
                const rad = (d.angle * Math.PI) / 180;
                const x = Math.cos(rad) * d.r;
                const y = Math.sin(rad) * d.r;
                return (
                  <div key={i} className="orbit-dot" style={{
                    width: d.size, height: d.size, background: d.color, borderRadius: "50%",
                    boxShadow: `0 0 14px 4px ${d.color}77`,
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                  }} />
                );
              })}
            </div>

            <div className="center-wrap">
              <div className="blob" />
            </div>

            <div className="sparkles">
              {SPARKLE_POS.map((s, i) => (
                <span key={i} className="sparkle" style={{
                  top: s.top, left: s.left, color: s.color,
                  animationDelay: s.delay, fontSize: s.size,
                }}>{s.emoji}</span>
              ))}
            </div>
          </div>

          <div className="big-number">{String(pct).padStart(2, "0")}%</div>

          <div className="progress-wrap">
            <div className="progress-row">
              <span className="progress-label">{MESSAGES[msgIdx]}</span>
              <span className="progress-pct">{pct}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className="steps">
            {[0,1,2,3,4].map(i => (
              <div key={i} className={`step ${i === step ? "active" : i < step ? "done" : ""}`} />
            ))}
          </div>

          <div className="status-pill">
            <div className="status-dot" />
            <span className="status-text">LOADING · PLEASE WAIT</span>
          </div>
        </div>
      </div>
    </>
  );
}