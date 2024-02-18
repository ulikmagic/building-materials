import React, { FC } from 'react'
import LogoIcon from '@/assets/icons/logo.svg'
import PointIcon from '@/assets/icons/point.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
import WhatsappIcon from '@/assets/icons/whatsapp.svg'
import MailIcon from '@/assets/icons/mail.svg'
import Link from 'next/link'

const FooterTop: FC = () => (
  <div className='py-8 text-line flex flex-col justify-between items-center text-center gap-3 sm:gap-0 sm:text-left sm:items-start sm:flex-row'>
    <div className='flex flex-col items-center gap-3 sm:items-start'>
      <LogoIcon className="w-36 sm:w-44" />
      <Link href="/contacts">
        <div className='flex gap-2 cursor-pointer hover:underline'>
          <PointIcon className="text-yellow" />
          <p className='font-medium text-md'>Москва, ул. Камушкина 10</p>
        </div>
      </Link>
    </div>
    <div className='flex flex-col gap-1.5 sm:gap-px'>
      <a href="mailto:acusize@gmail.com" target='_blank'>
        <div className='flex gap-1 items-center cursor-pointer hover:underline'>
          <MailIcon className="w-5 h-5 text-red" />
          <p className='font-medium'>acusize@gmail.com</p>
        </div>
      </a>
      <a href="https://t.me/+996507002024" target='_blank'>
        <div className='flex gap-1 items-center cursor-pointer hover:underline'>
          <TelegramIcon className="w-5 h-5" />
          <p className='font-medium'>@Ulikman</p>
        </div>
      </a>
      <a href="https://wa.me/996507002024" target='_blank'>
        <div className='flex gap-1 items-center cursor-pointer hover:underline'>
          <WhatsappIcon className="w-5 h-5" /> 
          <p className='font-medium'>+996 507 002 024</p>
        </div>
      </a>
    </div>
  </div>
)

export default FooterTop
