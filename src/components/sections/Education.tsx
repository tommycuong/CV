import React from 'react';
import { Education as EducationType } from '../../types';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education-section py-5" id="education">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Học Vấn</h2>
          <p className="lead text-muted">Quá trình học tập và bằng cấp của tôi</p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item animate__animated animate__fadeInUp">
              <div className="timeline-content">
                <div className="education-card">
                  <div className="education-period">
                    <span className="year">{edu.graduationDate}</span>
                  </div>
                  
                  <div className="education-details">
                    <h3 className="school-name">
                      <i className="fas fa-graduation-cap me-2"></i>
                      {edu.school}
                    </h3>
                    <h4 className="degree">
                      {edu.degree} - {edu.field}
                    </h4>
                    
                    {edu.achievements && (
                      <div className="achievements mt-3">
                        <h5 className="achievements-title">
                          <i className="fas fa-award me-2"></i>
                          Thành tích
                        </h5>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.courses && (
                      <div className="courses mt-3">
                        <h5 className="courses-title">
                          <i className="fas fa-book me-2"></i>
                          Các môn học chính
                        </h5>
                        <div className="course-tags">
                          {edu.courses.map((course, idx) => (
                            <span key={idx} className="course-tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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

export default Education; 