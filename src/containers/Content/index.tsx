/*
 * @Date: 2023-07-18 09:57:45
 * @Author: Bruce Hsu
 * @Description: 
 */
import Logo from "@/assets/images/logo.png"
import styles from  "./index.module.less"

const Content = () => {
    return (
        <div className={`${styles.content} bg-cover bg-center bg-fixed flex flex-col items-center justify-center h-[calc(100vh-200px)] bg-orange-300 min-h-[400px]`}>
            <div className="rounded-xl bg-white/30 py-2 px-4 text-center backdrop-blur-md">
                <div className="relative">
                    <img src={Logo} alt="" className="w-[175px]"/>
                </div>
                <div className="text-5xl font-bold">
                    tw: <span className="text-sky-900">mf</span>
                </div>
            </div>
            <div className="mt-3 text-sm font-bold text-white">
            Keep me updated with news and promotions
            </div>
            <form className="mt-3 text-sm font-bold">
                <input 
                    type="email" 
                    className="rounded-sm border border-white/40 bg-white/30 p-2 font-bold text-sky-900 placeholder-zinc-50 outline-1 outline-pink-500"
                />
                <button
                    className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
                >Subscribe</button>
            </form>
        </div>
    )
}

export default Content;