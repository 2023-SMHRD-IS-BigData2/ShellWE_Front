import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Settings from './Settings'
import Staffs from './Staffs'
import Dashboard from './Dashboard'
import { PatientContext } from '../../context/PatientContext'
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from '../Bar/Topbar';
import axios from 'axios'


const Admin = () => {
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
        <div className="app" style={{ width: "2030px" }}>
          <Sidebar isSidebar={isSidebar} />
          <main className="content" >
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/list' element={<Staffs />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Admin