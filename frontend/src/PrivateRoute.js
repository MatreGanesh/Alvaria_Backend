import React from 'react'
import { useStateContext } from './StateContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {

    const { isAuth } = useStateContext();

    return isAuth ? children : <Navigate to={'/'} />;
}
