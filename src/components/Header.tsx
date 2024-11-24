import React from 'react'
import ThemeToggle from './ThemeToggle'

export const Header = () => {
  return (
    <header className='w-full'>
        <nav className='flex gap-8 text-sm bg-gradient-to-b from-[#1194ff3a] to-[#00132e]   border items-center justify-center border-[#00ba95] rounded-full px-2 py-2'>
            <ul className='flex gap-8 items-center'>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#contactos">Contactos</a></li>
                <li>
                    <ThemeToggle></ThemeToggle>
                </li>
            </ul>
        </nav>
    </header>
  )
}
// background: linear-gradient(to bottom, rgba(0, 19, 46, 1) 0%,rgba(0, 76, 120, 0.28133621215820315) 100%);