import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'Git',
        'Redux',
        'GraphQL',
        'Docker'
    ];

    return (
        <div className='containe w-5/6'>
            <h1 className='text-3xl font-medium'>My Skills</h1>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills