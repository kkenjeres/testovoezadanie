import React from 'react'

const Confirmation = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col gap-20 justify-around text-white '>
        <p className='text-[50px] font-[600] leading-[25px] leading-[60px]'>Спасибо за заявку</p>
        <p className='text-[40px] font-[600] leading-[25px] leading-[60px]'>Я обязательно свяжусь с вами в ближайшее время.</p>
        <p className='border-y border-white self-end text-right'>ALEX.SHEVTSOV</p>
      </div>
    </div>
  )
}

export default Confirmation;
