import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";

interface CountUpProps {
  target: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  target,
  duration = 2,
  format = (n: number) => n.toFixed(0),
  className = "",
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      type: "spring",
      stiffness: 50,
      damping: 15,
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [target, duration]);

  return (
    <motion.span className={`font-bold ${className}`}>
      {format(value)}
    </motion.span>
  );
};

export default CountUp;