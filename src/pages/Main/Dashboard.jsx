import React, { useEffect, useRef, useState } from 'react';
import { Box } from "@mui/material";
import { DashboardContext } from "../../theme";
import Data from './Data';
import axios from 'axios';
import Card from './Card/Card';
import { useLocation } from 'react-router-dom';

// 대쉬보드
const App = () => {
    // 로그인한 사람의 id값 state로 가져오기
    const location = useLocation();
    const id = location.state?.id;
    console.log("id", id);

    /** 환자 리스트 */
    const [lists, setList] = useState(null);
    const [Allpatient, setAllpatient] = useState(null)
    const [todayScreening, settodayScreening] = useState(null)
    const [Screening, setScreening] = useState(null)
    /** 코멘트 */
    const [comments, setComments] = useState(null);
    /** 코멘트 인덱스 */
    const [patiIndex, setpatiIndex] = useState(1);
    /** 코멘트 입력 값 */
    const [inputValue, setInputValue] = useState('');
    /** 카드 변수 */
    const [percent, setPercent] = useState(null)


    /**환자 컬럼 업데이트 */
    const [patientEffect, setPatientEffect] = useState(null)
    

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

    const handleOptionChange = (value, patinum) => {
        // 서버에 데이터를 보내는 요청을 만듭니다.
        axios.post(`http://localhost:8088/boot/changeStatus?sepsisslevel=${value}&patinum=${patinum}`)
            .then((response) => {
                console.log('서버 응답:', response);
                // 요청이 성공했을 때 수행할 작업을 이곳에 추가합니다.
            })
            .catch((error) => {
                console.error('서버 요청 오류:', error);
                // 요청이 실패했을 때 수행할 작업을 이곳에 추가합니다.
            });
    };

    //환자 병동 수정
    const handleSelectChange = (patinum, ward) => {
        axios.post(`http://localhost:8088/boot/updateWard?patinum=${patinum}&ward=${ward}`)
            .then((response) => {
                console.log('서버 응답:', response);
            })
            .catch((error) => {
                console.error('서버 요청 오류:', error);
            });
    }

    //환자의 담당 의료진 수정
    const handlePhysicianChange = (patinum, physician) => {
        axios.post(`http://localhost:8088/boot/updatePhysician?patinum=${patinum}&physician=${physician}`)
            .then((response) => {
                console.log('서버 응답:', response);
            })
            .catch((error) => {
                console.error('서버 요청 오류:', error);
            });
    }

    const gridRef = useRef(null);

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
                // console.log("lists", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        console.log("patient");
        fetchData();
    }, [patientEffect]);


    // 코멘트 내용 출력
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/boot/getComment?patinum=${patiIndex}`);
                setComments(response.data.comments);
            } catch (error) {
                console.log(error);
            }
        };
        console.log("comments")
        fetchData();
    }, [inputValue, patiIndex]);

    useEffect(() => {
        if (gridRef.current) {
            const rowCount = comments.length;
            const lastRowIndex = rowCount - 1;

            gridRef.current.scrollToIndexes({ rowIndex: lastRowIndex });
        }
        console.log("comment scroll");
    }, [comments]);

    // 코멘트 Back 전송
    const handleSubmit = async (event) => {
        // console.log("handleSubmit");
        event.preventDefault();
        try {
            await axios.post(`http://localhost:8088/boot/insertComment?insertComment=${inputValue}&patinum=${patiIndex}&membernum=${id}`);
            setInputValue("")
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <DashboardContext.Provider
            value={{
                lists, setList,
                setAllpatient, settodayScreening, setScreening,
                comments, patiIndex, setInputValue, handleSubmit, inputValue,
                isModalOpen, closeModal, openModal,
                Allpatient, Screening, todayScreening, percent,
                handleOptionChange, setPatientEffect, handleSelectChange,handlePhysicianChange
            }}
        >
            <Box
                m="20px"
                marginTop="60px"
            // width="97.5%"

            >
                <Box
                // display="grid"
                // gridTemplateColumns="repeat(12, 1fr)"
                // gridAutoRows="140px"
                // gap="20px"
                >

                    <Card />
                </Box>
                <Data />
            </Box >
        </DashboardContext.Provider>

    );
};


export default App;