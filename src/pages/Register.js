import React, { useState,useEffect, useContext } from 'react';
import { authContext } from '../context/auth/authContext';
import { useHttp } from '../hooks/http.hook';
import cls from './register.module.css'

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
    <div className={cls.wrapper}>
      <h1 className={cls.h1}>Вітаємо фермер!</h1>
      <h2 className={cls.h2}>Зареєструйтесь або увійдіть</h2>
      <input className={cls.input} onChange={changehandler} id="email" name="email" type='email' placeholder='Введіть email' value={form.email}/>
      <input className={cls.input} onChange={changehandler} id="password" name="password" type='password' placeholder='Введіть пароль' value={form.password}/>
      <button className={cls.button} onClick={loginHandler} disabled={loading}>Увійти</button>
      <button className={cls.button} onClick={registerHandler} disabled={loading}>Зареєструватися</button>
    </div>
  );
}

export default Register;
