import { motion } from "motion/react"

const LandingPageBar2 = () => {
    return (
        <div className="h-fit max-md:py-8 md:h-[60vh] bg-[#02272F] text-4xl text-[#FAF4F0] w-screen flex flex-col md:grid grid-cols-2 justify-center items-center">
            <div className="col-span-1 max-md:flex grid grid-cols-3 justify-center items-center h-full">
                <img src="/Sale_img1.jpg" className="h-[40%] w-[40%] max-md:hidden rounded-r-xl object-cover col-span-1" alt="" />
                <div data-scroll data-scroll-speed="0.05" className="relative h-[80%] w-[70%] col-span-2 flex justify-center items-center">
                    <div className="absolute h-[95%] w-[90%] rounded-xl border-2 border-[#FAF4F0] z-[999]"></div>
                    <img src="/Sale_img1.jpg" className="rounded-xl relative h-full w-full object-cover" alt="" />
                </div>
            </div>
            <div className="col-span-1 h-[70%] w-full text-[3rem] flex justify-center gap-6 items-center md:items-start flex-col">
                <span className="font-semibold">
                    CONTROL IT <br /> ALL LIKE MAGIC
                </span>
                <p className="text-sm text-gray-400">
                    Keep the party going for longer with waterproof <br />
                    Bluetooth speaker that gives you 20 hours play time
                </p>
                <motion.button
                    initial={{opacity : 0, y : 10}}
                    whileInView={{opacity : 1 , y : 0}}
                    viewport={{amount : 0.5}}
                    transition={{duration : 1, ease : "easeInOut"}}
                    className={`
                        relative p-4 text-[1.2rem] w-fit rounded-md font-semibold
                        duration-300 cursor-pointer border border-[#253842]
                        shadow-[#F6EBE3] shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                        hover:shadow-sm bg-[#FF7E71] text-white
                    `}
                >
                    Check out Boat
                </motion.button> 
            </div>
        </div>
    )
}

export default LandingPageBar2