"use client";

import Intro from "@/src/components/Intro";
import Countdown from "@/src/components/Countdown";
import BirthdayReveal from "@/src/components/BirthdayReveal";
import MemoryGallery from "@/src/components/MemoryGallery";
//import Timeline from "@/components/Timeline";
//import SecretLetter from "@/components/SecretLetter";
//import SecretMessage from "@/components/SecretMessage";
//import FinalChapter from "@/components/FinalChapter";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Intro />

      <Countdown />

      <BirthdayReveal />

      <MemoryGallery />

     {/* <Timeline />

      <SecretLetter />

      <SecretMessage />

      <FinalChapter />*/}
    </main>
  );
}