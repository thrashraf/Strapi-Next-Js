import React, { useState } from 'react';
import { Button } from '../components/Button/button';
import { Input } from '../components/Input/input';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Form } from '../components/Form';
import { Tabs } from '../components/Button/tabs';
import useInput from '../hooks/useInput';

const LoginPagePage = () => {
  const [mode, setMode] = useState('Sign In');

  const name = useInput('');
  const email = useInput('');
  const password = useInput('');

  const changeMode = (mode) => setMode(mode);

  return (
    <div class='flex flex-wrap w-full'>
      <div class='flex flex-col w-full md:w-1/2'>
        <div class='flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24'>
          <Tabs
            label={'Sign In'}
            mode={mode}
            changeMode={() => changeMode('Sign In')}
          />
          <Tabs
            label={'Sign Up'}
            mode={mode}
            changeMode={() => changeMode('Sign Up')}
          />
        </div>
        <div class='flex flex-col justify-center px-8 pt-20 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
          <p class='text-3xl text-center'>Welcome.</p>

          <Form>
            <div class='flex flex-col pt-4 '>
              {mode === 'Sign In' ? (
                <>
                  <Input placeholder={'Email'} type={'email'} label={'Email'} />
                  <Input
                    placeholder={'Password'}
                    type={'password'}
                    label={'Password'}
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder={'Full Name'}
                    type={'name'}
                    label={'Full Name'}
                  />
                  <Input placeholder={'Email'} type={'email'} label={'Email'} />
                  <Input
                    placeholder={'Password'}
                    type={'password'}
                    label={'Password'}
                  />
                </>
              )}
            </div>

            <Button />

            <div className='mt-20 grid grid-cols-3'>
              <div className='m-auto bg-red-500 px-10 py-4 rounded-md'>
                <FaGoogle size={25} />
              </div>
              <div className='m-auto bg-blue-500 px-10 py-4 rounded-md'>
                <FaFacebook size={25} />
              </div>
              <div className='m-auto bg-slate-800 px-10 py-4 rounded-md'>
                <FaGithub size={25} />
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div class='w-1/2 shadow-2xl  h-screen'>
        <img
          class='hidden object-cover w-full h-full  md:block'
          src='main.png'
        />
      </div>
    </div>
  );
};

export default LoginPagePage;
