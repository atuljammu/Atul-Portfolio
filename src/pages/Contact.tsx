
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Mail, Linkedin, Github, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const Contact = () => (
  <>
    <Navigation />
    <AnimatedBackground backgroundImage="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=900&q=80">
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 to-purple-100"
        >
          Contact Me
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mx-4"
        >
          <Card className="glass-morphism shadow-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-300/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                <motion.a 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  href="mailto:atulbharti414@gmail.com" 
                  className="flex items-center gap-4 text-lg hover:text-blue-300 transition-colors p-4 rounded-xl hover:bg-indigo-700/40"
                >
                  <div className="bg-indigo-600/50 p-3 rounded-full shadow-lg">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-white font-medium text-xl">atulbharti414@gmail.com</span>
                </motion.a>

                <motion.a 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  href="https://www.linkedin.com/in/atul-bharti1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-blue-300 transition-colors p-4 rounded-xl hover:bg-indigo-700/40"
                >
                  <div className="bg-indigo-600/50 p-3 rounded-full shadow-lg">
                    <Linkedin className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-white font-medium text-xl">linkedin.com/in/atul-bharti1</span>
                </motion.a>

                <motion.a 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  href="https://github.com/atuljammu" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-blue-300 transition-colors p-4 rounded-xl hover:bg-indigo-700/40"
                >
                  <div className="bg-indigo-600/50 p-3 rounded-full shadow-lg">
                    <Github className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-white font-medium text-xl">github.com/atuljammu</span>
                </motion.a>

                <motion.a 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  href="tel:+919070530386" 
                  className="flex items-center gap-4 text-lg hover:text-blue-300 transition-colors p-4 rounded-xl hover:bg-indigo-700/40"
                >
                  <div className="bg-indigo-600/50 p-3 rounded-full shadow-lg">
                    <PhoneCall className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-white font-medium text-xl">+91 907 053 0386</span>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatedBackground>
  </>
);

export default Contact;
