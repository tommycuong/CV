import React from 'react';
import { Experience as ExperienceType } from '../../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="experience-section py-5" id="experience">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Kinh Nghiệm Làm Việc</h2>
          <p className="lead text-muted">Quá trình làm việc và phát triển nghề nghiệp</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate__animated animate__fadeInUp">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-date">
                  {exp.startDate} - {exp.endDate}
                </p>
                <ul className="timeline-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 