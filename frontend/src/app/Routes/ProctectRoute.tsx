import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

type Props = {
    
}

const ProctectRoute: React.FC<Props> = (props): any => {
    const user = useContext(UserContext);
  return (
    user ? <Outlet /> : <Navigate to='/' />
  )
}

export default ProctectRoute