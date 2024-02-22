import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [inputId, setInputId] = useState(""); // 입력한 아이디 값을 상태로 관리
  const [inputPw, setInputPw] = useState(""); // 입력한 패스워드 값을 상태로 관리
  const [error, setError] = useState(""); // 에러 메시지를 상태로 관리
  const [message, setMessage] = useState(""); // 서버로부터 받은 메시지를 상태로 관리
  const navigate = useNavigate(); // React Router의 네비게이션 기능 사용
  const inputRef = useRef(null); // input 요소에 접근할 수 있는 ref 생성

  const handleInputId = (e) => {
    setInputId(e.target.value); // 아이디 입력값 변경 시 상태 업데이트
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value); // 패스워드 입력값 변경 시 상태 업데이트
  };

  const onClickLogin = async () => {
    if (inputId === "" || inputPw === "") {
      setError("아이디와 패스워드를 모두 입력해주세요.");
      return;
    }
  
    console.log("로그인 시도");
    
    try {
      const response = await axios.post(
        'http://localhost:8088/boot/login',
        `ID=${inputId}&PW=${inputPw}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      
      if (response && response.data) {
        setMessage(response.data.login);
        
        if (response.data.login === "main") {
          console.log(message);
          
          const userId = response.data.userId;
          console.log("사용자 ID:", userId);
          localStorage.setItem('userId', userId); // userId 값을 로컬 스토리지에 저장
          
          navigate('/main');
        } else if (response.data.login === "admin") {
          navigate('/admin');
        } else if (response.data.login === "login") {
          setError("로그인 실패");
        }
      } else {
        setError("로그인 실패");
        console.error("Login failed: No data in the response");
      }
    } catch (error) {
      setError("로그인 실패");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickLogin(); // Enter 키가 눌렸을 때 onClickLogin 함수 호출
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    }}>
      {/* 추가한 HTML과 CSS */}
      <section className="user-pages-section">
        <div className="inner-container w-container">
          <div className="user-page-content-wrap"
            style={{ width: "600px" }}>
            <div className="user-page-title-wrap">
              <div className="user-page-icon-wrap">
                {/* logo */}
                {<img src="https://i.ibb.co/mqXF466/image.png"
                  loading="eager" alt="" className="user-page-icon" style={{ width: "90px", height: "90px" }} />}
              </div>
              <h1 className="user-page-title">Log in</h1>
              <p>{error}</p>
            </div>
            <div className="user-page-content">
              <div className="w-form">
                <div
                  className="input-group"
                >
                  <label htmlFor="Email">ID</label>
                  <input
                    className="form-input w-input form-control" // 가져온 코드
                    maxLength={256}
                    type="text"
                    placeholder="ID를 입력하세요"
                    name="id"
                    value={inputId}
                    onChange={handleInputId}
                    ref={inputRef} // ref 연결
                    onKeyDown={handleKeyDown} // onKeyDown 이벤트 핸들러 추가
                  />
                </div>
                <div className="input-group">
                  <div className="password-item">
                    <label htmlFor="Password">Password</label>
                  </div>
                  <input
                    className="form-input w-input form-control" // 가져온 코드
                    maxLength={256}
                    type="password"
                    placeholder="Pw를 입력하세요"
                    name="pw"
                    value={inputPw}
                    onChange={handleInputPw}
                    ref={inputRef} // ref 연결
                    onKeyDown={handleKeyDown} // onKeyDown 이벤트 핸들러 추가
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                    margin: "auto",
                    width: "60%",
                  }}>
                  <button
                    style={{
                      backgroundColor: "#b7ebde"
                    }}
                    onClick={onClickLogin}>
                    로그인
                  </button>
                </div>
                <div className="error-message w-form-fail">
                  {error && <div>{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Login;
