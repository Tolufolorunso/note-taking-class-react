import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useAppContext } from './store/appContext'

function PrivateRoutes() {
    const { token, user } = useAppContext()
    console.log(token)
return (
    token ? <Outlet /> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes