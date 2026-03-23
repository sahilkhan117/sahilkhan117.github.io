import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Achievements } from "./components/sections/Achievements";
import { Education } from "./components/sections/Education";
import { FloatingDock } from "./components/ui/FloatingDock";
import { FadeIn, StaggerContainer } from "./components/FadeIn";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // 1.5-second loading timer to ensure the text reveal finishes before hiding
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const name = "Sahil Khan";
  const letters = name.split("");

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      {/* mode="wait" ensures the loader completely fades out before your FadeIn triggers */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-background text-foreground"
          >
            {/* Animated Name Container */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                },
              }}
              className="flex text-2xl md:text-3xl font-bold tracking-tight"
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  // Handle spaces correctly in flex layouts so they don't collapse
                  className={char === " " ? "w-2 md:w-3" : ""} 
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div key="portfolio">
            <FadeIn>
              <div className="relative min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-primary/30">
                <main className="relative z-10 pb-20 flex flex-col items-center">
                  <StaggerContainer className="max-w-3xl w-full px-6 md:px-12 pt-8">
                    <FadeIn><Hero /></FadeIn>
                    <FadeIn><About /></FadeIn>
                    <FadeIn><Experience /></FadeIn>
                    <FadeIn><Skills /></FadeIn>
                    <FadeIn><Projects /></FadeIn>
                    <FadeIn><Achievements /></FadeIn>
                    <FadeIn><Education /></FadeIn>
                  </StaggerContainer>
                </main>
                <FloatingDock />
              </div>
            </FadeIn>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;