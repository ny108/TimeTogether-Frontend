import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; //기본 제공
import { Routes, Route, Link } from "react-router-dom"; // Routes와 Route import
//페이지 import
import LandingPage from "./pages/LandingPage"; // 랜딩 페이지
import Login from "./pages/Login"; // 로그인 페이지
import GroupPage from "./pages/GroupPage"; // 그룹 페이지
import CalendarPage from "./pages/CalendarPage"; // 캘린더 페이지
import SchedulePage from "./pages/SchedulePage"; // 회의일정 페이지
import MyPage from "./pages/MyPage"; // 마이페이지
//컴포넌트 import
import CreateGroup from "./components/CreateGroup"; //그룹생성 페이지

function App() {
  return (
    <>
      <div className="app-container">
        {/* 라우트 설정 */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/create-group" element={<CreateGroup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
