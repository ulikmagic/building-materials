import React from 'react'

const Address = () => (
  <main className="flex-grow py-10 text-black">
    <div className="container">
      <h1 className='font-bold mb-5 text-3xl sm:text-5xl'>Адрес</h1>
      <iframe
        title="Google Map"
        className='w-full h-56 mb-7 sm:h-80 sm:mb-12'
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.048046723608!2d74.5645841161682!3d42.8371402791568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9be38995105%3A0xf6eb62890c3e5638!2s10%20Minzhilkiyev%20Street%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1645540820825!5m2!1sen!2skg"
      />
      <div className='text-dark'>
        <h2 className='font-semibold text-lg mb-3 text-center sm:text-start sm:text-h2 sm:mb-5'>
          Компания <q>ДН-Групп</q>
        </h2>
        <p>Микрорайон Джал-23, 10 · Минжилкиева</p>
      </div>
    </div>
  </main>
)

export default Address
