import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme); // Set theme from local storage if available
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggle theme
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme in local storage
  };

  return { theme, toggleTheme };
};

export default useTheme;
