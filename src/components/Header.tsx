import React from "react";
import { Link } from "react-router-dom";
import sahilBl from "../assets/img/sahil_bl.png";
import sahilWh from "../assets//Img/sahil_wh.png";
import FontLoader from "./FontLoader";

const Header: React.FC = () => {
	return (
		<>
			<FontLoader />
			<header className="absolute w-full p-8 flex justify-center">
				<nav className="font-medium flex justify-between items-center w-5/6 bg-teal-800 text-white dark:bg-teal-300 dark:text-black rounded-full p-2">
					<div className="flex items-center space-x-4 px-4 pt-0.5">
						<img
							src={sahilWh}
							alt=""
							className="h-12 dark:hidden"
						/>
						<img
							src={sahilBl}
							alt=""
							className="h-12 hidden dark:block"
						/>
					</div>
					<ul className="text-lg flex justify-center space-x-8 p-2 *:hover:text-cyan-300  *:hover:underline *:transition-all *:duration-300 *:ease-in-out *:underline-offset-8">
                        {/* how to increse underline distance */}
						<li>
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
			</header>
		</>
	);
};

export default Header;
