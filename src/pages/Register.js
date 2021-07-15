import React, { useState } from 'react';
function Register() {
   const [form, setFrom] = useState({email: '', password: ''})

   const changehandler = (e) =>{
       setFrom({...form, [e.target.name]: [e.target.value]})
   }

  return (
    <div>
      <h1>Register page</h1>
      <input onChange={changehandler} id="email" name="email" type='email' placeholder='Введіть email' value={form.email}/>
      <input onChange={changehandler} id="password" name="password" type='password' placeholder='Введіть пароль' value={form.password}/>
      <button>Увійти</button>
      <button>Зареєструватися</button>
    </div>
  );
}

export default Register;
