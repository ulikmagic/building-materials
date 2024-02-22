'use client'

import clsx from 'clsx'
import React, { FC, useState } from 'react'

const items: number[] = [1, 2, 3]
const widthItems: string[] = ['w-2/5', 'w-4/5', 'w-3/5']

const Catalog: FC = () => {
  const [onHover, setOnHover] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className='bg-blue-dark flex items-center justify-center text-white gap-x-2 cursor-pointer hover:bg-blue-dark-opacity w-28 h-8 sm:w-36 sm:h-12'
    >
      <div className='w-6 h-6 px-0.5 gap-1 flex flex-col items-start justify-center'>
        {items.map((item, index) =>
          <span
            key={item}
            className={clsx(
              'h-0.5 bg-white duration-500',
              onHover
                ? 'w-full'
                : widthItems[index]
            )}
          />  
        )}
      </div>
      <p className='font-medium text-md sm:text-lg'>Каталог</p>
    </div>
  )
}

export default Catalog
