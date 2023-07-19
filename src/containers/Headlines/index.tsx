/*
 * @Date: 2023-07-19 09:39:42
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import styles from "./index.module.less"

const Headlines = () => {
    
    

    const previousHandler = () => {
        let carousel = document.getElementById("carousel") as HTMLElement;
        const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
        carousel.scrollLeft = carousel.scrollLeft - itemWidth;
    }

    const nextHandler = () => {
        let carousel = document.getElementById("carousel") as HTMLElement;
        const itemWidth = carousel?.getElementsByTagName("div")[0].clientWidth;
        carousel.scrollLeft = carousel.scrollLeft + itemWidth;
    }

    return (
        <div className="mx-auto mt-20 max-w-screen-lg">
            <h2 className="text-5xl font-bold">Headlines</h2>
            <p className="text-gray-400">
                Experience the sonic delight from these made-up artists across 7 days
                that music fans calling "one of the many gigs that will happen this year"
            </p>

            <div className="flex">
                {/* previous */}
                <div
                    onClick={()=>previousHandler()} 
                    className="flex items-center justify-center text-5xl cursor-pointer"
                >
                    <ChevronLeftIcon className="h-12 w-12"/>
                </div>
                {/* pictures of background */}
                <div id="carousel" className="scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
                    <div className="min-w-[80%] md:min-w-[40%]">
                        <div

                            className={` ${styles.band1} h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20`}
                        ></div>
                        <h5 className="mt-2 font-bold">Corduroy Gary</h5>
                        <h6>1st July 9pm - Main Stage</h6>
                    </div>
                    <div className="min-w-[80%] md:min-w-[40%]">
                        <div

                            className={` ${styles.band2} h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20`}
                        ></div>
                        <h5 className="mt-2 font-bold">Corduroy Gary</h5>
                        <h6>1st July 9pm - Main Stage</h6>
                    </div>
                    <div className="min-w-[80%] md:min-w-[40%]">
                        <div

                            className={` ${styles.band3} h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20`}
                        ></div>
                        <h5 className="mt-2 font-bold">Corduroy Gary</h5>
                        <h6>1st July 9pm - Main Stage</h6>
                    </div>
                    <div className="min-w-[80%] md:min-w-[40%]">
                        <div

                            className={` ${styles.band4} h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20`}
                        ></div>
                        <h5 className="mt-2 font-bold">Corduroy Gary</h5>
                        <h6>1st July 9pm - Main Stage</h6>
                    </div>
                </div>
                {/* next */}
                <div
                    onClick={()=>nextHandler()}
                    className="flex items-center justify-center text-5xl pr-6 cursor-pointer"
                >
                    <ChevronRightIcon className="h-12 w-12"/>
                </div>
            </div>
        </div>
    )
}

export default Headlines;