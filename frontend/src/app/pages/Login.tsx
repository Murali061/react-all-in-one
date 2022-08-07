import React from 'react'
import LoginComp from '../components/Login/LoginComp'

type Props = {
  setUsername: any
}

const Login = (props: Props) => {
  return (
    <LoginComp setUserName={props.setUsername}/>
  )
}

export default Login