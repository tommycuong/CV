import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`hero-header ${theme}`}>
      <div className="overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-bold text-white mb-3">{name}</h1>
            <h2 className="h2 text-white mb-4">{title}</h2>
            <button 
              className="btn btn-outline-light rounded-circle p-2 position-absolute top-0 end-0 m-4"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 