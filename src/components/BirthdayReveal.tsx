"use client";

import { motion } from "framer-motion";

export default function BirthdayReveal() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">

      <div className="absolute h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="relative text-center">

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-8xl font-light text-purple-200 sm:text-[160px]"
        >
          21
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-4xl font-light sm:text-6xl"
        >
          Happy Birthday.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-white/50"
        >
          Welcome to Chapter 21.
        </motion.p>

      </div>
    </section>
  );
}