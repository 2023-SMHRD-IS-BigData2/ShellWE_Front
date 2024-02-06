import React, { useContext, useEffect, useState } from 'react'
import Detail from '../Detail/Detail'
import Main from '../Main/Main'
import Admin from '../Admin/Admin'
import { Route, Routes } from "react-router-dom";
import axios from 'axios'
import { PatientContext } from '../../context/PatientContext'
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from '../Bar/Sidebar';
import Topbar from '../Bar/Topbar';

const View = () => {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const { setPatient, setComment } = useContext(PatientContext);
  useEffect(() => {
    axios.get('http://localhost:3000/PatientList.json')
      .then(res => setPatient(res.data.List[0]))
    axios.get('http://localhost:3000/Comment.json')
      .then(res => setComment(res.data.List[0]))
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* 디테일 페이지 */}
              <Route path='/detail' element={<Detail />} />
              {/* 메인 페이지 */}
              <Route path='/main' element={<Main />} />
              {/* 관리자 페이지 */}
              <Route path='/admin' element={<Admin />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default View