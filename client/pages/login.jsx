import React, { useState } from 'react';
import { Button } from '../components/Button/button';
import { Input } from '../components/Input/input';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Form } from '../components/Form';
import { Tabs } from '../components/Button/tabs';
import useInput from '../hooks/useInput';
import ErrorBadges from '../components/badges/ErrorBadges';
import axios from 'axios';
import Router from 'next/router';

const LoginPagePage = () => {
  const [mode, setMode] = useState('Sign In');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const name = useInput('');
  const email = useInput('');
  const password = useInput('');

  //to change mode between sign in and sign up
  const changeMode = (mode) => {
    //to reset value when change tabs
    name.reset();
    email.reset();
    password.reset();

    setLoading(false);
    setError(false);

    setMode(mode);
  };

  const authHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'Sign In') {
        await axios.post('/api/login', {
          identifier: email.value,
          password: password.value,
        });

        setLoading(false);
        Router.push('/');
        return;
      }

      await axios.post('/api/register', {
        username: name.value,
        email: email.value,
        password: password.value,
      });

      setLoading(false);
      Router.push('/');
      return;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className='flex flex-wrap w-full'>
      <div className='flex flex-col w-full md:w-1/2'>
        {error && <ErrorBadges mode={mode} />}
        <div className='flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24'>
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
        <div className='flex flex-col justify-center px-8 pt-20 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
          <p className='text-3xl text-center'>Welcome.</p>

          <Form auth={(e) => authHandler(e)}>
            <div className='flex flex-col pt-4 '>
              {mode === 'Sign In' ? (
                <>
                  <Input
                    placeholder={'Email'}
                    type={'email'}
                    label={'Email'}
                    value={email.value}
                    onChange={email.onChange}
                    error={error}
                  />
                  <Input
                    placeholder={'Password'}
                    type={'password'}
                    label={'Password'}
                    value={password.value}
                    onChange={password.onChange}
                    error={error}
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder={'Full Name'}
                    type={'name'}
                    label={'Full Name'}
                    value={name.value}
                    onChange={name.onChange}
                  />
                  <Input
                    placeholder={'Email'}
                    type={'email'}
                    label={'Email'}
                    value={email.value}
                    onChange={email.onChange}
                    error={error}
                  />
                  <Input
                    placeholder={'Password'}
                    type={'password'}
                    label={'Password'}
                    value={password.value}
                    onChange={password.onChange}
                  />
                </>
              )}
            </div>

            <Button label={mode} loading={loading} />

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
      <div className='w-1/2 shadow-2xl  h-screen'>
        <img
          className='hidden object-cover w-full h-full  md:block'
          src='main.png'
        />
      </div>
    </div>
  );
};

export default LoginPagePage;
