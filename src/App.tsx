import {
  CssBaseline,
  ThemeProvider,
  Paper,
  Button,
  Typography,
  LinearProgress,
} from "@mui/material";

import { useEffect, useState, useCallback } from "react";

import Pet from "./components/Pet";
import Hearts from "./components/Hearts";
import Particles from "./components/Particles";

import { faces } from "./data";
import { getTheme } from "./theme";

const background = "src/public/photo_2026-06-03_21-41-33.jpg";

type Heart = {
  id: number;
  x: number;
  y: number;
};

export default function App() {
  const [dark, setDark] = useState(true);

  const [xp, setXp] = useState(Number(localStorage.getItem("xp") || 0));

  const [face, setFace] = useState(faces[0]);

  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    localStorage.setItem("xp", String(xp));
  }, [xp]);

  const click = () => {
    setXp((value) => value + 1);

    setFace(faces[Math.floor(Math.random() * faces.length)]);
  };

  const createHeart = useCallback((x: number, y: number) => {
    setHearts((items) =>
      [
        ...items,
        {
          id: Date.now(),
          x,
          y,
        },
      ].slice(-20),
    );
  }, []);

  return (
    <ThemeProvider theme={getTheme(dark)}>
      <CssBaseline />

      <div
        onClick={click}
        style={{
          height: "100vh",

          width: "100vw",

          overflow: "hidden",

          position: "relative",

          backgroundImage: `url(${background})`,

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",

            inset: 0,

            background:
              "linear-gradient(45deg,rgba(0,0,0,.55),rgba(80,40,100,.3))",
          }}
        />

        <Particles />

        <Hearts items={hearts} />

        <Paper
          sx={{
            position: "absolute",

            top: 20,

            left: "50%",

            transform: "translateX(-50%)",

            padding: 3,

            zIndex: 10,

            minWidth: 280,

            background: "rgba(255,255,255,.15)",

            backdropFilter: "blur(20px)",
          }}
        >
          <Typography variant="h5" align="center">
            💖 арина бебе приложуха
          </Typography>

          <Typography align="center">⭐ Количество бебе: {xp}</Typography>

          <LinearProgress variant="determinate" value={xp % 100} />

          <Button
            fullWidth
            onClick={(e) => {
              e.stopPropagation();

              setDark((value) => !value);
            }}
          >
            🌙 тема
          </Button>
        </Paper>

        <Pet text={face} onClick={click} onMove={createHeart} />

        {xp >= 100 && (
          <Paper
            sx={{
              position: "absolute",

              bottom: 30,

              left: "50%",

              transform: "translateX(-50%)",

              zIndex: 20,

              padding: 3,

              background: "rgba(255,215,230,.8)",
            }}
          >
            🎉 ULTRA БЕБЕБЕ MODE 🎉
          </Paper>
        )}
      </div>
    </ThemeProvider>
  );
}
