import { useState } from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import Form from './Form';
import mentor from '../img/mentor.svg';
import Header from './Header';
const Hero = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <section className='relative h-screen font-montserrat overflow-hidden sm:text-sm md:text-base lg:text-lg z-0 flex flex-col justify-center'>
      <Header />

      <Form onClose={() => setFormVisible(false)} visible={isFormVisible} className='z-20' />
      
      <div className='flex w-[90%] md:w-[80%] mx-auto flex-grow z-10 relative items-center md:flex-row'>
        <div className='flex flex-col w- md:w-3/5 h-full relative z-10 self-center justify-center'>
          <div className='flex flex-col w-full justify-center items-start '>
            <h1 className='text-[25px] sm:text-[35px] md:text-[55px] lg:text-[55px] xl:text-[65px] font-[600] font-raleway text-white mb-8 md:mb-20 leading-[25px] md:leading-[60px] '>Создаю условия для вашего успеха</h1>
            <p className='hidden md:block text-[16px] border-l border-white pl-10 custom-text mb-8 md:mb-16'>
              Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий
            </p>
            <p className='md:hidden text-[10px] border-l border-white pl-4 md:pl-10 custom-text mb-8 md:mb-16'>
              Ваш успех зависит <br/> от ваших действий
            </p>
            <div className='gap-10 w-[50%] md:w-full'>
              <div className='xl:flex gap-10'>
                <button onClick={() => setFormVisible(true)} className='transform transition-transform duration-300 hover:scale-105 bg-white flex items-center text-black mb-4 md:mb-20 w-auto md:w-auto relative'>
                  <span className='px-2 whitespace-nowrap md:px-4 md:hidden text-[10px]'>Записаться</span>
                  <span className='hidden md:px-4 md:whitespace-nowrap md:inline'>Записаться на консультацию</span>
                  <div className='border-l border-black p-2 md:p-4 flex items-center justify-center'>
                    <BsArrowDownRight className='text-[10px] md:text-[26px] transform translate-x-[30%] translate-y-[30%]' />
                  </div>
                </button>

                <button onClick={() => setFormVisible(true)} className='transform transition-transform duration-300 hover:scale-105 flex items-center border border-white text-white mb-4 md:mb-20 w-auto md:w-auto relative'>
                  <span className='px-2 whitespace-nowrap md:px-4 md:hidden text-[10px]'>Заказать звонок</span>
                  <span className='hidden md:px-4 md:whitespace-nowrap md:inline'>Записаться на консультацию</span>
                  <div className='border-l border-white p-2 md:p-4 flex items-center justify-center'>
                    <BsArrowDownRight className='text-[10px] md:text-[26px] transform translate-x-[30%] translate-y-[30%]' />
                  </div>
                </button>
              </div>

              <div className='flex gap-4 md:gap-10 md:h-auto h-full items-end'>
                <div className='border-l border-white pl-4 md:pl-10 w-full'>
                  <p className='text-[16px] sm:text-[30px] md:text-[40px] text-white'>130+</p>
                  <p className='custom-text'>
                      <span className='hidden sm:inline'>техник для <br/> достижения </span>
                      <span className='sm:hidden'>техники</span>
                  </p>
                </div>
                  <div className='border-l border-white pl-4 md:pl-10 w-full'>
                    <p className='text-[16px] sm:text-[30px] md:text-[40px] text-white '>250%</p>
                    <p className='custom-text '>
                      <span className='hidden sm:inline'>увеличение личной <br/>продуктивности</span> 
                    </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className='absolute md:w-3/5 h-full w-full bottom-0 -right-32 md:static'>
          <img src={mentor} alt="Ментор" className='w-full h-full object-contain object-right-bottom' />
        </div>
      </div>
      
      <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${isFormVisible ? 'opacity-50' : 'opacity-0'} z-20`} style={isFormVisible ? {} : { pointerEvents: 'none' }} onClick={() => setFormVisible(false)} />
    </section>
  );
}

export default Hero;
