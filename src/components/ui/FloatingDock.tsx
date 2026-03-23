import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { CgMail as Mail } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { RxMoon as Moon } from "react-icons/rx";
import { MdOutlineWbSunny as Sun } from "react-icons/md";
import { BiLogoGmail, BiSolidUserBadge } from "react-icons/bi";

import { FloatingDock as AceternityDock } from "./floating-dock";
import { SiLeetcode } from "react-icons/si";
import { ThemeToggler } from "../ThemeProvider";

export function FloatingDock() {
    const links = [
        {
            title: "Home",
            icon: <FiHome className="w-full h-full text-black dark:text-white " />,
            href: "#",
            target: "_self"
        },
        {
            title: "Resume",
            icon: <BiSolidUserBadge className="w-full h-full text-blue-900 dark:text-blue-400 " />,
            href: "./Sahil_Khan.pdf",
            target: "_blank"
        },
        {
            title: "Email",
            icon: <BiLogoGmail className="w-full h-full text-rose-800 dark:text-rose-400 " />,
            href: "mailto:work.sahilkhan1@gmail.com",
            target: "_blank"
        },
        {
            title: "LinkedIn",
            icon: <Linkedin className="w-full h-full text-sky-800 dark:text-sky-600 " />,
            href: "https://linkedin.com/in/sahilkhan117",
            target: "_blank"
        },
        {
            title: "Leetcode",
            icon: <SiLeetcode className="w-full h-full text-yellow-600 dark:text-yellow-500 " />,
            href: "https://leetcode.com/u/sahilkhan117/",
            target: "_blank"
        },
        {
            title: "GitHub",
            icon: <Github className="w-full h-full text-black dark:text-white " />,
            href: "https://github.com/sahilkhan117",
            target: "_blank"
        },

        {
            title: "Theme",
            icon: <ThemeToggler className="w-full h-full flex items-center justify-center" />,
            href: "#",
            onClick: (e) => e.preventDefault()
        }
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-md:scale-75">
            <AceternityDock items={links} />
        </div>
    );
}
