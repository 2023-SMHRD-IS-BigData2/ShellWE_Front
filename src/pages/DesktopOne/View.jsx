import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, PatientContext, tokens, useMode } from '../../theme';
import Detail from '../Detail/DetailMain'
import Dashboard from '../Main/Dashboard'
import Sidebar from '../Bar/Sidebar';


const View = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  /** 메인에서 선택한 환자 정보 */
  const [patientNum, setPatientNum] = useState();
  const [data, setData] = useState(null);

  return (
    <ColorModeContext.Provider value={{colorMode, colors}}>
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
            <PatientContext.Provider value={{
              patientNum, setPatientNum,
              data, setData
            }}>

              <Routes>
                <Route path='/' element={<Dashboard />} />            {/*  메인 대쉬보드 */}
                <Route path='/detail/:num' element={<Detail />} />    {/* 환자 상세 페이지 */}
              </Routes>
            </PatientContext.Provider>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default View