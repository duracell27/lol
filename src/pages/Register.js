import React, { useState,useEffect, useContext } from 'react';
import { authContext } from '../context/auth/authContext';
import { useHttp } from '../hooks/http.hook';

function Register() {
  const auth = useContext(authContext)
   const [form, setFrom] = useState({email: '', password: ''})

   const {loading, errors, request, clearError} = useHttp()

   useEffect(() => {
       if(errors){
           alert(errors)
       }
       clearError()
   }, [errors])

   const changehandler = (e) =>{
       setFrom({...form, [e.target.name]: e.target.value})
   }

   const registerHandler = async () =>{
       try {
           const data = await request('api/auth/register', 'POST', {...form})
           console.log(data)
       } catch (error) {
           
       }
   }

   const loginHandler = async () =>{
    try {
        const data = await request('api/auth/login', 'POST', {...form})
        auth.login(data.token, data.userId)
    } catch (error) {
        
    }
}

  return (
    <div>
      <h1>Register page</h1>
      <input onChange={changehandler} id="email" name="email" type='email' placeholder='Введіть email' value={form.email}/>
      <input onChange={changehandler} id="password" name="password" type='password' placeholder='Введіть пароль' value={form.password}/>
      <button onClick={loginHandler} disabled={loading}>Увійти</button>
      <button onClick={registerHandler} disabled={loading}>Зареєструватися</button>
    </div>
  );
}

export default Register;
