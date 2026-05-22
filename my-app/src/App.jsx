import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Hey LULU",
    body: "",
    accent: "#c0392b",
    bg: "from-[#1a0a0a] to-[#2d1515]",
    symbol: "✦",
  },
  {
    id: 2,
    title: "Happy I Had You",
    body: "Having you in my life made me happier than words could ever explain. You brought peace, love, and light into my world in a way nobody else ever could. No matter what happens, I’ll always be grateful that I got to call you mine.",
    accent: "#dd15b5",
    bg: "from-[#0d0916] to-[#1e0f2e]",
    symbol: "❧",
  },
  {
    id: 3,
    title: "Time Stands Still",
    body: "Every time I talk to you, it feels like the weight of the whole world disappears for a moment. No matter how stressful or exhausting my day is, your voice somehow brings me peace and reminds me that I have someone truly special in my life.",
    accent: "#8e44ad",
    bg: "from-[#0d0916] to-[#1e0f2e]",
    symbol: "❧",
  },
  {
    id: 4,
    title: "Soft Soul",
    body: "Sometimes I sit quietly and think about how lucky I am to have you. Out of all the people in this world, life somehow brought me someone as beautiful, genuine, and loving as you, and I’ll never stop being grateful for that.",
    accent: "#d4856a",
    bg: "from-[#1a0d08] to-[#2e1a10]",
    symbol: "♡",
  },
  {
    id: 5,
    title: "You Are My Hope",
    body: "I have wandered through countless periods, knowing i have you in my life. That was enough reason to hold on and keep on pushing",
    accent: "#1abc9c",
    bg: "from-[#050f0d] to-[#0b1e1a]",
    symbol: "✧",
  },
  {
    id: 6,
    title: "Our Forever Begins Here",
    body: "No matter how much time passes, a part of my heart still misses you deeply. I honestly want you back in my life because things just don’t feel the same without your love, your presence, and the happiness you brought into my world. baby let's start afresh, one last chance.",
    accent: "#e8b86d",
    bg: "from-[#140e02] to-[#271b04]",
    symbol: "◈",
  },
];

const videos = [
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431288/43801B6E-FCFA-4388-8BC1-73152EB95A82_t9cjjh.mp4",
    caption: "",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431282/1C8640AB-624C-4FCE-9A53-8B2D03E885FE_m1m4nl.mp4",
    caption: "",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431323/E0C0A4AB-99D9-47CB-A829-8BCDD280D12E_uyde5v.mp4",
    caption: "My world through your eyes",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431316/C1948365-7FCA-4FAF-BD12-44FABA0B32CF_uw3o8w.mp4",
    caption: "My little duty",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431338/BDCA250D-E8EB-4DCB-A39F-DE318C656E51_rqqibq.mp4",
    caption: "",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431362/183FE9F9-5012-4E8D-B9D2-2DEFBD347BC6_tfwhp9.mp4",
    caption: "",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431303/C3ABD3C2-60C7-4901-9AFC-DC8CA6D7184A_pwcgxk.mp4",
    caption: "",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431387/AAB7F11F-7108-4114-A932-26FB8DCCB581_p4gu5r.mp4",
    caption: "Our early days",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431680/459A25CA-78B3-4CB8-ABA1-48F3A3ECD652_x9a3ps.mp4",
    caption: "Where every moment matters",
  },
  {
    src: "https://res.cloudinary.com/dasbpn3sm/video/upload/v1779431690/5E9F0F13-11FD-4EAA-9B26-126B35283353_uhbsgn.mp4",
    caption: "Happy i was here",
  },
];

