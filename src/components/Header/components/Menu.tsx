import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useContext } from 'react'
import { AuthContext, IAuthConfig } from '..'
import { LocalStorage } from '@/utils/localStorage'
import { signOut } from 'firebase/auth'
import { AUTH } from '@/config/firebase'

interface MenuProps {
  isActive: boolean
  close: () => void
  openAuthModal: () => void
  openProductModal: () => void
}

const links = [
  {
    id: 1,
    title: 'Главная',
    link: '/'
  },
  {
    id: 2,
    title: 'О нас',
    link: '/about-us'
  },
  {
    id: 3,
    title: 'Адрес',
    link: '/address'
  },
]

const Menu: FC<MenuProps> = ({ isActive, close, openAuthModal, openProductModal }) => {
  const pathname = usePathname()
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuthConfig

  const exit = async () => {
    close()
    setIsAuth(false)
    LocalStorage.clear()
    await signOut(AUTH)
  }

  return (
    <nav
      className={clsx(
        'fixed top-0 h-screen w-[300px] bg-white z-40 border-l-2 border-blue-dark duration-500 px-10 pt-32 text-center',
        isActive ? 'right-0' : 'right-[-350px]'
      )}
    >
      <ul className='text-dark font-semibold flex flex-col gap-2 text-lg'>
        {links.map(item => 
          <li key={item.id}>
            <Link
              href={item.link} 
              onClick={close}
              className={clsx('hover:underline', item.link === pathname && 'underline text-blue-dark')}
            >
              {item.title}
            </Link>
          </li>  
        )}
        {isAuth
          ? (
            <>
              <li>
                <p
                  onClick={() => {
                    openProductModal()
                    close()
                  }}
                  className='hover:underline hover:text-blue-dark cursor-pointer'
                >
                  Добавить товар
                </p>
              </li>
              <li>
                <p
                  onClick={exit}
                  className='hover:underline hover:text-blue-dark cursor-pointer'
                >
                  Выйти
                </p>
              </li>
            </>
          )
          : (
            <li>
              <p
                onClick={() => {openAuthModal(), close()}}
                className='hover:underline hover:text-blue-dark cursor-pointer'
              >
                Админ панель
              </p>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Menu
