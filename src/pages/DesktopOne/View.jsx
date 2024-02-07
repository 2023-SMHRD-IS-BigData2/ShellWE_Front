import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Detail from '../Detail/Detail'
import Main from '../Main/Main'
import Home from '../home/Main'
import Admin from '../Admin/Admin'
import { PatientContext } from '../../context/PatientContext'
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from '../Bar/Sidebar';
import Topbar from '../Bar/Topbar';
import axios from 'axios'

const View = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const { setPatient, setComment } = useContext(PatientContext);
  useEffect(() => {
    axios.get('http://localhost:3000/PatientList.json')
      .then(res => setPatient(res.data.List[0]))
    axios.get('http://localhost:3000/Comment.json')
      .then(res => setComment(res.data.List[0]))
  }, [setComment, setPatient])

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
              <Route path='/admin' element={<Admin />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default View