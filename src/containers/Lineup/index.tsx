/*
 * @Date: 2023-07-19 14:02:07
 * @Author: Bruce Hsu
 * @Description: 
 */
const Lineup = () => {
    return (
        <div className="mt-20 mx-auto max-w-screen-lg">
            <h2 className="text-5xl dark:text-zinc-100">Lineup</h2>
            <p className="dark:text-zinc-100">Follow the timetable and stage to ensure you don't miss your favorite song</p>
            <div className="relative mt-5 bg-zinc-800 text-zinc-200 h-[250px]">
                {/* middle line */}
                <div className="absolute top-0 left-1/2 w-4 -ml-[8px] h-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
                    {/* red point */}
                    <div className="sticky top-1/2">
                        <div className="relative h-4 w-4">
                            <div className="bg-rose-500 rounded-full relative h-4 w-4"></div>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="p-2 my-4 rounded-lg bg-zinc-900 ml-4">1 st July</h4>
                    </div>
                    <div></div>
                    <div className="text-right">
                        <div className="font-bold">Bruce</div>
                        <div className="text-zinc-400">6pm - Page Stage</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <div className="font-bold">Jackie Tom</div>
                        <div className="text-zinc-400">6pm - Page</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lineup;