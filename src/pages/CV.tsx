import React from "react";
import { Navigation } from "@/components/Navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const CV = () => (
  <>
    <Navigation />
    <AnimatedBackground backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80">
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 pb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200"
        >
          CV
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <Tabs defaultValue="specialized" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-black/30 backdrop-blur-sm">
              <TabsTrigger value="specialized" className="text-white data-[state=active]:bg-indigo-700/50">Specialized CV</TabsTrigger>
              <TabsTrigger value="general" className="text-white data-[state=active]:bg-indigo-700/50">General CV</TabsTrigger>
            </TabsList>

            <TabsContent value="specialized" className="space-y-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg shadow-xl p-8 text-white"
              >
                {/* Header Section */}
                <div className="text-center border-b border-white/20 pb-4">
                  <h2 className="text-2xl font-bold text-indigo-200">Atul Bharti</h2>
                  <p className="text-indigo-100/80 mt-1">Kathua, Jammu & Kashmir 184101</p>
                  
                  <div className="flex justify-center mt-2 space-x-8">
                    <div className="text-left text-indigo-100/80">
                      <p>Mobile: 9070530386</p>
                      <p>Email: atulbharti414@gmail.com</p>
                    </div>
                    <div className="text-left text-indigo-100/80">
                      <p>Github: github.com/atuljammu</p>
                      <p>LinkedIn: linkedin.com/in/atul-bharti</p>
                    </div>
                  </div>
                </div>

                {/* Internship Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">Internship</h3>
                  <div className="pl-5">
                    <p className="font-semibold">Techvanto Academy - C++ Programming<span className="float-right">July 2024</span></p>
                    <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                      <li>Designed and implemented Tic-Tac-Toe using the Minimax algorithm and N-Queens using backtracking.</li>
                      <li>Optimized code efficiency by improving game state evaluations, recursive algorithms, and move selection strategies.</li>
                      <li>Strengthened programming practices through modular programming, debugging techniques, and version control (Git).</li>
                      <li>Tech stacks used: C and C++</li>
                    </ul>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">Projects</h3>
                  <div className="space-y-4 pl-5">
                    <div>
                      <p className="font-semibold">Interactive Dashboard - Friends Dataset (Tableau)</p>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                        <li>Designed and developed an interactive Tableau dashboard using a custom "Friends" dataset.</li>
                        <li>Implemented sorting, filtering, and a streamlined UI layout, improving data accessibility by 40%.</li>
                        <li>Applied calculated fields and visualization best practices, resulting in a 35% increase in analytical efficiency.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">N-Queens Solver | C & C++<span className="float-right">July 2024</span></p>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                        <li>Developed an optimized N-Queens solver using backtracking to efficiently explore queen placements.</li>
                        <li>Enhanced computational efficiency by implementing row, column, and diagonal constraints.</li>
                        <li>Strengthened expertise in algorithm design and memory-efficient programming.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certificates Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">Certificates</h3>
                  <div className="pl-5 space-y-2">
                    <p>Web And Mobile Testing With Selenium<span className="float-right">Sept,2024</span></p>
                    <p>Introduction To Software Testing<span className="float-right">May,2024</span></p>
                    <p>The Bits and Bytes of Computer Networking<span className="float-right">Nov,2023</span></p>
                  </div>
                </div>

                {/* Technical Skills Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">Technical Skills</h3>
                  <div className="pl-5">
                    <p><strong>Languages:</strong> C++, C, Java, Python</p>
                    <p><strong>Technologies/Frameworks:</strong> Linear automation framework, Git, GitHub</p>
                    <p><strong>Skills:</strong> Data Structures and Algorithms, Problem-Solving</p>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">Education</h3>
                  <div className="space-y-4 pl-5">
                    <div>
                      <p className="font-semibold">Lovely Professional University<span className="float-right">2022 - 2026</span></p>
                      <p className="text-indigo-100/80">Computer Science and Engineering, Jalandhar, Punjab</p>
                    </div>
                    <div>
                      <p className="font-semibold">Nav Jagriti Higher Secondary School<span className="float-right">2021 - 2022</span></p>
                      <p className="text-indigo-100/80">12th with Science - Percentage: 84.6%, Katiua, Jammu & Kashmir</p>
                    </div>
                    <div>
                      <p className="font-semibold">Nav Jagriti Higher Secondary School<span className="float-right">2020 - 2021</span></p>
                      <p className="text-indigo-100/80">10th Science - CGPA: 74.4%, Katiua, Jammu & Kashmir</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <Button 
                onClick={() => window.open("/lovable-uploads/03d15b53-b411-456e-9dac-71b6b3aa7f30.png", "_blank")}
                className="bg-indigo-700 hover:bg-indigo-800 w-full transition-all duration-300 shadow-lg shadow-indigo-900/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Specialized CV
              </Button>
            </TabsContent>

            <TabsContent value="general" className="space-y-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg shadow-xl p-8 text-white"
              >
                {/* Header Section */}
                <div className="text-center border-b border-white/20 pb-4">
                  <h2 className="text-2xl font-bold text-indigo-200">Atul Bharti</h2>
                  <p className="text-indigo-100/80 mt-1">Kathua, Jammu & Kashmir 184101</p>
                  
                  <div className="flex justify-center mt-2 space-x-8">
                    <div className="text-left text-indigo-100/80">
                      <p>Mobile: +91-9070530386</p>
                      <p>Email: atulbharti414@gmail.com</p>
                    </div>
                    <div className="text-left text-indigo-100/80">
                      <p>Github: github.com/atuljammu</p>
                      <p>LinkedIn: linkedin.com/in/atulbharti</p>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">SKILLS</h3>
                  <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                    <li>Languages: C++, C, Python</li>
                    <li>Frameworks: Linear automation framework</li>
                    <li>Tools/Platforms: Microsoft Excel, MySQL</li>
                    <li>Soft Skills: Problem-Solving Skills, Adaptability</li>
                  </ul>
                </div>

                {/* Internship Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">INTERNSHIP</h3>
                  <div className="pl-5">
                    <p className="font-semibold">Techvantly Academy - C++ Programming<span className="float-right">July 2024</span></p>
                    <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                      <li>Implemented Tic-Tac-Toe using the Minimax algorithm and N-Queens using backtracking, enhancing problem-solving skills in game development and algorithmic logic.</li>
                      <li>Optimized code efficiency by improving game state evaluations, recursive algorithms, and move selection strategies.</li>
                      <li>Developed best coding practices by utilizing modular programming, debugging techniques, and version control (Git).</li>
                      <li>Tech stacks used: C and C++</li>
                    </ul>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">PROJECTS</h3>
                  <div className="space-y-4 pl-5">
                    <div>
                      <p className="font-semibold">Tic-Tac-Toe Game | C & C++<span className="float-right">July 2024</span></p>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                        <li>Engineered an AI-powered version of the game in C++, integrating the minimax algorithm, achieving a 100% win rate for the AI in unbeatable mode.</li>
                        <li>Enhanced game logic by refining move selection, decision-making time by 30%, and improving user experience.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">N-Queens Solver | C & C++<span className="float-right">July 2024</span></p>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-100/80">
                        <li>Developed an optimized N-Queens solver using C and C++, leveraging backtracking to efficiently explore 100% of valid queen placements on an NxN chessboard.</li>
                        <li>Strengthened expertise in algorithm design, recursion, and memory-efficient programming.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">EDUCATION</h3>
                  <div className="space-y-4 pl-5">
                    <div>
                      <p className="font-semibold">Lovely Professional University<span className="float-right">Punjab, India</span></p>
                      <p className="text-indigo-100/80">Bachelor of Technology - Computer Science and Engineering<span className="float-right">Since August 2022</span></p>
                    </div>
                    <div>
                      <p className="font-semibold">Nav-Jagriti Higher Secondary School<span className="float-right">Katihar, J&K</span></p>
                      <p className="text-indigo-100/80">Intermediate, Percentage: 84%<span className="float-right">April 2022</span></p>
                      <p className="text-indigo-100/80">Matriculation, Percentage: 74%<span className="float-right">April 2020</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <Button 
                onClick={() => window.open("/lovable-uploads/2eb80adf-7ac2-41d5-b4e5-41f6a5cda05d.png", "_blank")}
                className="bg-indigo-700 hover:bg-indigo-800 w-full transition-all duration-300 shadow-lg shadow-indigo-900/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Download General CV
              </Button>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </AnimatedBackground>
  </>
);

export default CV;
