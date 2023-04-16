import React, { useState } from "react";
export const Register = () => {
  const [loginName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(loginName);
     console.log(email);
      console.log(pass);
      console.log(confirmPass);
    }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <label htmlFor="loginName">Login:</label>
        <input value={loginName} onChange={(e)=> setName(e.target.value)} required />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" required />
        <br />
        <label htmlFor="confirmPassword">Repeat Password:</label>
        <input value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)}type="password"required/>
        <br/>
        <input type="submit" value="Register" />
      </form>
    </>
  )
}
