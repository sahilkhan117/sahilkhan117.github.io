import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronRight } from "react-icons/fa6";
import { Calendar } from "lucide-react";

interface ExperienceData {
    company: string;
    role: string;
    location: string;
    date: string;
    logo: string;
    bullets: string[];
}

function ExperienceItem({ exp }: { exp: ExperienceData }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-row justify-start w-full gap-4 md:gap-6">
            <div className="shrink-0 mt-1">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white border border-border flex items-center justify-center shadow-sm">
                    <img src={exp.logo} alt={exp.company} className="w-10 h-10 md:w-11 md:h-11 p-1 object-contain" />
                </div>
            </div>

            <div className="flex flex-row flex-1 w-full mt-2">
                <div
                    className="w-full items-start justify-between cursor-pointer group"
                    onClick={() => setIsExpanded(!isExpanded)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="">
                        <div className="flex justify-between items-center w-full gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm max-md:text-xs md:text-base font-semibold group-hover:text-primary transition-colors">{exp.company}</h3>
                                <motion.div
                                    initial={{ opacity: 0, rotate: 0, scale: 0, x: -20 }}
                                    animate={{
                                        opacity: isHovered || isExpanded ? 1 : 0,
                                        rotate: isExpanded ? 90 : 0,
                                        scale: isHovered || isExpanded ? 1 : 0,
                                        x: isHovered || isExpanded ? 0 : -20
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                                </motion.div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-[11px] text-xs font-medium text-zinc-600 dark:text-zinc-400 shrink-0 border border-zinc-200 dark:border-zinc-800">
                                <Calendar className="w-3 h-3" />
                                {exp.date}
                            </span>
                        </div>

                        <p className="text-xs md:text-[13px] text-foreground/80 font-medium mt-0.5">{exp.role}</p>
                    </div>

                    <AnimatePresence initial={false}>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-[13px] text-muted-foreground marker:text-muted-foreground/50">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export function Experience() {
    const experiences = [
        {
            company: "CyberDairy Solutions",
            role: "Full Stack Web Developer",
            location: "Sagar, MP",
            date: "Sept 2024 - Sept 2025",
            logo: "./cd_logo.png",
            bullets: [
                "Developed scalable web applications supporting multiple users using optimized REST APIs and database design.",
                "Developed the Infinity College Admission & Counselling System with student registration, counsellor and admin modules, and role-based workflows using PHP and MySQL.",
                "Deployed and maintained web applications using DirectAdmin panel, database setup, and environment management.",
                "Implemented authentication mechanisms using JWT and session management to ensure secure access control."
            ]
        },
        {
            company: "CyberDairy Solutions",
            role: "Web Developer Trainee",
            location: "Sagar, MP",
            date: "April 2024 - Sept 2024",
            logo: "./cd_logo.png",
            bullets: [
                "Completed 6-month structured training in the MERN stack with focus on Full Stack Web Development.",
                "Gained hands-on experience in React, Node.js, Express, and MongoDB through structured practice assignments and internal learning modules.",
                "Learned REST API development, authentication using JWT, and database integration concepts."
            ]
        }
    ];

    return (
        <section className="py-6 border-t border-border/40">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Work Experience</h2>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} exp={exp} />
                ))}
            </div>
        </section>
    );
}
