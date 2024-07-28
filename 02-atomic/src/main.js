import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function JoinInput({ label, id, type, placeholder }) {
  return (
    <div className="join-input-wrapper">
      <label for={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} name={id} required />
    </div>
  );
}

function JoinInputListPage() {
  return (
    <ul className="join-input-list">
      <li>
        <JoinInput
          label="아이디"
          id="userId"
          type="text"
          placeholder="아이디를 입력해주세요."
        ></JoinInput>
      </li>
      <li>
        <JoinInput
          label="비밀번호"
          id="userPassword"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        ></JoinInput>
      </li>
      <li>
        <JoinInput
          label="이메일"
          id="userEmail"
          type="email"
          placeholder="이메일을 입력해주세요."
        ></JoinInput>
      </li>
      <li>
        <JoinInput
          label="이름"
          id="userName"
          type="text"
          placeholder="이름을 입력해주세요."
        ></JoinInput>
      </li>
    </ul>
  );
}

const container = document.getElementById("react-app");

if (container) createRoot(container).render(<JoinInputListPage />);
else console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
