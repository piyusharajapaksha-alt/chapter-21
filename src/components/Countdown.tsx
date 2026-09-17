"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const target = new Date("2026-09-22T00:00:00+05:30").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <section
      id="countdown"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <div className="text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.4em] text-purple-300"
        >
          Until September 22
        </motion.p>

        <h2 className="mt-5 text-4xl font-light sm:text-6xl">
          Your next chapter begins in
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">

          <TimeBox value={time.days} label="Days" />
          <TimeBox value={time.hours} label="Hours" />
          <TimeBox value={time.minutes} label="Minutes" />
          <TimeBox value={time.seconds} label="Seconds" />

        </div>

      </div>
    </section>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="glass rounded-3xl px-6 py-8">
      <div className="text-4xl font-light sm:text-5xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-2 text-xs uppercase tracking-widest text-white/40">
        {label}
      </div>
    </div>
  );
}