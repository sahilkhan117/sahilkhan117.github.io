import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FiArrowUpRight, FiFileText, FiMail as Mail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaArrowUpRightDots, FaGithub, FaLinkedin } from "react-icons/fa6";
import { DiGithub } from "react-icons/di";

import { BiSolidUserBadge } from "react-icons/bi";
import { ShineBorder } from "../ui/shine-border";
import { TextAnimate } from "../ui/text-animate";
import { motion } from "motion/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Hero() {
    const bio = "Full Stack Web Developer building software that you remember.";

    const links = [
        {
            title: "LinkedIn",
            icon: <FaLinkedin className="w-full h-full text-sky-800 dark:text-sky-600 " />,
            color: "border-sky-800 dark:border-sky-600",
            href: "https://linkedin.com/in/sahilkhan117",
            target: "_blank"
        },
        {
            title: "Leetcode",
            icon: <SiLeetcode className="w-full h-full text-yellow-600 dark:text-yellow-500 " />,
            color: "border-yellow-600 dark:border-yellow-500",
            href: "https://leetcode.com/u/sahilkhan117/",
            target: "_blank"
        },
        {
            title: "GitHub",
            icon: <FaGithub className="w-full h-full text-black dark:text-white " />,
            color: "border-black dark:border-white",
            href: "https://github.com/sahilkhan117",
            target: "_blank"
        },
    ]

    return (
        <section className="flex flex-col items-center justify-between pt-10 gap-4 max-md:pt-6 max-md:gap-2 pb-4">
            <div className="flex">
                <div className="flex-1 space-y-4 flex flex-col items-start text-left max-md:space-y-2">
                    <h1 className="text-5xl font-bold tracking-tight max-md:text-3xl max-sm:text-2xl">
                        <TextAnimate
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                    rotate: 45,
                                    scale: 0.5,
                                },
                                show: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                    scale: 1,
                                    transition: {
                                        delay: i * 1,
                                        duration: 0.6,
                                        y: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 200,
                                            mass: 0.8,
                                        },
                                        rotate: {
                                            type: "spring",
                                            damping: 8,
                                            stiffness: 150,
                                        },
                                        scale: {
                                            type: "spring",
                                            damping: 10,
                                            stiffness: 300,
                                        },
                                    },
                                }),
                                exit: (i) => ({
                                    opacity: 0,
                                    y: 30,
                                    rotate: 45,
                                    scale: 0.5,
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.4,
                                    },
                                }),
                            }}
                            by="character"
                        >
                            Hi, I&apos;m Sahil Khan
                        </TextAnimate>

                    </h1>
                    <div className="text-xl text-muted-foreground font-medium pr-2 max-md:text-lg max-sm:text-base">
                        <p className="mt-0 max-md:text-sm leading-tight">{bio}</p>
                    </div>

                    <div className="flex gap-1.5 text-sm text-foreground mt-auto mb-2 max-md:text-xs max-md:flex-wrap">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-black dark:text-white shrink-0" />
                            <a href="mailto:work.sahilkhan1@gmail.com" className="hover:text-foreground transition-colors text-black dark:text-white hover:underline truncate">
                                work.sahilkhan1@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-black dark:text-white shrink-0" />
                            <a href="mailto:sahilkhan123098p@gmail.com" className="hover:text-foreground transition-colors text-black dark:text-white hover:underline truncate">
                                sahilkhan123098p@gmail.com
                            </a>
                        </div>
                    </div>


                </div>

                <div className="shrink-0 ml-8 max-md:ml-2">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border border-border shadow-sm max-md:w-32 max-md:h-32 max-sm:w-28 max-sm:h-28">
                        <img
                            src="./DP.png"
                            alt="Sahil Khan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-start w-full gap-3 md:gap-6">
                <motion.a
                    href={"./Sahil_Khan.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    variants={{
                        tap: { scale: 0.97 }
                    }}
                    // 1. REMOVED overflow-hidden from the main container so the shadow can escape
                    // 2. REMOVED border-zinc-300 so it doesn't clash with the 2px ShineBorder
                    className="relative flex w-max items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-colors dark:bg-zinc-950 dark:text-zinc-50"
                >
                    {/* ADDED: A dedicated mask container for the Shimmer sweep */}
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-full pointer-events-none">
                        <motion.div
                            variants={{
                                initial: { x: "-100%", opacity: 0 },
                                hover: { x: "200%", opacity: 0.15 }
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 z-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-zinc-900 to-transparent dark:via-white"
                        />
                    </div>

                    {/* Button Text */}
                    <span className="relative whitespace-nowrap z-10 flex items-center">
                        <motion.div
                            variants={{
                                initial: { rotate: 0 },
                                hover: { rotate: -15, scale: 1.4 }
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <BiSolidUserBadge className="w-5 h-5 me-2" />
                        </motion.div>
                        View Resume
                    </span>

                    {/* The Icon Swap Mask Container (This keeps its own overflow-hidden for the arrows) */}
                    <div className="relative z-10 flex h-4 w-4 overflow-hidden">
                        {/* Primary Arrow */}
                        <motion.div
                            variants={{
                                initial: { x: 0, y: 0 },
                                hover: { x: 20, y: -20 }
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute text-zinc-600 dark:text-zinc-400"
                        >
                            <FiArrowUpRight className="h-4 w-4" />
                        </motion.div>

                        {/* Secondary Arrow */}
                        <motion.div
                            variants={{
                                initial: { x: -20, y: 20 },
                                hover: { x: 0, y: 0 }
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute text-zinc-900 dark:text-zinc-50"
                        >
                            <FiArrowUpRight className="h-4 w-4" />
                        </motion.div>
                    </div>

                    {/* The ShineBorder with the new shadow props */}
                    <ShineBorder
                        shineColor={["#10B981", "#06B6D4", "#3B82F6", "#FF0080", "#7928CA", "#FF4D4D"]}
                        borderWidth={1.5}
                        shadowBlur="15px"
                        shadowOpacity={0.9}
                    />
                </motion.a>

                <div className="flex flex-wrap items-center gap-4 max-md:gap-3 h-full">
                    {/* Setting delayDuration to 0 makes the tooltips feel infinitely more responsive */}
                    <TooltipProvider delayDuration={0}>
                        {links.map((link, i) => (
                            <Tooltip key={link.title}>
                                <TooltipTrigger asChild>
                                    <motion.a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // 1. Staggered Pop-in Entrance
                                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: i * 0.05, // Cascades the icons in one by one
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        // 2. Premium Hover & Tap Physics (Replaces hover:scale-110)
                                        whileHover={{ scale: 1.15, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`group relative flex h-10 w-10 p-1.5 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors dark:bg-zinc-950 ${link.color}`}
                                    >
                                        {/* 3. Icon Wrapper (Ensures the icon centers perfectly and inherits hover states) */}
                                        <span className="w-full h-full flex items-center justify-center text-muted-foreground transition-colors group-hover:text-foreground">
                                            {link.icon}
                                        </span>
                                    </motion.a>
                                </TooltipTrigger>

                                {/* 4. Tooltip offset keeps it from overlapping the scaled-up icon */}
                                <TooltipContent sideOffset={8} className="text-xs font-medium px-2 py-1">
                                    <p>{link.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </div>
            </div>
        </section>
    );
}
