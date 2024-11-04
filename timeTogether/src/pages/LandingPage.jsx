// src/pages/LandingPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // css파일 import
import logo from "../img/logo.png"; // 이미지 가져오기

function LandingPage() {
  const [isSwapped, setIsSwapped] = useState(false); // 전환 여부
  const navigate = useNavigate();

  useEffect(() => {
    // 1초 후 전환 애니메이션 시작
    const swapTimeout = setTimeout(() => {
      setIsSwapped(true); // 상태 전환
    }, 1200);

    const navigateTimeout = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(swapTimeout); // 타이머 정리
  }, []);

  return (
    <div className="landing-container">
      <img className="landing-logo" width="100px" src={logo} alt="로고"></img>
      {/* 로고 */}
      <p className="main-text">Time</p> {/* 고정된 텍스트 */}
      {/* 전체 텍스트 애니메이션 */}
      <p className={`animated-text ${isSwapped ? "swap" : ""}`}>
        {isSwapped ? "to gather" : "Together"}
      </p>
    </div>
  );
}

export default LandingPage;
