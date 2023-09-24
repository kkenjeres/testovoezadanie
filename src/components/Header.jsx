import React, { useState } from 'react';
import Burger from './Buger';
import burger from '../img/burger.svg'
import phone from '../img/phone.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<header 
  className={`
    flex w-[90%] md:w-[80%] m-auto justify-between items-center py-8  е
    absolute xl:h-auto text-white xl:overflow-visible 
    ${isMenuOpen ? 'h-screen overflow-hidden' : ''} fixed top-0 left-0 right-0 z-10
  `}
>      <h1 className='border-y border-white z-10'>ALEX.SHEVTSOV</h1>
      
      <div className='xl:hidden flex items-center justify-end'>
        <button 
          className='z-10 mr-4'
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <img src={burger} alt="burger" />
        </button>
        <img src={phone} alt='phone' className='mr-2 text-[30px] xl:mr-0' />
        <span className='hidden md:block'>8328392932</span>
      </div>

      <Burger isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      
      <nav className='hidden xl:flex xl:space-x-6 xl:items-center xl:justify-center xl:opacity-100 xl:translate-x-0 xl:w-full'>
        <ul className='flex flex-row md:space-x-6 items-center'>
          <li className='cursor-pointer'>Обо мне</li>
          <li className='cursor-pointer'>Наставничество</li>
          <li className='cursor-pointer'>Мероприятия</li>
          <li className='cursor-pointer'>Кейсы</li>
          <li className='cursor-pointer'>Отзывы</li>
          <li className='cursor-pointer'>Контакты</li>
        </ul>
      </nav>
      
      <div className='hidden xl:flex items-center justify-end'>
        <img src={phone} alt='phone' className='mr-4 text-[30px] ' />
        <span>8328392932</span>
      </div>
    </header>
  );
};

export default Header;
