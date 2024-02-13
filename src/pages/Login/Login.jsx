import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputId, setInputId] = useState(""); //ID값
  const [inputPw, setInputPw] = useState(""); //PW값

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID: ", inputId);
    console.log("PW: ", inputPw);

    // 로그인 처리 로직 추가

    // 입력한 아이디와 비밀번호를 서버로 전송하고 로그인 처리하는 코드 작성

    // 예시 코드 (axios를 사용한 POST 요청)
    // const data = {
    //   email: inputId,
    //   passwd: inputPw
    // };
    // axios.post("http://localhost:8080/api/login", data)
    //   .then((res) => {
    //     // 로그인 성공 시 처리하는 코드 작성
    //   })
    //   .catch((error) => {
    //     // 로그인 실패 시 처리하는 코드 작성
    //   });
  };

  return (
    <div>
      <h1>Login Page</h1>

      {/* 아이디 입력 필드 */}
      <input
        type="ID"
        className="form-control"
        placeholder="ID를 입력하세요"
        name="id"
        value={inputId}
        onChange={handleInputId}
      />

      {/* 비밀번호 입력 필드 */}
      <input
        type="PW"
        className="form-control"
        placeholder="Pw를 입력하세요"
        name="pw"
        value={inputPw}
        onChange={handleInputPw}
      />

      {/* 로그인 버튼 */}
      <button
        type="button"
        onClick={onClickLogin}
      >
        확인
      </button>

      {/* 메인 페이지로 이동하는 링크 */}
      <Link to='/main'>메인 페이지</Link>
      <br />

      {/* 관리자 페이지로 이동하는 링크 */}
      <Link to='/admin'>admin</Link>
    </div>
  );
};

export default Login;
