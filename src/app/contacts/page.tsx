import React from 'react'
import Info from './Info'

const Contacts = () => (
  <main className="flex-grow py-10 text-black">
    <div className="container">
      <h1 className='font-bold mb-5 text-3xl sm:text-5xl'>Контакты</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" aria-hidden="false"
        className='w-full h-56 mb-7 sm:h-80 sm:mb-12'
      ></iframe>
      <Info />
    </div>
  </main>
)

export default Contacts
