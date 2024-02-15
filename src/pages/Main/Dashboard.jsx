import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import { DashboardContext } from "../../theme";
import Data from './Data';
import axios from 'axios';
import Card from './Card';

// 대쉬보드
const App = () => {
    /** 환자 리스트 */
    const [lists, setList] = useState(null);
    const [Allpatient, setAllpatient] = useState(null)
    const [todayScreening, settodayScreening] = useState(null)
    const [Screening, setScreening] = useState(null)

    /** 코멘트 */
    const [comments, setComments] = useState(null);
    /** 코멘트 인덱스 */
    const [patiIndex, setpatiIndex] = useState(1);
    /** 카드 변수 */

    const [percent, setPercent] = useState(null)

    /**sepsis level */
    const [sepsisState, setSepsisState] = useState(null)
    const [inputValue, setInputValue] = useState('');
    // Modal 여는 변수
    const [isModalOpen, setIsModalOpen] = useState(false);
    /**Modal열기 */
    const openModal = (e) => {
        setIsModalOpen(true);
        setpatiIndex(e) // 인덱스
    }
    /**Modal닫기 */
    const closeModal = () => {
        setIsModalOpen(false);
    }
    /** 카드 값 */
    useEffect(() => {
        setPercent(Screening / Allpatient * 100)
    }, [Allpatient, Screening])

    // 환자 Back
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getPatient");
                setList(response.data.patientList);
                setAllpatient(response.data.Allpatient)
                settodayScreening(response.data.todayScreening)
                setScreening(response.data.Screening)
                console.log("lists", response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // 코멘트 Back

    const handleSubmit = async (event) => {
        console.log("handleSubmit");
        event.preventDefault();
        try {
            await axios.post(`http://localhost:8088/boot/insertComment?insertComment=${inputValue}&patinum=${patiIndex}`);
            setInputValue("")
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/boot/getComment?patinum=${patiIndex}`);
                setComments(response.data.comments);
            } catch (error) {
                console.log(error);
            }
        };
        console.log("comment reflesh")
        fetchData();
    }, [inputValue, patiIndex]);

    // sepsislevel 눌렀을 때 함수명 handlesepsis
    // 백으로 보내는 함수 
    // http://localhost:8088/boot/changeStatus?sepsisslevel={}&patinum={}
    
    return (
        <DashboardContext.Provider
            value={{
                lists, setList,
                setAllpatient, settodayScreening, setScreening,
                comments, patiIndex, setInputValue, handleSubmit, inputValue,
                isModalOpen, closeModal, openModal,
                Allpatient, Screening, todayScreening, percent, 
                sepsisState, setSepsisState
            }}
        >
            <Box
                m="20px"
            >
                <Card />
                <Data />
            </Box >
        </DashboardContext.Provider>

    );
};


export default App;