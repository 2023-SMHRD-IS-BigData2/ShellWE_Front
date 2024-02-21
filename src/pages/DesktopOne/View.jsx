import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme';
import Detail from '../Detail/Dashboard'
import Dashboard from '../Main/Dashboard'
import Sidebar from '../Bar/Sidebar';


const View = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="app"
          // style={{ width: "2030px" }}
        >
          <Sidebar isSidebar={isSidebar} />                   {/* 사이드 바 (메뉴목록) */}
          <main className="content"
            style={{
              // marginLeft: "60px",
              // marginTop: "20px"
            }}
          >
            <Routes>
              <Route path='/' element={<Dashboard />} />            {/*  메인 대쉬보드 */}
              <Route path='/detail/:num' element={<Detail />} />    {/* 환자 상세 페이지 */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default View