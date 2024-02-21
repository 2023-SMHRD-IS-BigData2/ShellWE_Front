import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AdminContext, ColorModeContext, tokens, useMode } from '../../theme';
import Dashboard from '../Admin/DesignTable'
import Settings from '../Admin/Settings'
import AdminSidebar from '../Bar/AdminSidebar';



const Admin = () => {
  
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  const [sepsisScore, setSepsisScore] = useState([]);
  const [memberData, setMemberData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Modal 여는 변수
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSmartModalOpen, setIsSmartModalOpen] = useState(false);
  
  /**Modal열기 */
  const openModal = (e) => {
    setIsModalOpen(true);
  }
  /**Modal닫기 */
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
    setIsSmartModalOpen(false);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8088/boot/admin");
      console.log("from back", response.data.members);
      // console.log("back sepsis", response.data.sepsiss.sepsiss);
      const dataWithId = response.data.members.map((item, index) => ({
        ...item,
        ids: index + 1,
      }));
      console.log("lists", dataWithId);
      setMemberData(dataWithId);
      // setSepsisScore(response.data.sepsiss.sepsiss);
    } catch (error) {
      console.log("admin", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("Effect test ------------------");
  }, [showConfirmation, isModalOpen, isAddModalOpen]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ width: "2030px" }}>
          <AdminSidebar isSidebar={isSidebar} />
          <main className="content" >
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}

            {/* Context */}
            <AdminContext.Provider 
            value={{ sepsisScore, setSepsisScore,
              memberData, 
              openModal, closeModal,
              isModalOpen, 
              isAddModalOpen, setIsAddModalOpen,
              showConfirmation, setShowConfirmation,
              fetchData ,

              // Settings
              isSmartModalOpen,setIsSmartModalOpen
            }}
            >

              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </AdminContext.Provider>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Admin