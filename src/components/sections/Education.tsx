import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

interface EducationData {
    institution: string;
    degree: string;
    date: string;
    location: string;
    grade: string;
    logo: string;
    isTextLogo: boolean;
}

function EducationItem({ edu }: { edu: EducationData }) {
    return (
        <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // FIX 1: Removed flex-col, kept it as flex-row always. Tweaked gap for mobile.
            className="group relative flex flex-row items-start gap-3 sm:gap-4 md:gap-6 p-2 sm:-mx-2 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors border border-transparent hover:border-border/50"
        >
            {/* Logo Container */}
            <div className="shrink-0 mt-1">
                {/* FIX 2: Made the logo slightly smaller on mobile (w-10/h-10) and standard on sm+ (sm:w-12/sm:h-12) */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow group-hover:border-primary/30">
                    {edu.isTextLogo ? (
                        <span className="text-xs sm:text-sm md:text-lg font-bold text-muted-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors">
                            {edu.logo}
                        </span>
                    ) : (
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain bg-white dark:bg-zinc-400" />
                    )}
                </div>
            </div>

            {/* Structured Content */}
            {/* FIX 3: Added min-w-0 to prevent flex blowout on narrow screens */}
            <div className="flex-1 flex flex-col w-full min-w-0">
                
                {/* Header: Institution & Date Badge */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1.5 sm:gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors truncate sm:whitespace-normal">
                        {edu.institution}
                    </h3>
                    
                    {/* Date Pill */}
                    <span className="inline-flex items-center gap-1.5 w-fit px-2 py-1 sm:px-2.5 sm:py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-[10px] sm:text-[11px] md:text-xs font-medium text-zinc-600 dark:text-zinc-400 shrink-0 border border-zinc-200 dark:border-zinc-800">
                        <Calendar className="w-3 h-3" />
                        {edu.date}
                    </span>
                </div>

                {/* Degree Title */}
                <p className="text-xs sm:text-sm md:text-[15px] font-medium text-zinc-700 dark:text-zinc-300 mt-1 mb-2 leading-snug">
                    {edu.degree}
                </p>

                {/* Footer: Grades & Location */}
                <div className="flex flex-wrap items-center gap-2 mt-auto">
                    {/* Grade Highlight Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs font-semibold border border-emerald-500/20">
                        <Award className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                        {edu.grade}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Education() {
    const educationData = [
        {
            institution: "Dr. Hari Singh Gour Central University",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            date: "Aug 2022 - Jul 2026",
            location: "Sagar, MP",
            grade: "SGPA: 9.65 | CGPA: 8.21",
            logo: "./dhsgsu.png",
            isTextLogo: false
        },
        {
            institution: "Govt. Excellence Higher SS",
            degree: "12th Senior Secondary",
            date: "2022",
            location: "Damoh, MP",
            grade: "89.60%",
            logo: "XII",
            isTextLogo: true
        }
    ];

    return (
        <section className="w-full py-8 border-t border-border/40">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 px-2 sm:px-0">Education</h2>

            <div className="flex flex-col gap-3 sm:gap-2">
                {educationData.map((edu, index) => (
                    <EducationItem key={index} edu={edu} />
                ))}
            </div>
        </section>
    );
}