import Projects from '@/components/projects/Projects';
import React from 'react';

const ProjectsPage = () => {
  return (
    <div>
      <div className=" font-bold text-[18px] text-zinc-800 dark:text-gray-300">Projects</div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
