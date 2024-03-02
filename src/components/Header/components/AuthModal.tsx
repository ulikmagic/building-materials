import clsx from 'clsx'
import React, { FC, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import Preloader from '@/components/UI/Preloader'
import { InputEvent } from '@/types/event'
import { AuthContext, IAuthConfig } from '..'
import { LocalStorage } from '@/utils/localStorage'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AUTH } from '@/config/firebase'
import { IAuthForm, AUTH_ERRORS } from '@/types/auth'

interface AuthModalProps {
  close: () => void
}

const required: (keyof IAuthForm)[] = ['email', 'password']

const AuthModal: FC<AuthModalProps> = ({ close }) => {
  const [form, setForm] = useState<IAuthForm>({ email: "", password: "" })
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

    signInWithEmailAndPassword(AUTH, form.email, form.password)
      .then((data) => {
        setIsAuth(true)
        LocalStorage.setData(form, 'isAuth')
        close()
        toast.success('Авторизация прошла успешно')
      })
      .catch((error) => {
        if(error.code === AUTH_ERRORS.invalid_email) {
          toast.error('Не валидный email!')  
        }
        else if(error.code === AUTH_ERRORS.auth_invalid_credential) {
          toast.error('Логин и пароль не верен!') 
        } else {
          toast.error('Произошла ошибка!')
        }
      })
      .finally(() => setIsLoading(false))
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
                  <label className={getLabelClass('email')}>Email</label>
                  <input
                    value={form.email}
                    type="email"
                    placeholder='Ваш email'
                    onChange={(e: InputEvent) => changeForm('email', e.target.value)}
                    className={clsx(error.includes('email') && 'border-b border-red')}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('password')}>Пароль</label>
                  <input
                    value={form.password}
                    type="password"
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
