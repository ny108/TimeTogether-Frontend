import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../img/logo.png";
import kakao from "../img/kakao.png";
import naver from "../img/naver.png";
import google from "../img/google.png";

function Login() {
  return (
    <div className="login-container">
      <Link to="/group">
        <img className="login-logo" src={logo} alt="로고" />
      </Link>
      <h1 className="login-title">Time Together</h1>
      <p className="login-description">쉽고 빠른 약속 생성 도우미</p>

      <div className="social-login-container">
        <p className="social-login-title">소셜 로그인</p>
        {/* 백엔드의 로그인 인증 엔드포인트로 리다이렉트 (IP주소, localhost번호 확인 필요) */}
        <a href="http://192.168.86.49:8080/oauth2/authorization/naver">
          <img className="social-button" src={naver} alt="네이버로 시작" />
        </a>

        <a href="http://192.168.86.49:8080/oauth2/authorization/kakao">
          <img className="social-button" src={kakao} alt="카카오로 시작" />
        </a>

        <a href="http://192.168.86.49:8080/oauth2/authorization/google">
          <img className="social-button" src={google} alt="구글로 시작" />
        </a>
      </div>
    </div>
  );
}

export default Login;
