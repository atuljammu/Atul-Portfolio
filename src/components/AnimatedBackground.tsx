
import React from "react";
import { motion } from "framer-motion";

type AnimatedBackgroundProps = {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayColor?: string;
  className?: string;
};

const AnimatedBackground = ({
  children,
  backgroundImage,
  overlayColor = "bg-gradient-to-r from-indigo-900/60 to-purple-900/60",
  className = "",
}: AnimatedBackgroundProps) => {
  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-30 blur-[1px]"
          />
          <div className={`absolute inset-0 ${overlayColor} mix-blend-multiply`}></div>
        </div>
      )}
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
