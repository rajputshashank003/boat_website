function Footer() {
    return (
        <footer className="rounded-md w-[96%] rounded-md shadow bg-[#02272F] text-white">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">© {new Date().getFullYear()} &nbsp; 
                    <a href="https://chessv.netlify.app/" className="hover:underline"> 
                        ChessV
                    </a> All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-mediumsm:mt-0">
                    <li>
                        <a href="https://linkedin.com/in/rajputshashank" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/rajputshashank003" className="hover:underline me-4 md:me-6">Github</a>
                    </li>
                    <li>
                        <a href="https://github.com/rajputshashank003/boat_website" className="hover:underline me-4 md:me-6">Project Repository</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
