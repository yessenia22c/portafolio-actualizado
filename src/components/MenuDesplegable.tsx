'use client'
import React, { useState } from 'react'

export const MenuDesplegable = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button onClick={handleDropdown} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" 
        className="text-white flex items-center justify-center bg-[#00ba95] p-2 rounded-full" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </button>
        
        <div id="dropdownDelay" className={`z-10 ${isOpen? 'block' : 'hidden'} bg-white absolute  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gradient-to-b dark:from-[#2c3d63] dark:to-[#00132e]  `}>
            <ul className="relative py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                <li>
                    <a href='#sobre-mi' onClick={handleDropdown} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#00ba95]  dark:hover:text-white">Sobre mí</a>
                </li>
                <li>
                    <a href='#experiencia' onClick={handleDropdown} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#00ba95]  dark:hover:text-white">Experiencia</a>
                </li>
                <li>
                    <a href='#proyectos' onClick={handleDropdown} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#00ba95]  dark:hover:text-white">Proyectos</a>
                </li>
                <li>
                    <a href='#educacion' onClick={handleDropdown} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#00ba95]  dark:hover:text-white">Educación</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
