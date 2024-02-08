import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>
        Login Page
      </h1>

      <Link to='/main'>메인 페이지</Link>
      <Link to='/admin'>admin</Link>

    </div>
  )
}

export default Login