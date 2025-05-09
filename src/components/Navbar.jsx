import React, { useState } from 'react'
import Logo from "../assets/logo/logo1 dark.png"
import Logo2 from "../assets/logo/logo1 light.png"
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    }


    return (
        <div>
            <motion.nav
                className="bg-[#E9ECEF] dark:bg-[#181818] p-4 "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div
                    className="container mx-auto flex justify-between items-center max-w-[1200px]"
                >
                    <a href='#'>
                        <div className='w-[140px] sm:w-[180px] lg:w-[250px]'>
                            {isDarkMode &&
                                <img src={Logo} alt="Logo" />
                            }
                            {!isDarkMode &&
                                <img src={Logo2} alt="Logo" />
                            }
                            
                        </div>

                    </a>


                    {/* Desktop Menu */}
                    <motion.div
                        className="hidden md:flex text-[#212529] dark:text-[#E0E0E0] space-x-2 lg:space-x-6 font-[Roboto]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <a href="#" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Home</a>
                        <a href="#howItWorks" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">How It Works</a>
                        <a href="#whyChooseUs" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Why Choose Us</a>
                        <a href="#testimonials" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Testimonials</a>
                        <a href="#contact" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Contact</a>
                    </motion.div>

                    <div className="flex items-center space-x-4">
                        <button className=" text-[#FFFFFF] dark:text-[#121212] font-[Roboto] hidden lg:block bg-[#007BFF] dark:bg-[#BB86FC] px-4 py-2 rounded-lg hover:bg-[#FF9800] dark:hover:bg-[#9F6DE3] duration-200">
                            Get a Quote
                        </button>

                        {/* Dark Mode Toggle */}
                        <div onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <div className='sun dark:text-[#cccbcb] dark:hover:text-[#fffefe] cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0" />
                                        <path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd" /></svg>
                                </div>
                            ) : (
                                <div className='moon text-[#6C757D] hover:text-[#51585e] cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61" /></svg>
                                </div>
                            )}


                        </div>

                        {/* Hamburger Menu Icon */}
                        <button
                            className="md:hidden focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <span className="material-icons text-2xl text-[#212529] dark:text-[#E0E0E0]">{isOpen ? (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"/></svg>
                                </div>
                            ) : (
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75" clip-rule="evenodd"/></svg>
                                </div>
                            )}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col gap-2 bg-[#E9ECEF] dark:bg-[#181818] text-[#212529] dark:text-[#E0E0E0] p-4">
                        <a href="#" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Home</a>
                        <a href="#howItWorks" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">How It Works</a>
                        <a href="#whyChooseUs" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Why Choose Us</a>
                        <a href="#testimonials" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Testimonials</a>
                        <a href="#contact" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Contact</a>
                        <button className="text-[#FFFFFF] dark:text-[#121212] font-[Roboto] w-[150px] bg-[#007BFF] dark:bg-[#BB86FC] px-4 py-2 rounded-lg hover:bg-[#FF9800] dark:hover:bg-[#9F6DE3] duration-200">
                            Get a Quote
                        </button>
                        
                    </div>
                )}
            </motion.nav>
        </div>
    )
}

export default Navbar