import { useState } from 'react'
import './App.css'
import BasicNavbar from './components/BasicNavbar'
import CenterLogoNavbar from './components/CenterLogoNavbar';
import CTANavbar from './components/CTANavbar';
import TransparentNavbar from './components/TransparentNavbar';
import Hero from './components/Hero';


function App() {

    const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <h1 className='text-4xl text-center font-medium m-4'>Navbar Components</h1>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>Basic NavBar</h1>
        <BasicNavbar logo="MyWebsite" menuItems={menu} />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>Center Logo NavBar</h1>
        <CenterLogoNavbar logo="MyWebsite" menuItems={menu} />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>CTA NavBar</h1>
        <CTANavbar logo="MyWebsite" menuItems={menu} />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'> Transparent NavBar</h1>
        <TransparentNavbar logo="MyWebsite" menuItems={menu} />
        <Hero/>
      </div>

       

    </>
  )
}

export default App
