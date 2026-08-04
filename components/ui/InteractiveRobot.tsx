"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export const InteractiveRobot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the robot container
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth springs for mouse tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation and translation
  const headRotateX = useTransform(smoothMouseY, [-500, 500], [15, -15]);
  const headRotateY = useTransform(smoothMouseX, [-500, 500], [-25, 25]);
  
  const eyeMoveX = useTransform(smoothMouseX, [-500, 500], [-8, 8]);
  const eyeMoveY = useTransform(smoothMouseY, [-500, 500], [-6, 6]);

  const bodyRotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);

  // Greeting arm animation
  const armRotate = isHovered ? [0, -30, 20, -20, 0] : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-64 h-80"
        style={{ rotateY: bodyRotateY, transformStyle: "preserve-3d" }}
      >
        {/* Floating shadow */}
        <motion.div 
          className="absolute -bottom-8 left-1/2 w-40 h-8 bg-black/10 rounded-full blur-md -translate-x-1/2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Robot Body */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Head */}
          <motion.div
            style={{ rotateX: headRotateX, rotateY: headRotateY, transformStyle: "preserve-3d" }}
            className="w-40 h-32 bg-white rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center relative mb-4 z-20"
          >
            {/* Screen / Face area */}
            <div className="w-32 h-20 bg-gray-900 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
              {/* Eyes */}
              <motion.div 
                className="flex gap-6 absolute"
                style={{ x: eyeMoveX, y: eyeMoveY }}
              >
                {/* Left Eye */}
                <motion.div 
                  className="w-5 h-7 bg-amber rounded-full"
                  animate={isHovered ? { height: [28, 5, 28] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1 opacity-70" />
                </motion.div>
                {/* Right Eye */}
                <motion.div 
                  className="w-5 h-7 bg-amber rounded-full"
                  animate={isHovered ? { height: [28, 5, 28] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1 opacity-70" />
                </motion.div>
              </motion.div>
              
              {/* Screen grid overlay */}
              <div 
                className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                  backgroundSize: '4px 4px'
                }}
              />
            </div>
            
            {/* Antenna */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-gray-300 rounded-t-full">
              <motion.div 
                className="absolute -top-3 -left-1.5 w-4 h-4 bg-amber rounded-full shadow-[0_0_10px_#FF6B00]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            {/* Ear pieces */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-10 bg-gray-200 rounded-l-md border border-gray-300" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-10 bg-gray-200 rounded-r-md border border-gray-300" />
          </motion.div>

          {/* Neck */}
          <div className="w-8 h-6 bg-gray-300 rounded-lg shadow-inner -my-5 relative z-10" />

          {/* Torso */}
          <div className="w-48 h-40 bg-white rounded-[32px] border border-gray-200 shadow-2xl relative z-10 flex flex-col items-center justify-center mt-2">
            {/* Chest Plate / Logo */}
            <div className="w-24 h-24 rounded-full border-[4px] border-gray-100 flex items-center justify-center relative overflow-hidden bg-gray-50">
               <div className="absolute inset-0 border-[3px] border-transparent border-t-amber border-r-amber rounded-full animate-spin-slow" style={{ animationDuration: '3s' }} />
               <div className="w-12 h-12 bg-gradient-to-br from-amber to-amber/60 rounded-xl transform rotate-45 shadow-lg flex items-center justify-center">
                 <div className="w-6 h-6 bg-white rounded-md transform -rotate-45" />
               </div>
            </div>
            
            {/* Detail lines */}
            <div className="absolute bottom-4 flex gap-4">
              <div className="w-6 h-1.5 bg-gray-200 rounded-full" />
              <div className="w-6 h-1.5 bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Left Arm */}
          <motion.div 
            className="absolute left-[-20px] top-[140px] origin-top z-0"
            animate={{ rotate: isHovered ? [0, 10, -5, 5, 0] : 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-8 h-24 bg-white rounded-full border border-gray-200 shadow-md relative">
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-10 h-12 bg-gray-200 rounded-full border border-gray-300" />
            </div>
          </motion.div>

          {/* Right Arm (Waving) */}
          <motion.div 
            className="absolute right-[-20px] top-[140px] origin-top z-0"
            animate={{ rotate: armRotate }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-8 h-24 bg-white rounded-full border border-gray-200 shadow-md relative">
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-10 h-12 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center">
                {isHovered && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -bottom-8 bg-amber text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-lg"
                  >
                    Hi there!
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </div>
  );
};
