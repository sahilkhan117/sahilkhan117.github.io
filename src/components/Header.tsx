import React from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import FontLoader from "./FontLoader";
import { FaSun as Sun, FaMoon as Moon } from "react-icons/fa";

const Header: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = React.useState(true);

	React.useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);
	return (
		<>
			<FontLoader />
			<div className="h-8" />
			<header className="sticky top-2 w-full flex justify-center z-50">
				<nav className="font-medium border-t border-s border-white/20 hover:border-white/25 transition-all transform-border origin-center flex justify-between items-center w-5/6 bg-linear-45 from-teal-600 via-teal-600 to-teal-950 text-white dark:to-teal-200 dark:text-white rounded-full p-2 me-24">
					<div className="flex items-center space-x-4 px-2">
						<span className="cursice text-5xl relative top-0.5">
							Sahil<span className="ps-1">Khan</span>
						</span>
					</div>
					<ul className="text-lg flex justify-center space-x-8 p-2 *:hover:text-cyan-300 dark:*:hover:text-cyan-600  *:hover:underline *:transition-all *:duration-300 *:ease-in-out *:underline-offset-8">
						{/* how to increse underline distance */}
						<li className="">
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/experience">Experience</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/skills">Skills</Link>
						</li>
						<li>
							<Link to="/education">Education</Link>
						</li>
					</ul>
					<button className="bg-white rounded-full font-medium text-black hover:bg-black hover:text-white px-4 py-3 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black transition-all">
						Contact Me
					</button>
				</nav>
				<div className="flex items-center space-x-2 absolute right-4 top-0.5 p-4 pe-3 rounded-full bg-teal-950 dark:bg-white">
					<Sun className="h-5 w-5 text-white dark:text-black" />
					<Switch
						id="dark-mode"
						checked={isDarkMode}
						onCheckedChange={setIsDarkMode}
					/>
					<Moon className="h-5 w-5 text-white dark:text-black" />
					<Label htmlFor="dark-mode" className="sr-only">
						Toggle dark mode
					</Label>
				</div>
			</header>
		</>
	);
};

export default Header;
