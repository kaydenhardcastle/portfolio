import React from 'react';

import Project from './Project';
import { Tabs, TabPane } from './Tabs';

import { projects } from '../projects';

import './Projects.scss';

const ProjectSection = ({ title, projectList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="projects-list">
        {projectList.map((project) => (
          <Project key={project?.id} {...project} />
        ))}
      </div>
    </div>
  );
}

const Projects = () => {
  const modifiedProjects = projects.map((project) => ({
    ...project,
    date: new Date(project.date).toDateString(),
    sortDate: new Date(project.date),
  }));

  const websiteProjects = modifiedProjects.filter(entry => entry.type === "website").sort((a, b) => b.sortDate - a.sortDate);
  const codeProjects = modifiedProjects.filter(entry => entry.type === "code").sort((a, b) => b.sortDate - a.sortDate);
  const gameProjects = modifiedProjects.filter(entry => entry.type === "game").sort((a, b) => b.sortDate - a.sortDate);
  const youtubeProjects = modifiedProjects.filter(entry => entry.type === "youtube").sort((a, b) => b.sortDate - a.sortDate);
  const musicProjects = modifiedProjects.filter(entry => entry.type === "music").sort((a, b) => b.sortDate - a.sortDate);

  return (
    <div className="projects">
      <h1>Projects</h1>
      <Tabs defaultActiveKey={0}>
        <TabPane
          tab="Websites"
          children={
            <ProjectSection
              title='Websites'
              projectList={websiteProjects}
            />
          }
        />
        <TabPane
          tab="Music"
          children={
            <ProjectSection
              title='Music'
              projectList={musicProjects}
            />
          }
        />
        <TabPane
          tab="YouTube"
          children={
            <ProjectSection
              title='YouTube'
              projectList={youtubeProjects}
            />
          }
        />
        <TabPane
          tab="Video Games"
          children={
            <ProjectSection
              title='Video Games'
              projectList={gameProjects}
            />
          }
        />
        <TabPane
          tab="Code"
          children={
            <ProjectSection
              title='Code'
              projectList={codeProjects}
            />
          }
        />
      </Tabs>
    </div>
  );
};

export default Projects;
