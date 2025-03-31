import { motion } from "motion/react"
import BlurText from "./BlurText"

const LandingPage1 = () => {
  return (
    <div className="min-h-screen bg-[#F6EBE3] text-[#0D222D] text-4xl md:grid md:grid-cols-3">
        <div className="col-span-1 flex flex-col p-8 justify-center items-center">
            <div className="relative text-[4rem] sm:text-[6rem] flex flex-col gap-1 mb-8">
                <span className="meet uppercase font-semibold">
                    <BlurText
                        text="meet"
                        delay={150}
                        animateBy="letters"
                        direction="top"
                        className=""
                    />
                </span>
                <span className="meet relative left-16 sm:left-20 uppercase flex font-semibold">
                    <BlurText
                        text="boat-"
                        delay={300}
                        animateBy="letters"
                        direction="top"
                        className=""
                    />
                    <div data-scroll data-scroll-speed="0.1" className="absolute uppercase text-sm rounded-full right-8 -top-12 sm:-top-16 sm:-right-6 h-20 w-20 sm:h-30 sm:w-30 border-4 border-black flex flex-col font-bold justify-center items-center">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                        play
                    </div>
                </span>
                <span className="meet uppercase  font-semibold">
                    <BlurText
                        text="boom"
                        delay={150}
                        animateBy="letters"
                        direction="top"
                        className=""
                    />
                </span>
            </div>
            <div className="relative left-16 sm:left-24 flex flex-col gap-10">
                <div className=" text-[1rem] sm:text-[1.2rem] text-[#253842]">
                    Delivering truly colossal <br /> Sound with extreme bass,
                </div>
                <button
                    className={`
                        relative p-4 text-[1.2rem] w-fit rounded-md font-semibold
                        duration-300 cursor-pointer border border-[#253842]
                        shadow-[#253842] shadow-[5px_5px_0px_0px_rgba(109,40,217)]
                        hover:shadow-sm bg-[#FF7E71] text-white
                    `}
                >
                    Check out Boat
                </button>
            </div>
        </div>
        <motion.div 
            className="col-span-2 relative flex justify-center items-center"
        >
            <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [-15, 0, -15] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute bg-gradient-to-r h-10 w-10 top-10 rounded-full from-[#84fab0] to-[#8fd3f4]"
            />
            <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [-10, 0, -10] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                className="absolute bg-gradient-to-r z-[999] h-16 w-16 top-40 left-30 rounded-full from-[#84fab0] to-[#8fd3f4]"
            />
            <motion.div initial={{ y: 0 }}
                animate={{ y: [-15, 0, -15] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                className="absolute bg-gradient-to-r z-[9] h-20 w-20 top-60 sm:top-80 right-30 sm:right-10 rounded-full from-[#84fab0] to-[#8fd3f4]"
            />
            <motion.div initial={{ y: 0 }}
                animate={{ y: [-15, 0, -15] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                className="absolute bg-gradient-to-r max-sm:hidden h-24 w-24 z-[999] bottom-20 left-10 rounded-full from-[#84fab0] to-[#8fd3f4]"
            />
            <motion.img
                initial={{ opacity : 0 }}
                animate={{  opacity : 1 }}
                transition={{ duration: 2, ease: "easeInOut" }} 
                data-scroll data-scroll-speed="0.2"
                src="/Speaker1.png" className="z-[99]" alt="" 
            />
            <div data-scroll data-scroll-speed="0.2"  className="absolute z-[999] text-[1rem] md:text-[1.2rem] text-black font-sans">
                <motion.img 
                    initial={{ y: 0 }}
                    animate={{ y: [-15, 0, -15] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    src="/right-up.png" 
                    className=" left-10 z-[999] sm:left-40 top-12 relative h-20 w-20 sm:h-40 sm:w-40 scale-y-[-1]" alt="" 
                />
                <div className="top-36 -left-16 z-[999] backdrop-blur-xl rounded-xl p-4 sm:top-48 md:top-54 h-fit sm:left-40 md:left-28 absolute w-64">
                    The shell is made up of soft curves <br /> & wrapped in a recyclable fabric.
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default LandingPage1