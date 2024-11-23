'use client'
import React from 'react'
import { useEffect, useState } from 'react';
export const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
      // Verificar si hay un tema guardado en localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
      } else {
        document.documentElement.classList.add('dark');
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    };
  
    return { theme, toggleTheme };
  
}
