import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [error, setError] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = async () => {
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
        console.log("Login successful:", response.data);
        // 로그인 성공 시 적절한 처리를 수행하고, 예를 들어 메인 페이지로 이동
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

      {error && <div>{error}</div>} {/* 에러가 있을 경우 에러 메시지 표시 */}
      
      <Link to='/main'>메인 페이지</Link>
      <br />

      <Link to='/admin'>admin</Link>
    </div>
  );
};

export default Login;
