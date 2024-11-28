import React from 'react'

export const Proyectos = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <article className=" flex flex-col gap-4 xl:flex-row bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl">
        <img
          className="w-auto h-60 rounded-xl object-cover"
          src="./proyectos/sisicap.png"
          alt="Proyecto sistema de control de ventas"
        />
        <div className="flex flex-col flex-wrap">
            <a className="flex gap-2 font-bold text-xl text-gray-800 dark:text-[#00ba95]" href="https://frontend-sisicap.vercel.app/login" target='_blank'>
                <h3 className="font-bold text-xl text-gray-800 dark:text-[#00ba95]">
                Sistema de control de ventas</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
              
            </a>
          
          <p className="my-2 text-wrap">
            Desarrollado y diseñado para la empresa ELITEISO S.R.L. En este
            proyecto, trabajé de manera individual en el desarrollo integral,
            abarcando tanto el Backend como el Frontend, así como la gestión de
            la base de datos. Esto implicó la responsabilidad completa desde el
            diseño hasta el desarrollo y el despliegue. (Para acceder a la demo
            solicitar acceso)
          </p>
          <h4 className="font-semibold text-lg text-gray-800 dark:text-[#00ba95]">
            Tecnologías
          </h4>
          <div>
            <ul className="flex flex-wrap my-2 gap-2">
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#7e1975]">
                  #Angular
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#157a37]">
                  #NodeJS
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#224fca]">
                  #Express
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#144f72]">
                  #MySQL
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#639]">
                  #CSS
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#a54c18]">
                  #HTML
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#b69e17]">
                  #JavaScript
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#224fca]">
                  #TypeScript
                </span>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className=" flex flex-col gap-4 xl:flex-row bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl">
        <img
          className="w-auto h-60 rounded-xl object-cover"
          src="./proyectos/ia_detecta_estafa.png"
          alt="Proyecto sistema de control de ventas"
        />
        <div className="flex flex-col flex-wrap">
          <a className="flex gap-2 font-bold text-xl text-gray-800 dark:text-[#00ba95]" href="https://ai-detecta-estafa.vercel.app/" target='_blank'>
                <h3 className="font-bold text-xl text-gray-800 dark:text-[#00ba95]">
                IA Detecta Estafa</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
              
            </a>
          <p className="my-2 text-wrap">
            Proyecto de Inteligencia Artificial para Detectar Sitios Web
            Fraudulentos. Desarrollé esta aplicación web con React y Next.js,
            integrando modelos de IA GPT-3 y GPT-4, y la desplegué en Vercel.
            Adquirí habilidades en el manejo de modelos de IA y el uso del SDK
            de Vercel.
          </p>
          <h4 className="font-semibold text-lg text-gray-800 dark:text-[#00ba95]">
            Tecnologías
          </h4>
          <div>
            <ul className="flex flex-wrap my-2 gap-2">
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#292929]">
                  #NextJS
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#224fca]">
                  #React
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#639]">
                  #CSS
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#a54c18]">
                  #HTML
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#b69e17]">
                  #JavaScript
                </span>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className=" flex flex-col gap-4 xl:flex-row bg-gradient-to-b dark:text-white text-gray-800 dark:from-[#1194ff3a] dark:to-[#00132e] border dark:border-[#00ba95] border-gray-800 p-8 rounded-xl">
        <img
          className="w-auto h-60 rounded-xl object-cover"
          src="./proyectos/tienda-virtual-woocommerce.png"
          alt="Proyecto sistema de control de ventas"
        />
        <div className="flex flex-col flex-wrap">
          <a className="flex gap-2 font-bold text-xl text-gray-800 dark:text-[#00ba95]" href="https://www.eliteiso.org/cursos" target='_blank'>
                <h3 className="font-bold text-xl text-gray-800 dark:text-[#00ba95]">
                Tienda virtual</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
              
            </a>
          <p className="my-2 text-wrap">
            Implementado con Wordpress y Woocommerce para la empresa ELITEISO
            S.R.L. En este proyecto, trabajé de manera individual, implementado
            el CMS WordPress y el plugin Woocommerce, así tambien,la pasarela
            de pago LIBELULA.BO configurada para pagos nacionales e
            internacionales.
          </p>
          <h4 className="font-semibold text-lg text-gray-800 dark:text-[#00ba95]">
            Tecnologías
          </h4>
          <div>
            <ul className="flex flex-wrap my-2 gap-2">
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#1f51bd]">
                  #WordPress
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#9a45ac]">
                  #WooCommerce
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#9b4ce9]">
                  #Php
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#a54c18]">
                  #HTML
                </span>
              </li>
              <li>
                <span className="font-medium italic text-sm text-white p-1 rounded-xl  bg-[#639]">
                  #CSS
                </span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
