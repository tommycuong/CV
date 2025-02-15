import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'about', name: 'Giới Thiệu', icon: 'fas fa-user' },
    { id: 'skills', name: 'Kỹ Năng', icon: 'fas fa-code' },
    { id: 'experience', name: 'Kinh Nghiệm', icon: 'fas fa-briefcase' },
    { id: 'projects', name: 'Dự Án', icon: 'fas fa-project-diagram' },
    { id: 'education', name: 'Học Vấn', icon: 'fas fa-graduation-cap' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="sidebar-item"
              onClick={() => scrollToSection(item.id)}
            >
              <i className={`${item.icon} me-2`}></i>
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {isOpen && <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar; 