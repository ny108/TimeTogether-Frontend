import React from "react";
import "./MyPage.css"; // 스타일 파일 import
import NavigationBar from "../components/NavigationBar"; // 네비게이션 바 import

function MyPage() {
  return (
    <div className="group-page">
      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  );
}

export default MyPage;
