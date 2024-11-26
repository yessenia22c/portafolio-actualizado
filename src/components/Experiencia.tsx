import React from 'react'

export const Experiencia = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        <article className='bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl'>
            <h3 className='font-semibold text-lg'>Freelance</h3>
            <time className='font-light text-sm text-[#00ba95]' dateTime="2024-11-26">2024 - Actualmente</time>
            <p>Actualmente me encuentro en busqueda de nuevos retos y proyectos para seguir creciendo profesionalmente.</p>
        </article>
        <article className='bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl'>
            <h3 className='font-semibold text-lg'>Desarrolladora de software</h3>
            <time className='font-light text-sm text-[#00ba95]' dateTime="2022-01-01">2022 - 2023</time>
            <p>Estuve a cargo del desarrollo e implementación de un sistema web diseñado para la empresa ELITEISO S.R.L.</p>
        </article>
        <article className='bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl'>
            <h3 className='font-semibold text-lg'>Webmaster</h3>
            <time className='font-light text-sm text-[#00ba95]' dateTime="2020-01-01">2020 - 2022</time>
            <p>Trabajé en la implementación y administración de la plataforma Moodle y Landing Page con WordPress en la empresa ELITEISO S.R.L.</p>
        </article>
    </div>
  )
}
