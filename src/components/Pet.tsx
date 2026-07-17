import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  onClick: () => void;
  onMove: (x: number, y: number) => void;
};

export default function Pet({ text, onClick, onMove }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({
    x: 50,
    y: 200,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const x = Math.random() * (window.innerWidth - 250);

      const y = Math.random() * (window.innerHeight - 200);

      setPos({
        x,
        y,
      });

      onMove(x + 120, y + 40);
    }, 2500);

    return () => clearInterval(timer);
  }, [onMove]);

  return (
    <motion.div
      animate={{
        x: pos.x,

        y: pos.y,

        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
      }}
      style={{
        position: "absolute",

        zIndex: 3,
      }}
    >
      <Paper
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();

          onClick();
        }}
        sx={{
          padding: 3,

          fontSize: 30,

          borderRadius: 8,

          background: "rgba(255,255,255,.2)",

          backdropFilter: "blur(20px)",

          cursor: "pointer",

          userSelect: "none",
        }}
      >
        {text}
      </Paper>
    </motion.div>
  );
}
