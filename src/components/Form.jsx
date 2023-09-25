import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import InputMask from 'react-input-mask';
import Confirmation from './Confirmation';
import { BsArrowDownRight } from 'react-icons/bs';

const Form = ({ onClose, visible }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({ name: '', phoneNumber: '', checkbox: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    
    const nameError = /^[а-яА-Яa-zA-Z\s]+$/.test(name) ? '' : 'Имя может содержать только буквы';
    const phoneError = /^\+7 \(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber) ? '' : 'Неверный формат телефона';
    const checkboxError = isChecked ? '' : 'Необходимо согласие на обработку данных';
    
    setErrors({ name: nameError, phoneNumber: phoneError, checkbox: checkboxError });

    if (!nameError && !phoneError && isChecked) {
      setIsFormValid(true);
      setName('');
      setPhoneNumber('');
      setIsChecked(false);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[а-яА-Яa-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleClose = () => {
    setIsFormValid(false);
    setSubmitted(false);
    onClose();
  };

  const saveFormDataToLocalStorage = () => {
    const formData = { name, phoneNumber, isChecked };
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const loadFormDataFromLocalStorage = () => {
    const formDataStr = localStorage.getItem('formData');
    if (formDataStr) {
      const { name, phoneNumber, isChecked } = JSON.parse(formDataStr);
      setName(name);
      setPhoneNumber(phoneNumber);
      setIsChecked(isChecked);
    }
  };

  useEffect(() => {
    loadFormDataFromLocalStorage();
  }, []);

  useEffect(() => {
    saveFormDataToLocalStorage();
  }, [name, phoneNumber, isChecked]);

  return (
    <section className={`formContainer m-auto ${visible ? 'visible' : ''} w-full md:w-[50%]  lg:w-[50%] xl:w-[30%] flex flex-col z-100`} >
      <button onClick={handleClose} className='absolute top-4 right-4'>
        <AiOutlineClose className='text-[40px] text-white'/>
      </button>      
      <div className='w-[85%] m-auto min:h-screen'>
     {!isFormValid && <h1 className='text-[20px] text-white font-[600] md:text-[50px] leading-[25px] md:leading-[60px]'>Закажите <br/> обратный звонок</h1>}

      {isFormValid ? (
        <Confirmation />
      ) : (
        <>
          <div className="mt-4 ">
            <label className="block text-white mb-2">Имя:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded placeholder-black"
              placeholder='Имя'
            />
            {submitted && errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-white mb-2">Номер телефона:</label>
            <div className="flex border border-gray-300 rounded">
              <InputMask
                mask="+7 (999) 999-9999"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 p-2 rounded placeholder-black"
                placeholder='Телефон'
              />
            </div>
            {submitted && errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
          </div>
          <div className="mt-4 flex items-center mx-auto">
            <input type="checkbox" onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
            <p className='custom-text ml-2'>Согласен на сохранение и обработку персональных данных</p>
          </div>
          {submitted && errors.checkbox && <p className="text-red-500 text-xs">{errors.checkbox}</p>}
          <div className="mt-4">
  <button 
    onClick={handleSubmit} 
    className='transform transition-transform duration-300 hover:scale-105 flex items-center border border-white text-white mb-20 w-auto md:w-auto relative'
  >
    <span className='px-2 whitespace-nowrap md:px-4 md:hidden text-[10px]'>Заказать звонок</span>
    <span className='hidden md:px-4 md:whitespace-nowrap md:inline'>Записаться на консультацию</span>
    <div 
        className='border-l border-white p-2 md:p-4 flex items-center justify-center relative'
    >
        <BsArrowDownRight 
            className='text-[10px] md:text-[26px] transform translate-x-[30%] translate-y-[30%] transition-transform duration-300 hover:translate-x-[40%] hover:translate-y-[40%]' 
        />
    </div>
  </button>
</div>

        </>
      )}
            </div>
    </section>
  );
};

export default Form;
