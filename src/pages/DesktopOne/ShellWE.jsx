import React from 'react'
import { Route, Routes } from "react-router-dom";
import View from './View';
import Login from '../Login/Login'
import Admin from './Admin';

const ShellWE = () => {


  return (
      <div 
      className='app'
      >

        {/* 로그인, 의료진, 관리자 페이지 */}
        <Routes>
          <Route path='/' element={<Login />} />            {/* 로그인 전 */}
          <Route path='/main/*' element={<View />} />       {/* 사용자 */}
          <Route path='/admin/*' element={<Admin />} />     {/* 관리자 */}
        </Routes>

      </div>
  )
}

export default ShellWE