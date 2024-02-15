// import React, { useEffect, useState } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import {mockDataContacts} from "../../data/mockData";
// import columns from './AdminColumns.json';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DoctorForm from "./DoctorForm"; // 의료진 등록 폼 컴포넌트

// // 환자 데이터 컴포넌트
// const AdminData = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [patientData, setPatientData] = useState([]);

//     useEffect(() => {
//         // 환자 데이터를 가져오는 API 호출 등의 로직
//         // 예시로 mockDataContacts를 사용하였습니다.
//         setPatientData(mockDataContacts);
//       }, []);
    
//     // const navigate = useNavigate();
//     // /** 환자 리스트 */
//     // const [lists, setList] = useState(null);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axios.get("http://localhost:8088/boot/getMember");
//     //             setList(response.data[0]);
//     //             console.log("lists", response.data[0]);
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
//     // if (lists === null) {
//     //     return <div>Loading...</div>;
//     // }
//     // 인덱스 1부터 시작
//     // const listsWithId = lists.map((list, index) => ({
//     //     ...list,
//     //     id: index + 1,
//     // }));

//     // const handleRowClick = (params) => {
//     //     const num = params.row.patinum;
//     //     navigate(`/main/detail/${num}`);
//     // };
//     const handleRowClick = (params) => {
//         // 각 행 클릭 시 처리하는 로직
//         // 필요한 동작을 구현하세요.
//         console.log("Clicked Row:", params.row);
//       };

//     const openModal = () => {
//         setIsModalOpen(true);
//       };
    
//       const closeModal = () => {
//         setIsModalOpen(false);
//       };



//     return (
//         <div>
//         <button onClick={openModal}>의료진 추가</button>
//         {isModalOpen && <DoctorForm closeModal={closeModal} />}
//         <DataGrid
//             rows={mockDataContacts}                       /** 환자 데이터 */
//             columns={columns.columns}                /** 컬럼명 */
//             components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
//             // onRowClick={handleRowClick} // 각 행 클릭 시 핸들러 호출
//             onRowClick={handleRowClick}
//         >
//         </DataGrid>
//         </div>
//     )
// }

// export default AdminData


// import React, { useEffect, useState } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { mockDataContacts } from "../../data/mockData";
// import columns from './AdminColumns.json';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DoctorForm from "./DoctorForm"; // 의료진 등록 폼 컴포넌트

// // 환자 데이터 컴포넌트
// const AdminData = () => {
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     const [patientData, setPatientData] = useState([]);

//     useEffect(() => {
//         // 환자 데이터를 가져오는 API 호출 등의 로직
//         // 예시로 mockDataContacts를 사용하였습니다.
//         setPatientData(mockDataContacts);
//     }, []);

//     const handleRowClick = (params) => {
//         console.log("Clicked Row:", params.row);
//     };

//     const openForm = () => {
//         setIsFormOpen(true);
//     };

//     const closeForm = () => {
//         setIsFormOpen(false);
//     };

//     return (
//         <div>
//             <button onClick={openForm}>의료진 추가</button>
//             {isFormOpen && <DoctorForm closeModal={closeForm} />}
//             <DataGrid
//                 rows={mockDataContacts}                       /** 환자 데이터 */
//                 columns={columns.columns}                /** 컬럼명 */
//                 components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
//                 onRowClick={handleRowClick}
//             />
//         </div>
//     );
// }

// export default AdminData;

import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import columns from './AdminColumns.json';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoctorForm from "./DoctorForm"; // 의료진 등록 폼 컴포넌트


// 환자 데이터 컴포넌트
const AdminData = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        // 환자 데이터를 가져오는 API 호출 등의 로직
        // 예시로 mockDataContacts를 사용하였습니다.
        setPatientData(mockDataContacts);
    }, []);

    const handleRowClick = (params) => {
        console.log("Clicked Row:", params.row);
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div>
            <button onClick={openForm}>의료진 추가</button>
            {isFormOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeForm}>
                            &times;
                        </span>
                        <DoctorForm closeModal={closeForm} />
                    </div>
                </div>
            )}
            <DataGrid
                rows={patientData}
                columns={columns.columns}
                components={{ Toolbar: GridToolbar }}
                onRowClick={handleRowClick}
            />
        </div>
    );
}

export default AdminData;