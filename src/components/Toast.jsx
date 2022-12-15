import React from 'react'
import { useAppContext } from '../store/appContext'

function Toast() {
    const { error, success } = useAppContext()
    console.log(error,success)
    
    if (error) {
        return <h1>{error }</h1>
    }

  return (
      <h1>{ success}</h1>
  )
}

export default Toast