import { motion } from "framer-motion";

type Heart = {
  id: number;
  x: number;
  y: number;
};

type Props = {
  items: Heart[];
};

export default function Hearts({ items }: Props) {
  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            x: item.x,
            y: item.y,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            y: item.y - 80,
            scale: 1,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          style={{
            position: "absolute",

            fontSize: 22,

            zIndex: 4,

            pointerEvents: "none",
          }}
        >
          💗
        </motion.div>
      ))}
    </>
  );
}
