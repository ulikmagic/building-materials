import React, { FC } from 'react'
import LogoIcon from '@/assets/icons/logo.svg'
import PointIcon from '@/assets/icons/point.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
import WhatsappIcon from '@/assets/icons/whatsapp.svg'
import MailIcon from '@/assets/icons/mail.svg'
import Link from 'next/link'

const Footer: FC = () => (
  <footer className='bg-blue-dark'>
    <div className="container">
      <div className='py-8 text-line flex flex-col justify-between items-center text-center gap-3 sm:gap-0 sm:text-left sm:items-start sm:flex-row'>
    <div className='flex flex-col items-center gap-5 sm:gap-3 sm:items-start'>
      <div className='flex items-center'>
        <LogoIcon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        <p className='text-lg ml-2'>Компания ДН-Групп</p>
      </div>
      <Link href="https://2gis.kg/bishkek/geo/15763234351093519/74.565972,42.837193" target='_blank'>
        <div className='flex gap-2 cursor-pointer hover:underline'>
          <PointIcon className="text-yellow" />
          <p className='font-medium text-md'>Адрес Микрорайон Джал 23,10</p>
        </div>
      </Link>
    </div>
    <div className='flex flex-col items-center sm:items-start sm:gap-px'>
      <a href="mailto:dn.group.kgz@gmail.com" target='_blank' className='mb-2 sm:mb-0'>
        <div className='flex gap-1 items-center cursor-pointer hover:underline'>
          <MailIcon className="w-5 h-5 text-red" />
          <p className='font-medium'>dn.group.kgz@gmail.com</p>
        </div>
      </a>
      <a href="https://t.me/+996558899009" target='_blank' className='mb-2 sm:mb-0'>
        <div className='flex gap-1 items-center cursor-pointer hover:underline'>
          <TelegramIcon className="w-5 h-5" />
          <p className='font-medium'>Telegram</p>
        </div>
      </a>
      <a href="https://wa.me/+996558899009" target='_blank' className='mb-2 sm:mb-0'>
        <div className='flex gap-1 items-center cursor-pointer hover:underline'>
          <WhatsappIcon className="w-5 h-5" /> 
          <p className='font-medium'>Whatsapp</p>
        </div>
      </a>
    </div>
  </div>
    </div>
  </footer>
)

export default Footer
