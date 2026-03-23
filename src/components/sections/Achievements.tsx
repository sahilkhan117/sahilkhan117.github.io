import { motion } from "framer-motion";

interface AchievementData {
    title: string;
    logo: string;
    description: string;
    date: string;
}

export function Achievements() {
    const achievements: AchievementData[] = [
        {
            title: "Competitive Programming",
            logo: "./leetcode.png",
            description: "I continuously level up my core computer science skills through competitive programming. I have solved over 260 problems on LeetCode, maintaining a 1,619 rating that places me in the top 20.83% of developers globally.",
            date: "Present"
        },
        {
            title: "Smart India Hackathon (SIH)",
            logo: "./SIH.png",
            description: "I secured 4th rank in the internal Smart India Hackathon by designing a PM Internship Portal Allocation System, proving my ability to rapidly architect and build functional logic under pressure.",
            date: "2024"
        },
        {
            title: "NPTEL Programming in Java",
            logo: "./iit_KGP.png",
            description: "I earned an Elite + Topper distinction in Programming in Java from IIT Kharagpur, ranking in the top 5% (90+ percentile) nationally.",
            date: "Jun 2024"
        },
        {
            title: "Reliance Foundation Scholarship",
            logo: "./reliance.png",
            description: "I was selected among the top 5,000 students nationwide for this scholarship, recognizing my consistent focus on academic excellence and technical execution.",
            date: "Jun 2023"
        }
    ];

    return (
        <section className="py-12 border-t border-border/40">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-12 text-center">
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs font-semibold mb-4 border border-zinc-200 dark:border-zinc-800">
                    Achievements & Highlights
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">
                    I like building things
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Solving real-world problems with innovative tech, securing top ranks, and continuous learning.
                </p>
            </div>

            {/* Timeline Section */}
            <div className="relative max-w-2xl mx-auto">
                
                {/* Fixed Timeline Line: Perfectly centered under the 48px (w-12) logo */}
                <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-linear-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

                <div className="space-y-8 relative">
                    {achievements.map((item, index) => (
                        <div key={index} className="relative flex items-start gap-6 group">
                            
                            {/* Logo Wrapper */}
                            <div className="relative z-10 shrink-0 mt-1">
                                <div className="flex items-center justify-center w-12 h-12 p-2 rounded-full border border-inherit border-zinc-200 dark:border-zinc-500 bg-white  shadow-md transition-colors group-hover:border-primary/50 group-hover:shadow-xl">
                                    <img src={item.logo} alt={item.title} className="w-full h-full object-contain " />
                                </div>
                            </div>

                            {/* Card Wrapper with Framer Motion Physics */}
                            <motion.div 
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="flex-1"
                            >
                                <div className="p-3 rounded-2xl bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-500 shadow-sm dark:hover:shadow-white transition-colors group-hover:border-zinc-500 dark:group-hover:border-zinc-500 w-full">
                                    
                                    {/* Fixed Semantic HTML: Replaced span with div */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-2 mb-2">
                                        <h3 className="font-bold text-sm md:text-base text-zinc-900 dark:text-zinc-100 leading-tight">
                                            {item.title}
                                        </h3>
                                        <time className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 shrink-0 sm:pt-0.5">
                                            {item.date}
                                        </time>
                                    </div>
                                    
                                    <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}