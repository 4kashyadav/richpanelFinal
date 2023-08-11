import React, { useState } from 'react'
import LoginComp from '@/Components/LoginComp'

const Login = (props) => {
  const {LoginData, setLoginData, LoginSubmitHandler} = props
  return (
    <div>
      <LoginComp LoginData={LoginData} setLoginData={setLoginData} LoginSubmitHandler={LoginSubmitHandler} />
    </div>
  )
}

export default Login