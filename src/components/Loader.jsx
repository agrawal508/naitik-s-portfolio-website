import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FULL_NAME = "Naitik Agarwal";
const TYPING_SPEED = 80;
const PROGRESS_DURATION = 2200;

const Loader = ({ onComplete }) => {
    const [displayedChars, setDisplayedChars] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [progress, setProgress] = useState(0);
    const [exiting, setExiting] = useState(false);
    const [done, setDone] = useState(false);
    const intervalRef = useRef(null);

    // --- Typewriter ---
    useEffect(() => {
        let i = 0;
        const typeTimer = setInterval(() => {
            i++;
            setDisplayedChars(i);
            if (i >= FULL_NAME.length) {
                clearInterval(typeTimer);
                setTimeout(() => setShowCursor(false), 500);
            }
        }, TYPING_SPEED);
        return () => clearInterval(typeTimer);
    }, []);

    // --- Organic counter ---
    useEffect(() => {
        let current = 0;
        const endTime = Date.now() + PROGRESS_DURATION;
        intervalRef.current = setInterval(() => {
            const remaining = endTime - Date.now();
            if (remaining <= 0) {
                setProgress(100);
                clearInterval(intervalRef.current);
                return;
            }
            const elapsed = PROGRESS_DURATION - remaining;
            const natural = Math.floor((elapsed / PROGRESS_DURATION) * 100);
            const jitter = Math.floor(Math.random() * 3);
            current = Math.min(100, Math.max(current, natural + jitter));
            setProgress(current);
        }, 40);
        return () => clearInterval(intervalRef.current);
    }, []);

    // --- Trigger exit zoom when done ---
    useEffect(() => {
        if (progress >= 100) {
            const t = setTimeout(() => {
                setExiting(true);
                // After zoom+fade out, unmount
                setTimeout(() => {
                    setDone(true);
                    if (onComplete) onComplete();
                }, 700);
            }, 250);
            return () => clearTimeout(t);
        }
    }, [progress, onComplete]);

    // Lock scroll while visible
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    if (done) return null;

    return (
        <motion.div
            style={overlayStyle}
            animate={exiting
                ? { opacity: 0, scale: 1.08 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* PORTFOLIO label */}
            <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={labelStyle}
            >
                PORTFOLIO
            </motion.span>

            {/* Name with typewriter + glow once done typing */}
            <motion.div
                initial={{ opacity: 0, scale: 0.88, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={nameWrapStyle}
            >
                <span
                    style={{
                        ...nameStyle,
                        // Glow kicks in when cursor disappears (typing done)
                        textShadow: !showCursor
                            ? '0 0 18px rgba(0,0,0,0.18), 0 0 40px rgba(0,0,0,0.10)'
                            : 'none',
                        transition: 'text-shadow 0.6s ease',
                    }}
                >
                    {FULL_NAME.slice(0, displayedChars)}
                </span>
                {showCursor && (
                    <span style={cursorStyle}>|</span>
                )}
            </motion.div>

            {/* SVG underline / draw-on rule */}
            <motion.svg
                width="260" height="2" viewBox="0 0 260 2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                style={{ marginBottom: '14px', overflow: 'visible' }}
            >
                {/* Track */}
                <line x1="0" y1="1" x2="260" y2="1" stroke="#e0e0e0" strokeWidth="1" />
                {/* Animated fill */}
                <motion.line
                    x1="0" y1="1"
                    x2="260" y2="1"
                    stroke="#111111"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.08, ease: 'linear' }}
                    style={{
                        boxShadow: progress === 100 ? '0 0 8px rgba(0,0,0,0.5)' : 'none',
                    }}
                />
            </motion.svg>

            {/* Percentage */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                style={percentStyle}
            >
                {String(progress).padStart(3, '\u00A0')}%
            </motion.span>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
        </motion.div>
    );
};

/* ── styles ── */
const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const labelStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '11px',
    color: '#aaa',
    letterSpacing: '0.3em',
    marginBottom: '22px',
    textTransform: 'uppercase',
    userSelect: 'none',
};

const nameWrapStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: '52px',
    marginBottom: '32px',
};

const nameStyle = {
    fontSize: '38px',
    fontWeight: 700,
    color: '#111111',
    letterSpacing: '-1px',
    lineHeight: 1,
};

const cursorStyle = {
    color: '#111111',
    fontSize: '38px',
    fontWeight: 300,
    lineHeight: 1,
    marginLeft: '2px',
    animation: 'blink 0.75s step-end infinite',
};

const percentStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '11px',
    color: '#aaa',
    letterSpacing: '0.15em',
    userSelect: 'none',
    marginTop: '10px',
};

export default Loader;
