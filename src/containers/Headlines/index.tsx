/*
 * @Date: 2023-07-19 09:39:42
 * @Author: Bruce Hsu
 * @Description: 
 */

import styles from "./index.module.less"

const Headlines = () => {
    return (
        <div className="mx-auto mt-20 max-w-screen-lg">
            <h2 className="text-5xl font-bold">Headlines</h2>
            <p className="text-gray-400">
                Experience the sonic delight from these made-up artists across 7 days
                that music fans calling "one of the many gigs that will happen this year"
            </p>

            <div className="mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
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
        </div>
    )
}

export default Headlines;