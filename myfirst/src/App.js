import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  /*for email and password */
  const [mail, changeMail] = useState('')
  const [password, changePassword] = useState('')

  /*for eerrors display */
  const [errors, updateErrors] = useState({
    email: "",
    password: ""
  })

  const validEmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


  function afterClick(e) {
    e.preventDefault();

    if(mail.trim()===""){
      updateErrors((errors)=>({...errors,email:"enter email"}))
    }

    else if(!validEmailCheck.test(mail)){
      updateErrors((errors)=>({...errors,email:"enter valid email format"}))
    }
    else{
      updateErrors((errors)=>({...errors,email:""}))
    }

    if(password.trim()===""){
      updateErrors((errors)=>({...errors,password:"eneter password"}))
    }
    else{
      updateErrors((errors)=>({...errors,password:""}))
    }

  }

  return (
    <>
      <div className='border w-25 mt-5 p-4 m-auto'>
        <h2 className='text-primary text-center'>Login Page</h2>
        <form>
          <div>
            <label className='form-label'>EMAIL</label>
            <input type='email' placeholder='Enter Email' className="form-control" value={mail} onChange={(e) => { changeMail(e.target.value) }} />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label className='form-label'>Password</label>
            <input type='password' placeholder='Enter Password' className="form-control" value={password}
              onChange={(e) => changePassword(e.target.value)} />
               {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <div>
            <button className='btn btn-primary w-100 mt-3'
              onClick={afterClick}>login</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
