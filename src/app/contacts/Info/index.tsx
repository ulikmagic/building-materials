import React, { FC } from 'react'

const Info: FC = () => (
  <div className='text-dark'>
    <h2 className='font-semibold text-lg mb-3 text-center sm:text-start sm:text-h2 sm:mb-5'>ООО «СтройкаСтор»</h2>
    <ul className='flex justify-between text-md flex-col sm:flex-row'>
      <li className='flex flex-col gap-5'>
        <p>115114, г. Москва, Дербеневская набережная, д. 7, стр. 8</p>
        <div>
          <p>Павелецкая</p>
          <p>Автобусы 13, 106, 158, 184, 632</p>
          <p>Остановка «Дербеневская наб., д. 7»</p>
        </div>
      </li>
      <li className='sm:text-end'>
        <p>Поддержка клиентов info@stroykastore.ru</p>
        <p>БИК: 044525700</p>
      </li>
    </ul>
  </div>
)

export default Info
