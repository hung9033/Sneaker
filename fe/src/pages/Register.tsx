import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../hook/useAuth';

type Register = {
  name: string,
  email: string,
  password: string,

}

const Register = () => {

  const { Register } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>();

  const onSubmit: SubmitHandler<Register> = (data) => {
    Register(data)
  }

  return (
    // <Container>
    //   <Typography variant="h2" textAlign={"center"} mb={2}>
    //     Register
    //   </Typography>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <Stack gap={2}>
    //       <TextField
    //         label="name"
    //         {...register("name", {
    //           required: "Username is required",
    //         })}
    //         error={!!errors?.name?.message}
    //         helperText={errors?.name?.message}
    //       />
    //       <TextField
    //         label="Email"
    //         {...register("email", {
    //           required: "Email is required",
    //           pattern: {
    //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //             message: "invalid email address",
    //           },
    //         })}
    //         error={!!errors?.email?.message}
    //         helperText={errors?.email?.message}
    //       />
    //       <TextField
    //         label="Password"
    //         {...register("password", {
    //           required: "Password is required",
    //           minLength: {
    //             value: 6,
    //             message: "Password is min length 6 characters",
    //           },
    //         })}
    //         type="password"
    //         error={!!errors?.password?.message}
    //         helperText={errors?.password?.message}
    //       />
    //       <Button type="submit" variant="contained">
    //         Submit
    //       </Button>
    //     </Stack>
    //   </form>
    //   <div className="text-right my-4 mx-4 "><a className='text-blue-500 text-xl' href="/login">Login</a></div>

    // </Container>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Sneaker
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input type="text" id="email"
                  {...register("name", {
                    required: "Username is required",
                  })}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                {errors.email && <span className='text-red-500 '>{errors.email.message}</span>}
              </div>

              <div className='mb-3'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="text" id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
              </div>

              <div className='mb-3'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password is min length 6 characters",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">

                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 mb-2">Forgot password?</a>
              </div>
              <button type="submit" className=" mb-2 w-full text-white bg-sky-500 hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register