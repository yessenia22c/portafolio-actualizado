import React from 'react'
import ThemeToggle, { ThemeToggle2 } from './ThemeToggle'
import { MenuDesplegable } from './MenuDesplegable'

export const Header = () => {
  return (
    <header className='w-full'>
        <nav className='flex gap-8 text-sm bg-gradient-to-b dark:from-[#1194ff3a] dark:to-[#00132e]  border items-center justify-center border-gray-800 dark:border-[#00ba95] rounded-full px-2 py-2'>
            <ul className='max-[532px]:hidden flex gap-8 items-center text-gray-800 dark:text-white'>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#educacion">Educación</a></li>
                <li className='flex items-center justify-center'>
                    <ThemeToggle></ThemeToggle>
                </li>
            </ul>
            <ul className='min-[532px]:hidden flex gap-8 items-center text-gray-800 dark:text-white'>
              <li>
                <MenuDesplegable></MenuDesplegable>
              </li>
                <li>
                    <ThemeToggle></ThemeToggle>
                </li>
            </ul>
        </nav>
    </header>
  )
}
// background: linear-gradient(to bottom, rgba(0, 19, 46, 1) 0%,rgba(0, 76, 120, 0.28133621215820315) 100%);