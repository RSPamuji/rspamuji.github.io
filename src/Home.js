/* This example requires Tailwind CSS v2.0+ */

import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
    <div>
   <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 align = "center" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">SIG POPULASI UNGGAS</span>{' '}
                <span className="block text-indigo-600 xl:inline">PROVINSI KEP RIAU</span>
              </h1>
              <p align = "center"className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Berikut ini Merupakan Aplikasi dari Sistem Informasi Geografis Populasi Unggas Kepulauan Riau.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <h1 align="center"><a
                    href="ProfilProvinsi"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    PROFIL PROFINSI KEP RIAU
                  </a>
                  </h1>
                </div>
              </div>
            </div>
          </main>
          </div>
          </div>
          )}