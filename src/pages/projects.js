import React from 'react';
import Layout from '@theme/Layout';

const projects = [
  {
    title: "Project Title 1",
    description: "Description of the first project.",
    link: "/docs/project1"
  },
  {
    title: "Project Title 2",
    description: "Description of the second project.",
    link: "/docs/project2"
  }
  // Add more projects as needed
];

function ProjectItem({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link}>Learn more</a>
    </div>
  );
}

export default function Projects() {
  return (
    <Layout title="Projects">
      <div>
        {projects.map(project => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </Layout>
  );
}
