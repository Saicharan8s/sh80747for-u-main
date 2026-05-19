import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Heart, Music, Music2, Lock, X, Sparkles, Mail, Upload, Trash2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: BirthdayPage,
});

// ============================================================================
// CONFIG — easy to edit
// ============================================================================
const SECRET_CODE = "80747sH"; // change to your private code
const UPLOADS_KEY = "private-gallery-uploads-v1";
const MUSIC_SRC = "/music.mp3"; // drop a file at public/music.mp3 (optional)

// Replace these with your own image URLs (or imports from src/assets)
import her1 from "@/assets_pics/her1.jpg";
import her2 from "@/assets_pics/her2.jpg";
import her3 from "@/assets_pics/her3.jpg";
import her4 from "@/assets_pics/her4.jpg";
import her5 from "@/assets_pics/her5.jpg";
import her6 from "@/assets_pics/her6.jpg";
import her7 from "@/assets_pics/her7.jpg";
import her8 from "@/assets_pics/her8.jpg";
import her9 from "@/assets_pics/her9.jpg";
import her10 from "@/assets_pics/her10.jpg";
import her11 from "@/assets_pics/her1.jpg";
import her12 from "@/assets_pics/her12.jpg";
import her13 from "@/assets_pics/her13.jpg";
import her14 from "@/assets_pics/her14.jpg";
import her15 from "@/assets_pics/her15.jpg";
import her16 from "@/assets_pics/her16.jpg";
import her17 from "@/assets_pics/her17.jpg";
import her18 from "@/assets_pics/her18.jpg";

const GALLERY = [
  her1,
  her2,
  her3,
  her4,
  her5,
  her6,
  her7,
  her8,
  her9,
  her10,
  her11,
  her12,
  her13,
  her14,
  her15,
  her16,
  her17,
  her18,
];

import us1 from "@/assets_pics/us1.jpg";
import us2 from "@/assets_pics/us2.jpg";
import us3 from "@/assets_pics/us3.jpg";
import us4 from "@/assets_pics/us4.jpg";
import us5 from "@/assets_pics/us5.jpg";
import us6 from "@/assets_pics/us6.jpg";
import us7 from "@/assets_pics/us7.jpg";
import us8 from "@/assets_pics/us8.jpg";
import us9 from "@/assets_pics/us9.jpg";

const PRIVATE_GALLERY = [us1, us2, us3, us4, us5, us6, us7, us8, us9];

const TIMELINE = [
  {
    date: "The First Hello",
    text: "The moment our story started — quietly, but it changed everything.",
  },
  {
    date: "Endless Conversations",
    text: "Random chats, video calls, small moments and somehow every conversation became special.",
  },
  {
    date: "The Comfort",
    text: "Some people bring peace without even trying. You became one of them for me.",
  },
  {
    date: "Our First Trip",
    text: "New places, comfortable silence, happy moments and memories I still replay in my mind.",
  },
  { date: "Today", text: "Another year of you — and I still feel lucky every single day." },
];

const LOVE_NOTES = [
  "You make ordinary moments feel special.",
  "Some connections are hard to explain, but easy to value.",
  "I don't have to explain how important you are to me.",
  "Your smile carries a different kind of comfort.",
];

// ============================================================================
// FLOATING HEARTS BACKGROUND
// ============================================================================
function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        size: 10 + Math.random() * 22,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-pink-400"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
            filter: "drop-shadow(0 0 8px rgba(255,143,177,0.6))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

