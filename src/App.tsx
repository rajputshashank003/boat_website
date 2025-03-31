import { useEffect } from "react"
import AppBar from "./components/AppBar"
import LandingPage from "./pages/LandingPage"
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 0.1,
                duration: 1.2,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            },
        });

        return () => {
            locomotiveScroll.destroy();
        }
    });

    return (
        <div className="bg-[#F6EBE3] w-screen no-scrollbar flex justify-center items-center flex-col pb-8 overflow-x-hidden">
            <AppBar/>
            <div className="relative top-20 mb-40 bg-[#F6EBE3]">
                <LandingPage/>
            </div>
            <Footer/>
        </div>
    )
}

export default App