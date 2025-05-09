import React from 'react'
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='bg-[#E9ECEF] dark:bg-[#181818]'>
      <section className=" text-[#212529] dark:text-[#E0E0E0] max-w-[1200px] mx-auto font-[Roboto] py-10 sm:py-20 px-8 text-center">
        <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Unlock the Value of Your Unused Software Licenses
          </motion.h1>
        <motion.p 
        className="text-lg mb-6 text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
          Easily resell your software licenses and get instant cash offers.
          </motion.p>
        <motion.button 
        className="bg-[#007BFF] dark:bg-[#BB86FC] text-[#FFFFFF] dark:text-[#121212] px-6 py-3 rounded-lg font-semibold font-[Roboto]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >Get a Quote
        </motion.button>
      </section>
    </div>
  )
}

export default HeroSection