// ============================================================================
// HERO
// ============================================================================
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center px-6 text-center"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.3em] text-pink-500"
        >
          <Sparkles className="h-3 w-3" /> a little something for you
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="font-script text-6xl leading-[1.05] text-gradient sm:text-7xl md:text-8xl"
        >
          Happy Birthday
          <br />
          Hema sri <span className="inline-block">💕</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl font-serif text-lg italic text-pink-700/80 md:text-xl"
        >
          A whole page just for you — because words on a card never felt like enough.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-pink-400/70"
        >
          {/* <span>scroll, my love</span> */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-10 w-[1px] bg-gradient-to-b from-pink-400 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// GALLERY
// ============================================================================
function Gallery() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <SectionHeader eyebrow="moments" title="frames of us" />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {GALLERY.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.12 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className={`group relative overflow-hidden rounded-2xl glass ${
              i % 5 === 0 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-square"
            }`}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// TIMELINE
// ============================================================================
function Timeline() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <SectionHeader eyebrow="our story" title="a little timeline" />
      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-pink-300 via-blue-300 to-pink-300 md:left-1/2 md:-translate-x-1/2" />
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.date}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className={`relative mb-12 flex w-full md:mb-16 ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div
              className={`ml-12 w-full md:ml-0 md:w-[45%] ${
                i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
              }`}
            >
              <div className="glass rounded-2xl p-6 transition-shadow hover:glow-pink">
                <div className="font-script text-2xl text-gradient">{item.date}</div>
                <p className="mt-2 font-serif text-base italic text-pink-900/70 md:text-lg">
                  {item.text}
                </p>
              </div>
            </div>
            <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="h-4 w-4 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 glow-pink"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// SURPRISE BUTTON
// ============================================================================
function SurpriseButton({ onExplode }: { onExplode: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center px-3 py-12 text-center md:py-32">
      <SectionHeader eyebrow="" title="click on that" />
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExplode}
        className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-400 via-pink-300 to-blue-300 px-10 py-5 font-serif text-lg italic text-white glow-pink transition-shadow hover:glow-blue"
      >
        <Heart className="h-5 w-5 fill-white" />
        A little Note
        <Sparkles className="h-5 w-5" />
      </motion.button>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-pink-400/70"></p>
    </section>
  );
}

// ============================================================================
// LOVE NOTES
// ============================================================================
function LoveNotes() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <SectionHeader eyebrow="from me, to you" title="what i never say enough" />
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
        {LOVE_NOTES.map((note, i) => (
          <motion.blockquote
            key={note}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: i * 0.15 }}
            className="relative overflow-hidden rounded-3xl glass p-8 md:p-10"
          >
            <Heart className="absolute -right-4 -top-4 h-24 w-24 text-pink-200/40" />
            <p className="relative font-serif text-xl italic leading-relaxed text-pink-900/80 md:text-2xl">
              "{note}"
            </p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// HEART EXPLOSION
// ============================================================================
function HeartExplosion({ show, onDone }: { show: boolean; onDone: () => void }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [show, onDone]);

  const hearts = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 1400,
        rotate: Math.random() * 720 - 360,
        scale: 0.6 + Math.random() * 1.6,
        delay: Math.random() * 0.4,
      })),
    [],
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-radial from-pink-200/40 via-transparent to-transparent"
            style={{
              background: "radial-gradient(circle, rgba(255,182,200,0.5), transparent 60%)",
            }}
          />
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
              animate={{ x: h.x, y: h.y, scale: h.scale, rotate: h.rotate, opacity: 0 }}
              transition={{ duration: 2.4, delay: h.delay, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-4xl"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,143,177,0.8))" }}
            >
              {["💖", "💕", "💗", "💝", "✨"][h.id % 5]}
            </motion.div>
          ))}
          <div className="max-w-2xl mx-auto p-8 rounded-[40px] bg-white/10 backdrop-blur-lg shadow-2xl text-center">
            <h3 className="text-4xl font-bold mb-6 text-pink-400">Happy Birthday Nana 💗</h3>

            <p className="text-lg leading-8 text-gray-700">
              You are one of the sweetest and most special people to me. Your innocence, your cute
              little expressions, and your smile honestly make my day better. You make even simple
              moments feel beautiful without even trying. I always want to see you smiling, staying
              happy, achieving all your dreams, and being the lovely person you are. Wishing you
              lots of happiness, love, and beautiful moments today and always. once again Happy
              Birthday Birthday Birthday raa 🎂❤️✨
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// PRIVATE GALLERY (password-protected)
// ============================================================================
function PrivateGallery({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"password" | "unlocked">("password");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [uploads, setUploads] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // load saved uploads
  useEffect(() => {
    try {
      const raw = localStorage.getItem(UPLOADS_KEY);
      if (raw) setUploads(JSON.parse(raw));
    } catch (err) {
      console.log(err);
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(UPLOADS_KEY, JSON.stringify(uploads));
    } catch (err) {
      console.log(err);
    }
  }, [uploads]);

  useEffect(() => {
    if (!open) {
      setStep("password");
      setCode("");
      setError("");
    }
  }, [open]);

  const tryUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === SECRET_CODE) {
      setError("");
      setStep("unlocked");
    } else {
      setError(" try again ");
    }
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const readers = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }),
      );
    Promise.all(readers).then((urls) => setUploads((prev) => [...urls, ...prev]));
  };

  const removeUpload = (idx: number) => {
    setUploads((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{ background: "rgba(40, 10, 30, 0.45)", backdropFilter: "blur(18px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl glass-dark p-8 shadow-2xl md:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/40 p-2 text-pink-700 transition hover:bg-white/70"
            >
              <X className="h-4 w-4" />
            </button>

            {step === "password" ? (
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-blue-300 text-white glow-pink"
                >
                  <Lock className="h-7 w-7" />
                </motion.div>
                <h3 className="font-script text-4xl text-gradient">our little secrets</h3>
                <p className="mt-2 font-serif italic text-pink-800/70"></p>

                <form onSubmit={tryUnlock} className="mx-auto mt-8 max-w-sm">
                  <input
                    autoFocus
                    type="password"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError("");
                    }}
                    placeholder="enter the secret"
                    className="w-full rounded-full border border-pink-200 bg-white/70 px-6 py-4 text-center font-serif text-lg italic text-pink-900 placeholder-pink-300 outline-none transition focus:border-pink-400 focus:glow-pink"
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-3 font-serif italic text-pink-600"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-400 to-blue-300 py-3 font-serif text-lg italic text-white glow-pink transition hover:scale-[1.02]"
                  >
                    Unlock
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-center font-script text-4xl text-gradient">just for us 💕</h3>
                <p className="mt-2 text-center font-serif italic text-pink-800/70"></p>

                {/* Uploader */}
                <div className="mt-6">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      handleFiles(e.target.files);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-pink-300 bg-white/40 px-6 py-5 font-serif italic text-pink-700 transition hover:bg-white/60 hover:glow-pink"
                  >
                    <Upload className="h-4 w-3" />
                    <span>add photos</span>
                  </motion.button>

                  {uploads.length > 0 && (
                    <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-pink-400/80">
                      {uploads.length} of your photo{uploads.length === 1 ? "" : "s"} saved on this
                      device
                    </p>
                  )}
                </div>

                <div className="mt-6 grid max-h-[55vh] grid-cols-2 gap-3 overflow-y-auto pr-1 md:grid-cols-3">
                  {uploads.map((src, i) => (
                    <motion.div
                      key={`u-${i}-${src.slice(-20)}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="group relative aspect-square overflow-hidden rounded-xl shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`Yours ${i + 1}`}
                        className="h-full w-full object-contain"
                      />
                      <button
                        onClick={() => removeUpload(i)}
                        aria-label="Remove photo"
                        className="absolute right-1.5 top-1.5 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition group-hover:opacity-100 focus:opacity-100"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ))}
                  {PRIVATE_GALLERY.map((src, i) => (
                    <motion.img
                      key={src}
                      src={src}
                      alt={`Private ${i + 1}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="aspect-square w-full rounded-xl object-cover shadow-lg"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// MUSIC TOGGLE
// ============================================================================
function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = async () => {
    if (!audioRef.current) return;
    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.volume = 0.4;
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      // no audio file present yet — silently ignore
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="none" />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full glass text-pink-600 shadow-lg glow-pink"
        aria-label="Toggle music"
      >
        <motion.div
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 4, repeat: playing ? Infinity : 0, ease: "linear" }}
        >
          {playing ? <Music2 className="h-5 w-5" /> : <Music className="h-5 w-5" />}
        </motion.div>
      </motion.button>
    </>
  );
}

// ============================================================================
// SECTION HEADER
// ============================================================================
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-center"
    >
      <p className="text-xs uppercase tracking-[0.4em] text-pink-400">{eyebrow}</p>
      <h2 className="mt-3 font-script text-5xl text-gradient md:text-6xl">{title}</h2>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================
function BirthdayPage() {
  const [explode, setExplode] = useState(false);
  const [privateOpen, setPrivateOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* soft gradient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
      </div>

      <FloatingHearts />

      <div className="relative z-10">
        <Hero />
        <Gallery />
        <Timeline />
        <SurpriseButton onExplode={() => setExplode(true)} />
        <LoveNotes />

        <footer className="relative px-6 py-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="font-script text-3xl text-gradient md:text-4xl"
          >
            forever yours 💕
          </motion.p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-pink-400/70">
            made with love, just for you
          </p>
        </footer>
      </div>

      {/* Hidden love letter — opens private gallery */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.15, rotate: -6 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setPrivateOpen(true)}
        aria-label="Open private gallery"
        className="fixed bottom-6 left-6 z-50 flex h-2 w-2 items-center justify-center rounded-full glass text-pink-200 shadow-lg glow-pink"
      >
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <Mail className="h-5 w-5" />
        </motion.div>
      </motion.button>

      <MusicToggle />
      <HeartExplosion show={explode} onDone={() => setExplode(false)} />
      <PrivateGallery open={privateOpen} onClose={() => setPrivateOpen(false)} />
    </main>
  );
}
