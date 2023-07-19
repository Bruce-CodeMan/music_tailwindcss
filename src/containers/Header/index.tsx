/*
 * @Date: 2023-07-17 10:45:07
 * @Author: Bruce Hsu
 * @Description: 
 */

import Logo from "@/assets/images/logo-inverted.png"
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Header = () => {

  const [open, setOpen] = useState(false)

  const darkModeHandler = () => {
    if(document.body.classList.contains("dark")){
      document.body.classList.remove("dark")
    }else{
      document.body.classList.add("dark")
    }
  }

  return (
    <>
      <div 
        onClick={() => darkModeHandler()}
        className="fixed z-10 top-24 right-5 inline-block w-12 cursor-pointer rounded-lg bg-white text-3xl"
      >
        <SunIcon className="dark:hidden h-12 w-12 p-2"/>
        <MoonIcon className="hidden dark:inline w-12 h-12 p-2"/>
      </div>
      <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500 z-10">
        {/* LEFT */}
        <div className="flex items-center gap-2 p-2">
          <img src={Logo} alt="" width={50}/> 
          <div className="text-2xl font-bold">
            tw:<span className="text-sky-900">mf</span>
          </div>
        </div>  
        {/* RIGHT */}
        {/* mobile */}
        <div className="p-4 md:hidden flex flex-1 justify-end text-white">
          <button onClick={() => setOpen(true)}>
            <Bars3Icon className="h-6 w-6"/>
          </button>
        </div>
        {/* mobile end */}

        {/* mobile items */}
        {open && (
          <div className="absolute left-0 top-[62px] bg-black w-full h-[500px] drop-shadow-xl bg-gradient-to-r from-rose-500 to-pink-500">
            <div className="flex justify-end p-4">
              <button onClick={() => setOpen(!open)}>
                <XMarkIcon className="h-6 w-6"/>
              </button>
            </div>

            {/* mobile items content */}
            <div className="flex flex-col gap-5 text-2xl">
              <div className="relative flex items-center justify-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Home</span>
              </div>
              <div className="relative flex items-center justify-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Lineup</span>
              </div>
              <div className="group relative flex flex-col items-center p-4 justify-center cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Tickets</span>
                <div className="group-hover:block hidden w-full">
                  <div className="p-4 font-bold hover:bg-white/5 transition-colors ease-in-out relative text-center">
                    <span>Single day ticket</span>
                  </div>
                  <div className="p-4 font-bold hover:bg-white/5 transition-colors ease-in-out relative text-center">
                    <span>7 day</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
                <span>Support</span>
              </div>

            </div>
          </div>
        )}
        {/* mobile items end */}

        {/* chrome */}
        <div className="md:flex hidden flex-1 items-center justify-end">
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Home</span>
          </div>
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Lineup</span>
          </div>
          <div className="group relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Tickets</span>
            <div className="group-hover:block hidden absolute top-full bg-pink-500 right-0 whitespace-nowrap">
              <div className="p-4 font-bold hover:bg-white/5 transition-colors ease-in-out">
                <span>Single day ticket</span>
              </div>
              <div className="p-4 font-bold hover:bg-white/5 transition-colors ease-in-out">
                <span>7 day</span>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Support</span>
          </div>
        </div>
        {/* chrome end */}
      </nav>  
    </>
  )
}

export default Header;