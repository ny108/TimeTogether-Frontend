import React, { useState, useEffect, useRef } from "react";
import "./GroupCard.css";
import { FaTrash, FaShare } from "react-icons/fa";
import SharePopover from "./SharePopover"; // SharePopover 컴포넌트 import

const GroupCard = ({ group, onDelete }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null); // Popover와 공유 아이콘을 감지하기 위한 ref

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  // Popover 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        closePopover();
      }
    };

    // 전역 클릭 이벤트 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="group-card">
      <img src={group.image} alt="Group" className="group-image" />
      <div className="group-info">
        <h3>{group.name}</h3>
        <p className="group-description">{group.description}</p>
        <p className="group-members">{group.members.join(", ")}</p>
      </div>
      <div className="group-actions">
        <FaTrash
          className="icon delete-icon"
          title="Delete"
          onClick={onDelete}
        />

        {/* Popover를 여닫는 버튼 */}
        <div
          className="share-icon-wrapper"
          onClick={togglePopover}
          ref={popoverRef}
        >
          <FaShare className="icon share-icon" title="Share" />
          {isPopoverOpen && (
            <SharePopover inviteCode="1234-5678-ABCD" onClose={closePopover} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
