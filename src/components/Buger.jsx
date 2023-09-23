import React from 'react';

const Burger = ({ isOpen, closeMenu }) => {
  return (
    <nav 
      className={`fixed inset-0 bg-[#123056] transition-transform duration-300 transform z-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <button 
        className='absolute top-4 right-4 text-white text-[40px]'
        onClick={closeMenu}
      >
        ✕
      </button>
      <ul className='w-[90%] m-auto h-full flex flex-col justify-center items-center space-y-8 text-white text-xl'>
        <li className='cursor-pointer p-2 w-full text-center border-b border-white'>Обо мне</li>
        <li className='cursor-pointer p-2 w-full text-center border-b border-white'>Наставничество</li>
        <li className='cursor-pointer p-2 w-full text-center border-b border-white'>Мероприятия</li>
        <li className='cursor-pointer p-2 w-full text-center border-b border-white'>Кейсы</li>
        <li className='cursor-pointer p-2 w-full text-center border-b border-white'>Отзывы</li>
        <li className='cursor-pointer p-2 w-full text-center border-b border-white'>Контакты</li>
      </ul>
    </nav>
  );
};

export default Burger;
