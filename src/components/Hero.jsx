import { useState } from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import Form from './Form';
import Header from './Header';
import bg from '../img/bg.svg';
import mentor from '../img/mentor.svg';

const Hero = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <section className=' relative h-screen font-montserrat bg-center bg-cover z-0 overflow-hidden sm:text-sm md:text-base lg:text-lg' style={{ backgroundImage: `url(${bg})` }}>
      <div className='absolute inset-0 bg-[rgba(19,52,87,.83)] z-0 blur' />
      <Header className='flex-shrink-0 z-10' />
      <Form onClose={() => setFormVisible(false)} visible={isFormVisible} className='z-30' />
      
      <div className='flex w-[90%] md:w-[80%] mx-auto flex-grow z-10 relative items-center md:flex-row'>
        <div className='flex flex-col w- md:w-3/5 h-full relative z-10'>
          <div className='flex flex-col w-full justify-center items-start '>
            <h1 className='text-[25px] sm:text-[35px] md:text-[55px] lg:text-[55px] xl:text-[65px] font-[600] font-raleway text-white mb-8 md:mb-20 leading-[25px] md:leading-[60px]'>Создаю условия для вашего успеха</h1>
            <p className='hidden md:block text-[16px] border-l border-white pl-10 custom-text mb-8 md:mb-16'>
  Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий
</p>
<p className='md:hidden text-[10px] border-l border-white pl-4 md:pl-10 custom-text mb-8 md:mb-16'>
  Ваш успех зависит от ваших действий
</p>
            <div className='gap-10 w-[50%] md:w-full'>
            <div className='xl:flex gap-10'>
  <button 
    onClick={() => setFormVisible(true)} 
    className='transform transition-transform duration-300 hover:scale-105 bg-white flex items-center text-black mb-4 md:mb-20 w-auto md:w-auto relative'
  >
    <span className='px-2 whitespace-nowrap md:px-4 md:hidden text-[10px]'>Записаться</span>
    <span className='hidden md:px-4 md:whitespace-nowrap md:inline'>Записаться на консультацию</span>
    <div 
        className='border-l border-black p-2 md:p-4 flex items-center justify-center' 
        style={{position: 'relative'}}
    >
        <BsArrowDownRight 
            className='text-[10px] md:text-[26px] transform translate-x-[30%] translate-y-[30%]' 
        />
    </div>
</button>

  <button 
    onClick={() => setFormVisible(true)} 
    className='transform transition-transform duration-300 hover:scale-105 flex items-center border border-white text-white mb-4 md:mb-20 w-auto md:w-auto relative'
  >
    <span className='px-2 whitespace-nowrap md:px-4 md:hidden text-[10px]'>Заказать звонок</span>
    <span className='hidden md:px-4 md:whitespace-nowrap md:inline'>Записаться на консультацию</span>
    <div 
        className='border-l border-white p-2 md:p-4 flex items-center justify-center' 
        style={{position: 'relative'}}
    >
        <BsArrowDownRight 
            className='text-[10px] md:text-[26px] transform translate-x-[30%] translate-y-[30%]' 
        />
    </div>
  </button>
</div>

  <div className='flex gap-4 md:gap-10'>
    <div className='border-l border-white pl-4 md:pl-10 w-full'>
      <p className='text-[16px] sm:text-[30px] md:text-[40px] text-white'>130+</p>
      <p className='custom-text'>техник для <br/> достижения целей</p>
    </div>
    <div className='border-l border-white pl-4 md:pl-10 w-full'>
      <p className='text-[16px] sm:text-[30px] md:text-[40px] text-white '>250%</p>
      <p className='custom-text '>увеличение личной <br/> продуктивности</p>
    </div>
  </div>
</div>

          </div>
        </div>
        
        <div className='absolute w-3/5 h-full top-0 -right-16 md:static'>
          <img src={mentor} alt="Ментор" className='w-full h-full object-contain object-right' />
        </div>
      </div>
      
      <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${isFormVisible ? 'opacity-50' : 'opacity-0'} z-20`} style={isFormVisible ? {} : { pointerEvents: 'none' }} onClick={() => setFormVisible(false)} />
    </section>
  );
}

export default Hero;
