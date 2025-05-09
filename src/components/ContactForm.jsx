import React from 'react'
import { motion } from "framer-motion"

const ContactForm = () => {
  return (
    <div id='contact' className='bg-[#E9ECEF] dark:bg-[#181818]'>
      <section className="max-w-[1200px] mx-auto text-white py-10 sm:py-20 px-8">
        <motion.h2
          className="text-3xl text-[#212529] dark:text-[#E0E0E0] font-[Roboto] font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          className="max-w-lg mx-auto space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-white dark:bg-[#334155] placeholder-[#6C757D] dark:placeholder-[#A4A4A4] font-[Poppins]" required />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white dark:bg-[#334155] placeholder-[#6C757D] dark:placeholder-[#A4A4A4] font-[Poppins]" required />
          <input type="text" placeholder="Company" className="w-full p-3 rounded-lg bg-white dark:bg-[#334155] placeholder-[#6C757D] dark:placeholder-[#A4A4A4] font-[Poppins]" />


          <select

            className="w-full p-3 rounded-lg bg-white dark:bg-[#334155] text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]"
          >
            <option value="" disabled selected hidden className="text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]">
              License Type
            </option>
            <option value="software" className="bg-white dark:bg-[#334155] text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]">
              Software Suite
            </option>
            <option value="antivirus" className="bg-white dark:bg-[#334155] text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]">
              Antivirus
            </option>
            <option value="productivity" className="bg-white dark:bg-[#334155] text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]">
              Productivity Tools
            </option>
          </select>
          <textarea placeholder="Message" className="w-full p-3 rounded-lg bg-white dark:bg-[#334155] placeholder-[#6C757D] dark:placeholder-[#A4A4A4] font-[Poppins]" rows="4"></textarea>
          <motion.button type="submit"
            className="bg-[#007BFF] dark:bg-[#BB86FC]  text-[#FFFFFF] dark:text-[#121212] hover:bg-[#FF9800] dark:hover:bg-[#9F6DE3] duration-200 px-6 py-3 rounded-lg font-semibold text-[Roboto]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Submit
          </motion.button>
        </motion.form>
      </section>
    </div>
  )
}

export default ContactForm