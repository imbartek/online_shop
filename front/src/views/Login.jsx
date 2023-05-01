// ZADANIE 1 KPT REACT LOGOWANIA, ABY ZAINPORTOWAC UP JSimport './App.css';

import { useState } from "react";

const Login = () => {
	const [hasAccount, setHasAccount] = useState(true);

	return (
		<div className='w-full h-screen bg-backgroundColor gradient flex justify-center items-center'>
			<div className='bg-secondary p-10 flex flex-col items-center'>
				{hasAccount ? (
					<>
						<p className=' text-xl'>Sign In </p>
						<form className='flex flex-col my-4'>
							<div className='flex flex-col relative'>
								<label className="absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm">Email</label>
								<input className='border-2 border-primary p-2 relative' />
							</div>
							<div className='flex flex-col my-5 relative'>
								<label className="absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm">Password</label>
								<input className='border-2 border-primary p-2' />
							</div>
							<button className='bg-primary p-2'>Login</button>
              <p className="mt-3">Don't have an account? <span className="font-bold cursor-pointer hover:text-primary" onClick={() => setHasAccount(false)}>Sign up</span></p>
						</form>
					</>
				) : (
					<>
						<p className=' text-xl'>Join Us!</p>
						<form className='flex flex-col my-4'>
							<div className='flex flex-col relative'>
								<label className="absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm">Email address</label>
								<input className='border-2 border-primary p-2' />
							</div>
							<div className='flex flex-col relative my-4'>
								<label className="absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm">Password</label>
								<input className='border-2 border-primary p-2' />
							</div>
              <div className='flex flex-col relative'>
								<label className="absolute -translate-y-1/2 top-0 left-2 z-10 bg-secondary rounded-md text-sm">Password</label>
								<input className='border-2 border-primary p-2' />
							</div>
							<button className='bg-primary p-2 mt-3'>Register</button>
              <p className="mt-3">You have an account? <span className="font-bold cursor-pointer hover:text-primary" onClick={() => setHasAccount(true)}>Sign in</span></p>
						</form>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;
