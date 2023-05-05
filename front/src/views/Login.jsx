// ZADANIE 1 KPT REACT LOGOWANIA, ABY ZAINPORTOWAC UP JSimport './App.css';

import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
	const [hasAccount, setHasAccount] = useState(true);
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		watch,
	} = useForm();

	const onSubmitLogin = (values) => {
		console.log(values);
		handleClearInputs();
	};

	const handleClearInputs = () => {
		reset();
	};

	const onSubmitRegister = (values) => {
		console.log(values);
	};

	return (
		<div className='w-full h-screen bg-backgroundColor gradient flex justify-center items-center'>
			<div className='bg-secondary p-9 flex flex-col items-center'>
				{hasAccount ? (
					<>
						<p className=' text-xl'>Sign In </p>
						<form
							className='flex flex-col my-4'
							onSubmit={handleSubmit(onSubmitLogin)}>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Email
								</label>
								<input
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									className='border-2 border-primary p-2 relative'
								/>
								{errors.email && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.email?.message}
									</p>
								)}
							</div>
							<div className='flex flex-col my-5 relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Password
								</label>
								<input
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Password must have at least 6 characters",
										},
										pattern: {
											value:
												/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
											message:
												"The password should contain at least one digit, uppercase letter and special character",
										},
									})}
									type='password'
									className='border-2 border-primary p-2'
								/>
								{errors.password && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.password?.message}
									</p>
								)}
							</div>
							<button
								type='submit'
								className='bg-primary p-2 hover:opacity-75 duration-200'>
								Login
							</button>
							<p className='mt-3'>
								Don't have an account?{" "}
								<span
									className='font-bold cursor-pointer hover:text-primary'
									onClick={() => {
										setHasAccount(false);
										handleClearInputs();
									}}>
									Sign up
								</span>
							</p>
						</form>
					</>
				) : (
					<>
						<p className=' text-xl'>Join Us!</p>
						<form
							className='flex flex-col my-2'
							onSubmit={handleSubmit(onSubmitRegister)}>
							<div className='flex flex-col relative mb-3'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Name
								</label>
								<input
									{...register("name", {
										required: "Name is required",
									})}
									type='text'
									className='border-2 border-primary p-2'
								/>
								{errors.name && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.name?.message}
									</p>
								)}
							</div>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Last Name
								</label>
								<input
									{...register("lastname", {
										required: "Last name is required",
									})}
									type='text'
									className='border-2 border-primary p-2'
								/>
								{errors.lastname && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.lastname?.message}
									</p>
								)}
							</div>
							<div className='flex flex-col relative my-3'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Phone
								</label>
								<input
									{...register("phone", {
										required: "Phone number is required",
										pattern: {
											value: /^\d{9}$/,
											message: "Invalid phone number",
										},
									})}
									type='tel'
									className='border-2 border-primary p-2'
								/>
								{errors.phone && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.phone?.message}
									</p>
								)}
							</div>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Email
								</label>
								<input
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									className='border-2 border-primary p-2'
								/>
								{errors.email && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.email?.message}
									</p>
								)}
							</div>
							<div className='flex flex-col relative my-3'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Password
								</label>
								<input
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Password must have at least 6 characters",
										},
										pattern: {
											value:
												/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
											message:
												"The password should contain at least one digit, uppercase letter and special character",
										},
									})}
									type='password'
									className='border-2 border-primary p-2'
								/>
								{errors.password && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.password?.message}
									</p>
								)}
							</div>
							<div className='flex flex-col relative'>
								<label className='absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm'>
									Repeat Password
								</label>
								<input
									{...register("repeatpassword", {
										required: "Confrim password",
										validate: (value) =>
											value === watch("password") ||
											"Passwords are not the same",
									})}
									type='password'
									className='border-2 border-primary p-2'
								/>
								{errors.repeatpassword && (
									<p role='alert' className='text-[red] text-sm md:text-base'>
										{errors.repeatpassword?.message}
									</p>
								)}
							</div>
							<button
								type='submit'
								className='bg-primary p-2 mt-3 hover:opacity-75 duration-200'>
								Register
							</button>
							<p className='mt-3'>
								You have an account?{" "}
								<span
									className='font-bold cursor-pointer hover:text-primary'
									onClick={() => {
										setHasAccount(true);
										handleClearInputs();
									}}>
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
