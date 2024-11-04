// src/components/CreateGroup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateGroup.css"; // CSS 파일 경로
import back from "../img/mini-icon/back.png"; //이미지 파일
import NavigationBar from "./NavigationBar"; // 네비게이션 바 import

const CreateGroup = () => {
  const navigate = useNavigate();

  // 이전 화면으로 돌아가는 함수
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <>
      <div className="create-group-container">
        <header className="create-group-header">
          <img
            onClick={handleGoBack}
            className="cg-back-button"
            src={back}
            alt="back"
            width="28"
          />

          <h2>그룹 생성</h2>
        </header>

        <div className="create-group-content">
          <div className="profile-picture-placeholder">
            {/* 프로필 이미지 업로드용 박스 */}
            <img
              src={"https://via.placeholder.com/100"}
              alt="Group-image"
              className="profile-placeholder"
            />
          </div>

          <div className="form-group">
            <label>그룹명</label>
            <input type="text" placeholder="그룹명" />
          </div>

          <div className="form-group">
            <label>어떤 그룹인가요?</label>
            <input type="text" placeholder="그룹에 대한 설명" />
          </div>

          <div className="form-group">
            <label>약속 유형</label>
            <select>
              <option>오프라인</option>
              <option>온라인</option>
              <option>구분 안 함</option>
            </select>
          </div>

          <button className="create-group-button">그룹 생성하기</button>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <NavigationBar />
    </>
  );
};

export default CreateGroup;
