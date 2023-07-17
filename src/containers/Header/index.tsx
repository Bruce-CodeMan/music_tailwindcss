/*
 * @Date: 2023-07-17 10:45:07
 * @Author: Bruce Hsu
 * @Description: 
 */

import Logo from "@/assets/images/logo-inverted.png"

const Header = () => {
  return (
    <>
      <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
        {/* LEFT */}
        <div className="flex items-center gap-2 p-2">
          <img src={Logo} alt="" width={50}/>
          <div className="text-2xl font-bold">
            tw:<span className="text-sky-900">mf</span>
          </div>
        </div>  
        {/* RIGHT */}
        <div className="flex flex-1 items-center justify-end">
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Home</span>
          </div>
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Lineup</span>
          </div>
          <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>Tickets</span>
            <div className="absolute top-full bg-pink-500 right-0 whitespace-nowrap">
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
      </nav>  
    </>
  )
}

export default Header;