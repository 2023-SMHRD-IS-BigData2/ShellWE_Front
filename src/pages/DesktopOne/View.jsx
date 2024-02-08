import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Detail from '../Detail/Detail'
import Main from '../Main/Main'
import Home from '../home/Main'
import { PatientContext } from '../../context/PatientContext'
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
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
          <Sidebar isSidebar={isSidebar} />
          <main className="content" >
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<Main />} />
              <Route path='/detail' element={<Detail />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default View