const TOTAL = slides.length + 1;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 480);
  };

  const next = () => {
    if (current < TOTAL - 1) goTo(current + 1, "next");
  };

  const prev = () => {
    if (current > 0) goTo(current - 1, "prev");
  };

  const isVideoSlide = current === slides.length;
  const slide = !isVideoSlide ? slides[current] : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient background orb */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: slide
            ? `radial-gradient(circle, ${slide.accent}22 0%, transparent 70%)`
            : "radial-gradient(circle, #ffffff0a 0%, transparent 70%)",
          transition: "background 1s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Progress dots */}
      <div
        style={{
          position: "fixed",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 10,
        }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              background:
                i === current
                  ? slide
                    ? slide.accent
                    : "#fff"
                  : "rgba(255,255,255,0.25)",
              transition: "all 0.4s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 760,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          padding: "0 24px",
        }}
      >
        <div
          key={current}
          style={{
            width: "100%",
            opacity: animating ? 0 : 1,
            transform: animating
              ? direction === "next"
                ? "translateX(60px) scale(0.96)"
                : "translateX(-60px) scale(0.96)"
              : "translateX(0) scale(1)",
            transition: "opacity 0.45s ease, transform 0.45s ease",
          }}
        >
          {!isVideoSlide ? (
            <RomanticSlide slide={slide} />
          ) : (
            <VideoGallery />
          )}
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 24,
          zIndex: 10,
        }}
      >
        <NavButton
          onClick={prev}
          disabled={current === 0}
          label="← Prev"
          accent={slide?.accent}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: 13,
            fontFamily: "monospace",
            letterSpacing: 3,
          }}
        >
          {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
        <NavButton
          onClick={next}
          disabled={current === TOTAL - 1}
          label="Next →"
          accent={slide?.accent}
          primary
        />
      </div>
    </div>
  );
}

function RomanticSlide({ slide }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      {/* Decorative symbol */}
      <div
        style={{
          fontSize: 36,
          color: slide.accent,
          marginBottom: 32,
          opacity: 0.7,
          animation: "pulse 3s ease-in-out infinite",
        }}
      >
        {slide.symbol}
      </div>

      {/* Decorative line */}
      <div
        style={{
          width: 60,
          height: 1,
          background: `linear-gradient(to right, transparent, ${slide.accent}, transparent)`,
          margin: "0 auto 40px",
        }}
      />

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "#fff",
          letterSpacing: "0.04em",
          lineHeight: 1.2,
          marginBottom: 32,
          fontStyle: "italic",
          textShadow: `0 0 60px ${slide.accent}44`,
        }}
      >
        {slide.title}
      </h1>

      {/* Body */}
      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.9,
          maxWidth: 580,
          margin: "0 auto 40px",
          fontWeight: 300,
          letterSpacing: "0.02em",
        }}
      >
        {slide.body}
      </p>

      {/* Bottom line */}
      <div
        style={{
          width: 60,
          height: 1,
          background: `linear-gradient(to right, transparent, ${slide.accent}, transparent)`,
          margin: "0 auto",
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

function VideoGallery() {
  return (
    <div style={{ padding: "40px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.4)", marginBottom: 20, marginTop: 40 }}>
          ✦ ✦ ✦
        </div>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 400,
            color: "#fff",
            fontStyle: "italic",
            letterSpacing: "0.04em",
            marginBottom: 12,
          }}
        >
          Moments That Last Forever
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 15,
            letterSpacing: "0.12em",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
          }}
        >
          a collection of us
        </p>
        <div
          style={{
            width: 80,
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",
            margin: "24px auto 0",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
          maxWidth: 720,
          margin: "0 auto",
          padding: 14
        }}
      >
        {videos.map((v, i) => (
          <VideoCard key={i} video={v} index={i} />
        ))}
      </div>
    </div>
  );
}

function VideoCard({ video, index }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.play().catch(() => {});
    }
  }, []);

  const colors = ["#c0392b", "#8e44ad", "#1abc9c", "#e8b86d"];

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        aspectRatio: "16/9",
        border: `1px solid ${colors[index]}44`,
        boxShadow: `0 0 30px ${colors[index]}22`,
        cursor: "pointer",
      }}
    >
      <video
        ref={ref}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, ${colors[index]}cc 0%, transparent 55%)`,
        }}
      />
      {/* Caption */}
      <p
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#fff",
          fontSize: 13,
          fontStyle: "italic",
          letterSpacing: "0.03em",
          padding: "0 12px",
          margin: 0,
          textShadow: "0 1px 6px rgba(0,0,0,0.8)",
        }}
      >
        {video.caption}
      </p>
    </div>
  );
}

function NavButton({ onClick, disabled, label, accent, primary }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: primary && !disabled && accent ? `${accent}22` : "transparent",
        border: `1px solid ${!disabled ? (accent || "rgba(255,255,255,0.4)") : "rgba(255,255,255,0.1)"}`,
        color: !disabled ? "#fff" : "rgba(255,255,255,0.2)",
        padding: "10px 28px",
        borderRadius: 40,
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: 14,
        letterSpacing: "0.1em",
        fontFamily: "sans-serif",
        transition: "all 0.3s ease",
        backdropFilter: "blur(4px)",
      }}
    >
      {label}
    </button>
  );
}
