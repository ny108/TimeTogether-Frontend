import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // css파일 import
import logo from "../img/logo.png"; // 이미지 가져오기
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";
import google from "../img/google.png";

function Login() {
  return (
    <div className="login-container">
      {/* 로고 */}
      <img className="login-logo" width="100px" src={logo} alt="로고"></img>

      {/* 앱 이름 */}
      <h1 className="login-title">타임투게더</h1>

      {/* 앱 설명 */}
      <p className="login-description">
        쉽고 빠른 모임을 위한 약속 생성 도우미
      </p>

      {/* 소셜 로그인 */}
      <div className="social-login-container">
        <p className="social-login-title">소셜 로그인</p>
        <img className="social-button" src={google} alt="구글로 시작"></img>
        <img className="social-button" src={kakao} alt="카카오로 시작"></img>
        <Link to="/group">
          <img className="social-button" src={naver} alt="네이버로 시작"></img>
        </Link>
      </div>
    </div>
  );
}

export default Login;
