"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro() {
  const [started, setStarted] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05030a]">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {!started ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-6 text-center"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-purple-300">
            Something made just for you
          </p>

          <h1 className="text-5xl font-light tracking-tight sm:text-7xl">
            Before you turn
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              21...
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-white/50">
            I made something I hope you'll remember.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-10 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm transition hover:bg-white/10"
          >
            Enter →
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-purple-300">
            Welcome
          </p>

          <h2 className="mt-5 text-6xl font-light sm:text-8xl">
            Chapter <span className="text-purple-300">21</span>
          </h2>

          <p className="mt-6 text-white/50">
            A little world made for you.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("countdown")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 text-sm text-white/60 transition hover:text-white"
          >
            Continue ↓
          </button>
        </motion.div>
      )}
    </section>
  );
}