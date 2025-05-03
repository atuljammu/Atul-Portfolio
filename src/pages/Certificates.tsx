
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const Certificates = () => (
  <>
    <Navigation />
    <AnimatedBackground backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80">
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Award size={36} className="text-indigo-300" />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">
            Certificates
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl mb-8"
        >
          <Card className="backdrop-blur-md bg-black/30 shadow-xl border border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-indigo-200">Professional Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-indigo-100">Certificate Name</TableHead>
                    <TableHead className="text-indigo-100">Issuing Organization</TableHead>
                    <TableHead className="text-indigo-100">Date</TableHead>
                    <TableHead className="text-right text-indigo-100">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="border-white/10 hover:bg-indigo-900/30"
                  >
                    <TableCell className="font-medium text-indigo-100">Web And Mobile Testing With Selenium</TableCell>
                    <TableCell className="text-indigo-100/80">Coursera</TableCell>
                    <TableCell className="text-indigo-100/80">September 2024</TableCell>
                    <TableCell className="text-right">
                      <a 
                        href="https://coursera.org/verify/1AMD0N9MTXO0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-indigo-800/50 hover:bg-indigo-700/50 border-indigo-600/30 text-indigo-100">
                          <ExternalLink size={14} /> Verify
                        </Button>
                      </a>
                    </TableCell>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="border-white/10 hover:bg-indigo-900/30"
                  >
                    <TableCell className="font-medium text-indigo-100">Introduction To Software Testing</TableCell>
                    <TableCell className="text-indigo-100/80">Coursera</TableCell>
                    <TableCell className="text-indigo-100/80">May 2024</TableCell>
                    <TableCell className="text-right">
                      <a 
                        href="https://coursera.org/verify/AGC6AFEL6BLU" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-indigo-800/50 hover:bg-indigo-700/50 border-indigo-600/30 text-indigo-100">
                          <ExternalLink size={14} /> Verify
                        </Button>
                      </a>
                    </TableCell>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="border-white/10 hover:bg-indigo-900/30"
                  >
                    <TableCell className="font-medium text-indigo-100">The Bits and Bytes of Computer Networking</TableCell>
                    <TableCell className="text-indigo-100/80">Google</TableCell>
                    <TableCell className="text-indigo-100/80">November 2023</TableCell>
                    <TableCell className="text-right">
                      <a 
                        href="https://coursera.org/verify/T7GXQVJWF3ZM" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-indigo-800/50 hover:bg-indigo-700/50 border-indigo-600/30 text-indigo-100">
                          <ExternalLink size={14} /> Verify
                        </Button>
                      </a>
                    </TableCell>
                  </motion.tr>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center max-w-2xl"
        >
          <p className="text-indigo-100">
            These certifications represent my commitment to continuous learning and professional development
            in software testing, programming, and networking technologies.
          </p>
          <Button className="mt-6 bg-indigo-700 hover:bg-indigo-800 shadow-lg shadow-indigo-900/30 transition-all duration-300">
            <Download className="mr-2 h-4 w-4" /> Download All Certificates
          </Button>
        </motion.div>
      </div>
    </AnimatedBackground>
  </>
);

export default Certificates;
