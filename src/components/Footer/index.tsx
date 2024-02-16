import React from 'react'
import FooterBottom from './components/FooterBottom'
import FooterTop from './components/FooterTop'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <div className="container">
        <FooterTop />
        <hr />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
