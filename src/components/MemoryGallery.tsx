"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { memories } from "@/src/data/memories";

export default function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen px-6 py-32">

      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-purple-300">
            21 little things
          </p>

          <h2 className="mt-4 text-4xl font-light sm:text-6xl">
            Things I remember.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-white/40">
            Twenty-one tiny pieces of you that stayed in my mind.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {memories.map((memory, index) => (

            <motion.button
              key={memory.number}
              onClick={() => setSelected(index)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="glass group rounded-3xl p-7 text-left transition"
            >

              <span className="text-sm text-purple-300">
                {memory.number}
              </span>

              <h3 className="mt-8 text-xl">
                {memory.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm text-white/40">
                {memory.text}
              </p>

              <span className="mt-8 block text-xs text-white/30">
                Open memory →
              </span>

            </motion.button>

          ))}

        </div>

      </div>

      {selected !== null && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-w-lg rounded-3xl p-8"
          >

            <span className="text-sm text-purple-300">
              {memories[selected].number}
            </span>

            <h3 className="mt-4 text-3xl font-light">
              {memories[selected].title}
            </h3>

            <p className="mt-6 leading-8 text-white/60">
              {memories[selected].text}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-8 rounded-full bg-white/10 px-6 py-3 text-sm"
            >
              Close
            </button>

          </motion.div>

        </div>

      )}

    </section>
  );
}