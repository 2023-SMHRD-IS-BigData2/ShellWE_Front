import React, { useState } from "react";

const DoctorForm = ({ closeModal }) => {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 등록 폼 제출 시 처리할 로직을 작성합니다.
    // 입력된 정보를 서버로 전송하거나 상태를 업데이트하는 등의 동작을 수행할 수 있습니다.

    // 등록 완료 후 모달 닫기
    closeModal();
  };

  return (
    <div>
      <h2>의료진 등록</h2>
      <form onSubmit={handleSubmit}>
        <label>
          사번번호:
          <input
            type="text"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
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
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          직급:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
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
       
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default DoctorForm;