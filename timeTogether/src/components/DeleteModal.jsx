import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ isOpen, onConfirm, onCancel, groupName }) => {
  if (!isOpen) return null; // 모달이 열려 있지 않으면 렌더링하지 않음

  return (
    <div className="delete-modal-overlay" onClick={onCancel}>
      <div
        className="delete-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>그룹 나가기</h3>
        <p>{`'${groupName}' 그룹을 정말로 나가시겠습니까?`}</p>
        <div className="delete-modal-buttons">
          <button className="delete-confirm-button" onClick={onConfirm}>
            나가기
          </button>
          <button className="delete-cancel-button" onClick={onCancel}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
