import React from 'react';
import { FaDocker, FaGit, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import HexGrid from '@/components/HexGrid';

const Skills: React.FC = () => {
    const skills = [
        {'name': 'JavaScript', 'icon': SiJavascript, 'color': '#F7DF1E'},
        {'name': 'TypeScript', 'icon': SiTypescript, 'color': '#2775ca'},
        {'name': 'React', 'icon': FaReact, 'color': '#61DAFB'},
        {'name': 'Node.js', 'icon': FaNodeJs, 'color': '#339933'},
        {'name': 'Express.js', 'icon': SiExpress, 'color': '#000000'},
        {'name': 'MongoDB', 'icon': SiMongodb, 'color': '#339933'},
        {'name': 'Tailwind CSS', 'icon': SiTailwindcss, 'color': '#0EA5E9'},
        {'name': 'HTML', 'icon': FaHtml5, 'color': '#E34F19'},
        {'name': 'Git', 'icon': FaGit, 'color': '#E44600'},
        {'name': 'Docker', 'icon': FaDocker, 'color': '#28529A'}
    ];

    return (
		<div className="container p-16">
			<h1 className="text-3xl font-medium">My Skills</h1>
			<ul className='flex justify-center gap-4'>
				{skills.map((skill, index) => (
					<li key={index} title={skill.name}>
						<skill.icon style={{color: skill.color}} className='h-12 w-12 rounded'/>
					</li>
				))}
			</ul>

            <HexGrid icons={skills.map(skill => skill.icon)} />
		</div>
	);
};

export default Skills