
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { User, MapPin, Code, ShieldCheck } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const About = () => (
  <>
    <Navigation />
    <AnimatedBackground backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80">
      <div className="min-h-screen pt-24 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl" // Increased width for better readability
        >
          <Card className="glass-morphism shadow-xl bg-gradient-to-br from-indigo-900/70 to-purple-900/70 border border-indigo-300/30">
            <CardHeader className="flex flex-row items-center gap-6 p-8"> {/* Increased padding and gap */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-indigo-600/60 rounded-full p-5 shadow-lg flex items-center justify-center" // Larger, more visible icon container
              >
                <User size={40} className="text-white drop-shadow" /> {/* Larger, white icon for better visibility */}
              </motion.div>
              <div>
                <CardTitle className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-100">
                  Atul Bharti
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-white font-medium"> {/* Larger, white text */}
                  Software Tester & Coding Enthusiast
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-4 space-y-8 p-8"> {/* Increased spacing and padding */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-row items-center gap-5 bg-indigo-700/60 backdrop-blur-sm rounded-lg p-5 shadow-md hover:bg-indigo-600/60 transition-colors" // Better contrast background
              >
                <div className="bg-green-600/70 p-3 rounded-full">
                  <MapPin size={32} className="text-white" /> {/* Larger, white icon */}
                </div>
                <span className="font-semibold text-white text-xl"> {/* Larger, white text */}
                  Hailing from the Beautiful Region of Jammu & Kashmir
                </span>
              </motion.div>
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-row items-center gap-5 bg-indigo-700/60 backdrop-blur-sm rounded-lg p-5 shadow-md hover:bg-indigo-600/60 transition-colors" // Better contrast background
              >
                <div className="bg-indigo-600/70 p-3 rounded-full">
                  <Code size={32} className="text-white" /> {/* Larger, white icon */}
                </div>
                <span className="font-semibold text-white text-xl"> {/* Larger, white text */}
                  Passionate about diving deep into applications, finding bugs, and crafting robust software solutions
                </span>
              </motion.div>
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-row items-center gap-5 bg-indigo-700/60 backdrop-blur-sm rounded-lg p-5 shadow-md hover:bg-indigo-600/60 transition-colors" // Better contrast background
              >
                <div className="bg-purple-600/70 p-3 rounded-full">
                  <ShieldCheck size={32} className="text-white" /> {/* Larger, white icon */}
                </div>
                <span className="font-semibold text-white text-xl"> {/* Larger, white text */}
                  Dedicated to quality assurance and security, with a meticulous approach to testing
                </span>
              </motion.div>
              
              <div className="mt-6 text-xl text-white text-center py-3 border-t border-indigo-300/30"> {/* Larger text, border for emphasis */}
                <span className="italic font-medium">"Transforming challenges into opportunities, one test at a time!"</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatedBackground>
  </>
);

export default About;
