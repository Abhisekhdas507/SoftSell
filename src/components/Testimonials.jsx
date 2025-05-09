import React from 'react'

const Testimonials = () => {
    const testimonials = [
        { name: "Anika Mehta", role: "CTO, Nexenova Systems", review: "SoftSell helped us recover unused assets and monetize dormant software licenses." },
        { name: "Aarav Das", role: "Product Manager, TechVera Solutions ", review: "Quick, easy, and highly recommended!" }
      ];
  return (
    <div id='testimonials' className='bg-[#F8F9FA] dark:bg-[#252525]'>
        <section className="max-w-[1200px] mx-auto py-10 sm:py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#212529] dark:text-[#E0E0E0] font-[Roboto]">Customer Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white dark:bg-[#334155] p-6 shadow-lg rounded-lg">
            <p className="italic text-[#6C757D] dark:text-[#A4A4A4] font-[Poppins]">"{item.review}"</p>
            <h3 className="mt-4 font-semibold text-[#212529] dark:text-[#E0E0E0] font-[Poppins]">{item.name}, {item.role}</h3>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Testimonials