import React from 'react';
import { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
}

const projectImages = [
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
];

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Dự Án</h2>
          <p className="lead text-muted">Một số dự án tiêu biểu tôi đã thực hiện</p>
        </div>

        <div className="d-flex justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img 
                    src={projectImages[index]} 
                    alt={project.name}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light btn-sm me-2"
                        >
                          <i className="fab fa-github me-2"></i>
                          Source Code
                        </a>
                      )}
                      <a 
                        href="#"
                        className="btn btn-primary btn-sm"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h4 mb-0">{project.name}</h3>
                    <span className="project-year text-muted">2023</span>
                  </div>
                  
                  <p className="text-muted mb-3">{project.description}</p>
                  
                  <div className="tech-stack mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer d-flex justify-content-between align-items-center">
                    <div className="project-stats">
                      <span className="me-3">
                        <i className="far fa-star me-1"></i>
                        24
                      </span>
                      <span>
                        <i className="far fa-code-fork me-1"></i>
                        8
                      </span>
                    </div>
                    <div className="project-status">
                      <span className="badge bg-success">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 