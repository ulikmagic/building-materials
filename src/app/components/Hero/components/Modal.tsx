import { IForm } from '@/types/api'
import axios from 'axios'
import clsx from 'clsx'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'
import Preloader from '@/assets/images/preloader.gif'

interface ModalProps {
  close: () => void
}

const Modal: FC<ModalProps> = ({ close }) => {
  const [form, setForm] = useState<IForm>({ gmail: '', text: '' })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const isDisabled: boolean = form.gmail.length >= 3 && form.text.length >= 3

  const changeForm = (
    data: string,
    key: 'gmail' | 'text'
  ) =>  setForm({ ...form, [key]: data })

  const sendRequest = async () => {
    setIsLoading(true)

    axios.post('/api/send', form)
      .then(({ data }) => {
        if(data.send) {
          toast.success('Заявка отправлена!')
        } else {
          toast.error('Произошла ошибка!')
        }
      })
      .catch(() => toast.error('Произошла ошибка!'))
      .finally(() => {
        setIsLoading(false)
        close()
      })
  }

  return (
    <div
      className={`
        bg-white rounded-md z-50 fixed top-1/2 left-1/2 text-black
        transform -translate-x-1/2 -translate-y-1/2 flex justify-center
        w-[310px] h-96 sm:w-96
      `}
    >
      <button className='absolute right-4 top-3 text-lg font-bold cursor-pointer' onClick={close}>&#x2715;</button>
      {isLoading
        ? (
          <div className='flex items-center justify-center'>
            <Image src={Preloader} alt="preloader" className='w-20' />
          </div>
        ) 
        : (
          <div className='w-9/12 my-12 flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <div className='text-center mb-3'>
                <p className='font-semibold text-xl'>Оставить заявку</p>
              </div>
              <label className='font-medium'>E-mail</label>
              <input
                value={form.gmail}
                type="email" 
                placeholder='youmail@mail.com'
                onChange={(e: any) => changeForm(e.target.value, 'gmail')} 
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-medium'>Текст заявки</label>
              <input
                value={form.text}
                type="text"
                placeholder='текст заявки'
                onChange={(e: any) => changeForm(e.target.value, 'text')}
              />
            </div>
            <button
              onClick={sendRequest}
              className={clsx(
                'w-full py-3 mt-2 hover:bg-yellow-light cursor-pointer font-medium',
                isDisabled ? 'bg-yellow' : 'bg-yellow-dark pointer-events-none'
              )}
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
