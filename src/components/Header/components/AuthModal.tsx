import clsx from 'clsx'
import React, { FC, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import Preloader from '@/components/UI/Preloader'
import { InputEvent } from '@/types/event'
import { AuthContext, IAuthConfig } from '..'
import { LocalStorage } from '@/utils/localStorage'
import axios from 'axios'

export interface IAuthForm {
  username: string
  password: string
}

interface AuthModalProps {
  close: () => void
}

const required: (keyof IAuthForm)[] = ['username', 'password']

const password = 'admin1204'
const username = 'nurs'

const AuthModal: FC<AuthModalProps> = ({ close }) => {
  const [form, setForm] = useState<IAuthForm>({ username: "", password: "" })
  const [error, setError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setIsAuth } = useContext(AuthContext) as IAuthConfig

  const changeForm = (key: keyof IAuthForm, data: string) => setForm({ ...form, [key]: data })

  const getLabelClass = (key: keyof IAuthForm): string => clsx('font-medium', error.includes(key) && 'text-red')

  const sendRequest = () => {
    const errors = required.filter((key) => form[key].length <= 3);

    if(errors.length) {
      return setError(errors)
    }
    setIsLoading(true)
    axios.post('/api/auth', form)
      .then(({ data }) => {
        setIsLoading(false)
        if(data.auth) {
          setIsAuth(true)
          LocalStorage.setData(true, 'isAuth')
          close()
          toast.success('Авторизация прошла успешно')
        } else {
          toast.error('Логин и пароль не верен!')
        }
      })
      .catch(() => {
        setIsLoading(false)
        toast.error('Произошла ошибка!')
      })
  }

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] h-[400px] bg-white z-50 sm:w-96'>
      <button className='absolute right-4 top-3 text-lg font-bold cursor-pointer' onClick={close}>&#x2715;</button>
      <div className="px-5 py-10 text-dark">
        <div className='text-center'>
          <p className='text-2xl font-bold'>Авторизация</p>
        </div>
        {isLoading
          ? (
            <div className='mt-14'>
              <Preloader />
            </div>
          )
          : (
            <div className='mt-5 w-10/12 mx-auto'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('username')}>Логин</label>
                  <input
                    value={form.username}
                    type="text"
                    placeholder='Ваш логин'
                    onChange={(e: InputEvent) => changeForm('username', e.target.value)}
                    className={clsx(error.includes('username') && 'border-b border-red')}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('username')}>Пароль</label>
                  <input
                    value={form.password}
                    type="text"
                    placeholder='Ваш пароль'
                    onChange={(e: InputEvent) => changeForm('password', e.target.value)}
                    className={clsx(error.includes('password') && 'border-b border-red')}
                  />
                </div>
              </div>
              <button
                onClick={sendRequest}
                className='w-full py-3 text-white hover:bg-blue-dark-opacity cursor-pointer font-medium bg-blue-dark mt-6'
              >
                Отправить
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default AuthModal
