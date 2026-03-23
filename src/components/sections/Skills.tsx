import {
     FaPython, FaPhp,
    FaReact,
    FaNodeJs as FaNodejs,
    FaGit, FaDocker,
} from "react-icons/fa";
import { SiBun as FaBun, SiCanva as FaCanva, SiFigma as FaFigma, SiExpress as FaExpress, SiJavascript as FaJavascript, SiJsonwebtokens as FaJsonwebtokens, SiLangchain as FaLangchain, SiMongodb as FaMongodb, SiN8N as FaN8N, SiPostgresql as FaPostgresql, SiScikitlearn as FaScikitlearn, SiSocketdotio as FaSocketdotio, SiTailwindcss as FaTailwindcss, SiTypescript as FaTypescript, SiPostman as FaPostman, SiOllama,  } from "react-icons/si";
import { GrGraphQl as FaGraphql } from "react-icons/gr";
import { RiNextjsFill as FaNextdotjs } from "react-icons/ri";
import { DiRedis as FaRedis } from "react-icons/di";


import {
    FaJava, FaDatabase, FaAws, FaLinux, FaMicrosoft,
    FaGithub
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { VscAzure } from "react-icons/vsc";
import { TbVectorSpline } from "react-icons/tb";
import { GiGalaxy } from "react-icons/gi";

interface Skill {
    name: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
    border: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

import { motion } from "motion/react";

export function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            title: "Programming Languages",
            skills: [
                { name: "TypeScript", icon: <FaTypescript className="w-4 h-4" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { name: "JavaScript", icon: <FaJavascript className="w-4 h-4" />, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
                { name: "Python", icon: <FaPython className="w-4 h-4" />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
                { name: "PHP", icon: <FaPhp className="w-4 h-4" />, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                { name: "SQL", icon: <FaDatabase className="w-4 h-4" />, color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20" },
                { name: "Java", icon: <FaJava className="w-4 h-4" />, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "Next.js", icon: <FaNextdotjs className="w-4 h-4" />, color: "text-black dark:text-neutral-300", bg: "bg-neutral-500/10", border: "border-neutral-500/20" },
                { name: "Express.js", icon: <FaExpress className="w-4 h-4" />, color: "text-black", bg: "bg-gray-500/10", border: "border-gray-500/20" },
                { name: "React.js", icon: <FaReact className="w-4 h-4" />, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                { name: "Shadcn-UI", icon: <FaTailwindcss className="w-4 h-4" />, color: "text-slate-800 dark:text-slate-200", bg: "bg-slate-500/10", border: "border-slate-500/20" },
                { name: "Node.js", icon: <FaNodejs className="w-4 h-4" />, color: "text-green-600", bg: "bg-green-600/10", border: "border-green-600/20" },
                { name: "Bun.js", icon: <FaBun className="w-4 h-4" />, color: "text-[#969186]", bg: "bg-black/10", border: "border-neutral-800/20" },
                { name: "GraphQL", icon: <FaGraphql className="w-4 h-4" />, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                { name: "WebSockets", icon: <FaSocketdotio className="w-4 h-4" />, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { name: "JWT", icon: <FaJsonwebtokens className="w-4 h-4" />, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
            ]
        },
        {
            title: "AI & Automation Tools",
            skills: [
                { name: "n8n", icon: <FaN8N className="w-4 h-4" />, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
                { name: "Ollama", icon: <SiOllama className="w-4 h-4" />, color: "text-neutral-800", bg: "bg-neutral-500/10", border: "border-neutral-500/20" },
                { name: "LangChain (Basic)", icon: <FaLangchain className="w-4 h-4" />, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { name: "Scikit-learn", icon: <FaScikitlearn className="w-4 h-4" />, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { name: "Vector Databases", icon: <TbVectorSpline className="w-4 h-4" />, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
            ]
        },
        {
            title: "Databases & Cloud Infrastructure",
            skills: [
                { name: "PostgreSQL", icon: <FaPostgresql className="w-4 h-4" />, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20" },
                { name: "MongoDB", icon: <FaMongodb className="w-4 h-4" />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
                { name: "Redis", icon: <FaRedis className="w-4 h-4" />, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
                { name: "AWS (EC2)", icon: <FaAws className="w-4 h-4" />, color: "text-yellow-600", bg: "bg-yellow-600/10", border: "border-yellow-600/20" },
                { name: "Azure", icon: <VscAzure className="w-4 h-4" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
            ]
        },
        {
            title: "Tools & Workflow",
            skills: [
                { name: "Docker", icon: <FaDocker className="w-4 h-4" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { name: "Postman", icon: <FaPostman className="w-4 h-4" />, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { name: "Git", icon: <FaGit className="w-4 h-4" />, color: "text-orange-600", bg: "bg-orange-600/10", border: "border-orange-600/20" },
                { name: "GitHub", icon: <FaGithub className="w-4 h-4" />, color: "text-black dark:text-neutral-300", bg: "bg-neutral-500/10", border: "border-neutral-500/20" },
                { name: "MS Office", icon: <FaMicrosoft className="w-4 h-4" />, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
                { name: "Canva", icon: <FaCanva className="w-4 h-4" />, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                { name: "Figma", icon: <FaFigma className="w-4 h-4" />, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                { name: "VS Code", icon: <VscVscode className="w-4 h-4" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { name: "Antigravity IDE", icon: <GiGalaxy className="w-4 h-4" />, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { name: "Linux", icon: <FaLinux className="w-4 h-4" />, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
            ]
        }
    ];

    return (
        <section className="py-8 border-t border-border/40">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl font-bold mb-6"
            >
                Skills
            </motion.h2>

            <div className="space-y-6">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 }}
                    >
                        <h3 className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: .8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[13px] font-medium transition-all duration-300 cursor-default hover:scale-110 hover:-translate-y-1 ${skill.bg} ${skill.border} ${skill.color}`}
                                >
                                    {skill.icon}
                                    <span className="text-foreground">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
