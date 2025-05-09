import React from 'react'

const HowItWorks = () => {
  const steps = [
    { step: "Upload License", icon: "📦" },
    { step: "Get Valuation", icon: "💰" },
    { step: "Get Paid", icon: "🏦" }
  ];

  return (
    <div id='howItWorks' className='bg-[#F8F9FA] dark:bg-[#252525]'>
      <section className="py-10 sm:py-20 px-8 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-[Roboto] text-[#212529]  dark:text-[#E0E0E0] font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 font-[Poppins] text-[#6C757D] dark:text-[#A4A4A4]">
          {steps.map((item, index) => (
            <div key={index} className="bg-white dark:bg-[#334155] shadow-lg p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.step}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HowItWorks