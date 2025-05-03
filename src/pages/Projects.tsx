
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";

const projects = [
  {
    title: "3D Product Visualizer",
    description: "Interactive 3D visualization tool for product demonstrations with customizable views and features.",
    tags: ["WebGL", "Three.js", "React"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AR Shopping Experience",
    description: "Augmented reality application allowing users to visualize products in their environment before purchase.",
    tags: ["AR.js", "JavaScript", "Mobile"],
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Digital Catalog Platform",
    description: "Interactive digital catalog system with advanced search and filtering capabilities.",
    tags: ["React", "Firebase", "UI/UX"],
    image: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?auto=format&fit=crop&w=600&q=80"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => (
  <>
    <Navigation />
    <AnimatedBackground>
      <div className="min-h-screen pt-24 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">
              My Projects
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Explore my work in 3D visualization, AR demos, and interactive digital catalogs
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-indigo-100 mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-200 border border-indigo-700/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-white/5 bg-black/20 p-4">
                    <div className="flex gap-3 w-full">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border-white/10 flex-1"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 flex-1"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-16"
          >
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border-white/10 px-8 py-6 rounded-xl text-lg shadow-xl"
              onClick={() => window.open("https://github.com/atuljammu", "_blank")}
            >
              <Github size={20} />
              View My GitHub Profile
            </Button>
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  </>
);

export default Projects;
