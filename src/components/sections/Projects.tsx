import { FiGithub as Github, FiExternalLink as ExternalLink } from "react-icons/fi";
import { GlowingEffect } from "../ui/glowing-effect";

interface ProjectLink {
    label: string;
    icon: React.ReactNode;
    url: string;
}

interface ProjectData {
    title: string;
    description: string;
    techStack: string[];
    links: ProjectLink[];
    featured: boolean;
}

export function Projects() {
    const projects: ProjectData[] = [
        {
            title: "Chat-NCERT",
            description: "A web-based academic assistant for NCERT content with structured question–answer interaction. Integrated local LLM responses using Ollama for query processing and contextual answer generation.",
            techStack: ["Next.js", "Express.js", "MongoDB", "Ollama"],
            links: [
                { label: "Website", icon: <ExternalLink className="w-3 h-3" />, url: "#" },
                { label: "Source", icon: <Github className="w-3 h-3" />, url: "#" }
            ],
            featured: true,
        },
        {
            title: "Infinity College System",
            description: "During My Internship, I architected this role-based admission portal using PHP, MySQL, and a strict MVC pattern. I focused heavily on backend performance by optimizing SQL queries for efficient data handling and implemented secure, JWT-based authentication to manage student, counsellor, and admin modules safely.",
            techStack: ["PHP", "MySQL", "MVC"],
            links: [
                { label: "Source", icon: <Github className="w-3 h-3" />, url: "#" }
            ],
            featured: false,
        },
        {
            title: "Cactus Social Network",
            description: "I developed this full-stack platform to handle live user interactions using React, Node.js, Express, and MongoDB. To understand and implement real-time systems, I engineered a live messaging and notification architecture utilizing Socket.io., structured the REST APIs.",
            techStack: ["React", "Express", "MongoDB", "Socket.io"],
            links: [
                { label: "Source", icon: <Github className="w-3 h-3" />, url: "#" }
            ],
            featured: false,
        },
        {
            title: "E-Commerce Dashboard",
            description: "I built this administrative dashboard to streamline product management and business analytics. I applied strict database normalization in MySQL to maintain data integrity. On the frontend, I integrated REST APIs with Chart.js and Tabulator to visualize complex data sets.",
            techStack: ["React", "Node.js", "MySQL", "Chart.js"],
            links: [
                { label: "Source", icon: <Github className="w-3 h-3" />, url: "#" }
            ],
            featured: false,
        }
    ];

    return (
        <section className="py-8 border-t border-border/40">
            <div className="flex flex-col items-center mb-8 text-center">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-3 border border-border/50">My Projects</span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">Check out my latest work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                    I&apos;ve worked on a variety of web development projects, from AI-integrated assistants to robust college admission systems. Here are a few of my favorites.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="relative h-full rounded-2xl list-none">
                        <GlowingEffect
                            blur={0}
                            borderWidth={3}
                            spread={50}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div
                            className={` relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-500/20 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] transition-all duration-300 group
              ${project.featured
                                    ? "bg-card  shadow-[0_0_15px_rgba(var(--primary),0.1)] relative"
                                    : "bg-card/50 hover:bg-card/80"
                                }`}
                        >
                            {project.featured && (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                            )}

                            <div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-[13px] text-muted-foreground leading-tight mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded-md bg-secondary/80 text-secondary-foreground text-[10px] font-semibold tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-background border border-border text-xs font-medium hover:bg-muted transition-colors"
                                            >
                                                {link.icon}
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
