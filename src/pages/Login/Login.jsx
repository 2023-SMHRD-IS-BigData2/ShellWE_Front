
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      <h1>Login Page</h1>
       <h1>{message}</h1> {/*서버로부터 받은 메시지 출력 */}
      <input
        type="text"
        className="form-control"
        placeholder="ID를 입력하세요"
        name="id"
        value={inputId}
        onChange={handleInputId}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Pw를 입력하세요"
        name="pw"
        value={inputPw}
        onChange={handleInputPw}
        ref={inputRef} // ref 연결
        onKeyDown={handleKeyDown} // onKeyDown 이벤트 핸들러 추가
      />
      <button
        type="button"
        onClick={onClickLogin}
      >
        로그인
      </button>
       {error && <div>{error}</div>} {/* 에러 메시지가 있을 경우 출력 */}
    </div>
  );
};

export default Login;
