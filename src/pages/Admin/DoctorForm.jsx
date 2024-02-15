import axios from "axios";
import React, { useState } from "react";

const DoctorForm = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rank, setrank] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력된 정보를 객체로 생성
    const member = {
      id: id,
      pw: password,
      name: name,
      memberrank: rank,
      tell: contactNumber,
    };

    // POST 요청 보내기
    axios.post("http://localhost:8088/boot/insertMember", member)
      .then((response) => {
        // 요청이 성공한 경우 처리할 로직 작성
        console.log(response.data); // 서버에서 받은 응답 데이터 출력
        closeModal(); // 등록 완료 후 모달 닫기
      })
      .catch((error) => {
        console.error(error);
        alert("아이디 중복입니다")
      });
  };



  // 입력된 값을 로그로 출력하는 함수
  const logFormData = () => {
    console.log("id:", id);
    console.log("password:", password);
    console.log("name:", name);
    console.log("rank:", rank);
    console.log("contactNumber:", contactNumber);
  };

  return (
    <div>
      <h2>의료진 등록</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          직급:
          <label>
            <input
              type="radio"
              value="admin"
              checked={rank === "admin"}
              onChange={(e) => setrank(e.target.value)}
            />
            관리자
          </label>
          <label>
            <input
              type="radio"
              value="doctor"
              checked={rank === "doctor"}
              onChange={(e) => setrank(e.target.value)}
            />
            의사
          </label>
        </label>
        <label>
          <input
            type="radio"
            value="nurse"
            checked={rank === "nurse"}
            onChange={(e) => setrank(e.target.value)}
          />
          간호사
        </label>

        <br />
        <label>
          연락처:
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={logFormData}>
          등록
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
