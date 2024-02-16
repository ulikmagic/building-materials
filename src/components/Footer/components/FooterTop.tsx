import React from 'react'
import LogoIcon from '@/assets/icons/logo.svg'
import PointIcon from '@/assets/icons/point.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
import WhatsappIcon from '@/assets/icons/whatsapp.svg'
import MailIcon from '@/assets/icons/mail.svg'

const FooterTop = () => (
  <div className='py-8 text-line flex flex-col justify-between items-center text-center gap-3 sm:gap-0 sm:text-left sm:items-start sm:flex-row'>
    <div className='flex flex-col items-center gap-3 sm:items-start'>
      <LogoIcon className="w-36 sm:w-44" />
      <div className='flex gap-2'>
        <PointIcon />
        <p className='font-medium text-md'>Москва, ул. Камушкина 10</p>
      </div>
    </div>
    <ul className='flex flex-col gap-1.5 sm:gap-0'>
      <li className='flex gap-1 items-center'>
        <MailIcon className="w-5 h-5" />
        <p className='font-medium'>acusize@gmail.com</p>
      </li>
      <li className='flex gap-1 items-center'>
        <TelegramIcon className="w-5 h-5" />
        <p className='font-medium'>@Ulikman</p>
      </li>
      <li className='flex gap-1 items-center'>
        <WhatsappIcon className="w-5 h-5" /> 
        <p className='font-medium'>+996 507 002 024</p>
      </li>
    </ul>
  </div>
)

export default FooterTop
