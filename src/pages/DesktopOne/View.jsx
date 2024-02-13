import React, {  useState  } from 'react'
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme';
import Detail from '../Detail/Detail'
import Dashboard from '../Main/Dashboard'
import List from '../Main/List'
import Sidebar from '../Bar/Sidebar';
import Topbar from '../Bar/Topbar';

const View = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{width:"2030px"}}>
          <Sidebar isSidebar={isSidebar} />                   {/* 사이드 바 (메뉴목록) */}
          <main className="content" >
            <Topbar setIsSidebar={setIsSidebar} />            {/* 톱바 (로그인, 다크모드)  */}
            <Routes>
              <Route path='/' element={<Dashboard/>} />                 {/*  메인 대쉬보드 */}
              <Route path='/list' element={<List/>} />             {/* 환자 리스트 */}
              <Route path='/detail/:num' element={<Detail />} />    {/* 환자 상세 페이지 */}
            </Routes>
            
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default View