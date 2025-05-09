import React from 'react'

const WhyChooseUs = () => {
    const points = [
        { title: "Fast Payouts", description: "Receive payment within 24 hours." },
        { title: "Secure Transactions", description: "Data encryption and license verification." },
        { title: "High Valuations", description: "Competitive pricing for unused licenses." }
      ];
    
  return (
    <div id='whyChooseUs' className='bg-[#E9ECEF] dark:bg-[#181818]'>
         <section className="max-w-[1200px] mx-auto py-10 sm:py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#212529] dark:text-[#E0E0E0] font-[Roboto]">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
        {points.map((point, index) => (
          <div key={index} className="bg-white dark:bg-[#334155] p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-[#212529] dark:text-[#E0E0E0] font-[Roboto]">{point.title}</h3>
            <p className='text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]'>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default WhyChooseUs