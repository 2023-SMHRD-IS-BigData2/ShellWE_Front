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

  useEffect(() => {
    // message 상태가 변경될 때마다 실행되는 useEffect
    if (message === 'main') {
      navigate('/main'); // message가 'main'일 경우 '/main' 경로로 이동
    } else if (message === 'admin') {
      navigate('/admin'); // message가 'admin'일 경우 '/admin' 경로로 이동
    }
  }, [message, navigate]);

  const onClickLogin = async () => {
    if (inputId === "" || inputPw === "") {
      setError("아이디와 패스워드를 모두 입력해주세요."); // 아이디 또는 패스워드가 비어있을 경우 에러 메시지 설정 후 종료
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8088/boot/login', // 로그인 요청을 보낼 서버의 URL
        `ID=${inputId}&PW=${inputPw}`, // 요청 바디에 아이디와 패스워드를 전달
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // 요청 헤더 설정
          },
        }
      );
      if (response && response.data) {
        setMessage(response.data.login); // 서버로부터 받은 로그인 메시지를 message 상태로 설정
      } else {
        setError("로그인 실패");
        console.error("Login failed: No data in the response"); // 응답 데이터가 없을 경우 에러 메시지 설정 및 콘솔에 로그 출력
      }
    } catch (error) {
      setError("로그인 실패");
      console.error("Login failed:", error.response ? error.response.data : error.message); // 에러 발생 시 에러 메시지 설정 및 콘솔에 로그 출력
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickLogin(); // Enter 키가 눌렸을 때 onClickLogin 함수 호출
    }
  };

  return (
    <div>
       {/* 추가한 HTML과 CSS */}
      <section className="user-pages-section">
        <div className="inner-container w-container">
          <div className="user-page-content-wrap">
            <div className="user-page-title-wrap">
              <div className="user-page-icon-wrap">
                {/* logo */}
                {/* <img src="https://assets-global.website-files.com/6465a677c2eb8d266483bb5c/646700a3d35799da2b5a84d8_sashub-icon.svg"
                      loading="eager" alt="" class="user-page-icon" /> */}
              </div>
              <h1 className="user-page-title">Log in</h1>
              <p>Please fill your ID and Password to log in</p>
            </div>
            <div className="user-page-content">
              <div className="w-form">
                <form
                  id="wf-form-User-Page-Form"
                  name="wf-form-User-Page-Form"
                  data-name="User Page Form"
                  method="get"
                  data-wf-page-id="64673c2876d96422ff763b57"
                  data-wf-element-id="b1c52374-4bdb-9294-dabc-125d9d7b72ea"
                >
                  <div className="input-group">
                    <label htmlFor="Email">ID</label>
                    <input
                      className="form-input w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder=""
                      type="email"
                      id="Email"
                      required=""
                    />
                  </div>
                  <div className="input-group">
                    <div className="password-item">
                      <label htmlFor="Password">Password</label>
                    </div>
                    <input
                      className="form-input w-input"
                      maxLength={256}
                      name="Password"
                      data-name="Password"
                      placeholder=""
                      type="password"
                      id="Password"
                      required=""
                    />
                  </div>
                  <input
                    type="login"
                    data-wait="Please wait..."
                    className="button-primary-1 w-button"
                    defaultValue="Log in"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
