import React from 'react'

export const Educacion = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        <article className='bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl'>
            <h3 className='font-semibold text-lg'>TÉCNICO SUPERIOR EN INFORMÁTICA</h3>
            <time className='font-light text-sm' dateTime="2024-11-26">2021 - 2024</time>
            <p>Estudios realizados en la universidad "Escuela Militar de Ingeniería - UASC"</p>
        </article>
        <article className='bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl'>
            <h3 className='font-semibold text-lg'>SARGENTO DE RESERVA DE INGENIERÍA</h3>
            <time className='font-light text-sm' dateTime="2022-01-01">2021 - 2024</time>
            <p>Instrucción y educación en materia militar con especialidad en ingenería realizados en la Escuela Militar de Ingeniería - UASC</p>
        </article>
        <article className='bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl'>
            <h3 className='font-semibold text-lg'>TEC. DISEÑO GRÁFICO</h3>
            <time className='font-light text-sm' dateTime="2020-01-01">2020 - 2022</time>
            <p>Estudios realizados en el Instituto técnico San Pablo del Oriente.</p>
        </article>
    </div>
  )
  
}
