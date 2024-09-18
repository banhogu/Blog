import React from 'react';
import projectsData from '@/database/projects.json' assert { type: 'json' };
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 pb-10">
      {projectsData.projects &&
        projectsData.projects.map((item, i) => <ProjectItem key={i} {...item} />)}
    </div>
  );
};

export default Projects;
