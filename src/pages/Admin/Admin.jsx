import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Settings from './Settings'
import Staffs from './AdminList'
import Dashboard from './AdminList'
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from '../Bar/Topbar';



const Admin = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


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