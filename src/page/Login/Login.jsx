import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { images } from '../../constants';
import { useCreateUser } from './service/Mutation/useUserQuery';
import NavHook from '../../hook/Nav-hook';

const schema = z.object({
  email: z.string(),
  password: z.string().min(4),
  name: z.string("")
});


export const Login = () => {
  NavHook()
  const { reset, handleSubmit, formState: { errors }, register } = useForm({
    resolver: zodResolver(schema)
  });
  const { mutate } = useCreateUser()

  const navigate = useNavigate()

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        reset()
        navigate('/account')
      }, onError: (error) => {
        console.log(error);
      }
    })
    reset();
  }


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <section className="relative">
      <div className='container py-[64px]'>
        <div className='w-[407px] bg-white border-solid border-[2px] border-graylight  rounded-[4px] px-[32px] mx-auto'>
          <div className='border-b-[3px] border-black mb-[24px]'>
            <h1 className='text-primary font-roboto text-[16px] text-center mt-[32px] mb-[8px] font-bold'>Kirish</h1>
          </div>
          <h2 className={`${errors.email ? "text-red font-roboto text-[12px] font-normal mb-[16px]" : 'text-graylight font-roboto text-[12px] font-normal mb-[16px]'}`}>Email kiriting</h2>
          <form onSubmit={handleSubmit(submit)}>
            <input type='text'
              id='email'
              {...register("email", { required: true })}
              className={`${errors.email ? `border-solid border-[2px] border-red w-full h-[48px] p-[16px] text-[14px] outline-none rounded-[6px]` : 'w-full h-[48px] p-[16px] text-[14px] outline-none border-solid rounded-[6px] border-[1px] border-graylight '}`}
              placeholder='Enter Email'
            />
            <h2 className={errors.name ? "text-red font-roboto text-[12px] font-normal my-[16px] " : 'text-graylight font-roboto text-[12px] font-normal my-[16px] '}>Ismingiz</h2>
            <div className={errors.name ? "border-solid border-[2px] border-red flex relative items-center rounded-[6px] p-[16px] h-[48px]" : 'flex relative items-center p-[16px] h-[48px] border-solid border-[1px] border-graylight  rounded-[6px]'}>
              <input type="text"
                {...register("name", { required: true })}
                className='w-full text-[14px] outline-none'
                placeholder='Enter your name'
              />
            </div>

            <h2 className={errors.password ? "text-red font-roboto text-[12px] font-normal my-[16px] " : 'text-graylight font-roboto text-[12px] font-normal my-[16px] '}>Parolingiz</h2>
            <div className={errors.password ? "border-solid border-[2px] border-red flex relative items-center rounded-[6px] p-[16px] h-[48px]" : 'flex relative items-center p-[16px] h-[48px] border-solid border-[1px] border-graylight  rounded-[6px]'}>
              <input type={showPassword ? "password" : "text"}
                {...register("password", { required: true })}
                className='w-full text-[14px] outline-none'
                placeholder='Enter password'
              />
              <span className="absolute cursor-pointer right-4 top-[50%] translate-y-[-50%]" onClick={togglePasswordVisibility}>
              </span>
            </div>
            {errors.password && <p className={`text-red mt-[10px]`}>{errors.password.message}</p>}

            <button type='submit' className={errors.password ? "w-full py-[19px] bg-black mt-[30px] text-white mb-[32px] rounded-[16px]" : 'w-full py-[19px] bg-black mt-[63px] text-white mb-[32px] rounded-[16px]'}>Kirish</button>
          </form>
        </div>
      </div>
      <img src={images.SingUp} alt="" className='absolute bottom-[-61px] left-0' />
    </section>
  )
}
