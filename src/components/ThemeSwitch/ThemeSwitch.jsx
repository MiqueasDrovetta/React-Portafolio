
import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import './ThemeSwitch.css';

const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-switch-container">
      <button className="theme-switch" onClick={toggleTheme} aria-label="Cambiar tema">
        {theme === 'light' ? <BsMoon /> : <BsSun />}
      </button>
    </div>
  );
};

export { ThemeSwitch };
