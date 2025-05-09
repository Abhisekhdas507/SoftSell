import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#E9ECEF] dark:bg-[#181818] font-[Poppins]'>
      <footer className="max-w-[1200px] mx-auto py-4 sm:py-6 text-center">
        <div className="container mx-auto">
          <p className="text-[#6C757D] dark:text-[#A4A4A4]">© 2025 SoftSell. All rights reserved.</p>
          <div className='text-[#6C757D] dark:text-[#A4A4A4] flex flex-col sm:flex-row sm:gap-3 justify-center'>
            <a href="#" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Home</a>
            <a href="#howItWorks" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">How It Works</a>
            <a href="#whyChooseUs" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Why Choose Us</a>
            <a href="#testimonials" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Testimonials</a>
            <a href="#contact" className="hover:underline hover:text-[#0D6EFD] dark:hover:text-[#A0C4FF] underline-offset-2 duration-200">Contact</a>
          </div>
          <p className="text-[#6C757D] dark:text-[#A4A4A4]">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer