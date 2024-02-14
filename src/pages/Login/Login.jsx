import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [inputId, setInputId] = useState(""); // 사용자가 입력한 ID를 상태로 관리
  const [inputPw, setInputPw] = useState(""); // 사용자가 입력한 비밀번호를 상태로 관리
  const [error, setError] = useState(""); // 로그인 과정에서 발생한 에러 메시지를 상태로 관리
  const [message, setMessage] = useState(""); // 로그인 성공 시 서버로부터 받은 메시지를 상태로 관리
  const navigate = useNavigate(); // react-router-dom의 useNavigate 훅을 사용하여 페이지 이동 기능을 구현

  const handleInputId = (e) => {
    setInputId(e.target.value); // ID 입력값이 변경될 때마다 상태를 업데이트
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value); // 비밀번호 입력값이 변경될 때마다 상태를 업데이트
  };

  useEffect(() => {
    if (message) {
      navigate(`/${message}`); // message 값이 변경되면 해당 경로로 페이지 이동
    }
  }, [message, navigate]);

  const onClickLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8088/boot/login', // 로그인 요청을 보낼 서버의 주소
        `ID=${inputId}&PW=${inputPw}`, // 요청 바디에 ID와 비밀번호를 포함시켜 전송
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // 요청 헤더에 컨텐츠 타입 설정
          },
        }
      );
      if (response && response.data) {
        console.log(response.data.login);
        setMessage(response.data.login); // 로그인 성공 시 서버로부터 받은 메시지를 상태에 저장
      } else {
        setError("로그인 실패");
        console.error("Login failed: No data in the response");
      }
    } catch (error) {
      setError("로그인 실패");
      console.error("Login failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <h1>{message}</h1> {/* 로그인 성공 시 서버로부터 받은 메시지를 표시 */}
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
      />

      <button
        type="button"
        onClick={onClickLogin}
      >
        확인
      </button>

      {error && <div>{error}</div>} {/* 에러가 있을 경우 에러 메시지를 표시 */}
    </div>
  );
};

export default Login;
