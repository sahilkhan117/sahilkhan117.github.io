import React from "react";
import { motion } from "motion/react";

export const StaggerContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.main
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.main>
    );
};

export const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: 60,
                    filter: "blur(10px)"
                },
                show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};