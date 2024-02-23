import clsx from 'clsx'
import React, { FC, useState } from 'react'
import Preloader from '@/components/UI/Preloader'
import { IProduct } from '@/types/api'
import { InputEvent } from '@/types/event'
import toast from 'react-hot-toast'
import { addProduct } from '@/utils/api'
import Select from 'react-select';
import { catalogs } from '@/constants/catalogs'

interface ProductModalProps {
  close: () => void
}

const required: ('title' | 'description' | 'image')[] = ['title', 'description', 'image']

const defaultForm = {
  id: 0,
  title: "",
  description: "",
  image: "",
  catalog_type: 0
}

const options = catalogs.map(item => {
  return {
    value: item.id,
    label: item.title
  }
})

const ProductModal: FC<ProductModalProps> = ({ close }) => {
  const [form, setForm] = useState<IProduct>(defaultForm)
  const [error, setError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const changeForm = (key: keyof IProduct, data: string | number) => setForm({ ...form, [key]: data })

  const getLabelClass = (key: keyof IProduct): string => clsx('font-medium', error.includes(key) && 'text-red')

  const sendRequest = async () => {
    const errors: string[] = required.filter(key => form[key].length <= 3);

    if(form.catalog_type === 0) {
      errors.push('catalog_type')
    }

    if(errors.length) {
      return setError(errors)
    }

    setIsLoading(true)

    const data = { ...form, id: Date.now() }
  
    try {
      const result = await addProduct(data)
      toast.success('Товар успешно добавлен')
    } catch(err) {
      toast.error('Произошла ошибка!')
      console.log(err)
    } finally {
      setForm(defaultForm)
      setIsLoading(false)
    }
  }

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] h-[570px] bg-white z-50 sm:w-96'>
      <button className='absolute right-4 top-3 text-lg font-bold cursor-pointer' onClick={close}>&#x2715;</button>
      <div className="px-5 py-10 text-dark">
        <div className='text-center'>
          <p className='text-2xl font-bold'>Добавить новый товар</p>
        </div>
        {isLoading
          ? (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <Preloader />
            </div>
          )
          : (
            <div className='mt-5 w-10/12 mx-auto'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('title')}>Название товара</label>
                  <input
                    value={form.title}
                    type="text"
                    placeholder='название'
                    onChange={(e: InputEvent) => changeForm('title', e.target.value)}
                    className={clsx(error.includes('title') && 'border-b border-red')}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('description')}>Описание товара</label>
                  <input
                    value={form.description}
                    type="text"
                    placeholder='описание'
                    onChange={(e: InputEvent) => changeForm('description', e.target.value)}
                    className={clsx(error.includes('description') && 'border-b border-red')}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('catalog_type')}>Каталог</label>
                  <Select
                    options={options}
                    value={options?.find(item => item.value === form.catalog_type)}
                    onChange={option => changeForm('catalog_type', option?.value ? +option.value : 0)}
                    placeholder='добавить товар'
                    classNames={{
                      control: () => clsx('h-[48px] min-h-[48px]', error.includes('catalog_type') && '!border !border-red'),
                      valueContainer: () => 'h-[48px]',
                      placeholder: () => 'h-[35px]',
                    }}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className={getLabelClass('image')}>Ссылка на картинку</label>
                  <input
                    value={form.image}
                    type="text"
                    placeholder='ссылка'
                    onChange={(e: InputEvent) => changeForm('image', e.target.value)}
                    className={clsx(error.includes('image') && 'border-b border-red')}
                  />
                </div>
              </div>
              <button
                onClick={sendRequest}
                className='w-full py-3 text-white mt-2 hover:bg-blue-dark-opacity cursor-pointer font-medium bg-blue-dark mt-5'
              >
                Добавить
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ProductModal
