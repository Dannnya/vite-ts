import { useContext } from 'react';
import { ThemeContext } from './Theme';
import '../css/Card.css';

export const Card = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Card must be used within a ThemeProvider');
  const { theme, toggleTheme } = context;

  return (
    <div className={`card ${theme === 'light' ? 'light' : 'dark'}`}>
      <h3 className="card-title">Theme Card</h3>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore tenetur harum nostrum nobis assumenda!
      </p>
      <button className="card-button" onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </button>
    </div>
  );
};
