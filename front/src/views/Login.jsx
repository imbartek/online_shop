// ZADANIE 1 KPT REACT LOGOWANIA, ABY ZAINPORTOWAC UP JSimport './App.css';

import { useState } from "react";
import { useForm } from 'react-hook-form'

const Login = () => {
	const [hasAccount, setHasAccount] = useState(true);
	const { handleSubmit, register, formState:{ errors} } = useForm();

	const onSubmitLogin = values => {
		console.log(values);
	}

	console.log(errors);

	return (
		<div className='w-full h-screen bg-backgroundColor gradient flex justify-center items-center'>
			<div className='bg-secondary p-9 flex flex-col items-center'>
				{hasAccount ? (
					<>
						<p className=' text-xl'>Sign In </p>
						<form className='flex flex-col my-4' onSubmit={handleSubmit(onSubmitLogin)}>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Email
								</label>
								<input
									{...register("Email", { required: true, minLength: 3, maxLength: 20 })}
									
									className='border-2 border-primary p-2 relative'
								/>
								{errors.Email?.type === 'required' && <p role="alert" className="text-[red]">Email is required</p>}
							</div>
							<div className='flex flex-col my-5 relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Password
								</label>
								<input
									{...register("Password", { required: true, minLength: 5, maxLength: 20 })}
									type='password'
									className='border-2 border-primary p-2'
								/>
							</div>
							<button type="submit" className='bg-primary p-2 hover:opacity-75 duration-200'>
								Login
							</button>
							<p className='mt-3'>
								Don't have an account?{" "}
								<span
									className='font-bold cursor-pointer hover:text-primary'
									onClick={() => setHasAccount(false)}>
									Sign up
								</span>
							</p>
						</form>
					</>
				) : (
					<>
						<p className=' text-xl'>Join Us!</p>
						<form className='flex flex-col my-2'>
							<div className='flex flex-col relative mb-3'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Name
								</label>
								<input name="name" type='text' className='border-2 border-primary p-2' />
							</div>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Last Name
								</label>
								<input name="lastName" type='text' className='border-2 border-primary p-2' />
							</div>
							<div className='flex flex-col relative my-3'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Phone
								</label>
								<input name="phone" type="tel" className='border-2 border-primary p-2' />
							</div>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Email
								</label>
								<input name="email" type='email' className='border-2 border-primary p-2' />
							</div>
							<div className='flex flex-col relative my-3'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Password
								</label>
								<input
									name="password"
									type='password'
									className='border-2 border-primary p-2'
								/>
							</div>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Repeat Password
								</label>
								<input
									name="repeatPassword"
									type='password'
									className='border-2 border-primary p-2'
								/>
							</div>
							<button type="submit" className='bg-primary p-2 mt-3 hover:opacity-75 duration-200'>
								Register
							</button>
							<p className='mt-3'>
								You have an account?{" "}
								<span
									className='font-bold cursor-pointer hover:text-primary'
									onClick={() => setHasAccount(true)}>
									Sign in
								</span>
							</p>
						</form>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;
