import { IForm } from '@/types/api'
import clsx from 'clsx'
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { InputEvent } from '@/types/event'
import Preloader from '@/components/UI/Preloader'
import emailjs from '@emailjs/browser'

interface ModalProps {
  close: () => void
}

const defaultForm: IForm = { 
  gmail: '', 
  text: '', 
  number: '', 
  name: '' 
}

const validateNumber = (text: string): string => !isNaN(Number(text)) ? text : ''

const required: (keyof IForm)[] = ['name', 'number', 'text']

const Modal: FC<ModalProps> = ({ close }) => {
  const [form, setForm] = useState<IForm>(defaultForm)
  const [error, setError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getLabelClass = (key: keyof IForm): string => clsx('font-medium', error.includes(key) && 'text-red')

  const changeForm = (data: string, key: keyof IForm) =>  setForm({ ...form, [key]: data })

  const request = async () => {
    setIsLoading(true)
    const request = {
      from_name: form.name,
      from_number: form.number,
      from_text: form.text,
      from_gmail: form.gmail.length > 0 ? form.gmail : 'Неизвестно',
    }
    emailjs.send('service_goc72lm', 'template_jvol6m2', request, { publicKey: 'MHJAclaliTS5C7Mil' })
      .then(() => toast.success('Заявка отправлена!'))
      .catch(() => toast.error('Произошла ошибка!'))
      .finally(() => {
        setIsLoading(false)
        close()
      })
  }

  const sendForm = () => {
    const errors = required.filter((key) => form[key].length <= 3);
    errors.length ? setError(errors) : request()
  };

  return (
    <div
      className={`
        bg-white rounded-md z-50 fixed top-1/2 left-1/2 text-black
        transform -translate-x-1/2 -translate-y-1/2 flex justify-center
        w-[310px] h-[540px] sm:w-96
      `}
    >
      <button className='absolute right-4 top-3 text-lg font-bold cursor-pointer' onClick={close}>&#x2715;</button>
      {isLoading
        ? <Preloader /> 
        : (
          <div className='w-9/12 my-12 flex flex-col gap-3'>
            <div className='text-center mb-1.5'>
              <p className='font-semibold text-xl'>Оставить заявку</p>
            </div>
            <div className='flex flex-col gap-1'>
              <label className={getLabelClass('name')}>Ваше имя</label>
              <input
                value={form.name}
                type="text"
                placeholder='Ваше имя'
                onChange={(e: InputEvent) => changeForm(e.target.value, 'name')}
                className={clsx(error.includes('name') && 'border-b border-red')}
              />
            </div>
             <div className='flex flex-col gap-1'>
              <label className={getLabelClass('number')}>Номер телефона</label>
              <input
                value={form.number}
                type="text"
                placeholder='Ваш номер телефона'
                onChange={(e: InputEvent) => changeForm(validateNumber(e.target.value), 'number')}
                className={clsx(error.includes('number') && 'border-b border-red')}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-medium'>E-mail</label>
              <input
                value={form.gmail}
                type="email" 
                placeholder='youmail@mail.com'
                onChange={(e: InputEvent) => changeForm(e.target.value, 'gmail')} 
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className={getLabelClass('text')}>Текст заявки</label>
              <input
                value={form.text}
                type="text"
                placeholder='текст заявки'
                onChange={(e: InputEvent) => changeForm(e.target.value, 'text')}
                className={clsx(error.includes('text') && 'border-b border-red')}
              />
            </div>
            <button
              onClick={sendForm}
              className='w-full py-3 text-white mt-2 hover:bg-blue-dark-opacity cursor-pointer font-medium bg-blue-dark'
            >
              Отправить
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Modal
