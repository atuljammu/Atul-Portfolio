
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Coding image from Unsplash
const codingImg =
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 relative pt-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={codingImg}
            alt="Coding background"
            className="w-full h-full object-cover opacity-30 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 mix-blend-multiply"></div>
        </div>
        
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-24"
        >
          <div className="flex flex-col gap-7 items-center max-w-4xl mx-auto">
            <div className="rounded-2xl bg-black/40 p-10 shadow-xl backdrop-blur-md border border-white/10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200 tracking-tight text-center drop-shadow-lg"
              >
                Portfolio
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-5 text-2xl md:text-3xl font-semibold text-indigo-100 text-center"
              >
                Software Testing & Quality Assurance
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex flex-wrap gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 py-6 rounded-xl text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-600/40 border-0 transition-all duration-300"
                  onClick={() => window.location.href = '/projects'}
                >
                  View Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-6 rounded-xl text-lg backdrop-blur-sm transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </div>
    </>
  );
};

export default Index;
