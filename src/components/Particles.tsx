import { motion } from "framer-motion";
import { useState } from "react";
import { particles } from "../data";

type Particle = {
  id: number;
  x: number;
  emoji: string;
  duration: number;
  delay: number;
};

function createParticles(): Particle[] {
  return Array.from({
    length: 35,
  }).map((_, i) => ({
    id: i,

    x: Math.random() * window.innerWidth,

    emoji: particles[Math.floor(Math.random() * particles.length)],

    duration: 5 + Math.random() * 8,

    delay: Math.random() * 5,
  }));
}

export default function Particles() {
  const [items] = useState<Particle[]>(createParticles);

  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            y: -100,
            x: item.x,
          }}
          animate={{
            y: window.innerHeight + 200,
          }}
          transition={{
            duration: item.duration,

            repeat: Infinity,

            delay: item.delay,
          }}
          style={{
            position: "absolute",

            zIndex: 1,

            fontSize: 25,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </>
  );
}
