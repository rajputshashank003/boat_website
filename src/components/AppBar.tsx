import { useState } from "react";
import MenuCrossIcons from "./MenuCrossIcons"
import gsap from "gsap";

const AppBar = () => {
    const [isOpen , setIsOpen ] = useState(false);

    const handleMenuOpen = () => {
        const gsapTl = gsap.timeline();

        gsapTl.to(".menu_options", {
            top: isOpen ? "3.5rem" : 0,
            stagger : isOpen ? -0.1 : 0.1,
            delay: isOpen ? 0 : 0.5,
            ease : isOpen ? "power3.in" : "power4.inOut",
        }, "abc");
        gsapTl.to(".menu_bg", {
            left: isOpen ? "100%" : "50%",
            duration: 1,
            delay: isOpen ? 0.5 : 0.2,
            ease: "power3.inOut",
        }, "abc");
        
        setIsOpen(prev => !prev);
    }
    return (
        <div className='bg-[#02272F] w-full relative text-white z-[9999] h-20 fixed grid grid-cols-2 md:grid-cols-3'>
            <div className="options max-md:hidden col-span-1 flex flex-row sm:gap-6 justify-center items-center sm:p-4 sm:px-10">
                <span className="hover:underline cursor-pointer">Products</span>
                <span className="w-[6rem] hover:underline cursor-pointer" >My Account</span>
                <span className="hover:underline cursor-pointer">Offer</span>
            </div>
            <div className="absolute w-1/2 h-screen max-md:text-xl left-full z-[9999] bg-[#02272F] flex flex-col top-20 menu_bg md:hidden">
                <div className="absolute flex flex-col cursor-pointer gap-2 left-4">
                    <div className=" relative overflow-hidden h-8 hover:underline duration-300">
                        <span className="menu_options relative">
                            Products
                        </span>
                    </div>
                    <div className=" relative overflow-hidden h-8 hover:underline duration-300">
                        <span className="menu_options relative">
                            My Account
                        </span>
                    </div>
                    <div className=" relative overflow-hidden h-8 hover:underline duration-300">
                        <span className="menu_options relative">
                            Offer
                        </span>
                    </div>
                </div>
                <div className="absolute bottom-26 text-sm left-4">
                    &copy; 2025 <a href="https://chessv.netlify.app" className="decoration-none hover:underline">ChessV</a>
                </div>
            </div>
            <div className="options col-span-1 flex flex-row sm:gap-8 justify-center items-center sm:p-4 sm:px-20">
                MAQ
            </div>
            <div className="options col-span-1 flex flex-row gap-6 sm:gap-8 justify-center items-center sm:p-4 sm:px-20">
                <span className="cursor-pointer hover:scale-125 duration-300"><svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg></span>
                <span className="cursor-pointer hover:scale-125 duration-300"><svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-basket-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 10l-2 -6" /><path d="M7 10l2 -6" /><path d="M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.479 2.729" /><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M15 19l2 2l4 -4" /></svg></span>
                <div onClick={handleMenuOpen} className="relative md:hidden">
                    <MenuCrossIcons />
                </div>
            </div>
        </div>
  )
}

export default AppBar