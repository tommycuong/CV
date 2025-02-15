import React from 'react';
import { Skill } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="py-5 bg-light" id="skills">
      <div className="container">
        <h2 className="text-center mb-5">Kỹ Năng</h2>
        <div className="row g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3 className="h5 text-primary mb-4">{category}</h3>
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 