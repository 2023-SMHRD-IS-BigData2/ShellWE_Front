import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Box } from "@mui/material";
import { DashboardContext, PatientContext } from "../../theme";
import Card from './Card/Card';
import Data from './Data';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 대쉬보드
const App = () => {

    const { setPatientNum } = useContext(PatientContext);

    // 로그인한 사람의 id값 state로 가져오기
    const [id, setId] = useState('');
    const [notification, setNotification] = useState();

    console.log("id", id);
    // const { notify, notification, setNotification } = useContext(DashboardContext);

    /** 환자 리스트 */
    const [lists, setList] = useState(null);
    const [Allpatient, setAllpatient] = useState(null)
    const [Screening, setScreening] = useState(null)
    const [smart, setSmart] = useState();
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
    useEffect(() => {
        const sessionUserId = sessionStorage.getItem('userId');
        if (sessionUserId) {
            setId(sessionUserId); // 세션 스토리지에서 userId 값을 가져와 상태로 설정
        }
    }, []);

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

    // //한시간마다 api출력하기
    useEffect(() => {
        axios.post("http://localhost:8088/boot/getRandomInt")
            .then((response) => {
                console.log('randmint:', response.data.RandomInt);
                setNotification(response.data.RandomInt);
            })
            .catch((error) => {
                console.error('서버 요청 오류:', error);
            });
    }, []);


    // 서버에 데이터를 보내는 POST 요청 예제
    const sendDataToServer = async (data) => {
        try {
            const response = await axios.get("http://localhost:8088/boot/getPatient", data);
            console.log('서버 응답:', response.data);
            // 서버로부터의 응답을 처리하는 로직을 추가할 수 있습니다.
        } catch (error) {
            console.error('서버 요청 오류:', error);
            // 요청이 실패했을 때의 오류 처리를 추가할 수 있습니다.
        }
    };


    const notify = () => {
        toast(`스크리닝 환자가 ${notification}명 추가 되었습니다`,
            { autoClose: 3000 } //3초
        );
        console.log("test toasttttttttttttttttttttttttttttttttttt");
    }

    /** 카드 값 */
    useEffect(() => {
        setPercent(Screening / Allpatient * 100)
        console.log("percent");

    }, [Allpatient, Screening])

    // 환자 Back
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getPatient");
                setList(response.data.patientList);
                setAllpatient(response.data.Allpatient);
                setScreening(response.data.Screening);
                console.log("lists", response.data);
                setSmart(response.data.CriteriaSep);

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
                console.log("comment list", response.data.comments);
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
            await axios.post(`http://localhost:8088/boot/insertComment?insertComment=${inputValue}&patinum=${patiIndex}&id=${id}`);
            setInputValue("")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DashboardContext.Provider
            value={{
                lists, setList,
                setAllpatient, setScreening,
                comments, patiIndex, setInputValue, handleSubmit, inputValue,
                isModalOpen, closeModal, openModal,
                Allpatient, Screening, percent, smart,
                handleOptionChange, setPatientEffect, handleSelectChange, handlePhysicianChange, sendDataToServer, toast, notification
            }}
        >

            <ToastContainer
                position="top-right"
                autoClose={30000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progressStyle={{ background: "#3e4396" }}
                bodyStyle={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                }}
            />
            <Box
                m="20px"
                marginTop="60px"
            >
                <button onClick={notify}
                    style={{
                        // backgroundColor:"red",
                        // background:"transparent",
                        opacity: 0,
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        top: "100px",
                        left: "1000px",
                        // display:"inline-block"
                    }}>
                </button>
                <Box
                // display="grid"
                // gridTemplateColumns="repeat(12, 1fr)"
                // gridAutoRows="140px"
                // gap="20px"
                >


                    <Card id={id} />
                    <Data />
                </Box>

            </Box >
        </DashboardContext.Provider>

    );
};


export default App;