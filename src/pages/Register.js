import React, { useState,useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
function Register() {
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

  return (
    <div>
      <h1>Register page</h1>
      <input onChange={changehandler} id="email" name="email" type='email' placeholder='Введіть email' value={form.email}/>
      <input onChange={changehandler} id="password" name="password" type='password' placeholder='Введіть пароль' value={form.password}/>
      <button disabled={loading}>Увійти</button>
      <button onClick={registerHandler} disabled={loading}>Зареєструватися</button>
    </div>
  );
}

export default Register;
