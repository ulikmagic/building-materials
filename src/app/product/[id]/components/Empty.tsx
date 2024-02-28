import React from 'react'

const Empty = () => (
  <section
    className='bg-center bg-no-repeat bg-cover lg:bg-contain h-[300px] xl:h-[420px]'
  >
    <div className="max-w-[500px] px-3 md:px-0 md:max-w-[700px] m-auto text-center flex items-center justify-center gap-3 flex-col h-full text-dark">
      <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>Извините, данный товар временно отсутствует в наличии.</h1>
      <p className='text-md md:text-lg xl:text-xl'>Позвоните нам по номеру <strong className='underline'>+996(507)-002-024</strong> для уточнения информации и возможных альтернатив.</p>
    </div>
  </section>
)

export default Empty
