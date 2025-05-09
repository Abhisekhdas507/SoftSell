import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div >
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Chat />
      <Footer />
    </div>
  );
}

export default App
